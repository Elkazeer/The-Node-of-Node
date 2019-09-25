var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	fs.readFile('headingParaInCss.html', function(err,data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end('No need to pub msg in res.end');
	});
}).listen(5687);
console.log('It works without a hitch. I think WAMP and XAMP will soon be history. At least for me.');
console.log('Q: WHY DOSENT THE CONSOLE MESSAGE APPEAR IN BROWSER CONSOLE?');