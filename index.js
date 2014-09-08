module.exports = {
  name: 'ember-cli-simple-auth',

  included: function(app) {
    this._super.included(app);

    var exports = ;

    this.app.import('bower_components/ember-simple-auth/simple-auth.amd.js', {
      exports: {
        'simple-auth/authenticators/base':                    ['default'],
        'simple-auth/authorizers/base':                       ['default'],
        'simple-auth/mixins/application-route-mixin':         ['default'],
        'simple-auth/mixins/authenticated-route-mixin':       ['default'],
        'simple-auth/mixins/authentication-controller-mixin': ['default'],
        'simple-auth/mixins/login-controller-mixin':          ['default'],
        'simple-auth/stores/base':                            ['default'],
        'simple-auth/stores/ephemeral':                       ['default'],
        'simple-auth/stores/local-storage':                   ['default'],
        'simple-auth/session':                                ['default'],
        'simple-auth/configuration':                          ['default'],
        'simple-auth/initializer':                            ['default'],
      }
    });
  }
}
