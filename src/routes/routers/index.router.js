const express = require("express");

const router = express.Router();

const indexController = require("../../apps/controllers/index.controller.js");

router.get('/', indexController.index);

module.exports = router;