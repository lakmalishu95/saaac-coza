var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    student:{
        title: {type: String},
        name: {type: String},
        surname: {type: String},
        sex:{type: String},
        race:{type: String},
        nationality: {type: String},
        idPassportNo:{type: String},
        phone:{
            cell: {type: String}
        },
        email:{type: String},
        address: {
            residential:{type: String},
            postal: {type: String}
        }
    },
    parent: {
        title: {type: String},
        name: {type: String},
        surname: {type: String},
        idPassportNo: {type: String},
        phone: {
            cell: {type: String}
        }
    },
    enrolment:{
        college:{type: String},
        course:{type: String},
        status:{type: String},
        referenceNumber:{type: String}
    },
    createdAt:{type: String, required: true, default: new Date().valueOf()}
});

var dataRef = {
    name: "applications",
    slug: "/admin/applications",
    apiSlug: "/data/applications",
    interfaceType: "default",
    cycleByDefault: false,
    batchSize: 10,
    type: "noEdit",
    categories: [],
    tags: [],
    fields: [
        {
            data: "enrolment.college",
            label: "College",
            editType: "select",
            editGroup: "enrolment",
            selectOptions: [
                "select",
                "Pretoria",
                "Queenstown",
                "Durban"
            ]
        },
        {
            data: "enrolment.course",
            label: "Course",
            editGroup: "enrolment"
        },
        {
            data: "enrolment.referenceNumber",
            label: "Reference Number",
            editGroup: "enrolment",
            editType: "noEdit"
        },
        {
            data: "student.title",
            label: "Student Title",
            editType: "select",
            editGroup: "student",
            selectOptions: [
                "select",
                "Mr",
                "Mrs",
                "Me",
                "Dr",
                "Prof"
            ]
        },
        {
            data: "student.name",
            label: "Student Name",
            editGroup: "student"
        },
        {
            data: "student.surname",
            label: "Student Surname",
            editGroup: "student"
        },
        {
            data: "student.sex",
            label: "Sex",
            editType: "select",
            editGroup: "student",
            selectOptions: [
                "select",
                "Male",
                "Female"
            ]
        },
        {
            data: "student.race",
            label: "Student Race",
            editGroup: "student"
        },
        {
            data: "student.nationality",
            label: "Student Nationality",
            editGroup: "student"
        },
        {
            data: "student.idPassportNo",
            label: "Student ID Number / Passport Number",
            editGroup: "student"
        },
        {
            data: "student.phone.cell",
            label: "Student Cell Phone",
            editGroup: "student"
        },
        {
            data: "student.email",
            label: "Student Email",
            editGroup: "student"
        },
        {
            data: "student.address.residential",
            label: "Residential Address",
            editType: "textarea",
            editGroup: "student"
        },
        {
            data: "student.address.postal",
            label: "Postal Address",
            editType: "textarea",
            editGroup: "student"
        },
        {
            data: "parent.title",
            label: "Parent Title",
            editType: "select",
            editGroup: "parent",
            selectOptions: [
                "select",
                "Mr",
                "Mrs",
                "Me",
                "Dr",
                "Prof"
            ]
        },
        {
            data: "parent.name",
            label: "Parent Name",
            editGroup: "parent"
        },
        {
            data: "parent.surname",
            label: "Parent Surname",
            editGroup: "parent"
        },
        {
            data: "parent.nationality",
            label: "Parent Nationality",
            editGroup: "parent"
        },
        {
            data: "parent.idPassportNo",
            label: "Parent ID Number / Passport Number",
            editGroup: "parent"
        },
        {
            data: "parent.phone.cell",
            label: "Parent Cell Phone",
            editGroup: "parent"
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
exports.model = Model;



/*
       {
            data: "enrolment.status",
            label: "Enrolment Status",
            editGroup: "enrolment",
            editType: "select",
            selectOptions: [
                "select",
                "completed",
                "in progress"
            ]
        },
 */