var express = require('express');
const { isLoginUser } = require("../../middleware/auth");
const { createDiscussion, deleteDiscussion } = require('../../controllers/api/discussion');

var router = express.Router();

router.post('/create', isLoginUser, createDiscussion);
router.delete('/delete/:id', isLoginUser, deleteDiscussion);

module.exports = router;