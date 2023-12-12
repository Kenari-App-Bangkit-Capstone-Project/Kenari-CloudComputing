const { mbti_characters } = require("../models");

module.exports = {
  index: async (req, res) => {
    const characters = await mbti_characters.findAll();
    
    res.render("index", { title: "MBTI ExpressJS", characters });
  },
};
