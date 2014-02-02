/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        domReady: '../components/requirejs-domready/domReady'<% if (includeBackbone) { %>,
        backbone: '../components/backbone/backbone',
        underscore: '../components/lodash/dist/lodash.underscore'<% } %><% if (includeBootstrap) { %>,

        bootstrapAffix: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix',
        bootstrapAlert: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert',
        bootstrapButton: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button',
        bootstrapCarousel: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel',
        bootstrapCollapse: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse',
        bootstrapDropdown: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown',
        bootstrapModal: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal',
        bootstrapPopover: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover',
        bootstrapScrollspy: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy',
        bootstrapTab: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab',
        bootstrapTooltip: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip',
        bootstrapTransition: '../components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition'<% } %>
    },
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
        }<% if (includeBootstrap) { %>,
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }<% } %>
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
