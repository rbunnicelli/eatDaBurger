var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/burgers', function(req, res) {
    burger.create([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect("/");
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = "id = " + req.params.id;
    
    burger.update({
        devoured: true
        //req.params.devoured//
    }, condition, function(data) {
        res.redirect("/");
    });
});

module.exports = router;