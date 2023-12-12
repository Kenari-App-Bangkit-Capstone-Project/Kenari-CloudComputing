const bcrypt = require("bcrypt");
const config = require("../../config");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Model
const { Users } = require("../../models");

// For Hashing Password
const salt = 10;

module.exports = {
    register: async (req, res, next) => {
        try {
            let payload = req.body;

            const checkEmail = await Users.findOne({ where: { email: payload.email } });

            if (checkEmail === null) {
                // Generate user_id
                let getUser;
                do { 
                    charset =  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    user_id = payload.name.charAt(0);
                    for (var i = 0, n = charset.length; i < 8; ++i) {
                        user_id += charset.charAt(Math.floor(Math.random() * n));
                    };
                    
                    getUser = await Users.findOne({ where: { user_id } });
                } while (getUser !== null);

                bcrypt.hash(payload.password, salt, async (err, hash) => {
                    if (err) throw err;

                    payload = {
                        ...payload,
                        user_id,
                        password: hash,
                    }

                    await Users.create(payload);

                    return res.status(201).json({
                        message: "Daftar akun telah berhasil!"
                    })
                })

            } else {
                return res.status(422).json({
                    message: "Email yang digunakan sudah terdaftar!"
                })
            }   
        } catch (err) {
            if (err && err.name === "ValidationError") {
                return res.status(422).json({
                  error: 1,
                  message: err.message, 
                  fields: err.errors,
                });
            };
            next(err);
        }
    },

    signIn: async (req, res) => {
        try {
            const {email, password} = req.body;

            const getUser = await Users.findOne({ where: { email } });

            if (getUser !== null) {
                bcrypt.compare(password, getUser.password, async (error, response) => {
                    if (response) {
                        const token = jwt.sign(
                            {
                                user: {
                                    user_id: getUser.user_id,
                                    name: getUser.name,
                                    email: getUser.email,
                                    label: getUser.label,
                                    address: getUser.address,
                                    university: getUser.university,
                                    personality: getUser.personality
                                }
                            },
                            config.jwtKey
                        );

                        res.status(200).json({
                            data: {
                                message: "Sukses melakukan login",
                                token
                            }
                        })

                    } else {
                        res.status(403).json({
                            message: "Password yang anda masukkan salah!",
                        })
                    }
                })
            } else {
                res.status(403).json({
                    message: "email yang anda masukkan belum terdaftar.",
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message || `Internal server error!`,
            });
        }
    }
}