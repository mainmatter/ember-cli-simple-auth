#  Ember Simple Auth

This is an npm package that contains the Ember Simple Auth base library
packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli) Addon.

## Installation

To install simply run

```
npm install --save-dev ember-cli-simple-auth
```

in your Ember CLI project's root.

**Note:** Ember CLI now uses `window.AppNameENV` for environment configuration variables. For now, ember-simple-auth still relies on `window.ENV`, so you'll also need to add this line to your `app/index.html` file:

```diff
  window.MyAppENV = {{ENV}};
+ window.ENV = {{ENV}};
  window.EmberENV = window.MyAppENV.EmberENV;
```

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth
