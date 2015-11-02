var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    missionItem:{type: String},
    createdAt:{type: String, required: true, default: new Date()}
});

var dataRef = {
    "name": "aboutusmission",
    "slug": "/admin/aboutusmission",
    "apiSlug": "/data/aboutusmission",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "categories": [],
    "tags": [],
    "fields": [
        {
            label: "missionItem",
            data: "missionItem",
            editType: "textarea"
        }
    ]
};

var Model = mongoose.model(
    'aboutusmission',
    modelSchema,
    'aboutusmission'
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
