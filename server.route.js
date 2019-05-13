var express = require('express');
var router = express.Router();
var couchDB_address = require("./config/couch_db_ip_address.json");
var request = require("request")

router.get('/api/anger-drug/co-relation', function (req, response) {
    console.log('getCoRelationData User - Start');
    var couchDB_URL = "http://" + couchDB_address.address + ":5984/ccc_a2/fc494be22f81a3914f7e621cde00067b"
    request(couchDB_URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(res.body.data)
        response.json(res.body.data)
    });
});

router.get('*', function(req, res, next) {
    res.sendFile(__dirname + "/dist/web-app/index.html");
});

module.exports = router;
