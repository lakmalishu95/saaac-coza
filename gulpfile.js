var gulp = require('gulp');
var env = require('gulp-env');
var nodemon = require('gulp-nodemon');
var neGulp = require ('ne-gulp');
var dirName = __dirname;

gulp.task('hello', function() {
    return neGulp.autoHello();
});

gulp.task('clear', function () {
    return neGulp.autoClear();
});

gulp.task('style',['neBefore'], function () {
    return neGulp.autoStyl();
});

gulp.task('static',['neBefore'], function() {
    return neGulp.autoStatic();
});

gulp.task('babel',['neBefore'], function() {
    return neGulp.autoBabel();
});

gulp.task('neBefore', function() {
    return neGulp.before();
});

gulp.task('neCustom', function() {
    return neGulp.custom();
});

gulp.task('neCompile',['neCustom', 'babel'], function() {
    var compileNow = function(){
        return neGulp.compileMain(dirName);
    };
    setTimeout(compileNow, 2000);
});

gulp.task('webpack',['neCompile'], function(){

    return neGulp.autoWebpack(dirName);
});

gulp.task('webpackProduction', function(){
    return neGulp.autoWebpack(dirName, {compileFor: "production"});
});

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

 var webpack = require('webpack-stream');
 var browserSync = require('browser-sync');

 gulp.task('browserSync', function() {
 browserSync({
 // tell the server where to get its files
 server: {
 baseDir: './app'
 }
 });
 });
 */
// Use this to setup the tasks to run one after the other
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md