
/**
 * Test for the util module.
 */
(function () {

    'use strict';

    var util = require('../../src/util.js');

    var f = function (n, m) {
        return n + m;
    };

    var g = function (n, m) {
        return n * m;
    };

    var fM = util.memoize(f),
        gM = util.memoize(g);

    describe('memoize', function () {

        it('Memoized function returns the same result as the non-memoized', function () {

            expect(f(3, 5)).toEqual(fM(3, 5));
            expect(g(3, 5)).toEqual(gM(3, 5));
        });

        it('Memoized functions should not conflict', function () {

            expect(fM(3, 5)).not.toEqual(gM(3, 5));
        });
    });

    describe('isInteger', function () {

        it('Should return false for non-integers', function () {

            expect(util.isInteger(undefined)).toBeFalsy();
            expect(util.isInteger(null)).toBeFalsy();
            expect(util.isInteger(true)).toBeFalsy();
            expect(util.isInteger(false)).toBeFalsy();
            expect(util.isInteger(new Error())).toBeFalsy();
            expect(util.isInteger([])).toBeFalsy();
            expect(util.isInteger({})).toBeFalsy();
            expect(util.isInteger(0.01)).toBeFalsy();
            expect(util.isInteger(Math.PI)).toBeFalsy();
        });

        it('Should return true for integers', function () {

            expect(util.isInteger(0)).toBeTruthy();
            expect(util.isInteger(-1)).toBeTruthy();
            expect(util.isInteger(1)).toBeTruthy();
            expect(util.isInteger(1024)).toBeTruthy();
            expect(util.isInteger(-104)).toBeTruthy();
        });
    });

})();
