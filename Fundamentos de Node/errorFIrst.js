function asincrona(callback){
    setTimeout(() => {
        try{    
            let a = 3 + z;
            callback(null,)
        }catch(e){
            callback(e,null);
        }
    },1500);
}
try{
    asincrona((err,dato) => {
        if(err){
            
            console.error('We have a Error');
            console.error(err);
            return false;
            
           // throw err; Not Working
        }
        console.log('everything is fine')
    });
}catch(e){
    console.error('We CAtch a Error')
    console.error(e)
}
