// const process = require('process');
process.on('beforeExit', () => {
    console.log('Dark, Process is ending')
    /*setTimeout(() => {
        console.log('infinite loop');
    },500)*/
});

process.on('exit', () => {
    console.log('Dark, Process is end');
    setTimeout(() => {
        console.log('this never happen');
    },500)
});

process.on('uncaughtException', (err,origin) => {
    console.error('Wow we missed a error');
    console.error(err);
});

//hi();

console.log('if the error dont appear,this not happen')