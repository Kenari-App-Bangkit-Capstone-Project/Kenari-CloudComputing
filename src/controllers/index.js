const { MbtiCharacters } = require("../models");

module.exports = {
  index: async (req, res) => {
    const characters = await MbtiCharacters.findAll();
    
    res.render("index", { title: "MBTI ExpressJS", characters });
  },
};
