const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedor.controller');
const { verificarToken } = require('../middlewares/auth.middleware');

router.use(verificarToken);

router.post('/', proveedorController.crear);
router.get('/', proveedorController.obtenerTodos);

// Rutas agregadas
router.put('/:id', proveedorController.actualizar);
router.delete('/:id', proveedorController.eliminar);

module.exports = router;