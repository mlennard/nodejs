var myMod = require("./filteredLsModule.js");

var dir = process.argv[2];
var ext = process.argv[3];

myMod(dir, ext, 
    function(err, data){
        if(err){
            console.log("0");
        } else {
            for(var i = 0; i <data.length; i++){
                console.log(data[i]);
            }
        }
        
    }


);