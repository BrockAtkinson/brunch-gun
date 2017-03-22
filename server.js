console.log("If modules not found, run `npm install` in /example folder!"); // git subtree push -P examples heroku master // OR // git subtree split -P examples master && git push heroku [['HASH']]:master --force
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8080;

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

var Gun = require('gun');
var gun = Gun({
  file: 'data/app.json',
  web: server
});

var thoughts = gun.get('thoughts');

thoughts.map().on(function(thought, id) {
  console.log('thought:', thought, '(' + id + ')');
});

app.use(Gun.serve);
app.use(express.static(__dirname));
server.listen(port);

console.log('Server started on port ' + port + ' with /gun');
