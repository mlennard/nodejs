var net = require('net');

var server = net.createServer(function (socket) {
  socket.end(getDateFormatted()+"\n");
});
server.listen(process.argv[2]);


function getDateFormatted(){
    var date = new Date();
    return date.getFullYear() + "-" + (Number(date.getMonth() + 1)<10?"0"+Number(date.getMonth() + 1):Number(date.getMonth() + 1))+ "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
}

