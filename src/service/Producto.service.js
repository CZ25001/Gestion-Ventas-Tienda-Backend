const Producto = require('../models/producto.model');

exports.crearProducto = async (dataProducto) => {
  const nuevoProducto = new Producto(dataProducto);
  return await nuevoProducto.save();
};

exports.obtenerProductos = async () => {
  // .populate() reemplaza el ID del proveedor con la información completa del proveedor
  return await Producto.find().populate('proveedor_id');
};