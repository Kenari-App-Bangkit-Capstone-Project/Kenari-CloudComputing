var express = require("express");

const { isLoginUser } = require("../../middleware/auth");
const { setPersonality, updateUser, getUserById } = require("../../controllers/api/user");

var router = express.Router(); 

router.get("/get", getUserById)
router.put("/update", isLoginUser, updateUser)
router.put("/set-personality", isLoginUser, setPersonality);

module.exports = router;
