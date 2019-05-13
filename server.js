const express = require("express");
const http = require("http");
const path = require("path");
const fs = require('fs')
const app = express();
const routes = require('./server.route');
const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/web-app'));
app.use('/*', (req, res) => res.sendFile(path.join(__dirname)));
app.use('/', routes);

app.listen(port, function(){
    console.log(`Web App is running on port ${port}`);
})