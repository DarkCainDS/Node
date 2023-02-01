const http = require('http')

const router = (req,res) => {
    
    //request y response parametros de esta funcion
    console.log('New Petition');
    console.log(req.url);
    
    switch (req.url){
        case '/hola':
            res.write('Hi, How are you?');
            res.end();
            break;
        default:
            res.write('Error 404: Page not FOund');
            res.end();
    }
    /*
    res.writeHead(201, { 'content-Type': 'text/plain'})
    //escribir respuest al usuario
    res.write('Hi iam using http in node')
    res.end();
    */
};
http.createServer(router).listen(3000);



console.log("listen http port 3000")

