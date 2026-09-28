const Usuario = require('../models/usuario.model');
const jwt = require('jsonwebtoken');

// CRUD de Usuarios
exports.crearUsuario = async (datos) => {
  const nuevoUsuario = new Usuario(datos);
  return await nuevoUsuario.save();
};

exports.listarUsuarios = async () => {
  return await Usuario.find().select('-password');
};

exports.buscarUsuarioPorId = async (id) => {
  return await Usuario.findById(id).select('-password');
};

exports.modificarUsuario = async (id, datos) => {
  if (datos.password) {
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10);
    datos.password = await bcrypt.hash(datos.password, salt);
  }
  return await Usuario.findByIdAndUpdate(id, datos, { new: true }).select('-password');
};

exports.removerUsuario = async (id) => {
  return await Usuario.findByIdAndDelete(id);
};

// Login y generación de JWT
exports.login = async (email, password) => {
  const usuario = await Usuario.findOne({ email });
  if (!usuario) throw new Error('Credenciales inválidas');

  const esValido = await usuario.compararPassword(password);
  if (!esValido) throw new Error('Credenciales inválidas');

  const token = jwt.sign(
    { id: usuario._id, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );

  return {
    usuario: {
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    },
    token
  };
};