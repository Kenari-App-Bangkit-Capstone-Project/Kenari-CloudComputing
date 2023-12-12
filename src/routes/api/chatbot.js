var express = require('express');
const { isLoginUser } = require("../../middleware/auth");
const { chatSave, getUserChatHistories } = require('../../controllers/api/chatbot');

var router = express.Router();

router.post('/save', isLoginUser, chatSave);
router.get('/chat', isLoginUser, getUserChatHistories);

module.exports = router;