const { Router } = require('express');
const { Product, User } = require("../db");
const { create, search, infoUser, verifyEmail, hash, compare, generateToken } = require('../utils/user');



const ProductRoutes = require('./product');



const router = Router();

router.get("/user", async (req, res)=>{
    let{email} = req.body
    if(!email){
        let users = await infoUser()
        return res.send(users)
    }else{
        let user = await infoUser(email)
        return res.send(user)
    }
})

router.post('/login', async ( req, res ) =>{
    const {password, email}= req.body
    let user = await search({ email: email })
    if(user){
        let contraseña = await compare(password,user);
        if(contraseña ===true){
            let token = await generateToken({email:email, password: password})
            return res.status(200).json({user:user,token:token})
        }else{
            return res.status(401).send('la contraseña es incorrecta')
        }
    }else{
        return res.status(401).send('El correo no esta registrado')
    }
})

router.post("/register", async (req, res) => {
    let { name, lastName, email, password } = req.body   
    let user = await search({ email: email })
    
    if (!user) {
        try {
            let verify = verifyEmail(email.toLowerCase())
            if (verify === true) {
                let hashs = await hash(password)
                
                let token = await generateToken({
                    email:email,
                    name:name,
                    lastName,
                    password: hashs
                });

                let result = await create(name, lastName, email, hashs, token);
                
                return res.status(201).json(result);
            }
            if (verify === false) {
                return res.status(404).send("Email invalido")
            }           
        } catch (error) {
            return res.status(404).send(error)
        }
    } else {
        return res.status(404).send("El correo ya tiene un perfil restablezca la contraseña")
    }
})


module.exports = router;