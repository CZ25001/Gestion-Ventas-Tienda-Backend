require('dotenv').config();
const mongoose = require('mongoose');
const Usuario = require('../models/usuario.model');

const crearUsuarioInicial = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB...');

    const usuarioExistente = await Usuario.findOne({ rol: 'ADMIN' });
    if (usuarioExistente) {
      console.log('El usuario ADMIN ya existe.');
      process.exit(0);
    }

    const usuarioAdmin = new Usuario({
      nombre: 'Administrador Inicial',
      email: 'admin@correo.com',
      password: 'Admin123',
      rol: 'ADMIN'
    });

    await usuarioAdmin.save();
    console.log('Usuario ADMIN creado con éxito (admin@correo.com / Admin123)');
  } catch (error) {
    console.error('Error al ejecutar el seed:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

crearUsuarioInicial();