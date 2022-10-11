// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/dist/ui-cliente'));

// app.get('/*', function(req, res) {
//   res.sendFile(__dirname + '/dist/ui-cliente/index.html');
// });

// //app.listen(4200);
// app.listen(process.env.PORT || 4200) ;
// No Heroku sempre terá uma variavel de ambiente "PORT".

// comando para subir o servidor => node server.js

const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port);