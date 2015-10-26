var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    dd:{type: String},
    createdAt:{type: String, required: true, default: new Date().valueOf()}
});

var dataRef = {
    "name": "applications",
    "slug": "/admin/applications",
    "apiSlug": "/data/applications",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "type": "noEdit",
    "categories": [],
    "tags": [],
    "fields": [
        {
            data: "_id",
            label: "Application ID"

        },
        {
            data: "dd",
            label: "Dd"

        }
    ]
};

// todo new feature use the label if the fields of the dataRef to set the label in forms


var Model = mongoose.model(
    'applications',
    modelSchema,
    'applications'
);


var routes = function (router, passport, strategyName){

    var permissionsArray = ['admin'];

    neData.getWithPermissions(router, Model, permissionsArray);
    neData.putWithPermissions(router, Model, permissionsArray);
    neData.postWithPermissions(router, Model, permissionsArray);
    neData.deleteWithPermissions(router, Model, permissionsArray);

};

exports.routes = routes;
exports.dataRef = dataRef;



/*

,
        {
            data: "faculty",
            label: "Faculty",
            editType: "select",
            selectOptions: [
                "Undefined",
                "Faculty of Engineering",
                "Faculty of Bookkeeping & Financial Accounting",
                "Faculty of Public Sector Accounting",
                "Faculty of Financial Management",
                "Faculty of Management",
                "Faculty of Computer Engineering & Information Technology",
                "Faculty of Journalism & Media Studies",
                "Faculty of Health & Social Care",
                "Faculty of Travel & Tourism",
                "Faculty of Transport & Logistics",
                "Short Courses"
            ],
            templateRef: "string5"
        },
        {
            data: "entryRequirements",
            label: "Entry Requirements",
            editType: "textarea"
        },
        {
            data: "courseDuration",
            label: "Course Duration"
        },
        {
            data: "ableToDo",
            editType: "textarea",
            label: "What you will be able to do"
        },
        {
            data: "learningAreas",
            editType: "textarea",
            label: "Subjects / Learning Areas"
        }
 */