module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    var context = this;

    return this.addBowerPackageToProject('ember-simple-auth', '0.6.4');
  }
};
