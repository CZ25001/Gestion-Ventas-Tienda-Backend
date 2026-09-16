const express = require('express');
const productoRoutes = require('./routes/producto.routes');

const app = express();

app.use(express.json());

// Inyección de rutas semánticas
app.use('/api/productos', productoRoutes);

module.exports = app;