// require express router
const express = require('express');
const router = express.Router();
// require message controller
const messageController = require('../controllers/messages');

router.get("/", messageController.getAll);

router.post("/", messageController.create);

 module.exports = router;

 