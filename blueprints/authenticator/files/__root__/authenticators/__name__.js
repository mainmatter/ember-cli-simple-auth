import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
    return Ember.RSVP.reject();
  },

  authenticate(options) {
    return Ember.RSVP.reject();
  },

  invalidate(data) {
    return Ember.RSVP.resolve();
  }
});
