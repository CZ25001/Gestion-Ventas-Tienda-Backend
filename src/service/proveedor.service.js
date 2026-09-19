const Proveedor = require('../models/proveedor.model');

exports.crearProveedor = async (data) => await new Proveedor(data).save();
exports.obtenerProveedores = async () => await Proveedor.find();