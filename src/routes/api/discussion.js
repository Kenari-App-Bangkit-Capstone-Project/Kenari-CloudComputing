var express = require('express');
const { isLoginUser } = require("../../middleware/auth");
const { createDiscussion, deleteDiscussion, getAllDiscussion, getUserDiscussion, getDiscussionsByID, addComment } = require('../../controllers/api/discussion');

var router = express.Router();

router.post('/create', isLoginUser, createDiscussion);
router.get('/:id', isLoginUser, getDiscussionsByID);
router.get('/all', isLoginUser, getAllDiscussion);
router.get('/user', isLoginUser, getUserDiscussion);
router.delete('/delete/:id', isLoginUser, deleteDiscussion);
// Comments
router.post('/comment/add/:id', isLoginUser, addComment);

module.exports = router;