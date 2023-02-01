const bcrypt = require('bcrypt');
//import * as bcrypt from 'bcrypt'
const password = '1234Joder!!';

bcrypt.hash(password,5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, (err,res) => {
        console.log(err)
        console.log(res)
    }) ;
});