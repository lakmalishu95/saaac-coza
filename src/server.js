#!/usr/bin/env node

var neAuto = require('ne-auto');
var dirName = __dirname;
var optionsObject = {};
optionsObject.cacheTime = 10000;
optionsObject.pathToHandlers = "";
optionsObject.pathToData = "";
optionsObject.pathToRoutes = "../../app/routes/";
//optionsObject.pathToRoutes = "../../../../app/routes/";
neAuto.server(dirName, optionsObject);