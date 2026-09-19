const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String },
  email: { type: String },
  puntosAcumulados: { type: Number, default: 0 },
  fechaRegistro: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);