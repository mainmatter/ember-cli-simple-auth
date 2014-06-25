var path = require('path');
var fs   = require('fs');

function EmberCLISimpleAuth(project) {
  this.project = project;
  this.name    = 'Ember CLI Simple Auth';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISimpleAuth.prototype.treeFor = function included(name) {
  var treePath =  path.join('node_modules/ember-cli-simple-auth', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISimpleAuth.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-simple-auth/simple-auth.amd.js', {
    'simple-auth/authenticators/base':                    ['default'],
    'simple-auth/authorizers/base':                       ['default'],
    'simple-auth/mixins/application-route-mixin':         ['default'],
    'simple-auth/mixins/authenticated-route-mixin':       ['default'],
    'simple-auth/mixins/authentication-controller-mixin': ['default'],
    'simple-auth/mixins/login-controller-mixin':          ['default'],
    'simple-auth/stores/base':                            ['default'],
    'simple-auth/stores/ephemeral':                       ['default'],
    'simple-auth/stores/local-storage':                   ['default'],
    'simple-auth/configuration':                          ['default'],
    'simple-auth/ember':                                  ['default']
  });
  this.app.import('vendor/ember-simple-auth/simple-auth-oauth2.amd.js', {
    'simple-auth-oauth2/authenticators/oauth2': ['default'],
    'simple-auth-oauth2/authorizers/oauth2':    ['default'],
    'simple-auth-oauth2/ember':                 ['default'],
  });
  this.app.import('vendor/ember-simple-auth/simple-auth-devise.amd.js', {
    'simple-auth-devise/authenticators/devise': ['default'],
    'simple-auth-devise/authorizers/devise':    ['default'],
    'simple-auth-devise/ember':                 ['default']
  });
  this.app.import('vendor/ember-simple-auth/simple-auth-cookie-store.amd.js', {
    'simple-auth-cookie-store/stores/cookie': ['default'],
    'simple-auth-cookie-store/ember':         ['default']
  });
};

module.exports = EmberCLISimpleAuth;