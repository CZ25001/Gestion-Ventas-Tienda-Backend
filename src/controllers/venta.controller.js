const ventaService = require('../service/venta.service');

exports.crear = async (req, res) => {
  try {
    const data = await ventaService.crearVenta(req.body);
    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const data = await ventaService.obtenerVentas();
    res.status(200).json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const ventaActualizada = await ventaService.modificarVenta(req.params.id, req.body);
    if (!ventaActualizada) return res.status(404).json({ mensaje: 'Venta no encontrada' });
    res.status(200).json(ventaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const ventaEliminada = await ventaService.removerVenta(req.params.id);
    if (!ventaEliminada) return res.status(404).json({ mensaje: 'Venta no encontrada' });
    res.status(200).json({ mensaje: 'Venta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};