const express = require('express');
const santaList = require('../controllers/santaListController');
const router = express.Router();

router.route("/").get(santaList.get_list).post(santaList.receive_wish);
module.exports = router;
