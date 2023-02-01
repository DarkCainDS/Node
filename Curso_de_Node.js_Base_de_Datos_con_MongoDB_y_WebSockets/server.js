const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
//const router = require('./components/message/networks');
const router = require('./network/routes');
const db = require('./db');
db('mongodb+srv://DarkCainDS:<password>@cursonode.1wtsmvs.mongodb.net/test')
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// app.use(router);

router(app);



app.use('/app', express.static('public'))
app.listen(3000);
console.log('La app esta funcionando en htttp://localhost:3000');