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
        jquery: '../components/jquery/jquery',
        domReady: '../components/requirejs-domready/domReady'<% if (includeBackbone) { %>,
        bootstrap: '../components/sass-bootstrap/dist/js/bootstrap',
        backbone: '../components/backbone/backbone',
        underscore: '../components/lodash/dist/lodash.underscore'
        <% } %>
    }
});

<% if (includeBackbone) { %>

require([
    'app/core',
    'domReady',
    'backbone'
], function(app, domReady, Backbone) {
    domReady(function() {
        console.log('Moin Moin and welcome to '+app.name+'');
    });
});

<% } else { %>

require([
    'app/core',
    'domReady'
], function(app, domReady) {
    domReady(function() {
        console.log('Moin Moin and welcome to '+app.name+'');
    });
});

<% } %>
