const { Router } = require('express');
const { testsController } = require('../controllers/tests.controller');

const router = Router();

router.get('/', testsController.getTests);
router.get('/:id', testsController.getTestById);
router.post('/category/:category', testsController.postTest);

module.exports = router;