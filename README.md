# Karma + Karma-Bro + Browserify + Proxyquireify

This is an attemps to have the following amazing tools get along.

* [Karma](http://karma-runner.github.io/)
* [Karma-bro](https://github.com/Nikku/karma-bro)
* [Browserify](browserify.org)
* [Proxyquireify](https://github.com/thlorenz/proxyquireify/)

## Install

``sh
npm install && npm test
``

## Symptoms

There are 2 tests:

1. Use `require` normally and test that everything is loaded as it should be (Successes)
2. Use Proxyquireify to replace a module for testing (Fails)


