const express = require('express');
const routerApi = require('./Routes/index');
const port = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});


app.get("/NewRoute", (req, res) =>{
    res.send("Hi, this is a new endPoint");
});


app.get("/Category/:categoryId/Products/:productId", (req, res) =>{
    const { categoryId, productId} = req.params;
    res.json({
        categoryId,
        productId
    })
});

app.get("/users", (req, res) =>{
    const { limit, offset} = req.query;
    if(limit || offset){
        res.json({limit,offset})
    }else{
        res.send('We dont have parameters')
    }
  });
  
app.listen(port, () =>{
  console.log("The port is running in: " + port);
});

routerApi(app);