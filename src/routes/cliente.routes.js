const router = require('express').Router();
const controller = require('../controllers/cliente.controller');

router.post('/', controller.crear);
router.get('/', controller.obtenerTodos);

module.exports = router;