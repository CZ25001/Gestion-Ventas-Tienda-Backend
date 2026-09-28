const InventarioMovimiento = require('../models/inventario.model');
require('../models/producto.model');

exports.crearMovimiento = async (data) => await new InventarioMovimiento(data).save();
exports.obtenerMovimientos = async () => await InventarioMovimiento.find().populate('producto_id');

exports.modificarMovimiento = async (id, dataMovimiento) => {
  return await InventarioMovimiento.findByIdAndUpdate(id, dataMovimiento, { new: true }).populate('producto_id');
};

exports.removerMovimiento = async (id) => {
  return await InventarioMovimiento.findByIdAndDelete(id);
};