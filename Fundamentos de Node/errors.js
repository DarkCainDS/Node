function anotherFunction(){
    breaking();
}
function breaking(){
    return 3+ z;
}

function breakAsync(){
    setTimeout(() => {
        try{
            breaking();
        }catch(err){
            console.error(err.message)
        }
       
    },5500)
}


try{
    breakAsync();
}catch(err){
    console.log(err.message);
    console.error('its breaking');
    console.log('what we gonna do')
}
