var http = require('http');
	http.createServer(function (req, res){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World!\n The time has come to learn Node.js.');
	}).listen(1339, "127.0.0.1");
	console.log('Server be running at http://127.0.0.1:1339/ aka localhost');