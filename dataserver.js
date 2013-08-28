var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});
var WebSocket = require('ws'), ws ;

var sys = require('util')
var exec = require('child_process').exec;
var dataS = new String();

wss.on('connection', function(wsi) {
   ws = wsi;
   sendData();
});
    

function sleep() {
   setTimeout(sendData,2000);
}

function getData(error, stdout, stderr) {
   dataS = stdout;
}

function sendData() {
    exec("tail -1 /tmp/op | cut -f3 -d ':'",getData);
    dataS1=dataS.substring(0,dataS.length-1);
    console.log(dataS1);
    ws.send(dataS1);
    sleep();
}
