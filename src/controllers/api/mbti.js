const { MbtiCharacters, MbtiRules, MbtiTypes } = require("../../models");

module.exports = {
    index: async (req, res) => {
        res.status("200").json({
            message: "Sukses"
        })
    },

    getAllCharacters: async (req, res) => {
        const characters = await MbtiCharacters.findAll();

        res.status("200").json({
            message: "Sukses",
            data: {
                characters
            }
        })
    },

    result: async (req, res) => {
        const { selected_characters } = req.body;
        const mbtiTypes = await MbtiTypes.findAll()

        const user = req.user;

        listCharacters = selected_characters;
 
        // Step 1: Deklarasi Rules
        let tempResult = await MbtiRules.findAll({
            where: {
                character_code: listCharacters,
            },
        });

        // Step 2: Mencari jumlah probabilitas setiap Hipotesis
        let probTotalH = {}
        mbtiTypes.map((type) => {
            let total = 0
            tempResult.map((temp) => {
                if (temp.type_code === type.code) {
                    total += temp.probability;
                }
            })
            probTotalH[type.code] = total;
        })

        // Step 3: Mencari nilai probabbilitas hipotesis H tanpa memandang evidence apapun bagi masing – masing
        let PHi = {}
        tempResult.map((temp) => {
            let total = 0
            mbtiTypes.map((type) => {
                if (temp.type_code === type.code) {
                    total = temp.probability / probTotalH[type.code]
                }
            })
            
            PHi[temp.character_code] = total;
        })

        // Step 4: Mencari nilai probabilitas hipotesis memandang evidence dengan cara mengalihkan nilai probabilitas evidence dan menjumlahkan hasil perkalian bagi masing masing hipotesis.
        let PEHK = {}
        mbtiTypes.map((type) => {
            let total = 0
            tempResult.map((temp) => {
                if (temp.type_code === type.code) {
                    total += (temp.probability * PHi[temp.character_code])
                }
            })
            
            PEHK[type.code] = total;
        })

        // Step 5: Mencari nilai P(Hi|E) atau probabilitas hipotesis hI benar jika diberikan evidence E
        let PHiEi = {}
        tempResult.map((temp) => {
            let total = 0
            mbtiTypes.map((type) => {
                if (temp.type_code === type.code) {
                    total = (temp.probability * PHi[temp.character_code]) / PEHK[type.code]
                }
            })
            
            PHiEi[temp.character_code] = total;
        })

        let probFinal = {}
        mbtiTypes.map((type) => {
            let total = 0
            tempResult.map((temp) => {
                if (temp.type_code === type.code) {
                    total += (temp.probability * PHiEi[temp.character_code])
                }
            })
            
            probFinal[type.code] = total;
        })

        const [maxKey, maxValue] = Object.entries(probFinal).reduce((acc, [key, value]) => {
            return value > acc[1] ? [key, value] : acc;
        }, [null, Number.NEGATIVE_INFINITY]);

        const typeResult = await MbtiTypes.findOne({
            where: {
                code: maxKey,
            }
        });

        // Save Test History
        

        res.status("200").json({
            message: "Sukses",
            typeResult,
            probResult: maxValue,
            // allProbability: probFinal,
        })
    }
}