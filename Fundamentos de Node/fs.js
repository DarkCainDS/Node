const fs = require('fs')

function read(route,cb){
    fs.readFile(route, (err,data) => {
        cb(data.toString());
    });
}
function write(route,content,cb){
    fs.writeFile(route,content, (err) => {
        if(err){
            console.log('Ha habido un error');
        }else{
            console.log('Se ha escrito con exito');
        }
    });
}
function erase(route,cb){
    fs.unlink(route,cb);
}

// erase(__dirname +'/ConsoleCommands.txt', console.log);
// write(__dirname +'/archivoDePrueba.txt','New File', console.log)
// read(__dirname + '/Nodemon.txt', console.log)