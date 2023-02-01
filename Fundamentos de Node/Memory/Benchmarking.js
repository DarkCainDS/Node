console.time('everything');
let sum = 0;
console.time('bucle');
for(let z = 0; z < 1000000; z++){
    sum += z;
}
console.timeEnd('bucle');

let sum2 = 0;
console.time('bucle2');
for(let z = 0; z < 1000000; z++){
    sum += z;
}
console.timeEnd('bucle2');

console.time('asincrona');
asincrona()
.then(() => {
    console.timeEnd('asincrona');
});


console.timeEnd('everything');

function asincrona(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('End async process')
            resolve();
        },1500)
    })
}