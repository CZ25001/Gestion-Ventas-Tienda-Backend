const inventarioService = require('../service/inventario.service');

exports.crear = async (req, res) => {
  try {
    const data = await inventarioService.crearMovimiento(req.body);
    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const data = await inventarioService.obtenerMovimientos();
    res.status(200).json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const movimientoActualizado = await inventarioService.modificarMovimiento(req.params.id, req.body);
    if (!movimientoActualizado) return res.status(404).json({ mensaje: 'Movimiento no encontrado' });
    res.status(200).json(movimientoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const movimientoEliminado = await inventarioService.removerMovimiento(req.params.id);
    if (!movimientoEliminado) return res.status(404).json({ mensaje: 'Movimiento no encontrado' });
    res.status(200).json({ mensaje: 'Movimiento de inventario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};