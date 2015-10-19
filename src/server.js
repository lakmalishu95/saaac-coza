#!/usr/bin/env node

////////////////////////
// Create the Server
////////////////////////

var neServer = require('ne-server');

var port = process.env.PORT;
var server = neServer.init(port);

var dirName = __dirname;
console.log('dirName');
console.log(dirName);

var serverOptions = {};
serverOptions.cacheTime = 10000;
// users can have a object id link to a separate collection with more info
serverOptions.usersDetail = false;
// all users are 'admin'
serverOptions.insecure = false;

var appmeta = require ('../node_engine/ne-gulp/appmeta');
var routes = require ('../node_engine/ne-gulp/routes');
var dataRef = require('../node_engine/ne-gulp/dataRef');

neServer.auto(server, dirName, serverOptions, appmeta, routes, dataRef);