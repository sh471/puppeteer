---
sidebar_label: Target.type
---

# Target.type() method

Identifies what kind of target this is.

#### Signature:

```typescript
class Target {
  type():
    | 'page'
    | 'background_page'
    | 'service_worker'
    | 'shared_worker'
    | 'other'
    | 'browser'
    | 'webview'
    | 'tab';
}
```

**Returns:**

'page' \| 'background_page' \| 'service_worker' \| 'shared_worker' \| 'other' \| 'browser' \| 'webview' \| 'tab'

## Remarks

See [docs](https://developer.chrome.com/extensions/background_pages) for more info about background pages.
