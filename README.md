#  Ember Simple Auth

This is an npm package that contains the Ember Simple Auth base library
packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli) Addon.

## Installation

**Ember Simple Auth OAuth 2.0 requires at least Ember CLI 0.0.42.**

To install simply run

```
npm install --save-dev ember-cli-simple-auth
ember generate ember-cli-simple-auth
```

in your Ember CLI project's root.

**Ember CLI now uses `window.[AppName]ENV` for environment configuration
variables. Ember Simple Auth relies on `window.ENV` to read its configuration
from though, so you'll also need to add this line to your `app/index.html`
file:**

```diff
  window.MyAppENV = {{ENV}};
+ window.ENV = window.MyAppENV;
  window.EmberENV = window.MyAppENV.EmberENV;
```

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth
