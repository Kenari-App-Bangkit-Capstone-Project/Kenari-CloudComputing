var express = require("express");
const { getAllCharacters, index, result } = require("../../controllers/api/mbti");

var router = express.Router();

router.get("/", index);
router.get("/characters", getAllCharacters);
router.post("/result", result);

module.exports = router;
