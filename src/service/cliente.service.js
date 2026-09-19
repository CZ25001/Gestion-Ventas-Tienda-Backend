const Cliente = require('../models/cliente.model');

exports.crearCliente = async (data) => await new Cliente(data).save();
exports.obtenerClientes = async () => await Cliente.find();