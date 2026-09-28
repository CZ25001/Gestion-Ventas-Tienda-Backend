const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const { verificarToken } = require('../middlewares/auth.middleware');

router.use(verificarToken);

router.post('/', clienteController.crear);
router.get('/', clienteController.obtenerTodos);

// Rutas agregadas
router.put('/:id', clienteController.actualizar);
router.delete('/:id', clienteController.eliminar);

module.exports = router;