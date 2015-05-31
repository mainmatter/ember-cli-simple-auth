import SessionStore from 'simple-auth/stores/base';

export default SessionStore.extend({
  persist: function(data) {
  },

  restore: function() {
    return {};
  },

  clear: function() {
  }
});
