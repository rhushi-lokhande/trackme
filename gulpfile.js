var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var runSequence = require('run-sequence');
var config = require('./gulp.config')();
var tsProject = tsc.createProject('tsconfig.json');
var tsProjectNG = tsc.createProject('tsconfig.json', { sourceRoot: undefined });
var del = require('del');


var sourceTsFiles = [
    config.allTs,
    config.server,
    config.typeings,
];
    
    
// to compile server side ts file and put then in app folder
gulp.task('compile-src', function () {

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    del(['app/build/**/**']).then(paths => {
        //   console.log('Deleted files and folders:\n', paths.join('\n'));
    });

    del(['app/map/**']).then(paths => {
        //   console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    return tsResult.js
        .pipe(sourcemaps.write('../map'))
        .pipe(gulp.dest(config.tsOutPutPath));
});

//to compile angular2 ts files and put then in public folder
gulp.task('compile-client', function () {

    var sourceTsFiles = [
        config.ngTypeings,
        config.allNgTs
    ]

    del(['public/scripts/**/*.js']).then(paths => {
        //  console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProjectNG));

    return tsResult.js
        .pipe(sourcemaps.write('../map'))
        .pipe(gulp.dest(config.ngOut));
});

gulp.task('watch', ['runtask'], function () {
    del(['public/scripts/**']).then(paths => {
        //  console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    gulp.watch([config.allTs, config.server], ['compile-src']);
    gulp.watch([config.allNgTs], ['compile-client']);
    gulp.watch([config.html], ['html']);
});

gulp.task('runtask', function () {
    runSequence('compile-src', 'compile-client', 'html');

});

gulp.task('html', function () {
    del(['public/scripts/**/*.html']).then(paths => {
        //  console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    return gulp.src(['client/**/**.html'])
        .pipe(gulp.dest('public/scripts/src'));
});

gulp.task('default', ['compile-src', 'compile-client', 'html', 'watch'], function () {
    // place code for your default task here
});