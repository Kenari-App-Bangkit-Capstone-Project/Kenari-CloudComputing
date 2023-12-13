var express = require("express");

const { isLoginUser } = require("../../middleware/auth");
const { setPersonality, updateUser } = require("../../controllers/api/user");

var router = express.Router(); 

router.put("/update", isLoginUser, updateUser)
router.put("/set-personality", isLoginUser, setPersonality);

module.exports = router;
