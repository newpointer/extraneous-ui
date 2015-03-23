//
var _       = require("lodash"),
    _d      = require("lodash-deep"),
    path    = require('path'),
    webapp  = require('nullpointer-web-app');

_.mixin(_d);

//
module.exports = function(grunt) {
    webapp.setBuildMeta({
        APP_BUILD_TYPE: 'production',
        cwd: __dirname,
        name: 'nkb-app',
        rootpath: '/extraneous-ui/'
    });

    //
    var gruntConfig = webapp.getDefaultGruntConfig(),
        buildMeta   = webapp.getBuildMeta();

    webapp.initGrunt(grunt, gruntConfig);
};
