const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  empresa: { type: String, required: true },
  contactoNombre: { type: String, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  categoriasSurtidas: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Proveedor', proveedorSchema);