const Producto = require('../models/producto.model');

exports.crearProducto = async (dataProducto) => {
  const nuevoProducto = new Producto(dataProducto);
  return await nuevoProducto.save();
};

exports.obtenerProductos = async (parametrosQuery = {}, pagina = 1, limite = 10) => {
  const desde = (pagina - 1) * limite;
  const filtros = {};

  if (parametrosQuery.nombre) {
    filtros.nombre = { $regex: parametrosQuery.nombre, $options: 'i' };
  }
  if (parametrosQuery.codigoBarras) {
    filtros.codigoBarras = { $regex: parametrosQuery.codigoBarras, $options: 'i' };
  }
  if (parametrosQuery.proveedor_id) {
    filtros.proveedor_id = parametrosQuery.proveedor_id;
  }

  const [total, productos] = await Promise.all([
    Producto.countDocuments(filtros),
    Producto.find(filtros)
      .populate('proveedor_id')
      .skip(desde)
      .limit(limite)
  ]);

  return {
    totalDocumentos: total,
    paginaActual: Number(pagina),
    totalPaginas: Math.ceil(total / limite),
    limitePorPagina: Number(limite),
    datos: productos
  };
};

exports.modificarProducto = async (id, dataProducto) => {
  return await Producto.findByIdAndUpdate(id, dataProducto, { new: true }).populate('proveedor_id');
};

exports.removerProducto = async (id) => {
  return await Producto.findByIdAndDelete(id);}