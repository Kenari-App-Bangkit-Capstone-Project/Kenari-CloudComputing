var express = require("express");
const { getAllCharacters, index, result, getUserHistories } = require("../../controllers/api/mbti");
const { isLoginUser } = require("../../middleware/auth")

var router = express.Router(); 

router.get("/", index);
router.get("/characters", getAllCharacters);
router.post("/result", isLoginUser, result);
router.get("/user-histories", isLoginUser, getUserHistories);

module.exports = router;
