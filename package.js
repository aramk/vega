// Meteor package definition.
Package.describe({
  name: 'aramk:vega',
  version: '1.4.2_1',
  summary: 'A grammar for charts with visualization using D3.',
  git: 'https://github.com/aramk/vega.git#meteor'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('d3js:d3@3.4.13', 'client');
  api.export(['vg'], 'client');
  api.addFiles(['vega.js'], 'client');
});
