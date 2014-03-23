
module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({

        jasmine_node: {

            specFolder: 'test/specs',
            projectRoot: '.',
            requirejs: false,
            forceExit: true
        },

        benchmark: {

            all: {

                src: ['test/perf/*.js'],
                dest: 'reports/perf.csv'
            }
        },

        jshint: {

            src: {

                files : {

                    src : ['src/**/*.js', 'test/spec/**/*.js']
                },

                options : {

                    bitwise       : true,
                    browser       : true,
                    camelcase     : true,
                    curly         : true,
                    eqeqeq        : true,
                    eqnull        : true,
                    force         : true,
                    forin         : true,
                    immed         : true,
                    indent        : 4,
                    latedef       : true,
                    newcap        : true,
                    noarg         : true,
                    noempty       : true,
                    nonew         : true,
                    plusplus      : false,
                    quotmark      : true,
                    undef         : true,
                    unused        : true,
                    strict        : true,
                    trailing      : true,
                    maxparams     : 3,
                    maxdepth      : 5,
                    maxstatements : 20,
                    maxcomplexity : 4,
                    maxlen        : 120,

                    globals : {

                        describe: true,
                        expect: true,
                        it: true,
                        module : true,
                        require: true
                    },

                    ignores : []
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-benchmark');

    grunt.registerTask('test', ['jshint:src', 'jasmine_node']);
    grunt.registerTask('perf', ['benchmark']);
    grunt.registerTask('default', ['test', 'perf']);
};
