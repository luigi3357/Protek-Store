const { User, Post, Feedback } = require('../db');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function hash(password){
    let hash = await bcrypt.hash(password, 10)
    return hash
}

async function compare (password, user){
    let checkpass = await bcrypt.compare(password, user.contraseña)
    return checkpass
 }

function verifyEmail(email) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(email)
    return esValido
}

async function infoUser(email) {
    if (email) {
        let oneUser = await User.findOne({
            where: { email: email }
        })
        return oneUser
    } else {
        let allUser = await User.findAll()
        return allUser
    }
}

async function create ( name, lastName, email,hashs, token){
    let Creado = User.findOrCreate({
        where:{
            contraseña: hashs,
            email:email.toLowerCase(),
            name: name, 
            lastName: lastName,
            token: token,
          }
       })
       return Creado
}

async function search(body) {
    let user = await User.findOne({
        where: body
    })
    return user
}
async function generateToken(user) {
    console.log(user.email)
    var u = {
     username: user.email,
     id: user.id
    }
    return await jwt.sign(u, user.password, {
       expiresIn: '10s' // expires in 24 hours
    })
  }
module.exports = {
    infoUser,
    create,
    search,
    hash,
    compare,
    verifyEmail,
    generateToken
}