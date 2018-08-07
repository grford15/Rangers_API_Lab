const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('/mongodb://localhost:27107', function(err, client){


  server.listen(3000, function(){
    console.log('Listening on port 3000');
  });
})
