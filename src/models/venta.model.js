const mongoose = require('mongoose');

// Subdocumento Embebido: DetalleVenta
const detalleVentaSchema = new mongoose.Schema({
  producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  nombreProducto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precioUnitario: { type: Number, required: true },
  subtotal: { type: Number, required: true }
}, { _id: false });

// Colección Principal: Ventas
const ventaSchema = new mongoose.Schema({
  fecha: { type: Date, default: Date.now },
  empleado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Empleado', required: true },
  cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', default: null },
  total: { type: Number, required: true },
  metodoPago: { type: String, required: true },
  detalles: [detalleVentaSchema]
}, { timestamps: true });

module.exports = mongoose.model('Venta', ventaSchema);