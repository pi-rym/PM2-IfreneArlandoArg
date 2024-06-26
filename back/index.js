// index.js
const { app, express } = require("./src/server");
const movieRoutes = require('./src/routes/movieRoutes');

const morgan = require("morgan");
const cors = require("cors");

const conDb = require("./src/config/conDb");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// middleware propio...
app.use((req, res, next) => {
    console.log("Pasando por middleware personalizado...");
    next();
});

// Configurar las rutas antes de iniciar el servidor
app.use('/movies', movieRoutes);

conDb().then((res) => {

    app.listen(3000, () => {
        console.log(`Servidor escuchando en el puerto 3000`);
    });
    
});


