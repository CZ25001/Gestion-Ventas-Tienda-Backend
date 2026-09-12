const Producto = require('../models/Producto.model');

exports.crearProducto = async (datosProducto) => {
    const nuevoProducto = new Producto(datosProducto);
    return await nuevoProducto.save();
};

exports.listarProducto = async (parametrosQuery = {}, pagina = 1, limite = 10) => {
    const desde = (pagina - 1) * limite;
    const filtros = {};

    // Lógica de construcción dinámica de filtros asíncronos
    if (parametrosQuery.nombre) {
        filtros.nombre = { $regex: parametrosQuery.nombre, $options: 'i' };
    }
    if (parametrosQuery.apellido) {
        filtros.apellido = { $regex: parametrosQuery.apellido, $options: 'i' };
    }
    if (parametrosQuery.edad) {
        filtros.edad = parseInt(parametrosQuery.edad);
    }

    // Ejecución concurrente optimizada para el rendimiento del servidor
    const [total, estudiantes] = await Promise.all([
        Estudiante.countDocuments(filtros),
        Estudiante.find(filtros).skip(desde).limit(limite).sort({ createdAt: -1 })
    ]);

    return {
        totalDocumentos: total,
        paginaActual: Number(pagina),
        totalPaginas: Math.ceil(total / limite),
        limitePorPagina: Number(limite),
        datos: estudiantes
    };
};

exports.buscarEstudiantePorId = async (id) => {
    return await Estudiante.findById(id);
};

exports.modificarEstudiante = async (id, datosActualizados) => {
    return await Estudiante.findByIdAndUpdate(id, datosActualizados, { new: true });
};

exports.removerEstudiante = async (id) => {
    return await Estudiante.findByIdAndDelete(id);
};