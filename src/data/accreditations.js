var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    title:{type: String},
    description:{type: String},
    logoLink:{type: String},
    image:{type: String},
    createdAt:{type: String, required: true, default: new Date()}
});

var dataRef = {
    "name": "accreditations",
    "slug": "/admin/accreditations",
    "apiSlug": "/data/accreditations",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "categories": [],
    "tags": [],
    "fields": [
        {
            label: "Title",
            data: "title"
        },
        {
            label: "Description",
            data: "description",
            editType: "textarea"
        },
        {
            label: "Logo Link",
            data: "logoLink"
        },
        {
            label: "",
            data: "Image"
        }
    ]
};

// todo new feature use the label if the fields of the dataRef to set the label in forms


var Model = mongoose.model(
    'accreditations',
    modelSchema,
    'accreditations'
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
