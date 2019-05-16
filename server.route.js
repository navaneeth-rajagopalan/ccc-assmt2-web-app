var express = require('express');
var router = express.Router();
var couchDB_address = require("./config/couch_db_ip_address.json");
var request = require("request")

router.get('/api/anger-drug/angryVals', function (req, response) {
    console.log('angryVals - Start');
    var couchDB_URL = "http://" + couchDB_address.address + ":5984/ccc_a2_tweets/_design/angry_count/_view/angryval?reduce=true&group=true"
    console.log(couchDB_URL)
    request(couchDB_URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(res.body)
        response.json(res.body)
    });
});

router.get('/api/anger-drug/totalVals', function (req, response) {
    console.log('totalVals - Start');
    var couchDB_URL = "http://" + couchDB_address.address + ":5984/ccc_a2_tweets/_design/count_suburb/_view/suburb_count?reduce=true&group=true"
    console.log(couchDB_URL)
    request(couchDB_URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(res.body)
        response.json(res.body)
    });
});

router.get('/api/anger-drug/aurinDrugCasesVals', function (req, response) {
    console.log('aurinDrugCasesVals- Start');
    var couchDB_URL = "http://" + couchDB_address.address + ":5984/ccc_a2_tweets/_design/drug_count/_view/drug_count"
    console.log(couchDB_URL)
    request(couchDB_URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(res.body)
        response.json(res.body)
    });
});

router.get('/api/anger-drug/aurinPopulationVals', function (req, response) {
    console.log('aurinPopulationVals - Start');
    var couchDB_URL = "http://" + couchDB_address.address + ":5984/ccc_a2_tweets/_design/pop_count/_view/pop_count?reduce=true&group=true"
    console.log(couchDB_URL)
    request(couchDB_URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(res.body)
        response.json(res.body)
    });
});

router.get('*', function(req, res, next) {
    res.sendFile(__dirname + "/dist/web-app/index.html");
});

module.exports = router;
