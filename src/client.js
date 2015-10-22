'use strict';

var React = require('react');
var neRender = require('ne-render');
var appmeta = require ('../node_engine/ne-gulp/appmeta');
var routes = require ('../node_engine/ne-gulp/routes');
var dataRef = require('../node_engine/ne-gulp/dataRef');

console.log("Client JS is Active");

var object = document.getElementById("about-link");
if(object){
    console.log('client: About link found');
    object.addEventListener("click", function(){
        neRender.clientRender(null, "/about", routes);
    });
}
else{
    console.log('client: About link not found');
}
