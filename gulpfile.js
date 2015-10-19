var gulp = require('gulp');
var neGulp = require ('ne-gulp');
var env = require('gulp-env');
var nodemon = require('gulp-nodemon');

// JS
var webpack = require('webpack-stream');
// var browserSync = require('browser-sync');

//////////////////////
//    Hello World   //
//////////////////////

gulp.task('hello',['webpack'], function() {
    console.log('            __                                          ');
    console.log('           /..\\___   Hello, You need to check up on me ');
    console.log('          /       \\            I crash your gulp watch ');
    console.log('    _     \\`______/ _                        sometimes ');
    console.log('___/ \\____|_|______/ \\________________________________');
    console.log('   \\ /             \\ /                                ');
    console.log('Sometimes when making changes to files');
    console.log('the watch command crashes, ');
    console.log('just run gulp again to start it up again. ');
});

//////////////////////
//  Clear
//////////////////////

gulp.task('clear', function () {

    return neGulp.autoClear();
});


//////////////////////
//  Style
//////////////////////

gulp.task('style',['neBefore'], function () {

    gulp.watch('src/css/*.styl', [
        'style'
    ]);

    return neGulp.autoStyl();
});


//////////////////////
//  Copy
//////////////////////

gulp.task('static',['neBefore'], function() {

    gulp.watch('src/static/**/**/**/*', [
        'static'
    ]);

    return neGulp.autoStatic();

});


//////////////////////
//  Babel
//////////////////////

gulp.task('babel',['neBefore'], function() {

    gulp.watch('src/**/**/**/*.js', [
        'babel'
    ]);

    return neGulp.autoBabel();

});


//////////////////////
//  Node Engine
//////////////////////

gulp.task('neBefore', function() {

    return neGulp.before();

});

gulp.task('neCustom', function() {

    return neGulp.custom();

});

gulp.task('neCompile',['neCustom', 'babel'], function() {

    var compileNow = function(){

        var dirName = __dirname;
        return neGulp.compileMain(dirName);
    };
    setTimeout(compileNow, 2000);

});


//////////////////////
//  Webpack
//////////////////////

gulp.task('webpack',['neCompile'], function(){

    gulp.src('src/client.js')
        .pipe(webpack( require('./webpack.js') ))
        .pipe(gulp.dest('./app/js/'));

});


//////////////////////
//  Nodemon
//////////////////////


gulp.task('nodemon', function () {

    env({
        file: './config-d.json',
        vars: {
            // any variables you want to overwrite
        }
    });

    return nodemon({
        script: 'app/server.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});


gulp.task('default', [
    'neBefore',
    'style',
    'static',
    'babel',
    'neCustom',
    'neCompile',
    'webpack',
    'hello',
    'nodemon'
]);



//////////////////////
//       Misc       //
//////////////////////


// run a server to help with reloads etc
/*
 gulp.task('browserSync', function() {
 browserSync({
 // tell the server where to get its files
 server: {
 baseDir: './app'
 }
 });
 });
 */

/*
var nodemon = require('gulp-nodemon');


*/

// Use this to setup the tasks to run one after the other
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md
//
