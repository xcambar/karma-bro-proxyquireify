'use strict';

var proxy = require('proxyquireify')(require);
var mock = {}

describe('require', function () {
  it('should preserve the original', function () {
    var mod = require('../src')
    mod().should.equal(require('../src/ext'));
  });
});

it('should replace the module', function () {
  var mod = proxy('../src', {
    './ext': mock
  });
  expect(mod()).to.equal(mock);
});
