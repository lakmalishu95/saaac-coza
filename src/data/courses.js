var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    title:{type: String, required: true},
    faculty:{type: String, required: false, default: "N/A"},
    entryRequirements: {type: String, required: false, default: "N/A"},
    courseDuration: {type: String, required: false, default: "N/A"},
    ableToDo: {type: String, required: false, default: "N/A"},
    learningAreas: {type: String, required: false, default: "N/A"},
    createdAt:{type: String, required: true, default: new Date()}
});

var dataRef = {
    "name": "courses",
    "slug": "/admin/courses",
    "apiSlug": "/data/courses",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "faculties": ["Not Specified", "Engineering"],
    "categories": [],
    "tags": [],
    "fields": [
        {
            data: "title",
            label: "Title"
        },
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
    ]
};

// todo new feature use the label if the fields of the dataRef to set the label in forms


var Model = mongoose.model(
    'courses',
    modelSchema,
    'courses'
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