const InventarioMovimiento = require('../models/inventario.model');
require('../models/producto.model');

exports.crearMovimiento = async (data) => await new InventarioMovimiento(data).save();
exports.obtenerMovimientos = async () => await InventarioMovimiento.find().populate('producto_id');