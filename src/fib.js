
/**
 * The fibonacci function.
 * @module fib
 */
(function () {

    'use strict';

    var util = require('./util.js');

    /**
     * Compute the nth term in the Fibonacci series:
     * 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
     * @param {integer} n Index into the series.
     * @returns {integer} The nth term.
     * @throws {Error} If an invalid argument is passed.
     * @public
     * @alias module:fib
     */
    var fib = function (n) {

        if (!util.isInteger(n) || n < 0) {
            throw new Error('Invalid argument: ' + n);
        }

        return (n < 2) ? n : fib(n - 1) + fib(n - 2);
    };

    // Replace fib with a memoized version
    fib = util.memoize(fib);

    module.exports = fib;

})();
