const express = require('express');
const app = express();

app.use(express.json());

// Registro de endpoints
app.use('/api/proveedores', require('./routes/proveedor.routes'));
app.use('/api/clientes', require('./routes/cliente.routes'));
app.use('/api/empleados', require('./routes/empleado.routes'));
app.use('/api/productos', require('./routes/producto.routes'));
app.use('/api/inventario', require('./routes/inventario.routes'));
app.use('/api/ventas', require('./routes/venta.routes'));

module.exports = app;