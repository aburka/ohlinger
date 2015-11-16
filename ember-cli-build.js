/* global require, module */


var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Any other options
    });

    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');

    app.import(app.bowerDirectory + '/underscore/underscore.js');
    app.import('vendor/parse-1.6.7.min.js');

    return app.toTree();
};
