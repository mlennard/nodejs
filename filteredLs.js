var fs = require('fs');
var path = require("path");

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, 
    function(err, list){
        if(err){
            console.log("Error reading path " + dir );
        } else {
            for(var i = 0; i <list.length; i++){
                if(path.extname(list[i]).substring(1) === ext){
                    console.log(list[i]);
                }
                
            }
        }       
        
    }

);