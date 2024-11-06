const express = require("express");

const router = express.Router();

const authController = require('../../apps/controllers/auth.controller');

router.get('/', authController.index);

module.exports = router;