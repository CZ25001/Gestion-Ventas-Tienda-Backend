const Venta = require('../models/venta.model');
require('../models/empleado.model');
require('../models/cliente.model');

exports.crearVenta = async (data) => await new Venta(data).save();
exports.obtenerVentas = async () => {
  return await Venta.find()
    .populate('empleado_id')
    .populate('cliente_id');
};