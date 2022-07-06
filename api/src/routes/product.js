const { Router } = require('express');
const { Product, User } = require("../db");
const { created, infoDb, filterRubro } = require('../utils/product');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get("/product", async (req, res) => {    
    let pro = await infoDb()
    const {title} = req.query
    if (title) {
      if(pro.length > 0){
      const filterDb = pro.filter(el => el.title.toUpperCase().includes(title.toUpperCase()))
      filterDb.length ?
        res.status(200).json(filterDb) :
        res.status(404).json('No se encuentra su pais')
      }
    } else {
        let asc = pro.sort((a, b)=>{
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        })
      return res.json(asc)
    } 
})

router.post("/product", async (req, res) => {
    const {
        title,
        precio,
        image,
        rubro,
        codigo,
        descripcion,
        name,        
    } = req.body

    let product = created(req.body)
      
  
      return res.send(product);
})

router.get("/get-rubro", async (req, res)=>{
    let prueba = await getRubro()
    return res.send(prueba)
})

router.get("/product/:rubro", async (req, res)=>{
    let pro = await infoDb()
    let { rubro }=req.params
    if(rubro ==="All"){
      return res.send(pro)
    }else{
      let filtro = pro.filter(el=> el.rubro.toLowerCase().includes(rubro.toLowerCase()))
     return res.send(filtro)
    }
  })



module.exports = router;