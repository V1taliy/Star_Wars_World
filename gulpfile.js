"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();

var paths = {
    devDir: 'app/',
    };

/*********************************
 Developer tasks
 *********************************/

//js compile
gulp.task('scripts', function() {
    return gulp.src([
        paths.blocks + '**/*.js',
        '!' + paths.blocks + '_assets/**/*.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.devDir + 'js/'))
        .pipe(browserSync.stream());
});

//server
gulp.task('browser-sync', function() {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: paths.devDir
        }
    });
});

//default
gulp.task('default', ['browser-sync', 'scripts']);






