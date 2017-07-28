"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    cssmin = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rimraf = require('rimraf'),
    notify = require('gulp-notify')


var paths = {
  // blocks: 'blocks/',
    devDir: 'app/',
   //outputDir: 'build/'
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


/*********************************
 Production tasks
 *********************************/
//
// //clean
// gulp.task('clean', function(cb) {
//     rimraf(paths.outputDir, cb);
// });
//
// //css + js
// gulp.task('build', ['clean'], function () {
//     return gulp.src(paths.devDir + '*.html')
//         .pipe( useref() )
//         .pipe( gulpif('*.js', uglify()) )
//         .pipe( gulpif('*.css', cssmin()) )
//         .pipe( gulp.dest(paths.outputDir) );
// });
//
// //copy images to outputDir
// gulp.task('imgBuild', ['clean'], function() {
//     return gulp.src(paths.devDir + 'img/**/*.*')
//         .pipe(imagemin())
//         .pipe(gulp.dest(paths.outputDir + 'img/'));
// });
//
// //copy fonts to outputDir
// gulp.task('fontsBuild', ['clean'], function() {
//     return gulp.src(paths.devDir + '/fonts/*')
//         .pipe(gulp.dest(paths.outputDir + 'fonts/'));
// });




//default
gulp.task('default', ['browser-sync', 'scripts']);

// //production
// gulp.task('prod', ['build', 'imgBuild', 'fontsBuild']);




