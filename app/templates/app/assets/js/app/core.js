define(function(require, exports, module) {

    'use strict';

    // External dependencies.
    var $ = require('jquery');<% if (includeBackbone) { %>
    var _ = require('underscore');
    var Backbone = require('backbone');<% } %>

    // Alias the module for easier identification.
    var app = module.exports;
    <% if (includeBackbone) { %>
    // The root path to run the application through.
    app.root = '/';<% } %>
    app.name = '<%= appname %>';
});
