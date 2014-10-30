'use strict';

var proxy = require('proxyquireify')(require);
var mock = { nope: 'Nope', yep: 'Yay' };
var mod = proxy('../src', {
  './ext': mock
});

it('should allow the module to be required normally', function () {
  var mod = require('../src');
  expect(mod().yep).to.equal('cool');
});

it('should replace the module', function () {
  expect(mod().yep).to.equal('Yay');
});
