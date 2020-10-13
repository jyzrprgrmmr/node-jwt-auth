const { Sequelize } = require('sequelize');
const User = require('../models/User');
const {Op} = require('sequelize');
const jwtAuth = require('../config/jwtAuth');
const bcrypt = require('bcrypt');

const UserController = ()=> {

    const create = async(req,res) => {
        try {
            const user = await User.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                role: req.body.role,
                email: req.body.email,
                password: req.body.password,
            });
            return res. send({message: 'New user created!'});
            
        }catch(err){
            res.send(err);
        }
    }

    const login = (req,res) => {
       const {email} = req.body;
       const password = req.body.password;

       User.findOne({
           where: {email}
       }).then((user) => {

        if(user){
            bcrypt.compare( password,user.password , (err,resp) =>{
                if(resp){
                var token = jwtAuth.jwtSign(email);
                res.send({token , user});
                }else{
                    res.send(401)
                }  
            })
          
        }else{
            res.send(401);
        }
       });
    }

    return {
        login,
        create
    }

}

module.exports = UserController;