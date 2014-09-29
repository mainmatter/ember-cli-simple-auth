module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('https://github.com/simplabs/ember-simple-auth-component.git#next');
  }
};
