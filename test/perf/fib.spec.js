
var fib = require('../../src/fib.js');

module.exports = {

    name: 'Fibonacci',

    tests: {

        'fib(0)': function() {
            fib(0);
        },

        'fib(2)': function() {
            fib(2);
        },

        'fib(5)': function() {
            fib(5);
        },

        'fib(12)': function() {
            fib(12);
        },

        'fib(20)': function() {
            fib(20);
        },

        'fib(51)': function() {
            fib(51);
        },

        'fib(101)': function() {
            fib(101);
        },

        'fib(250)': function() {
            fib(250);
        }
    }
};
