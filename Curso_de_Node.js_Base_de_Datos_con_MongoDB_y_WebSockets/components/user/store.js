const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return  myUser.save();
}
function recordOfUsers(){
    return Model.find();
}
module.exports = {
    add: addUser,
    list: recordOfUsers,
}