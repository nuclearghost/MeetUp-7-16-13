var http = require('http');
var through = require('through');

var server = http.createServer(function(req, res){
	if (req.method === 'POST') {
		req
		.pipe(through(function(buf){
			var sUP = buf.toString().toUpperCase();

			console.log(sUP);

			this.queue(sUP);
		}, function(){ res.end(); }))
		.pipe(res);
	}
});
server.listen(8000);