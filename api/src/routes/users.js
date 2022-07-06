const { Router } = require('express');
const { Product, User } = require("../db");
const { create, search, infoUser } = require('../utils/user');


const ProductRoutes = require('./product');



const router = Router();

router.get("/user", async (req, res)=>{
    let{email} = req.params
    if(!email){
        let users = await infoUser()
        return res.send(users)
    }else{
        let user = await infoUser(email)
        return res.send(user)
    }
})


router.post("/user", async (req, res)=>{
    let {name, email, contraseña}= req.body
    let user = await search({email: email})
    if(!user){
        const usuario = await create(name, email, contraseña)
     return res.send(usuario)
    } else{
        return res.send("Ya existe un usuario con este email")
    }
})


module.exports = router;