'use strict';
var util = require('util');
var path = require('path');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var AppGenerator = module.exports = function Appgenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    // setup the test-framework property, Gruntfile template will need this
    this.testFramework = options['test-framework'] || 'mocha';
    this.coffee = options.coffee;

    // for hooks to resolve on mocha by default
    options['test-framework'] = this.testFramework;

    // resolved to mocha by default (could be switched to jasmine for instance)
    this.hookFor('test-framework', {
        as: 'app',
        options: {
            options: {
                'skip-install': options['skip-install-message'],
                'skip-message': options['skip-install']
            }
        }
    });

    this.options = options;

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // welcome message
    if (!this.options['skip-welcome-message']) {
        //console.log(this.yeoman);
        console.log(chalk.magenta('Moin Moin'));
    }

    var prompts = [{
        type: 'checkbox',
        name: 'features',
        message: 'What more would you like?',
        choices: [{
            name: 'jQuery with IE<=8 support',
            value: 'jQuery1',
            checked: true
        }, {
            name: 'Sass with Compass',
            value: 'includeCompass',
            checked: true
        }, {
            name: 'Bootstrap',
            value: 'includeBootstrap',
            checked: true
        }, {
            name: 'Modernizr',
            value: 'includeModernizr',
            checked: true
        }, {
            name: 'Backbone',
            value: 'includeBackbone',
            checked: true
        }, {
            name: 'Dploy',
            value: 'includeDploy',
            checked: false
        }]
    }];

    this.prompt(prompts, function(answers) {
        var features = answers.features;

        function hasFeature(feat) {
            if (features) {
                return features.indexOf(feat) !== -1;
            }
            return true;
        }

        // manually deal with the response, get back and store the results.
        // we change a bit this way of doing to automatically do this in the self.prompt() method.
        this.jQuery1 = hasFeature('jQuery1');
        this.includeCompass = hasFeature('includeCompass');
        this.includeBootstrap = hasFeature('includeBootstrap');
        this.includeModernizr = hasFeature('includeModernizr');
        this.includeBackbone = hasFeature('includeBackbone');
        this.includeDploy = hasFeature('includeDploy');

        cb();
    }.bind(this));
};

AppGenerator.prototype.gruntfile = function gruntfile() {
    this.template('Gruntfile.js');
};

AppGenerator.prototype.packageJSON = function packageJSON() {
    this.template('_package.json', 'package.json');
};

AppGenerator.prototype.git = function git() {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
};

AppGenerator.prototype.bower = function bower() {
    this.copy('bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
};

AppGenerator.prototype.jshint = function jshint() {
    this.copy('jshintrc', '.jshintrc');
};

AppGenerator.prototype.editorConfig = function editorConfig() {
    this.copy('editorconfig', '.editorconfig');
};

AppGenerator.prototype.h5bp = function h5bp() {
    // this.copy('favicon.ico', 'app/favicon.ico');
    // this.copy('404.html', 'app/404.html');
    // this.copy('robots.txt', 'app/robots.txt');
    // this.copy('htaccess', 'app/.htaccess');
};

AppGenerator.prototype.mainStylesheet = function mainStylesheet() {
    // var css = 'main.' + (this.includeCompass ? 's' : '') + 'css';
    // this.copy(css, 'app/styles/' + css);
};

AppGenerator.prototype.writeIndex = function writeIndex() {

    // this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
    // this.indexFile = this.engine(this.indexFile, this);

    // this.mainJSFile = this.readFileAsString(path.join(this.sourceRoot(), 'app/assets/js/main.js'));
    // this.mainJSFile = this.engine(this.mainJSFile, this);

};

AppGenerator.prototype.app = function app() {
    this.mkdir('app');
    this.directory('app', 'app');
    // this.write('app/index.html', this.indexFile);
    // this.write('app/assets/js/main.js', this.mainJSFile);
};

AppGenerator.prototype.install = function() {
    if (this.options['skip-install']) {
        return;
    }

    var done = this.async();
    this.installDependencies({
        skipMessage: this.options['skip-install-message'],
        skipInstall: this.options['skip-install'],
        callback: done
    });
};
