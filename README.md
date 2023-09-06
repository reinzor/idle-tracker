# Idle tracker Chrome extension

> Show `active`, `idle`, `locked` time for the day

## Prerequisites

- NodeJS 18

## Development

```bash
# Install deps
npm ci

# Build files to `/dist` directory
# HMR for extension pages and content scripts
npm run dev
```

## Build

```bash
# Build files to `/dist` directory
$ npm run build

# Create zip from `/dist` directory
$ npm run build-zip
```

## Load unpacked extensions

[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/dist` directory.
