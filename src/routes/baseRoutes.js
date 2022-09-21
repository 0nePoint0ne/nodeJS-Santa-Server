const express = require('express');
const main = require('../controllers/baseController');
const router = express.Router();

router.route("/").get(main.serve_page)
module.exports = router;
