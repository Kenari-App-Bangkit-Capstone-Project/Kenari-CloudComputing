const { Op } = require('sequelize');

const { Discussions, DiscussionComments, Users } = require("../../models");

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

    getDiscussionsDetailByID: async (req, res) => {
        try {
            const { id } = req.params;

            const discussion = await Discussions.findOne({
                attributes: ["id", "content", "createdAt"],
                include: [
                    {
                        attributes: ["user_id", "name", "email", "label", "profile_photo"],
                        model: Users,
                        as: 'user',
                    },
                ],
                where: {
                    id: id,
                    status: {
                        [Op.not]: 'deleted'
                    }
                },
            })

            if (discussion) {
                const comments = await DiscussionComments.findAll({
                    attributes: ["id", "discussion_id", "comment", "createdAt"],
                    include: [
                        {
                            attributes: ["user_id", "name", "email", "label", "profile_photo"],
                            model: Users,
                            as: 'user',
                        },
                    ],
                    where: {
                        discussion_id: id,
                    },
                    order: [['createdAt', 'ASC']], 
                }) 

                res.status(200).json({
                    message: "Sukses mendapatkan data!",
                    data: {
                        discussion,
                        comments
                    }
                })
            } else {
                res.status(404).json({
                    message: "Diskusi tidak ditemukan!",
                })
            }

        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    },

    getAllDiscussion: async (req, res) => {
        try {
            const discussions = await Discussions.findAll({
                attributes: ["id", "content", "createdAt"],
                include: [
                    {
                        attributes: ["user_id", "name", "email", "label", "profile_photo"],
                        model: Users,
                        as: 'user',
                    },
                ],
                where: {
                    status: {
                        [Op.not]: 'deleted'
                    }
                },
                order: [['createdAt', 'DESC']],  
            })

            res.status(200).json({
                message: "Sukses mendapatkan data!",
                data: {
                    discussions
                }
            })
        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    },

    getUserDiscussion: async (req, res) => {
        try {
            const user_id = req.user.user_id;

            const discussions = await Discussions.findAll({
                attributes: ["id", "content", "createdAt"],
                include: [
                    {
                        attributes: ["user_id", "name", "email", "label", "profile_photo"],
                        model: Users,
                        as: 'user',
                    },
                ],
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
                    discussions
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
    },

    addComment: async (req, res) => {
        try {
            const user_id = req.user.user_id;
            const { id } = req.params;
            const { comment } = req.body;  

            const discussion = await Discussions.findOne({
                where: {
                    id: id,
                    status: {
                        [Op.not]: 'deleted'
                    }
                },
            })

            if (discussion) {
                const newComment = await DiscussionComments.create({
                    user_id: user_id,
                    discussion_id: id,
                    comment: comment
                })
    
                res.status(200).json({
                    message: "Sukses menambahkan komentar baru!",
                    data: {
                        newComment
                    }
                })
            } else {
                res.status(404).json({
                    message: "Diskusi tidak ditemukan!",
                })
            }

        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    }
}