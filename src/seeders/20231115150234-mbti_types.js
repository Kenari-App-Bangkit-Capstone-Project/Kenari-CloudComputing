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
          "ISTJ, yang merupakan singkatan dari Introversion (I), Sensing (S), Thinking (T), dan Judging (J), adalah tipe kepribadian yang cenderung menonjolkan keandalan dan ketertiban. Orang yang memiliki kepribadian ISTJ biasanya sangat terorganisir, memilah informasi dengan logika, dan lebih suka bekerja dengan fakta konkret. Mereka dikenal sebagai individu yang konsisten, memiliki standar tinggi, dan dapat diandalkan dalam memenuhi tanggung jawab mereka. ISTJ seringkali memiliki kecenderungan untuk berfokus pada detail dan merancang rencana yang terstruktur untuk mencapai tujuan mereka dengan efisiensi.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P02",
        type: "ISFJ",
        information:
          "ISFJ, yang merupakan singkatan dari Introversion (I), Sensing (S), Feeling (F), dan Judging (J), adalah tipe kepribadian yang cenderung menonjolkan empati dan kepedulian terhadap orang lain. Orang yang memiliki kepribadian ISFJ biasanya sangat perhatian, peka terhadap perasaan orang lain, dan lebih suka membuat keputusan berdasarkan nilai-nilai personal. Mereka dikenal sebagai individu yang peduli dengan keharmonisan hubungan, memiliki kecenderungan untuk membantu orang lain, dan dapat diandalkan dalam memberikan dukungan emosional. ISFJ seringkali memiliki kecenderungan untuk bekerja dengan rinci dan merencanakan tindakan yang mendukung kesejahteraan orang di sekitarnya dengan penuh perhatian.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P03",
        type: "ISTP",
        information:
          "ISTP, yang merupakan singkatan dari Introversion (I), Sensing (S), Thinking (T), dan Perceiving (P), adalah tipe kepribadian yang cenderung menonjolkan ketangguhan dan keterampilan praktis. Orang yang memiliki kepribadian ISTP biasanya sangat fleksibel, mampu beradaptasi dengan cepat, dan lebih suka mengatasi masalah dengan cara yang konkret dan langsung. Mereka dikenal sebagai individu yang terampil dalam menyelesaikan tugas fisik dan teknis, memiliki naluri analitis yang kuat, dan dapat bekerja efisien dalam situasi yang membutuhkan tanggapan cepat. ISTP seringkali memiliki kecenderungan untuk hidup dalam momen ini, menikmati kebebasan untuk mengeksplorasi dan mencari tantangan baru. Mereka cenderung menjadi praktis, realistis, dan tidak suka dibatasi oleh aturan yang kaku. ISTP dapat menjadi ahli dalam menyelesaikan masalah teknis, serta menanggapi keadaan darurat dengan tenang dan efisien.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P04",
        type: "ISFP",
        information:
          "ISFP, yang merupakan singkatan dari Introversion (I), Sensing (S), Feeling (F), dan Perceiving (P), adalah tipe kepribadian yang menonjolkan kreativitas, sensitivitas, dan nilai-nilai pribadi. Orang yang memiliki kepribadian ISFP cenderung sangat artistik, mengekspresikan diri melalui seni dan estetika, serta membuat keputusan berdasarkan pada intuisi emosional mereka. Mereka sering hidup sesuai dengan nilai-nilai pribadi, menghindari aturan yang kaku, dan mengejar kebebasan untuk mengekspresikan diri secara spontan. ISFP dapat menjadi individu yang setia dan mendukung dalam hubungan interpersonal, sambil membawa keindahan dan emosi ke dalam lingkungan sekitar mereka.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P05",
        type: "INFJ",
        information:
          "INFJ, yang merujuk pada Introversion (I), Intuition (N), Feeling (F), dan Judging (J), adalah tipe kepribadian yang menonjolkan visi idealis, empati mendalam, dan dedikasi untuk membantu orang lain. Orang dengan kepribadian INFJ cenderung sangat introspektif, mengakui dan meresapi perasaan orang lain dengan intensitas tinggi, serta cenderung membuat keputusan berdasarkan pada nilai-nilai moral yang kuat. INFJ dikenal sebagai individu visioner yang memiliki dorongan kuat untuk menciptakan perubahan positif dalam masyarakat. Mereka mendedikasikan diri untuk memahami diri mereka sendiri dan orang lain secara mendalam, menciptakan hubungan yang bermakna, dan menjadi pemimpin inspiratif. Dengan kemampuan intuitif dan empati yang luar biasa, INFJ mampu membimbing orang lain menuju pertumbuhan pribadi, menghasilkan lingkungan yang mendukung, dan bertindak dengan integritas tinggi demi mewujudkan tujuan mereka.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P06",
        type: "INTJ",
        information:
          "INTJ, yang merupakan singkatan dari Introversion (I), Intuition (N), Thinking (T), dan Judging (J), adalah tipe kepribadian yang cenderung menonjolkan kecerdasan strategis dan analisis logis. Individu dengan kepribadian INTJ biasanya sangat rasional, fokus pada ide-ide besar, dan lebih suka merencanakan jangka panjang. Mereka dikenal sebagai pemikir mandiri yang memiliki visi jelas terhadap tujuan mereka, seringkali mencari solusi efektif dengan memanfaatkan pengetahuan dan strategi yang kuat. INTJ sering menunjukkan kecenderungan untuk berpikir kritis, memiliki standar tinggi, dan fokus pada efisiensi dalam mencapai hasil. Mereka cenderung memilih pendekatan yang terstruktur dan logis dalam menghadapi tantangan, sering kali menjadi pemimpin yang visioner dan inovatif.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P07",
        type: "INFP",
        information:
          "INFP, yang merupakan singkatan dari Introversion (I), Intuition (N), Feeling (F), dan Perceiving (P), adalah tipe kepribadian yang cenderung menonjolkan kreativitas, nilai-nilai pribadi, dan kepekaan terhadap perasaan. Individu dengan kepribadian INFP umumnya sangat introspektif, memiliki imajinasi yang kuat, dan cenderung melihat dunia melalui lensa nilai-nilai dan prinsip pribadi. Mereka dikenal sebagai individu yang penuh empati, mendukung nilai-nilai keadilan, dan seringkali memiliki hasrat untuk membuat perbedaan positif dalam dunia. INFP sering menunjukkan kecenderungan untuk menghargai keunikan, mengejar makna dalam kehidupan, dan memiliki pandangan yang mendalam terhadap hubungan interpersonal. Mereka cenderung fleksibel dan terbuka terhadap berbagai kemungkinan, memilih untuk menjalani kehidupan yang kaya makna dan autentik sesuai dengan nilai-nilai dan impian pribadi mereka.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P08",
        type: "INTP",
        information:
          "INTP, yang merupakan singkatan dari Introversion (I), Intuition (N), Thinking (T), dan Perceiving (P), adalah tipe kepribadian yang menonjolkan pemikiran kreatif dan analisis logis. Individu dengan kepribadian INTP cenderung sangat terbuka terhadap ide-ide baru, memiliki rasa ingin tahu yang tinggi, dan senang memecahkan masalah kompleks dengan pendekatan yang inovatif. Mereka dikenal sebagai pemikir bebas yang independen, kritis terhadap informasi, dan memiliki keinginan kuat untuk memahami dasar-dasar konsep. Meskipun mungkin terlihat tenang, INTP memiliki pemikiran yang kompleks dan cenderung mengejar pemahaman mendalam terhadap berbagai topik. Kebebasan dalam pemikiran dan fleksibilitas konsep menjadi nilai penting bagi INTP, yang dapat menjadi kontributor berharga di bidang-bidang seperti penelitian, perancangan sistem, atau bidang lain yang membutuhkan analisis mendalam dan pemecahan masalah kreatif.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P09",
        type: "ESTP",
        information:
          "ESTP, yang merupakan singkatan dari Extroversion (E), Sensing (S), Thinking (T), dan Perceiving (P), adalah tipe kepribadian yang menonjolkan keenergian ekstrovert, fokus pada fakta konkret, dan keterampilan pengambilan keputusan yang cepat. Individu dengan kepribadian ESTP cenderung menjadi orang yang berorientasi tindakan, suka mengeksplorasi pengalaman baru, dan memiliki kecenderungan untuk beradaptasi dengan fleksibilitas terhadap perubahan. Mereka dikenal sebagai individu yang tangguh, suka tantangan, dan memiliki keberanian untuk menghadapi risiko. ESTP cenderung menjalin hubungan sosial dengan mudah, menjadi pribadi yang ramah dan ekspansif. Dengan kecakapannya dalam mengatasi situasi yang mendesak dan responsif terhadap lingkungan sekitarnya, ESTP sering menonjol dalam situasi-situasi yang memerlukan keberanian, tindakan cepat, dan keterampilan interpersonal yang kuat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P10",
        type: "ESFP",
        information:
          "ESFP, yang merupakan singkatan dari Extroversion (E), Sensing (S), Feeling (F), dan Perceiving (P), adalah tipe kepribadian yang menonjolkan keekstrovertan yang penuh energi, fokus pada fakta konkret, dan kepekaan terhadap perasaan. Individu dengan kepribadian ESFP cenderung menjadi orang yang ramah, antusias, dan suka berinteraksi dengan orang lain. Mereka menikmati pengalaman langsung, memiliki kecenderungan untuk bersenang-senang, dan cenderung fleksibel dalam menghadapi perubahan. ESFP dikenal sebagai individu yang responsif terhadap emosi, mudah beradaptasi dalam situasi sosial, dan memiliki keterampilan interpersonal yang kuat. Mereka cenderung menghargai kebebasan, mengejar kesenangan, dan dapat membawa semangat positif ke dalam lingkungan sosial mereka. Dengan bakat mereka dalam berkomunikasi dan menciptakan hubungan yang kuat, ESFP seringkali menonjol dalam situasi-situasi yang membutuhkan keceriaan, kolaborasi, dan interaksi sosial yang hangat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P11",
        type: "ENFP",
        information:
          "ENFP, yang merupakan singkatan dari Extroversion (E), Intuition (N), Feeling (F), dan Perceiving (P), adalah tipe kepribadian yang menonjolkan keekstrovertan yang penuh semangat, intuisi kreatif, dan kepekaan terhadap nilai-nilai personal. Individu dengan kepribadian ENFP cenderung menjadi orang yang ramah, inovatif, dan memiliki kecenderungan untuk berpikir out-of-the-box. Mereka suka mengeksplorasi ide-ide baru, memiliki hasrat untuk mencapai impian dan aspirasi mereka, dan cenderung terbuka terhadap berbagai pandangan. ENFP dikenal sebagai individu yang penuh empati, peduli terhadap orang lain, dan seringkali menjadi pemimpin yang inspiratif. Mereka cenderung fleksibel dan spontan, menyukai tantangan baru, dan memiliki kemampuan untuk merangkul perubahan dengan antusiasme. Dengan keunikan mereka dalam menggabungkan kreativitas dan empati, ENFP seringkali menonjol dalam lingkungan sosial dan profesi yang membutuhkan inovasi, keterlibatan interpersonal, dan semangat positif.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "P12",
        type: "ESTJ",
        information:
          "ESTJ, yang merupakan singkatan dari Extroversion (E), Sensing (S), Thinking (T), dan Judging (J), adalah tipe kepribadian yang menonjolkan keekstrovertan yang energik, fokus pada fakta konkret, dan ketertiban dalam pengambilan keputusan. Individu dengan kepribadian ESTJ cenderung menjadi orang yang terorganisir, memiliki standar tinggi, dan dapat diandalkan dalam memimpin dan mengelola tugas-tugas. Mereka suka memiliki struktur dan ketertiban dalam kehidupan mereka, seringkali mengandalkan logika dan fakta dalam pengambilan keputusan. ESTJ dikenal sebagai pemimpin yang tangguh dan konsisten, memiliki kecenderungan untuk menetapkan tujuan yang jelas, dan bekerja keras untuk mencapainya. Mereka cenderung menjadi orang yang bertanggung jawab, tegas, dan adil dalam interaksi sosial. Dengan keandalan dan ketegasan mereka, ESTJ seringkali menonjol dalam lingkungan kerja atau organisasi yang membutuhkan struktur, kepemimpinan yang kuat, dan kepatuhan terhadap aturan.",
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
