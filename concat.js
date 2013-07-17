    var splitMod = require('split');
    var through = require('through');
    var concat = require('concat-stream');

    			var c = concat(function(buf2){
    				//console.log(buf2.toString().split("").reverse().join(""));
    				t.queue(buf2.toString().split("").reverse().join(""));
    			});
    process.stdin
    	.pipe(
    		through(function(buf){
    			t = this;
    			//console.log(buf.toString());

    			c.write(buf);
    			
    		},
    		function(){
    			c.end();
    			this.queue('\n');
    		}
    		)
    	)
    	.pipe(process.stdout)
    ;