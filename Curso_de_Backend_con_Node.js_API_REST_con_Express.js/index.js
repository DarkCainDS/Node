const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/errorHanlder');

const app = express();
const port = 3000;

const cors = require('cors');

const whiteList = ['http://localhost:8080','https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('Unauthorized'))
    }
  }
}
app.use(cors(/*options*/));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('hi, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);



app.listen(port, () => {
  console.log('Mi port' +  port);
});