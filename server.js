'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

var expressApp = express();

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, '/dist/');

const server = express()
  //.use((req, res) => res.sendFile(INDEX) )
    .use(express.static(__dirname + '/dist/'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);


//expressApp.use(express.static(__dirname + '/../public/dist/'));