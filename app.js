var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

server.listen(80);


app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

io.on('connection', function (socket) {
    setInterval(() => {
        socket.emit('new', { title: 'Gekuri', date: '16/04/2018', subtitle: "Dernière diffusion du stream" });
    },5000);
});
   