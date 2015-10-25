var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    title:{type: String, required: true},
    createdAt:{type: String, required: true, default: new Date()}
});

var dataRef = {
    "name": "colleges",
    "slug": "/admin/colleges",
    "apiSlug": "/data/colleges",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "categories": [],
    "tags": [],
    "fields": [
        {
            name: "p1",
            label: "Title",
            data: "title"
        }
    ]
};

// todo new feature use the label if the fields of the dataRef to set the label in forms

var Model = mongoose.model(
    'colleges',
    modelSchema,
    'colleges'
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
