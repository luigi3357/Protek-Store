require("dotenv").config();
const { Product, User } = require("../db");

async function infoDb(){
    return await Product.findAll({
        include:{
            model: User,
            attributes:[],            
            through:{
                attributes:[]
            }
        }
    })
}

async function created(product){
    let { title, precio, image, rubro, codigo, descripcion } = product;
     
    const valdidateProduct = await Product.findOne({
        where: {
          title: title.toUpperCase(),
        },
      });
    
      if (!valdidateProduct) {
        const addProduct = await Product.create({
          title: title.toUpperCase(),
          precio: precio,
          image: image,
          rubro: rubro.toString(),
          codigo: codigo,
          descripcion: descripcion
        });
        const userMatch = await User.findAll({
          where: {
            Admin: true,
          },
        });
    
        const resProduct = await addProduct.addUsers(userMatch);
 } 
}

async function getRubro(){
    const info = await infoDb()
    const info2 = info.map(e=> e.rubro)
    
    const unicos = info2.filter((valor, indice) => {
       return info2.indexOf(valor) === indice;
     } );
     
     return unicos  
}
module.exports = { created, infoDb, getRubro }