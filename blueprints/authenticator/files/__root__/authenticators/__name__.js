import Ember from 'ember';
import Authenticator from 'simple-auth/authenticators/base';

export default Authenticator.extend({
  restore(data) {
    return Ember.RSVP.reject();
  },

  authenticate(options) {
    return Ember.RSVP.reject();
  },

  invalidate(session) {
    return Ember.RSVP.resolve();
  }
});
