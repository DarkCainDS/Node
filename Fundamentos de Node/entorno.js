let name = process.env.name || 'incognito'

console.log("names " + name)
console.log("Hi Hackerman")

function Hello(Greet){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Saludos Mascones "+ Greet)
            resolve();
        }, 2000);
    })
}
Hello("Hi Bro")
    .then((Greet) => {
        console.log('End Process')
    })