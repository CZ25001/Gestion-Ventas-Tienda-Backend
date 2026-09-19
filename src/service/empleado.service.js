const Empleado = require('../models/empleado.model');

exports.crearEmpleado = async (data) => await new Empleado(data).save();
exports.obtenerEmpleados = async () => await Empleado.find();