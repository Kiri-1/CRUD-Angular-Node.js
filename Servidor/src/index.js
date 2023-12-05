const cors = require('cors');
const express = require('express');
const app = express();

const ruta = require('./rutas/rutas');
const tarea = require('./rutas/tareas');
const bodyParser = require('body-parser'); // Importa body-parser

/* trae el puerto 3000 si el del sistema esta ocupado */
app.set('puerto', process.env.PORT || 3000);

/* renderizar html */
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

/* middlewares */
app.use(cors());
app.use(bodyParser.json()); // Usa body-parser para manejar JSON
app.use(bodyParser.urlencoded({ extended: true })); 

/* rutas */
app.use(ruta);
app.use('/api', tarea);

app.listen(app.get('puerto'), () => {
    console.log('el puerto es', app.get('puerto'));
})