"use strict";

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create();



/*********************************
 Developer tasks
 *********************************/
//server
gulp.task('browser-sync', function () {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: paths.devDir
        }
    });
});
gulp.task('default', ['browser-sync']);


