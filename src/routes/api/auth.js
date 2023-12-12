var express = require('express');
const { register, signIn } = require('../../controllers/api/auth');

var router = express.Router();

router.post('/register', register);
router.post('/signin', signIn);

module.exports = router;