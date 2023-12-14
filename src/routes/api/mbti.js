var express = require("express");
const { getAllCharacters, result, getUserHistories, getTypeByCode } = require("../../controllers/api/mbti");
const { isLoginUser } = require("../../middleware/auth")

var router = express.Router(); 

router.get("/get", getTypeByCode);
router.get("/characters", getAllCharacters);
router.post("/result", isLoginUser, result);
router.get("/user-histories", isLoginUser, getUserHistories);

module.exports = router;
