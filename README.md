# skebify

**Skebify** is a Chrome/Chromium and Firefox extension derived from [skeb-inc/skeb-button](https://github.com/skeb-inc/skeb-button), but updated to use more modern/safer browser extension practices.

## Building

```
$ yarn package --target=firefox-mv2
$ yarn package --target=chrome-mv3
```

The newly built extension files should be available at `build/firefox-mv2-prod.zip` and `build/chrome-mv3-prod.zip` respectively.
