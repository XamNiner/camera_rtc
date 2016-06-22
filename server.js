'use strict';

var express = require("express");
var path = require("path");
var socketio = require("socket.io");
var http = require("http");

//server utilizing express
var app = express();
//set the main directory
app.use(express.static(__dirname + "/dist"));

//initialize the server
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("App is running on the port: ", port);
})