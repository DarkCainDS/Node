const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt')
/*
readableStream.setEncoding('utf-8')
readableStream.on('data', (chunk) => {
    console.log(chunk); //.toString()
    data += chunk;
});
readableStream.on('end', () => {
    console.log(data);
});

process.stdout.write('Hi-');
process.stdout.write('Dark-');
process.stdout.write('CainDs');
*/
const Transform = stream.Transform;

function Mayus(){
    Transform.call(this)
}
util.inherits(Mayus, Transform);
Mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);