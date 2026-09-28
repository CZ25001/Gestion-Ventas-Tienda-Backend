const Proveedor = require('../models/proveedor.model');

exports.crearProveedor = async (data) => await new Proveedor(data).save();

exports.obtenerProveedores = async (parametrosQuery = {}, pagina = 1, limite = 10) => {
  const desde = (pagina - 1) * limite;
  const filtros = {};

  if (parametrosQuery.empresa) {
    filtros.empresa = { $regex: parametrosQuery.empresa, $options: 'i' };
  }
  if (parametrosQuery.contactoNombre) {
    filtros.contactoNombre = { $regex: parametrosQuery.contactoNombre, $options: 'i' };
  }
  if (parametrosQuery.telefono) {
    filtros.telefono = { $regex: parametrosQuery.telefono, $options: 'i' };
  }

  const [total, proveedores] = await Promise.all([
    Proveedor.countDocuments(filtros),
    Proveedor.find(filtros)
      .skip(desde)
      .limit(limite)
  ]);

  return {
    totalDocumentos: total,
    paginaActual: Number(pagina),
    totalPaginas: Math.ceil(total / limite),
    limitePorPagina: Number(limite),
    datos: proveedores
  };
};

exports.modificarProveedor = async (id, dataProveedor) => {
  return await Proveedor.findByIdAndUpdate(id, dataProveedor, { new: true });
};

exports.removerProveedor = async (id) => {
  return await Proveedor.findByIdAndDelete(id);
};