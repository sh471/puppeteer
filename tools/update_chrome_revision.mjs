/**
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {execSync} from 'child_process';
import {writeFile, readFile} from 'fs/promises';

import actions from '@actions/core';
import {PUPPETEER_REVISIONS} from 'puppeteer-core/internal/revisions.js';

import packageJson from '../packages/puppeteer-core/package.json' assert {type: 'json'};
import {versionsPerRelease, lastMaintainedChromeVersion} from '../versions.js';

const CHROME_CURRENT_VERSION = PUPPETEER_REVISIONS.chrome;
const VERSIONS_PER_RELEASE_COMMENT =
  '// In Chrome roll patches, use `NEXT` for the Puppeteer version.';

async function updateFile(fileName, search, replace) {
  const buffer = await readFile(fileName);
  const update = buffer.toString().replace(search, replace);

  await writeFile(fileName, update);
}

async function getVersionAndRevisionForStable() {
  const result = await fetch(
    'https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json'
  ).then(response => {
    return response.json();
  });

  const {version, revision} = result.channels['Beta'];

  return {
    version,
    revision,
  };
}

async function updateDevToolsProtocolVersion(revision) {
  const currentProtocol = packageJson.dependencies['devtools-protocol'];
  const command = `npm view "devtools-protocol@<=0.0.${revision}" version | tail -1`;

  const bestNewProtocol = execSync(command, {
    encoding: 'utf8',
  })
    .split(' ')[1]
    .replace(/'|\n/g, '');

  await updateFile(
    './packages/puppeteer-core/package.json',
    `"devtools-protocol": "${currentProtocol}"`,
    `"devtools-protocol": "${bestNewProtocol}"`
  );
}

async function updateVersionFileLastMaintained() {
  const versions = [...versionsPerRelease.keys()];
  const lastMaintainedIndex = versions.indexOf(lastMaintainedChromeVersion);
  const nextMaintainedVersion = versions[lastMaintainedIndex - 1];

  await updateFile(
    './versions.js',
    `const lastMaintainedChromeVersion = '${lastMaintainedChromeVersion}';`,
    `const lastMaintainedChromeVersion = '${nextMaintainedVersion}';`
  );
}

const {version, revision} = await getVersionAndRevisionForStable();

if (CHROME_CURRENT_VERSION === version) {
  process.exit(1);
}

await updateFile(
  './packages/puppeteer-core/src/revisions.ts',
  CHROME_CURRENT_VERSION,
  version
);

await updateFile(
  './versions.js',
  VERSIONS_PER_RELEASE_COMMENT,
  `${VERSIONS_PER_RELEASE_COMMENT}\n  ['${version}', 'NEXT'],`
);
await updateVersionFileLastMaintained();
await updateDevToolsProtocolVersion(revision);

actions.setOutput('version', version);
actions.setOutput('revision', revision);
