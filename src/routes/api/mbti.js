var express = require("express");
const { getAllCharacters, index, result } = require("../../controllers/api/mbti");
const { isLoginUser } = require("../../middleware/auth")

var router = express.Router(); 

router.get("/", index);
router.get("/characters", getAllCharacters);
router.post("/result", isLoginUser, result);

module.exports = router;
