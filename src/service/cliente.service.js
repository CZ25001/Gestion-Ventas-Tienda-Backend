const Cliente = require('../models/cliente.model');

exports.crearCliente = async (data) => await new Cliente(data).save();
exports.obtenerClientes = async () => await Cliente.find();

exports.modificarCliente = async (id, dataCliente) => {
  return await Cliente.findByIdAndUpdate(id, dataCliente, { new: true });
};

exports.removerCliente = async (id) => {
  return await Cliente.findByIdAndDelete(id);
};