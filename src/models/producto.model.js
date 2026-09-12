import mongoose from 'mongoose';

const EspecificacionSchema = new mongoose.Schema({
  categoria: { type: String, required: true },
  unidadMedida: { type: String, required: true },
  marca: { type: String, required: true }
});

const ProductoSchema = new mongoose.Schema({
  codigoBarras: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  precioVenta: { type: Number, required: true },
  especificaciones: EspecificacionSchema
}, { timestamps: true });

export default mongoose.model('Producto', ProductoSchema);