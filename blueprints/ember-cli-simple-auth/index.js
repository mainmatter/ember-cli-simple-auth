module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('ember-simple-auth', '0.6.4');
  }
};
