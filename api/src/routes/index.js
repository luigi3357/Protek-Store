const { Router } = require('express');
const { Product, User } = require("../db");


const ProductRoutes = require('./product');
const UserRoutes = require('./users');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", ProductRoutes)
router.use("/", UserRoutes)



module.exports = router;
