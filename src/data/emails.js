var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var neData = require('ne-data');

var modelSchema = new Schema({
    nameFirst:{type: String, required: true},
    nameLast:{type: String},
    email:{type: String, required: true},
    user:{type: Schema.ObjectId},
    createdAt:{type: String, required: true, default: new Date()}
});

var dataRef = {
    "name": "emails",
    "slug": "/admin/emails",
    "apiSlug": "/data/emails",
    "interfaceType": "default",
    "cycleByDefault": false,
    "batchSize": 10,
    "type": "noEdit",
    "categories": [],
    "tags": [],
    "fields": [
        {
            name: "p1",
            data: "nameFirst",
            type: "noEdit"
        },
        {
            name: "p2",
            data: "nameLast",
            type: "noEdit"
        },
        {
            name: "p3",
            data: "email",
            type: "noEdit"
        },
        {
            name: "p3",
            data: "user",
            type: "ObjectId"
        }
    ]
};


/*

Later in the handler you just call a function similar to this
{self.props.nerb1 && self.props.nerb1.testField && neHandler(self.props.nerb1.testField)}

or

 {neHandler(self.props, {field: "nerb1.testField", otherOption: "something"})}

and the app will place the javascript version of that there no need to then transpile the jsx

also in the handler you need to say wheter it is a map or wheter just one object is expected back

 {neHandler(self.props, {field: "nerb1.testField", map: true})}

*/

var Model = mongoose.model(
    'emails',
    modelSchema
);

var routes = function (router){

    var permissionsArray = ['reader', 'admin'];

    neData.get(router, Model);
    neData.putWithPermissions(router, Model, permissionsArray);
    neData.postWithPermissions(router, Model, permissionsArray);
    neData.deleteWithPermissions(router, Model, permissionsArray);

};

exports.routes = routes;
exports.dataRef = dataRef;


/*


Map in the handler and return components.

Pass the data to the component
var neHandler = require('ne-handler')


this.props.nerb1.map(function(item, index){

<neHandler.textBox1 {...this.props}/>

})

--------

var renderer = function (dataObject, {
      renderType: "dp",
      dClass: "class-name-of-div",
      dIndex: "id-name-of-div",
      dKey: "key-of-div",
      pText: "description",
})

var renderer = function (dataObject, optionsObject){

If (dataObject.renderType === dp){
     return (
             <div key={dataObject.dKey} className={dataObject.dClass} id={dataObject.dId}>
                       <p> {dataObject[pText]}</p>
              </div>
     )
}

}

-----

*/