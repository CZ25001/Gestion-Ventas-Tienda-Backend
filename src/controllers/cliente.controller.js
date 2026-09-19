const clienteService = require('../service/cliente.service');

exports.crear = async (req, res) => {
  try {
    const data = await clienteService.crearCliente(req.body);
    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const data = await clienteService.obtenerClientes();
    res.status(200).json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};