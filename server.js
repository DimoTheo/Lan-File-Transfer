var net = require('net');
var fs = require('fs');
var buffer = require('buffer');

var server = net.createServer(function(conn) {
    console.log('server connected');

});

var HOST = '127.0.0.1';
var PORT = '9001'
var FILEPATH = __dirname + '/received.txt';

server.listen(PORT, HOST, function() {
    //listening
    console.log('server bound to ' + PORT + '\n');

    server.on('connection', function(conn) {
        console.log('connection made...\n')
    	var fileStream = fs.createWriteStream(FILEPATH);
    	conn.pipe(fileStream);
        console.log("File saved!");
    })
});