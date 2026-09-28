const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');
const { verificarToken, permitirRoles } = require('../middlewares/auth.middleware');

// Proteger todas las rutas de la entidad para ADMIN y MANTENIMIENTO
router.use(verificarToken, permitirRoles('ADMIN', 'MANTENIMIENTO'));

router.post('/', productoController.crear);
router.get('/', productoController.obtenerTodos);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;