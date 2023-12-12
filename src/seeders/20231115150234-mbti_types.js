"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("mbti_types", [
      {
        code: "P01",
        type: "ISTJ",
        information:
          "<p>ISTJ adalah singkatan dari Introversion (Introvert), Sensing, Thinking, dan Judging dalam MBTI (Myers-Briggs Type Indicator).</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P02",
        type: "ISFJ",
        information:
          "<p>ISFJ sering dianggap sebagai orang yang hangat, peduli, dan dapat diandalkan. Mereka sering memiliki kemampuan kuat dalam memahami dan merespons kebutuhan praktis orang lain. ISFJ cenderung menjadi orang yang setia, mementingkan keharmonisan, dan pekerja keras yang memiliki komitmen tinggi terhadap tugas-tugas yang mereka tangani.</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P03",
        type: "ISTP",
        information:
          "ISTP adalah singkatan dari Introversion (Introvert), Sensing, Thinking, dan Perceiving dalam MBTI (Myers-Briggs Type Indicator).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P04",
        type: "ISFP",
        information:
          "<p>ISFP adalah singkatan dari Introversion (Introvert), Sensing, Feeling, dan Perceiving dalam MBTI (Myers-Briggs Type Indicator).</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P05",
        type: "INFJ",
        information:
          "<p>INFJ adalah singkatan dari Introversion (Introvert), Intuition, Feeling, dan Judging dalam MBTI (Myers-Briggs Type Indicator). </p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P06",
        type: "INTJ",
        information:
          "<p>INTJ adalah singkatan dari Introversion (Introvert), Intuition, Thinking, dan Judging dalam MBTI (Myers-Briggs Type Indicator).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P07",
        type: "INFP",
        information:
          "<p>INFP adalah singkatan dari Introversion (Introvert), Intuition, Feeling, dan Perceiving dalam MBTI (Myers-Briggs Type Indicator).</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P08",
        type: "INTP",
        information:
          "<p>INTP adalah singkatan dari Introversion (Introvert), Intuition, Thinking, dan Perceiving dalam MBTI (Myers-Briggs Type Indicator). </p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P09",
        type: "ESTP",
        information:
          "ESTP adalah singkatan dari Extraversion (Ekstrovert), Sensing, Thinking, dan Perceiving dalam MBTI (Myers-Briggs Type Indicator).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P10",
        type: "ESFP",
        information:
          "<p>ESFP adalah singkatan dari Extraversion (Ekstrovert), Sensing, Feeling, dan Perceiving dalam MBTI (Myers-Briggs Type Indicator).</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P11",
        type: "ENFP",
        information:
          "<p>ENFP adalah singkatan dari Extraversion (Ekstrovert), Intuition, Feeling, dan Perceiving dalam MBTI (Myers-Briggs Type Indicator).</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P12",
        type: "ESTJ",
        information:
          "<p>ESTJ adalah singkatan dari Extraversion (Ekstrovert), Sensing, Thinking, dan Judging dalam MBTI (Myers-Briggs Type Indicator).</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("mbti_types", null, {});
  },
};
