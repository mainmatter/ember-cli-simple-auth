var path = require('path');
var fs   = require('fs');

function EmberCLISimpleAuth(project) {
  this.project = project;
  this.name    = 'Ember CLI Simple Auth';
}

EmberCLISimpleAuth.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor-addon/ember-simple-auth/simple-auth.amd.js', {
    'simple-auth/mixins/application-route-mixin': ['default'],
    'simple-auth/mixins/login-controller-mixin': ['default']
  });
  this.app.import('vendor-addon/ember-simple-auth/simple-auth-oauth2.amd.js');
  this.app.import('vendor-addon/ember-simple-auth/simple-auth.amd-devise.js');
  this.app.import('vendor-addon/ember-simple-auth/simple-auth.amd-cookie-store.js');
};

module.exports = EmberCLISimpleAuth;