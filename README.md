#  Ember Simple Auth

This is an npm package that contains the Ember Simple Auth base library
packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli) Addon.

## Installation

**Ember Simple Auth requires at least Ember CLI 0.0.44.**

To install simply run

```
npm install --save-dev ember-cli-simple-auth
ember generate ember-cli-simple-auth
```

in your Ember CLI project's root.

### Configuration

Ember Simple Auth uses the Ember CLI project's configuration as defined in
`config/environment.js`. Configure values for `ENV['simple-auth']`, e.g.:

```js
ENV['simple-auth'] = {
  serverTokenRevocationEndpoint: '/revoke'
};
```

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth
