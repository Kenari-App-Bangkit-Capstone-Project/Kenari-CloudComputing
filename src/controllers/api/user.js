const { Users, MbtiTypes } = require("../../models");

module.exports = {
    getUserById: async (req, res) => {
        try {
            const { id } = req.query;

            const user = await Users.findOne({
                attributes: ["user_id", "name", "email", "label", "address", "university", "personality", "profile_photo", "createdAt", "updatedAt"],
                where: {
                    user_id: id
                }
            })

            if (user) {
                res.status(200).json({
                    message: "Sukses mengambil data user!",
                    data: {
                        user
                    }
                })
            } else {
                res.status(404).json({
                    message: "Data user tidak ditemukan!"
                })
            }

        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    },

    updateUser: async (req, res) => {
        try {
            const payload = req.body;
            const user_id = req.user.user_id;

            await Users.update(
                payload,
                {
                    where: {
                        user_id: user_id,
                    }
                }
                );
                
            const user = await Users.findOne({
                where: {
                    user_id: user_id,
                }
            })

            res.status(201).json({
                message: "User berhasil di update",
                data: {
                    user
                }
            })
            
        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    },

    setPersonality: async (req, res) => {
        try {
            const { mbti_code } = req.body;
            const user_id = req.user.user_id;

            await Users.update(
                {
                    personality: mbti_code,
                    updateAt: new Date(),
                },
                {
                    where: {
                        user_id: user_id,
                    },
                }
            );

            const personality = await MbtiTypes.findOne({
                where: {
                    code: mbti_code,
                }
            })

            res.status(201).json({
                message: `Sukses menerapkan kepribadian ${personality.type}`,
            })

        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    }
}