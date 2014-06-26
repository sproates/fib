
/**
 * Tests for the fib mobule.
 */
(function () {

    'use strict';

    var fib = require('../../src/fib.js');

    describe('Fibonacci', function () {

        it('Should return the term at the given position', function () {

            expect(fib(0)).toEqual(0);
            expect(fib(1)).toEqual(1);
            expect(fib(2)).toEqual(1);
            expect(fib(3)).toEqual(2);
            expect(fib(4)).toEqual(3);
            expect(fib(5)).toEqual(5);
            expect(fib(6)).toEqual(8);
            expect(fib(7)).toEqual(13);
            expect(fib(8)).toEqual(21);
            expect(fib(9)).toEqual(34);
            expect(fib(23)).toEqual(28657);
            expect(fib(37)).toEqual(24157817);
            expect(fib(51)).toEqual(20365011074);

            expect(fib(0) + fib(1)).toEqual(fib(2));
            expect(fib(1) + fib(2)).toEqual(fib(3));
            expect(fib(10) + fib(11)).toEqual(fib(12));
            expect(fib(44) + fib(43)).toEqual(fib(45));
            expect(fib(99) + fib(100)).toEqual(fib(101));
            expect(fib(250) + fib(249)).toEqual(fib(251));
            expect(fib(2500) + fib(2499)).toEqual(fib(2501));
        });

        it('Should handle malformed inputs', function () {

            expect(function () {
                fib(-1);
            }).toThrow();
            expect(function () {
                fib(null);
            }).toThrow();
            expect(function () {
                fib(undefined);
            }).toThrow();
            expect(function () {
                fib('');
            }).toThrow();
            expect(function () {
                fib([]);
            }).toThrow();
            expect(function () {
                fib({});
            }).toThrow();
            expect(function () {
                fib(false);
            }).toThrow();
            expect(function () {
                fib(true);
            }).toThrow();
            expect(function () {
                fib(new Error());
            }).toThrow();
        });
    });
})();
