const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('../web/public'));
server.use(express.urlencoded({ extended: true }))

nunjucks.configure('../web', { express: server });

server.get('/', (req, res) => {
    res.render('index.html');
});

server.listen(8080);
