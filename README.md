# Fibonacci

Calculate the number at position n in the fibonacci series.

This is a comparison between recursive memoization and loop.

## Prequisites

You must have node.js and npm installed on your system.

It must be possible to run the node and npm commands from a command line.

## Running the tests

In this directory:

* Run `npm install` - this will install the requisite npm packages.
* Run `npm test` - this will run the test suites.

## Directory layout

* README.md - this file
* Gruntfile.js - Grunt build script
* package.json - npm package definition
* test - Test code
  * specs - Unit test specifications
    * fib.spec.js - Unit tests for the fib module
    * fibLoop.spec.js - Unit tests for the fibLoop module
    * util.spec.js - Unit tests for the util module
  * perf - Performance test specifications
    * fib.spec.js - Performance tests for the fib modules range 0-20.
    * fibExtended.spec.js - Performance tests for the fib modules range 0-250.
* src - Source code
 * fib.js - The fib module, containing the fibonacci function
 * fibLoop.js - The fib module, containing the fibonacci loop function
 * util.js - The util module, containing utility functions
