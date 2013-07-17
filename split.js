    var split = require('split');
    var through = require('through');

    var nLine = 1;
    process.stdin
        .pipe(split())
        .pipe(through(function (line) {
        	if (nLine % 2 === 0){
            	this.queue(line.toString().toUpperCase() + '\n');
        	} else {
        		this.queue(line.toString().toLowerCase() + '\n');
        	}
        	nLine = nLine + 1;
        }))
        .pipe(process.stdout)
    ;