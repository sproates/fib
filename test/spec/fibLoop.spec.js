
/**
 * Tests for the fibLoop module.
 */
(function () {

    'use strict';

    var fibLoop = require('../../src/fibLoop.js');

    describe('Fibonacci Loop', function () {

        it('Should return the term at the given position', function () {

            expect(fibLoop(0)).toEqual(0);
            expect(fibLoop(1)).toEqual(1);
            expect(fibLoop(2)).toEqual(1);
            expect(fibLoop(3)).toEqual(2);
            expect(fibLoop(4)).toEqual(3);
            expect(fibLoop(5)).toEqual(5);
            expect(fibLoop(6)).toEqual(8);
            expect(fibLoop(7)).toEqual(13);
            expect(fibLoop(8)).toEqual(21);
            expect(fibLoop(9)).toEqual(34);
            expect(fibLoop(23)).toEqual(28657);
            expect(fibLoop(37)).toEqual(24157817);
            expect(fibLoop(51)).toEqual(20365011074);

            expect(fibLoop(0) + fibLoop(1)).toEqual(fibLoop(2));
            expect(fibLoop(2) + fibLoop(3)).toEqual(fibLoop(4));
            expect(fibLoop(10) + fibLoop(11)).toEqual(fibLoop(12));
            expect(fibLoop(44) + fibLoop(43)).toEqual(fibLoop(45));
            expect(fibLoop(99) + fibLoop(100)).toEqual(fibLoop(101));
            expect(fibLoop(250) + fibLoop(249)).toEqual(fibLoop(251));
            expect(fibLoop(2500) + fibLoop(2499)).toEqual(fibLoop(2501));
        });

        it('Should handle malformed inputs', function () {

            expect(function () {
                fibLoop(-1);
            }).toThrow();
            expect(function () {
                fibLoop(null);
            }).toThrow();
            expect(function () {
                fibLoop(undefined);
            }).toThrow();
            expect(function () {
                fibLoop('');
            }).toThrow();
            expect(function () {
                fibLoop([]);
            }).toThrow();
            expect(function () {
                fibLoop({});
            }).toThrow();
            expect(function () {
                fibLoop(false);
            }).toThrow();
            expect(function () {
                fibLoop(true);
            }).toThrow();
            expect(function () {
                fibLoop(new Error());
            }).toThrow();
        });
    });
})();
