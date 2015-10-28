var express = require('express');
var Model = require('../data/applications').model;

var router = express.Router();

var neLocalStrategyRoutes = function (server){

    router.use('/', function(req, res, next) {

        console.log('');
        console.log('');
        console.log('applicationRoutes: next()');
        console.log('');
        console.log('');

        next();

        /*
        var userIdAllowed = req.claims.user;
        var userIdRequested = req.params._id;

        if(userIdAllowed === userIdRequested) {
            console.log('============================');
            console.log('============================');
            console.log('============================');
            console.log('============================');
            console.log('============================');
            console.log('applicationRoutes: next()');
            console.log('============================');
            console.log('============================');
            console.log('============================');
            console.log('============================');
            console.log('============================');
            next();
        }
        else {
            res.redirect('/login?message=AccessDenied:InsufficientPermissions').status(401);
        }
        */

    });

    router.get('/get', function(req, res, next){

        var f1 = 'enrolment.referenceNumber';
        var v1 = req.claims.user;
        var q1 = {};
        q1[f1] = v1;

        Model
            .find(
            q1
            )
            .exec(function (err, doc) {
                res.json(doc);
            })

    });

    router.post('/add', function(req, res, next){

        var obj = req.body;
        obj.enrolment = {};
        obj.enrolment.referenceNumber = req.claims.user;

        console.log('');
        console.log('');
        console.log('applicationRoutes: obj');
        console.log(obj);
        console.log('');
        console.log('');

        var newDoc = new Model(obj);
        newDoc.save(function (err, newDoc){
            if (err) return console.error(err);

            console.log('');
            console.log('');
            console.log('applicationRoutes: saved');
            console.log('');
            console.log('');

            res.redirect('/applications?message=Application Started')
        })

    });

    router.post('/edit', function(req, res, next){

        var f1 = 'enrolment.referenceNumber';
        var v1 = req.claims.user;
        var q1 = {};
        q1[f1] = v1;

        var config = {};
        config['multi'] = false;

        console.log('');
        console.log('');
        console.log("Put request received");
        console.log('');
        console.log('');

        var json = req.body;

        if (Object.keys(json).length !== 0) {

            console.log('');
            console.log('');
            console.log("JSON request body object found");
            console.log('');
            console.log('');

            Model
                .update(
                q1,
                {
                    $set: json
                },
                config
            )
                .exec(function (err, doc){
                    res.redirect('/applications?message=Application Updated')
                });

            console.log('');
            console.log('');
            console.log("Put request executed using JSON request body object");
            console.log('');
            console.log('');

        }
        else {
            var msg = "ERROR: Unknown reason";
            console.error(msg);
            res.send(msg);
        }

    });

    server.use('/data-alt/applications', router);

};

module.exports = neLocalStrategyRoutes;


/*

router.post('/change/:_id/cycle/form', function(req, res, next){

        var redirectPath;
        if (req.body.limit){
            if (req.body.batch){
                if (req.body.token){
                    redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit + "&batch=" + req.body.batch + "&token=" + req.body.token;
                }
                else {
                    redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit + "&batch=" + req.body.batch;
                }
            }
            else {
                redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit;
            }
        }
        else{
            redirectPath = '/admin/' + data + "?message=Error changing cycle";
        }
        return res.redirect(redirectPath);

    });

    router.post('/change/:_id/cycle/buttons', function(req, res, next){

        var redirectPath
        if (req.body.limit){
            if (req.body.batch){
                if (req.body.token){
                    redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit + "&batch=" + req.body.batch + "&token=" + req.body.token;
                }
                else {
                    redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit + "&batch=" + req.body.batch;
                }
            }
            else {
                redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit;
            }
        }
        else{
            redirectPath = '/admin/' + data + "?message=Error changing cycle";
        }
        return res.redirect(redirectPath);

    });

    router.post('/change/:_id/delete/', function(req, res, next){

        var dataPath = process.env.ROOTURL + '/data/' + req.body.data + "/" + req.body._id + "?token=" + req.cookies.token;

        axios.delete(dataPath)
            .then(function (response) {

                var redirectPath;
                if (req.body.limit){
                    redirectPath = '/admin/' + req.body.data + "?message=deleted" + "&limit=" + req.body.limit;
                    if (req.body.batch){
                        if (req.body.token){
                            redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit + "&batch=" + req.body.batch + "&token=" + req.body.token;
                        }
                        else {
                            redirectPath = '/admin/' + req.body.data + "?message=deleted" + "&limit=" + req.body.limit + "&batch=" + req.body.batch;
                        }
                    }
                }
                else{
                    redirectPath = '/admin/' + req.body.data + "?message=deleted";
                }
                return res.redirect(redirectPath);

            })
            .catch(function (response) {

                var redirectPath = '/admin/' + req.body.data + '?message=' + "Error deleting ";
                return res.redirect(redirectPath);
            });

    });



    router.post('/change/:_id/put/', function(req, res, next){

        console.log("==============================================================================");
        console.log("==============================================================================");
        console.log("neAdmin neAdminRoutes: req.body");
        console.log(req.body);
        console.log("==============================================================================");
        console.log("==============================================================================");

        console.log("neAdmin neAdminRoutes:  Post received");
        var data = req.body.data;
        var _id = req.body._id;
        var limit = req.body.limit;
        var batch = req.body.batch;

        var postObject = {};

        Object.getOwnPropertyNames(req.body).forEach(function (item, index, array) {

            console.log(item);

            if (item === "limit"){

                console.log(" ")
                console.log(" ")
                console.log("neAdmin neAdminRoutes: Skipped limit on purpose")
                console.log(" ")
                console.log(" ")

            }

            else if (item === "batch"){

                console.log(" ")
                console.log(" ")
                console.log("neAdmin neAdminRoutes: Skipped batch on purpose")
                console.log(" ")
                console.log(" ")

            }

            else if (item === "data"){

                console.log(" ")
                console.log(" ")
                console.log("neAdmin neAdminRoutes: Skipped data on purpose")
                console.log(" ")
                console.log(" ")

            }

            else if (item === "_id"){

                console.log(" ")
                console.log(" ")
                console.log("neAdmin neAdminRoutes: Skipped _id on purpose")
                console.log(" ")
                console.log(" ")

            }

            else {

                postObject[item] = req.body[item]

                console.log(" ")
                console.log(" ")
                console.log("neAdmin neAdminRoutes: postObject after " + item)
                console.log(postObject)
                console.log(" ")
                console.log(" ")

            }

        });

        var dataPath = process.env.ROOTURL + '/data/' + req.body.data + "/" + req.body._id + "?token=" + req.cookies.token;

        console.log('');
        console.log('');
        console.log('neAdmin neAdminRoutes: dataPath');
        console.log(dataPath);
        console.log('');
        console.log('');

        axios.put(dataPath, postObject)
            .then(function (response) {

                console.log('');
                console.log('');
                console.log('neAdmin neAdminRoutes:  put successful');
                console.log(response);
                console.log('');
                console.log('');

                var redirectPath;
                if (req.body.limit){
                    if (req.body.batch){
                        if (req.body.token){
                            redirectPath = '/admin/' + req.body.data + "?limit=" + req.body.limit + "&batch=" + req.body.batch + "&token=" + req.body.token;
                        }
                        else {
                            redirectPath = '/admin/' + req.body.data + '?message=' + " updated" + "&limit=" + req.body.limit + "&batch=" + req.body.batch;
                        }
                    }
                    else{
                        redirectPath = '/admin/' + req.body.data + '?message=' + " updated" + "&limit=" + req.body.limit;
                    }
                }
                else{
                    redirectPath = '/admin/' + req.body.data + '?message=' + " updated to ";
                }
                return res.redirect(redirectPath);

            })
            .catch(function (response) {

                console.log('');
                console.log('');
                console.log('neAdmin neAdminRoutes:  put not successful');
                console.log(response);
                console.log('');
                console.log('');

                var redirectPath = '/admin/' + req.body.data + '?message=' + "Error updating ";
                return res.redirect(redirectPath);
            });
    });






 */