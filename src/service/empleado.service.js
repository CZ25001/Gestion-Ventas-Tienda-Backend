const Empleado = require('../models/empleado.model');

exports.crearEmpleado = async (data) => await new Empleado(data).save();

exports.obtenerEmpleados = async (parametrosQuery = {}, pagina = 1, limite = 10) => {
  const desde = (pagina - 1) * limite;
  const filtros = {};

  if (parametrosQuery.nombre) {
    filtros.nombre = { $regex: parametrosQuery.nombre, $options: 'i' };
  }
  if (parametrosQuery.rol) {
    filtros.rol = parametrosQuery.rol;
  }
  if (parametrosQuery.activo !== undefined) {
    filtros.activo = parametrosQuery.activo === 'true';
  }

  const [total, empleados] = await Promise.all([
    Empleado.countDocuments(filtros),
    Empleado.find(filtros)
      .skip(desde)
      .limit(limite)
  ]);

  return {
    totalDocumentos: total,
    paginaActual: Number(pagina),
    totalPaginas: Math.ceil(total / limite),
    limitePorPagina: Number(limite),
    datos: empleados
  };
};

exports.modificarEmpleado = async (id, dataEmpleado) => {
  return await Empleado.findByIdAndUpdate(id, dataEmpleado, { new: true });
};

exports.removerEmpleado = async (id) => {
  return await Empleado.findByIdAndDelete(id);
};