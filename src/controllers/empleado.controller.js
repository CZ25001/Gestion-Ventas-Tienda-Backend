const empleadoService = require('../service/empleado.service');

exports.crear = async (req, res) => {
  try {
    const data = await empleadoService.crearEmpleado(req.body);
    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const { page, limit, ...filtros } = req.query;
    const resultado = await empleadoService.obtenerEmpleados(filtros, page, limit);
    res.status(200).json({ ok: true, ...resultado });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const empleadoActualizado = await empleadoService.modificarEmpleado(req.params.id, req.body);
    if (!empleadoActualizado) return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    res.status(200).json(empleadoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const empleadoEliminado = await empleadoService.removerEmpleado(req.params.id);
    if (!empleadoEliminado) return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    res.status(200).json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};