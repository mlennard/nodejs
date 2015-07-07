var fs = require('fs');
var path = require("path");


module.exports = function( dir, ext, callback ){
    var arrayFiles = new Array();
    fs.readdir(dir, 
        function(err, list){
            if(err){
                return callback(err);
            } else {
                for(var i = 0; i <list.length; i++){
                    if(path.extname(list[i]).substring(1) === ext){
                        arrayFiles.push(list[i]);
                    }
                    
                }
                return callback(null, arrayFiles);
            }       
            
        }
    
    );
};