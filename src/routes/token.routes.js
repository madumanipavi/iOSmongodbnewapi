const express = require('express');
const bodyParser = require('body-parser');

const controller = require('../controllers/token-controller');

const router = express.Router();
router.use(bodyParser.json());

router.post('/', controller.login);

module.exports = router;
