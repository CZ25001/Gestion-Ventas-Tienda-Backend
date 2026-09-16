const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Si process.env.MONGODB_URI no existe, usará la URL local por defecto
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gestion_tienda';
    
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error crítico de conexión a la DB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;