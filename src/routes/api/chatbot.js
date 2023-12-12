var express = require('express');
const { isLoginUser } = require("../../middleware/auth");
const { chatSave, getUserChatHistories, deleteUserChat } = require('../../controllers/api/chatbot');

var router = express.Router();

router.post('/save', isLoginUser, chatSave);
router.get('/chat', isLoginUser, getUserChatHistories);
router.delete('/delete', isLoginUser, deleteUserChat);

module.exports = router;