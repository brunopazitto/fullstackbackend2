/*primeira coisa que vamos pensar ao criar o modelo */
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    login : String,
    name : String,
    avatar_url : String,
    company : String,
    public_repos : Number,
    followers : Number,
    bio : String,   /*Alterar o nome para biografia quando gravar no banco*/
    sexo : String,
    experiencia : String,
    linguagem : String
},{
    timestamps : true /*gravar hora da alteração*/
});

module.exports = mongoose.model('User',userSchema);