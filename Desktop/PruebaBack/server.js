import Express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import rutasProductos from './views/productos/rutas.js';
import rutasVentas from './views/ventas/rutas.js';
import rutasUsuarios from './views/usuarios/rutas.js';

dotenv.config({path:'./.env'});

const app = Express();
app.use(cors());

app.use(Express.urlencoded({extended:false}));
app.use(Express.json());

app.use(rutasUsuarios);
app.use(rutasProductos);
app.use(rutasVentas);


const main = () =>{
    return app.listen(process.env.PORT, () => {
        console.log(`Escuchando puerto ${process.env.PORT}`);
    });
};

conectarBD(main);

