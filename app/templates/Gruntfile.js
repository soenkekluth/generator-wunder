// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'public'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {<% if (coffee) { %>
            coffee: {
                files: ['<%%= yeoman.app %>/assets/js/{,*/}*.{coffee,litcoffee,coffee.md}'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.{coffee,litcoffee,coffee.md}'],
                tasks: ['coffee:test', 'test:watch']
            },<% } else { %>
            js: {
                files: ['<%%= yeoman.app %>/assets/js/{,*/}*.js'],
                // tasks: ['jshint'],
                options: {
                    livereload: false
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },<% } %>
            gruntfile: {
                files: ['Gruntfile.js']
            },<% if (includeCompass) { %>
            compass: {
                files: ['<%%= yeoman.app %>/assets/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },<% } %>
            styles: {
                files: ['<%%= yeoman.app %>/assets/css/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= yeoman.app %>/{,*/}*.{html,shtml,php,xml,json}',
                    '.tmp/assets/css/{,*/}*.css',
                    '.tmp/assets/js/{,*/}*.js',
                    '<%%= yeoman.app %>/assets/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%%= yeoman.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%%= yeoman.dist %>/*',
                        '!<%%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp',
            js: {
                files: [{
                    //dot: true,
                    src: [
                        '<%%= yeoman.app %>/js/app.js'
                    ]
                }]
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%%= yeoman.app %>/assets/js/{,*/}*.js',
                '!<%%= yeoman.app %>/assets/js/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

<% if (testFramework === 'mocha') { %>
        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%%= connect.test.options.hostname %>:<%%= connect.test.options.port %>/index.html']
                }
            }
        },<% } else if (testFramework === 'jasmine') { %>
        // Jasmine testing framework configuration options
        jasmine: {
            all: {
                options: {
                    specs: 'test/spec/{,*/}*.js'
                }
            }
        },<% } %>

<% if (coffee) { %>
        // Compiles CoffeeScript to JavaScript
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/assets/js',
                    src: '{,*/}*.{coffee,litcoffee,coffee.md}',
                    dest: '.tmp/assets/js',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.{coffee,litcoffee,coffee.md}',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },<% } %>

<% if (includeCompass) { %>
        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                // httpPath: "./",
                sassDir: '<%%= yeoman.app %>/assets/scss',
                cssDir: '.tmp/assets/css',
                generatedImagesDir: '.tmp/assets/images/generated',
                imagesDir: '<%%= yeoman.app %>/assets/images',
                javascriptsDir: '<%%= yeoman.app %>/assets/js',
                fontsDir: '<%%= yeoman.app %>/assets/fonts',
                importPath: '<%%= yeoman.app %>/assets/components',
                httpImagesPath: '/assets/images',
                httpGeneratedImagesPath: '/assets/images/generated',
                httpFontsPath: '/assets/fonts',
                require: [
                    //'modular-scale'
                ],
                relativeAssets: true,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%%= yeoman.dist %>/assets/images/generated',
                },
                src: '<%%= yeoman.app %>/assets/scss/',
                dest: '<%%= yeoman.app %>/assets/css/',
                // outputstyle: 'compressed',
                // linecomments: false,
                // forcecompile: true,
                // debugsass: false,
                // assetCacheBuster: false,
                // require: [
                //     //'modular-scale'
                // ],
                // images: '<%%= yeoman.app %>/assets/images'
            },
            server: {
                options: {
                    require: [
                        //'modular-scale'
                    ],
                    debugInfo: true
                }
            }
        },<% } %>

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/assets/css/',
                    src: '{,*/}*.css',
                    dest: '.tmp/assets/css/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        'bower-install': {
            app: {
                html: '<%%= yeoman.app %>/index.html',
                ignorePath: '<%%= yeoman.app %>/'
            }
        },

        requirejs: {
            compile: {
                options: {
                    //baseUrl: '<%%= yeoman.app %>/assets/js',
                    mainConfigFile: '<%%= yeoman.app %>/assets/js/main.js',
                    //optimize: "uglify",
                    optimize: 'none',
                    generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: false,
                    name: 'main',
                    out: '<%%= yeoman.dist %>/assets/js/app.js'
                }
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%%= yeoman.dist %>/assets/js/{,*/}*.js',
                        '<%%= yeoman.dist %>/assets/css/{,*/}*.css',
                        '<%%= yeoman.dist %>/assets/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%%= yeoman.dist %>/assets/fonts/{,*/}*.*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%%= yeoman.dist %>'
            },
            html: '<%%= yeoman.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%%= yeoman.dist %>']
            },
            html: ['<%%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%%= yeoman.dist %>/assets/css/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/assets/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%%= yeoman.dist %>/assets/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/assets/images',
                    src: '{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/assets/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%%= yeoman.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: {
                    '<%%= yeoman.dist %>/assets/css/style.css': [
                        '.tmp/assets/css/{,*/}*.css',
                        '<%%= yeoman.app %>/assets/css/{,*/}*.css'
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%%= yeoman.dist %>/assets/js/app.js': [
                        '<%%= yeoman.app %>/assets/components/almond/almond.js',
                        '<%%= yeoman.app %>/assets/templates/templates.js',
                        '<%%= yeoman.dist %>/assets/js/app.js'
                    ]
                }
            }
        },

        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: /assets\/components\/requirejs\/require.js/g,
                        replacement: 'assets/js/app.js'
                    },
                    {
                        match: /data-main=\"assets\/js\/main\"/g,
                        replacement: ''
                    },
                    {
                        match: /assets\/components\/modernizr\/modernizr.js/g,
                        replacement: 'assets/js/vendor/modernizr.js'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%%= yeoman.app %>/*.{html,php,shtml}'],
                    dest: '<%%= yeoman.dist %>/'
                }]
            }
        },

        // concat: {
        //     dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%%= yeoman.app %>',
                    dest: '<%%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt,html,php,shtml,htaccess,htpasswd}',
                        'images/{,*/}*.{png,webp,gif}',
                        'assets/fonts/{,*/}*.*'<% if (includeBootstrap) { %>,
                        'assets/components/bootstrap-sass-official/vendor/assets/fonts/*.*'<% } %>
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%%= yeoman.app %>/assets/css',
                dest: '.tmp/assets/css/',
                src: '{,*/}*.css'
            }
        },

<% if (includeModernizr) { %>
        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            devFile: '<%%= yeoman.app %>/assets/components/modernizr/modernizr.js',
            outputFile: '<%%= yeoman.dist %>/assets/js/vendor/modernizr.js',
            files: [
                '<%%= yeoman.dist %>/assets/js/{,*/}*.js',
                '<%%= yeoman.dist %>/assets/css/{,*/}*.css',
                '!<%%= yeoman.dist %>/assets/js/vendor/*'
            ],
            uglify: true
        },<% } %>

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [<% if (includeCompass) { %>
                'compass:server',<% } if (coffee) { %>
                'coffee:dist',<% } %>
                'copy:styles'
            ],
            test: [<% if (coffee) { %>
                'coffee',<% } %>
                'copy:styles'
            ],
            dist: [<% if (coffee) { %>
                'coffee',<% } if (includeCompass) { %>
                'compass',<% } %>
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', function(target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer',
            ]);
        }

        grunt.task.run([
            'connect:test',<% if (testFramework === 'mocha') { %>
            'mocha'<% } else if (testFramework === 'jasmine') { %>
            'jasmine'<% } %>
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        // 'useminPrepare',
        'concurrent:dist',
        'requirejs',
        'autoprefixer',
        // 'concat',
        'cssmin',
        'uglify',
        'copy:dist',<% if (includeModernizr) { %>
        'modernizr',<% } %>
        // 'rev',
        // 'usemin',
        'replace:dist',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
