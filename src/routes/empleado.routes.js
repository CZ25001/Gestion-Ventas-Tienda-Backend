const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');
const { verificarToken } = require('../middlewares/auth.middleware');

router.use(verificarToken);

router.post('/', empleadoController.crear);
router.get('/', empleadoController.obtenerTodos);

// Rutas agregadas
router.put('/:id', empleadoController.actualizar);
router.delete('/:id', empleadoController.eliminar);

module.exports = router;