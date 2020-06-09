/*importaçaõ dos modelos */
const mongoose = require('mongoose');
const axios = require('axios');
const User = mongoose.model('User');

module.exports = {

//list por id

async listByID(req,res){
    const userID = await req.params.id;
    const result = await User.findById(userID);
    res.json(result);
},


async login(req,res){
    const username = await req.params.username;
    const validation = await User.find({login : username});
    if(validation.length === 0){
        res.json({'msg': 0})
    }else{
        res.json({'msg' : 1})
    }
},

    async persistUser(req,res){
        const payload = await User.create(req.body);
        //User.create(payload)
        res.json(payload);
    },
    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },
    async getUserGit(req,res){
        const response = await axios.get('https://api.github.com/users/brunopazitto');
        res.json(response.data);
    },



/*Gravar (persistir) no banco somente as colunas que selecionamos não todas as que vem do git*/
    async GitUser(req,res){
        const {userGit,sexo,linguagem,experiencia} = req.body;
        const response = await axios.get(`https://api.github.com/users/${userGit}`);
        const {login,name,avatar_url,company,public_repos,followers,bio} = response.data;
        const payload = await User.create({login
            ,name
            ,avatar_url
            ,company
            ,public_repos
            ,followers
            ,bio
            ,sexo
            ,linguagem
            ,experiencia
        })
        res.json(payload)
    },
/*Gravar (persistir) no banco usuáiro do git se criado antes de 2020*/
    async DataGit(req,res){
        const response = await axios.get('https://api.github.com/users/brunopazitto');
        const{login,created_at} = response.data;
        const created_at_date = new DataGit(Date.parse(created_at));

        if(created_at_date.getFullYear() < 2020){
            res.json({
                "msg" : "Usuário anteigo"
            })
            }else{
                res.json({"msg" : "Usuário muito novo"})
            }
        }
}
/*Exercicios*/
/*Gravar (persistir) no banco somente as colunas que selecionamos não todas as que vem do git*/
/*Gravar (persistir) no banco usuáiro do git se criado antes de 2020*/
/*Nova backend 1: latitute, longitude, 2: latitude, longitude e calcular a distancia*/