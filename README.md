# Fibonacci

Calculate the number at position n in the fibonacci series.

This is the recursive solution with memoization.

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
    * util.spec.js - Unit tests for the util module
  * perf - Performance test specifications
    * fib.spec.js - Performance tests for the fib module.
* src - Source code
 * fib.js - The fib module, containing the fibonacci function
 * util.js - The util module, containing utility functions
