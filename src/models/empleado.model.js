const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  rol: { 
    type: String, 
    enum: ['CAJERO', 'ADMINISTRADOR', 'INVENTARIADOR'], 
    required: true 
  },
  salario: { type: Number, required: true },
  activo: { type: Boolean, default: true },
  fechaContratacion: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Empleado', empleadoSchema);