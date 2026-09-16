const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

router.post('/', productoController.crear);
router.get('/', productoController.obtenerTodos);

module.exports = router;