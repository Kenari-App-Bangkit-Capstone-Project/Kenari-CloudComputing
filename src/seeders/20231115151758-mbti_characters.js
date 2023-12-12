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
    return queryInterface.bulkInsert("mbti_characters", [
      {
        code: "C001",
        character: "Serius, tenang, stabil dan damai.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C002",
        character: "Senang pada fakta, logis, obyektif, praktis dan realistis.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C003",
        character:
          "Task Oriented, tekun, teratur, menepati janji, dapat dian-dalkan dan bertanggung jawab.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C004",
        character:
          "Pendengar yang baik, setia, hanya mau berbagi dengan orang dekat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C005",
        character: "Memegang aturan, standar dan prosedur dengan teguh.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C006",
        character: "Penuh pertimbangan, hati-hati, teliti dan akurat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C007",
        character: "Serius, tenang, stabil namun sensitif.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C008",
        character:
          "Ramah, perhatian pada perasaan dan kebutuhan orang lain, setia, kooperatif, pendengar yang baik.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C009",
        character:
          "Punya kemampuan mengorganisasi, detail, teliti, sangat bertanggungjawab dan bisa di andalkan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C010",
        character:
          "Tenang, pendiam, cenderung kaku, dingin, hati-hati, penuh pertimbangan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C011",
        character:
          "Logis, rasional, kritis, obyektif, mampu mengesamping-kan perasaan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C012",
        character:
          "Mampu menghadapi perubahan mendadak dengan cepat dan tenang.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C013",
        character:
          "Percaya diri, tegas dan mampu menghadapi perbedaan maupun kritik.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C014",
        character: "Mampu menganalisa, mengorganisir dan mendelegasikan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C015",
        character:
          "Problem solver yang baik terutama untuk masalah teknis dan keadaan mendadak.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C016",
        character:
          "Berfikiran simple dan praktis, fleksibel, sensitive, ramah, tidak menonjolkan diri, rendah hati pada kemampuannya.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C017",
        character:
          "Menghindari konflik, tidak memaksakan pendapat atau nilai- nilainya pada orang lain.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C018",
        character:
          "Biasanya tidak mau memimpin tetapi menjadi pengikut dan pelaksana setia.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C019",
        character:
          "Seringkali santai menyelesaikan sesuatu, karena sangat menikmati apa yang terjadi saat ini.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C020",
        character:
          "Menunjukkan perhatian lebih banyak melalui tindakan dibandingkan kata-kata.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C021",
        character:
          "Perhatian, empati, sensitif dan berkomitmen terhadap se-buah hubungan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C022",
        character:
          "Sukses karena ketekunan, originalitas dan keinginan kuat untuk melakukan apa saja yang diperlukan termasuk memberikan yang terbaik dalam pekerjaan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C023",
        character: "Idealis, perfeksionis, memegang teguh prinsip.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C024",
        character:
          "Visioner, penuh ide, kreatif, suka merenung dan inspriring.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C025",
        character:
          "Biasanya diikuti dan dihormati karena kejelasan visi serta dedikasi pada hal- hal baik.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C026",
        character:
          "Visioner, punya perencanaan praktis dan biasanya mem-iliki ide-ide original serta dorongan kuat untuk men-capainya.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C027",
        character: "Mandiri dan terpercaya.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C028",
        character:
          "Punya kemampuan analisa yang bagus serta menyeder-hanakan sesuatu yang rumit dan abstrak menjadi sesuatu yang praktis, mudah difahami dan dipraktekan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C029",
        character:
          "Skeptis, kritis, logis, menentukan (determinatif) dan kadang keras kepala.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C030",
        character:
          "Punya keinginan untuk berkembang serta selalu ingin lebih maju dari orang lain.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C031",
        character: "Kritik dan konflik tidak menjadi masalah berarti.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C032",
        character: "Sangat perhatian dan peka dengan perasaan orang lain.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C033",
        character:
          "Penuh dengan antusiasme dan kesetiaan, tapi biasanya hanya untuk orang dekat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C034",
        character:
          "Peduli pada banyak hal, cenderung mengambil terlalu banyak dan menyelesaikan sebagian.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C035",
        character: "Cenderung idealis dan perfeksionis.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C036",
        character:
          "Berfikir win-win solution, mempercayai dan mengopti-malkan orang lain.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C037",
        character:
          "Sangat menghargai intelektualitas dan pengetahuan, menikmati hal-hal teoritis dan ilmiah, senang memeca-hkan masalah dengan logika dan analisa.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C038",
        character: "Diam dan menahan diri, lebih suka bekerja sendiri.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C039",
        character: "Cenderung kritis, skeptis, mudah curiga dan pesimis.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C040",
        character:
          "Tidak suka memimpin dan bisa menjadi pengikut yang tidak banyak menuntut.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C041",
        character:
          "Cenderung memiliki minat yang jelas, membutuhkan ka-rir dimana minatnya bisa berkembang dan bermanfaat, jika menemukan sesuatu yang menarik minatnya, ia akan san-gat serius dan antusias menekuninya.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C042",
        character:
          "Spontan, aktif, enerjik, cekatan, cepat, sigap, antusias, fun dan penuh variasi.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C043",
        character:
          "Komunikator, asertif, to the point, ceplas-ceplos, berka-risma, punya interpersonal skill yang baik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C044",
        character:
          "Baik dalam pemecahan masalah langsung di tempat, mampu menghadapi masalah, konflik dan kritik, tidak khawatir, menikmati apapun yang terjadi.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C045",
        character:
          "Cenderung untuk menyukai sesuatu yang mekanistis, kegiatan bersama dan olahraga.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C046",
        character:
          "Mudah beradaptasi, toleran, pada umumnya konservatif tentang nilai- nilai, tidak suka penjelasan terlalu panjang, paling baik dalam hal-hal nyata yang dapat dilakukan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C047",
        character:
          "Outgoing, easygoing, mudah berteman, bersahabat, sangat sosial, ramah, hangat dan menyenangkan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C048",
        character:
          "Optimis, ceria, antusias, fun, menghibur, suka menjadi perhatian.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C049",
        character:
          "Punya interpersonal skill yang baik, murah hati, mudah simpatik, dan mengenali perasaan orang lain, menghindari konflik dan menjaga keharmonisasian suatu hubungan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C050",
        character:
          "Mengetahui apa yang terjadi di sekelilingnya dan ikut ser-ta dalam kegiatan tersebut.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C051",
        character:
          "Sangat baik dalam keadaan yang membutuhkan common sense, tindakan cepat dan keterapilan praktis.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C052",
        character:
          "Ramah, hangat, enerjik, optimis, antusias, semangat ting-gi, fun.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C053",
        character: "Imaginatif, penuh ide, kreatif, inovatif.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C054",
        character: "Mampu beradapasi dengan beragam situasi dan perubahan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C055",
        character:
          "Pandai berkomunikasi, senang bersosialisasi, dan mem-bawa suasana positif.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C056",
        character: "Mudah membaca perasaan dan kebutuhan orang lain.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C057",
        character:
          "Gesit, kreatif, inovatif, cerdik, logis, baik dalam banyak hal.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "C058",
        character:
          "Banyak bicara dan punya kemampuan debat yang baik, bisa berargumentasi untuk senang-senang saja tanpa merasa bersalah.",
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
    return queryInterface.bulkDelete("mbti_characters", null, {});
  },
};
