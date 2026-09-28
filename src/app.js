const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: process.env.CLIENT_URL || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-use-cookie']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Registro de endpoints
app.use('/api/proveedores', require('./routes/proveedor.routes'));
app.use('/api/clientes', require('./routes/cliente.routes'));
app.use('/api/empleados', require('./routes/empleado.routes'));
app.use('/api/productos', require('./routes/producto.routes'));
app.use('/api/inventario', require('./routes/inventario.routes'));
app.use('/api/ventas', require('./routes/venta.routes'));
app.use('/api/usuarios', require('./routes/usuario.routes'));

module.exports = app;