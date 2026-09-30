// corrección de importación
const productoService = require('../services/producto.service');

exports.crear = async (req, res) => {
  try {
    const producto = await productoService.crearProducto(req.body);
    res.status(201).json({ ok: true, data: producto });
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const { page, limit, ...filtros } = req.query;
    const resultado = await productoService.obtenerProductos(filtros, page, limit);
    res.status(200).json({ ok: true, ...resultado });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const productoActualizado = await productoService.modificarProducto(req.params.id, req.body);
    if (!productoActualizado) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const productoEliminado = await productoService.removerProducto(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};