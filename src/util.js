
/**
 * Utility functions.
 * @module util
 */
(function () {

    'use strict';

    /**
     * Memoize a function, i.e. given a function f, create a new function g
     * that when applied will call f, and cache values returned from f. The
     * arguments to f are used as the cache key.
     * @param {function} f The function to memoize.
     * @returns {function} The memoized function.
     * @public
     */
    var memoize = function memoize(f) {

        var cache = {};

        return function() {

            var args = Array.prototype.slice.apply(arguments);
            var key = JSON.stringify(args);

            if (!cache.hasOwnProperty(key)) {
                cache[key] = f.apply(this, args);
            }

            return cache[key];
        };
    };

    /**
     * Determine whether a variable is an integer.
     * @param {mixed} n The variable to test.
     * @returns {boolean}
     * @public
     */
    var isInteger = function (n) {

        return (
            Object.prototype.toString.call(n) === '[object Number]' &&
            n % 1 === 0 &&
            isNaN(n) === false
        );
    };

    module.exports = {
        memoize: memoize,
        isInteger: isInteger
    };

})();
