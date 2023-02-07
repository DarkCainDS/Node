const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db');
const socket = require('./socket');


db('mongodb+srv://DarkCainDS:<password>@cursonode.1wtsmvs.mongodb.net/test')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// app.use(router);

socket.connect(server);
router(app);



app.use('/app', express.static('public'))
app.listen(3000, () => {
    console.log('La app esta funcionando en htttp://localhost:3000');
});
