const app = require("./src/server");
const movieRoutes = require('./src/routes/movieRoutes');

// Configurar las rutas antes de iniciar el servidor
app.use('/movies', movieRoutes);

app.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto 3000`);
});
