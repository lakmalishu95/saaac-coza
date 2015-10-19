var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    nameFirst:{type: String, required: true},
    nameLast:{type: String, required: false},
    email:{type: String, required: false},
    second:{
        level: {type: String, required: false}
    },
    createdAt:{type: String, required: true, default: new Date()}
});

var dataRefOld = {
    "name": "people",
    "slug": "/admin/people",
    "apiSlug": "/data/people",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "categories": [],
    "tags": [],
    "fields": ["nameFirst", "nameLast", "email", "second.level"]
};

var dataRef = {
    "name": "people",
    "slug": "/admin/people",
    "apiSlug": "/data/people",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "categories": [],
    "tags": [],
    "fields": [
        {
            name: "p1",
            data: "nameFirst"
        },
        {
            name: "p2",
            data: "nameLast"
        },
        {
            name: "p3",
            data: "email"
        },
        {
            name: "p4",
            data: "second.level"
        }
    ]
};


var Model = mongoose.model(
    'people',
    modelSchema,
    'people'
);


var routes = function (router, passport, strategyName){

    var permissionsArray = ['reader', 'admin'];

    neData.get(router, Model);
    neData.putWithPermissions(router, Model, permissionsArray);
    neData.postWithPermissions(router, Model, permissionsArray);
    neData.deleteWithPermissions(router, Model, permissionsArray);

};

exports.routes = routes;
exports.dataRef = dataRef;
