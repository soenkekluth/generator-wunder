/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        domReady: '../components/requirejs-domready/domReady',
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone/backbone',
        underscore: '../components/lodash/dist/lodash.underscore',
        bootstrap: '../components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'domReady',
    'backbone'
], function(domReady, Backbone) {
    console.log('Moin');
});
