const express = require('express');
const cors = require('cors');
require('dotenv');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.apiAdenda = '/apiAdenda';
    

        //MIDDLEWARES
        this.middlewares();

        // Parse y lectura de Body
        this.app.use(express.json());

        //DECLARACION DE RUTAS
        this.routes();
    }
    middlewares() {

        //CORS
        this.app.use(cors());

        //SERVIDOR DE CONTENIDO ESTATICO
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiAdenda, require('../routes/adenda'));
     
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en el puerto ', this.port);
        });
    }
}

module.exports = Server;