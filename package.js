Package.describe({
  name: 'justinventuri:flash',
  version: '0.0.1',
  summary: 'A package to display messages to the user',
  git: 'https://github.com/redpost/flash',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  /* Use or imply other packages.

   * Example:
   *  api.use('ui', 'client');
   *  api.use('iron-router', ['client', 'server']);
   */
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

   /*
    * Add files that should be used with this
    * package.
    */
   api.addFiles(['jv-flash.js', 'jv-flash-list.html', 'jv-flash-list.js'],  'client');

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
  api.export('Flash')
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('justinventuri:flash');
  api.addFiles('jv-flash_tests.js');
});
