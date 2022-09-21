const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.route("/").get(adminController.serve_page)
router.route("/children").get(adminController.list_children)
router.route("/emails").get(adminController.list_email)
router.route("/emails/:id").patch(adminController.toggle_send_status)
module.exports = router;
