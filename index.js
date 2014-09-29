var path = require('path');

module.exports = {
  name: 'Ember CLI Simple Auth',

  treeFor: function treeFor(name) {
    var tree = this._super.apply(arguments);

    if (name === 'vendor') {
      this.replace = this.replace || require('broccoli-string-replace');
      var config   = this.project.config(this.app.env);
      tree         = this.replace(tree, {
        files: [this.app.bowerDirectory + '/ember-simple-auth/simple-auth.amd.js'],
        patterns: [{
          match: /Ember\.get\(global, 'ENV\.' \+ scope)/,
          replacement: 'require("' + this.app.name + '/config/environment")["default"]["simple-auth"]'
        }]
      });
    }

    return tree;
  },

  included: function(app) {
    this._super.apply(arguments);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.amd.js', {
      exports: {
        'simple-auth/authenticators/base':                    ['default'],
        'simple-auth/authorizers/base':                       ['default'],
        'simple-auth/mixins/application-route-mixin':         ['default'],
        'simple-auth/mixins/authenticated-route-mixin':       ['default'],
        'simple-auth/mixins/unauthenticated-route-mixin':     ['default'],
        'simple-auth/mixins/authentication-controller-mixin': ['default'],
        'simple-auth/mixins/login-controller-mixin':          ['default'],
        'simple-auth/stores/base':                            ['default'],
        'simple-auth/stores/ephemeral':                       ['default'],
        'simple-auth/stores/local-storage':                   ['default'],
        'simple-auth/session':                                ['default'],
        'simple-auth/configuration':                          ['default'],
        'simple-auth/initializer':                            ['default']
      }
    });
  }
}
