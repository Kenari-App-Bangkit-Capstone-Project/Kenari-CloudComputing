const { ChatHistories } = require("../../models");
const { Op } = require('sequelize');

module.exports = {
    chatSave: async (req, res) => {
        try {
            let payload = req.body;
            const user_id = req.user.user_id;
    
            payload = {
                ...payload,
                user_id
            }
    
            await ChatHistories.create(payload)
    
            res.status(200).json({
                message: "Sukses menyimpan log chat",
                data: {
                    log_chat: payload
                }
            })
        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    },

    getUserChatHistories: async (req, res) => {
        try {
            const user_id = req.user.user_id;

            const chatHistories = await ChatHistories.findAll({
                where: {
                    user_id: user_id,
                    status: {
                        [Op.not]: 'deleted'
                    }
                },
                order: [['createdAt', 'DESC']],  
            })

            res.status(200).json({
                message: "Sukses mendapatkan data!",
                data: {
                    chatHistories
                }
            })
        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    }
}