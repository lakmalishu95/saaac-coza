var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    visionItem:{type: String},
    createdAt:{type: String, required: true, default: new Date()}
});

var dataRef = {
    "name": "aboutusvision",
    "slug": "/admin/aboutusvision",
    "apiSlug": "/data/aboutusvision",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "categories": [],
    "tags": [],
    "fields": [
        {
            label: "visionItem",
            data: "visionItem",
            editType: "textarea"
        }
    ]
};

var Model = mongoose.model(
    'aboutusvision',
    modelSchema,
    'aboutusvision'
);


var routes = function (router, passport, strategyName){

    var permissionsArray = ['admin'];

    neData.get(router, Model);
    neData.putWithPermissions(router, Model, permissionsArray);
    neData.postWithPermissions(router, Model, permissionsArray);
    neData.deleteWithPermissions(router, Model, permissionsArray);

};

exports.routes = routes;
exports.dataRef = dataRef;
