var fs = require('fs');


fs.readFile(process.argv[2], 'utf-8', 
    function(pp, papa) {
        if (pp){
            console.log("0");
        } else {
            console.log(papa.split('\n').length-1);
        }
    }
);