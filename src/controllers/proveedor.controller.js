const proveedorService = require('../service/proveedor.service');

exports.crear = async (req, res) => {
  try {
    const data = await proveedorService.crearProveedor(req.body);
    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const { page, limit, ...filtros } = req.query;
    const resultado = await proveedorService.obtenerProveedores(filtros, page, limit);
    res.status(200).json({ ok: true, ...resultado });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const proveedorActualizado = await proveedorService.modificarProveedor(req.params.id, req.body);
    if (!proveedorActualizado) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    res.status(200).json(proveedorActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const proveedorEliminado = await proveedorService.removerProveedor(req.params.id);
    if (!proveedorEliminado) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    res.status(200).json({ mensaje: 'Proveedor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};