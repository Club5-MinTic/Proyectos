//Se encarga de la conexión con la base de datos.
import { MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({path:'./.env'});

const stringConexion = process.env.DB_URL;

const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let conexion;

const conectarBD = (callback) => {
    client.connect((err, db)=>{
        if(err){
            console.error('Error conectando a la base de datos')
        }
        conexion = db.db('komuya');
        console.log('Conexion exitosa');
        return callback();
    });
};

const getDB = () => {
    return conexion;
}
export { conectarBD, getDB };