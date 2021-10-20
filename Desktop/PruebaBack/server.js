import Express from 'express';
import { MongoClient, ObjectId} from 'mongodb';
import cors from 'cors';

const stringConexion = 
'mongodb+srv://admin:admin123@proyectokomuyaclub5.m7d2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let conexion;

const app = Express();
app.use(cors());

app.use(Express.urlencoded({extended:false}));
app.use(Express.json());


/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
}); */

app.get('/productos', (req, res) => {
    console.log("Alguien hizo get en la ruta /productos");
    conexion.collection('productos').find({}).limit(50).toArray((err, result)=>{
        if(err){
            res.status(500).send("Error consultando los vehiculos");

        } else {
            res.json(result);
        }
    });
});

app.post('/productos/nuevo', (req, res) => {
    const datosProducto = req.body;
    console.log('llaves :', Object.keys(datosProducto));
    try{
        if(
           /*  Object.keys(datosProducto).includes('id')  */
         Object.keys(datosProducto).includes('descripcion')
        && Object.keys(datosProducto).includes('valorUnitario')
        && Object.keys(datosProducto).includes('estado')
        ) {
            conexion.collection('productos').insertOne(datosProducto, (err, result) => {
                if (err) {
                    console.error(err);
                    res.sendStatus(500);
                } else {
                    console.log(result);
                    res.sendStatus(200);
                }
            });
        } else {
            res.sendStatus(500);
        }
    } catch {
        res.sendStatus(500);
    }
});

app.patch('/productos/editar', (req, res) => {
    const edicion = req.body;
    console.log(edicion);
    const filtroProducto = { _id: new ObjectId(edicion._id)};
    delete edicion._id;
    const operacion = {
        $set:edicion,
    };
    conexion.collection('productos').findOneAndUpdate(filtroProducto, operacion, {upsert:true}, (err, result)=>{
        if (err) {
            console.error("Error actualizando el producto", err);
            res.sendStatus(500);
        } else {
            console.log("Actualizado con exito", result);
            res.sendStatus(200);
        }
        
    })
});

app.delete('/productos/eliminar', (req, res) => {
    const filtroProducto = { _id: new ObjectId(req.body._id)};
    conexion.collection('productos').deleteOne(filtroProducto, (err, result) => {
        if (err) {
            console.error(err);
            red.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })

});

const main = () =>{
    client.connect((err, db)=>{
        if(err){
            console.error('Error conectando a la base de datos')
        }
        conexion = db.db('komuya');
        console.log('Conexion exitosa');
        return app.listen(5000, () => {
            console.log('Escuchando puerto 5000');
        });
    });
};

main();
