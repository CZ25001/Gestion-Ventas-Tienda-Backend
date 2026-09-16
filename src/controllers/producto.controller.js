const productoService = require('../service/producto.service');

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
    const productos = await productoService.obtenerProductos();
    res.status(200).json({ ok: true, data: productos });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};