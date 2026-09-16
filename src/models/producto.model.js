const mongoose = require('mongoose');

// Subdocumento embebido: EspecificacionProducto
const especificacionProductoSchema = new mongoose.Schema({
  categoria: { type: String, required: true },
  unidadMedida: { type: String, required: true },
  marca: { type: String, required: true },
  fechaExpiracion: { type: Date }
}, { _id: false }); // _id: false evita generar IDs innecesarios en objetos embebidos

// Colección principal: Productos
const productoSchema = new mongoose.Schema({
  codigoBarras: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  precioVenta: { type: Number, required: true },
  proveedor_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Proveedor', 
    //required: true 
  },
  especificaciones: { type: especificacionProductoSchema, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Producto', productoSchema);