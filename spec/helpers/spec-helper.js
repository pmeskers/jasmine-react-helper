require('./bind-polyfill.js');

var reactHelper = require('../../index');

beforeEach(function() {
  reactHelper.setup();
});

afterEach(function() {
  reactHelper.teardown();
});
