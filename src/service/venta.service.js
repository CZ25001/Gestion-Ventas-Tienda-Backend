const Venta = require('../models/venta.model');
require('../models/empleado.model');
require('../models/cliente.model');

exports.crearVenta = async (data) => await new Venta(data).save();
exports.obtenerVentas = async () => {
  return await Venta.find()
    .populate('empleado_id')
    .populate('cliente_id');
};

exports.modificarVenta = async (id, dataVenta) => {
  return await Venta.findByIdAndUpdate(id, dataVenta, { new: true })
    .populate('empleado_id')
    .populate('cliente_id');
};

exports.removerVenta = async (id) => {
  return await Venta.findByIdAndDelete(id);
};