const { User, Post, Feedback } = require('../db');


function verifyEmail(email){
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(email)
    return esValido
}

async function infoUser(email){
    if(email){
        let oneUser = await User.findOne({
            where:{email: email}
        })
        return oneUser
    }else{
        let allUser = await User.findAll()
        return allUser
    }

}

async function create (name, email, contraseña){
    let Creado = await User.findOrCreate({
        where:{
         name: name,
        email: email,
        contraseña: contraseña,
          }
       })
       return Creado
}

async function search (body){
   let user = await User.findOne({
       where: body
   })
   return user
}

module.exports={
    infoUser,
    create,
    search
}