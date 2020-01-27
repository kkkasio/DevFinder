const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./webSocket');

const app = express();
const server = http.Server(app);

mongoose.set('useCreateIndex', true);

setupWebSocket(server);

mongoose.connect(
  'mongodb+srv://kasio:88222547@devfinder-vqqf3.mongodb.net/devfinder?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
