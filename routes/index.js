const express = require("express");
const productsRouter = require("./buys.routes"); // chemin du ficher dans ce cas le dossier routes

function routerApi(app) {
    const router = express.Router();
    /* Parte del endpoint estático: http://localhost:3000/api/v1 */
    app.use("/api/v1", router);
    /* Endpoint: http://localhost:3000/api/v1/products  c'est la partie dynamique*/
    router.use("/buys", productsRouter);
}

module.exports = routerApi;