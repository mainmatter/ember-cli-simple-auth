module.exports = {
  name: 'Ember CLI Simple Auth',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.amd.js', {
      exports: {
        'simple-auth': [
          'authenticators/base',
          'authorizers/base',
          'mixins/application-route-mixin',
          'mixins/authenticated-route-mixin',
          'mixins/authentication-controller-mixin',
          'mixins/login-controller-mixin',
          'stores/base',
          'stores/ephemeral',
          'stores/local-storage',
          'session',
          'configuration',
          'initializer'
        ]
      }
    });
  }
}
