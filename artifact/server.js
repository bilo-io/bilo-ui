var fallback = require('express-history-api-fallback');
var express = require('express');
var server = express();
var port = process.env.port || 3030;


server.use(express.static(__dirname + '/demo/'));
server.use(fallback('index.html', {root:__dirname + '/demo/'}));
server.listen(port, '0.0.0.0');
console.log(`
______     __     __         ______     __  __     __   
/\  == \   /\ \   /\ \       /\  __ \   /\ \/\ \   /\ \  
\ \  __<   \ \ \  \ \ \____  \ \ \/\ \  \ \ \_\ \  \ \ \ 
 \ \_____\  \ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_\
  \/_____/   \/_/   \/_____/   \/_____/   \/_____/   \/_/

 `)
console.log('listening on port: ' + port);