const router = require('express').Router();
const controller = require('../controllers/inventario.controller');

router.post('/', controller.crear);
router.get('/', controller.obtenerTodos);

module.exports = router;