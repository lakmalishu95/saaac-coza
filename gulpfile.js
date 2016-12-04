var gulp = require('gulp');
var env = require('gulp-env');
var nodemon = require('gulp-nodemon');
var neGulp = require ('ne-gulp');
var dirName = __dirname;

////////////////////
// Singles
////////////////////

gulp.task('clear', function () {
    return neGulp.autoClear();
});

gulp.task('nuke', function () {
    // deletes all the generated code including /app /node_engine /node_modules
});

gulp.task('install', function() {
    return neGulp.neInstall();
});

gulp.task('webpackP', function(){
    return neGulp.autoWebpack(dirName, {compileFor: "production"});
});

////////////////////
// Default
////////////////////

gulp.task('hello', function() {
    return neGulp.autoHello();
});

gulp.task('style', function () {
    return neGulp.autoStyl();
});

gulp.task('static', function() {
    return neGulp.autoStatic();
});

gulp.task('babel', function() {
    return neGulp.autoBabel();
});

gulp.task('ne',['babel'], function() {
    var compileNow = function(){
        return neGulp.compileMain(dirName);
    };
    setTimeout(compileNow, 2000);
});

gulp.task('webpack',['ne'], function(){

    return neGulp.autoWebpack(dirName);
});

gulp.task('nodemon', function () {
    env({
        file: './configD.json',
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
    'style',
    'static',
    'babel',
    'ne',
    'webpack',
    'hello',
    'nodemon'
]);