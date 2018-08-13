var express = require('express');

const api = require('./api'); 

const candy = require('./candy');

var app = express();
app.listen(8000);

app.use('/', api);
app.use('/', candy);

app.use(express.static('public'));