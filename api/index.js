
const server = require('./src/app.js');//llamo al archivo app.js para poder levantar el server
const { conection } = require('./src/db.js');
const product = require('./src/data/data');
const { created } = require('./src/utils/product.js');
const { Product, User } = require("./src/db");


const {
  PORT
} = process.env

// Syncing all the models at once.
conection.sync({ force: true }).then(async () => {
  const own = User.findOrCreate({
    where:{
      name: "Owner",
      email: "admin@email.com",
      contraseña: "Owner",
      Owner: true,
      Admin: true
    }    
})
  const map = product.map(e => created(e))

    server.listen(PORT, () => {

      console.log(`listening at ${PORT}`); // eslint-disable-line no-console
    });
  });  