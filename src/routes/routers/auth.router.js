const express = require("express");

const router = express.Router();

const authController = require('../../apps/controllers/auth.controller');

router.get('/', authController.index);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/verify', authController.verifyUI);

module.exports = router;