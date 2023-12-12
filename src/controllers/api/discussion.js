const { Discussions } = require("../../models");

module.exports = {
    createDiscussion: async (req, res) => {
        try {
            let { content } = req.body;
            const user_id = req.user.user_id;

            const newDiscussion = await Discussions.create({
                content,
                user_id
            });

            res.status(200).json({
                message: "Sukses membuat diskusi baru!",
                data: {
                    discussion: newDiscussion
                }
            })

        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    },

    deleteDiscussion: async (req, res) => {
        try {
            const user_id = req.user.user_id;            
            const { id } = req.params;

            const deleteDiscussion = await Discussions.update(
                {
                    status: 'deleted',
                    updateAt: new Date(),
                },
                {
                    where: {
                        id: id,
                        user_id: user_id,
                    },
                }
            );

            if (deleteDiscussion[0] > 0) {
                res.status(201).json({
                    message: "Sukses menghapus diskusi",
                });
            } else {
                res.status(404).json({
                    message: "diskusi tidak ditemukan atau tidak memiliki izin untuk dihapus",
                });
            }

        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    }
}