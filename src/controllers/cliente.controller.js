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

exports.actualizar = async (req, res) => {
  try {
    const clienteActualizado = await clienteService.modificarCliente(req.params.id, req.body);
    if (!clienteActualizado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.status(200).json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const clienteEliminado = await clienteService.removerCliente(req.params.id);
    if (!clienteEliminado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.status(200).json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};