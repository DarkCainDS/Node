let z = 0;
let intervalo = setInterval(() => {
    console.log("Hi Bro")
    if(z === 3){
        clearInterval(intervalo)
    }
    z++;
}, 1000);

setImmediate(() => {
    console.log("Here is inmediate")
    console.log(__dirname)
    console.log(__filename)
})