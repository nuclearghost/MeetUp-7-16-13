var fs = require('fs');
var through = require('through');

//var split = require('split');

var tr = through(write);

//tr.write(process.stdin);
//process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

    var split = require('split');
    nLine = 1;
    process.stdin
        .pipe(split())
        .pipe(through(function (line) {
        	this.queue(line.toString());
        	/*
            	if (nLine % 2 === 0){
					this.queue(line.toString().toUpperCase());
				}else {
					this.queue(line.toString().toLowerCase());
				}
				nLine = nLine + 1;
				*/
        	}))
        .pipe(process.stdout)
    ;

function write (buf){
	//this.queue(buf.toString().toUpperCase());
	//this.queue(buf);
	if (nLine % 2 === 0){
		this.queue(buf.toString().toUpperCase());
	}else {
		this.queue(buf.toString().toLowerCase());
	}
	nLine = nLine + 1;
}
/*
function end(){
	this.queue(null);
}
*/
//console.log('beep boop');

//console.log(process.argv[2]);
//fs.createReadStream(process.argv[2]).pipe(process.stdout);

//process.stdin.pipe(process.stdout);

