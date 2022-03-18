const express = require("express");
const routerApi = require(".");
const routes = express.Router();
const productSchema = require("../models/buys");

/* POST crear una serie
Endpoint: http://localhost:3000/api/v1/products/product */
routes.post("/shopping", (req, res) => {
    const product = productSchema(req.body);
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/* GET consultar todas las series
Endpoint: http://localhost:3000/api/v1/products */
routes.get("/", (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/* GET La información de la serie por su id
Endpoint: http://localhost:3000/api/v1/products/parametro */
routes.get("/:buysId", (req, res) => {
    const { buysId } = req.params;
    productSchema
        .findById(buysId)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/* PUT  modificar una serie
Endpoint: http://localhost:3000/api/v1/products/parametro */
routes.put("/:buysId", (req, res) => {
    const { buysId } = req.params;
    const {
        language,
        name,
        awards = ({ cantAwards, nameAwards }),
        info = ({ genre, general }),


    } = req.body;

    productSchema
        .updateOne({ _id: buysId }, {
            $set: {
                language,
                name,
                awards,
                info


            }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/* DELETE  */
routes.delete("/:buysId", (req, res) => {
    const { buysId } = req.params;
    productSchema
        .deleteOne({ _id: buysId })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/* Consultar por director */
routes.get("/otra/:name", (req, res) => {
    const { name } = req.params
    productSchema
        .find({ 'info.general.director': name })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/* Listar las Series por numeros de temporadas */

routes.get("/filter/:numero", (req, res) => {
    const { numero } = req.params
    productSchema
        .find({
            'info.general.numSeasons': parseInt(numero)
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = routes;