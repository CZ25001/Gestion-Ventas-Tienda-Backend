const mongoose = require('mongoose');

const inventarioMovimientoSchema = new mongoose.Schema({
  producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  tipoMovimiento: { type: String, required: true },
  cantidad: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  motivo: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('InventarioMovimiento', inventarioMovimientoSchema);