var host = 'http://localhost:3030';
var socket = io(host);
var client = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket));
var game = client.service('games');

game.on('created', function(x) {
  console.log(x);
});
