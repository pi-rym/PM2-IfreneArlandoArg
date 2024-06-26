require("dotenv").config();

const mongoose = require('mongoose');
//Hacer la conexion (mongoose - mongoDb) a la base de datos en una funcion

//Exportar esta función

const  conDb = async () => {
    //aca haces la conexión a la base de datos usando la url de MongoDb
    try {
        // Conexión a la base de datos usando la URL de MongoDB desde el archivo .env
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error al conectar a MongoDB: ${err.message}`);
        process.exit(1); // Salir del proceso con error
    }
}

module.exports = conDb;