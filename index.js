const express = require("express"); // il faut installer npm i express
const { default: mongoose } = require("mongoose"); // il faut installer npm i mongoose
const app = express();
const port = 3000;
require("dotenv").config(); // pour l'utiliser, il faut installer npm i dotenv, ca permet la lecture des fichiers .env
const routerApi = require("./routes");

/* Puerto a ocupar */
app.listen(port, () => console.log("Active port ", port));

/* Crear middleware para que la salida del HTTP muestre un JSON */
app.use(express.json());

/* Conexión con BD mongo */
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("Success connection with mongo"))
    .catch((error) => console.log(error));

/* Pasar parametro de express a la función routerApi de routes */
routerApi(app);