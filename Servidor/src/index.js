
const express = require('express');
const conectarDB = require('./config/db');

/* crear servidor  */
const app = express();
/* conectando la BD */
conectarDB();
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});