GitLab for Retina monitors
==========================

Improves the look of project icons in GitLab for users of Retina monitors.
It finds project icons in gitlab pages, and provides browser with optional, higher-resolution version of them.

[Gitlab Issue #345020](https://gitlab.com/gitlab-org/gitlab/-/issues/345020)

Installation
------------

The extension is currently under review at Firefox and Chrome extension stores.
Meanwhile, you can install it manually:

For Firefox, use [`about:debugging#/runtime/this-firefox`](https://developer.mozilla.org/en-US/docs/Tools/about:debugging#this_firefox) and load manifest file `src/firefox/manifest.json`

For Chrome, use [`chrome://extensions`](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest), enable developer mode, and load directory `src/chrome`

Screenshot
----------

<img src="img/screenshot.png">
