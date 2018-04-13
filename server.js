var fallback = require('express-history-api-fallback');
var express = require('express');
var server = express();
var port = process.env.port || 3030;

const dir = __dirname + '/docs/'
server.use(express.static(dir));
server.use(fallback('index.html', {root: dir}));
server.listen(port, '0.0.0.0');
console.log(`
______     __     __         ______     __  __     __   
/\  == \   /\ \   /\ \       /\  __ \   /\ \/\ \   /\ \  
\ \  __<   \ \ \  \ \ \____  \ \ \/\ \  \ \ \_\ \  \ \ \ 
 \ \_____\  \ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_\
  \/_____/   \/_/   \/_____/   \/_____/   \/_____/   \/_/

 `)
console.log('listening on http://localhost:' + port);