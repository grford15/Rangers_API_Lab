const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {

  if(err){
    console.log(err);
    return;
  }
  const db = client.db("rangersdb");

  console.log("Connected to the database");

  //CREATE A PLAYER
  server.post('/rangers/players', function(req, res){
    const playersCollection = db.collection('players');
    const playerToSave = req.body;
    playersCollection.save(playerToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log('saved to database');
      res.status(201);
      res.json(result.ops[0]);
    })
  })

  // READ ALL PLAYERS
  server.get('/rangers/players', function(req, res){
    const playersCollection = db.collection('players');
    playersCollection.find().toArray(function(err, allPlayers){
      if(err){
        res.status(500);
        res.send();
      }
      res.json(allPlayers);
    })
  })

  // UPDATE A PLAYER
  server.put('/rangers/players/:id', function(req, res){
    const playersCollection = db.collection('players');
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedPlayer = req.body;
    playersCollection.update(filterObject, updatedPlayer, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }
      res.status(204);
      res.send();
    });
  });

  // DELETE ALL PLAYERS
  server.delete('/rangers/players/', function(req, res){
    const filterObject = {}
    const playersCollection = db.collection('players');
    playersCollection.deleteMany(filterObject, function(err, result){
      if(err){
        res.status(500);
        res.send()
      }
      res.status(204);
      res.send();
    })
  })

  // DELETE ONE PLAYER
  


  // FIND ONE PLAYER

  server.listen(3000, function(){
    console.log('Listening on port 3000');
  });
})
