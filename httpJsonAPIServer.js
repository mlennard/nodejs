var http = require("http");
var url = require("url");

var server = http.createServer(function (request, response) {
    if(request.method === 'GET'){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var msg;
        var urlObj = url.parse(request.url, true);
        var date = new Date(urlObj.query.iso);
        if(urlObj.pathname === '/api/parsetime'){
            msg = {hour : date.getHours(), minute:date.getMinutes(), second : date.getSeconds()};
        }
        if(urlObj.pathname === '/api/unixtime'){
            msg = {unixtime : date.getTime()};
        }
        
        response.end(JSON.stringify(msg));     
    }
});
server.listen(process.argv[2]);


