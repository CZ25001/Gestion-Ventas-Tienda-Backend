const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/venta.controller');
const { verificarToken } = require('../middlewares/auth.middleware');

router.use(verificarToken);

router.post('/', ventaController.crear);
router.get('/', ventaController.obtenerTodos);

// Rutas agregadas
router.put('/:id', ventaController.actualizar);
router.delete('/:id', ventaController.eliminar);

module.exports = router;