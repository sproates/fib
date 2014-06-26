
/**
 * The fibonacci function solved with a loop.
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
     * @alias module:fibLoop
     */
    var fibLoop = function (n) {
        var i;
        var fib = [];
        if (!util.isInteger(n) || n < 0) {
            throw new Error('Invalid argument: ' + n);
        }

        fib[0] = 0;
        fib[1] = 1;
        for(i=2; i<=n; i++){
            fib[i] = fib[i-2] + fib[i-1];
        }

        return(fib[n]);
    };






    module.exports = fibLoop;

})();
