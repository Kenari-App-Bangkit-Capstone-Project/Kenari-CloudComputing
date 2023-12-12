const config = require("../config");
const jwt = require('jsonwebtoken')

const { Users } = require("../models");

const isLoginUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null;

        const data = jwt.verify(token, config.jwtKey);

        const user = await Users.findOne({
            where: { 
                user_id: data.user.user_id
            }
        });

        if (user) {
            req.user = user;
            req.token = token;
            next();
        } else {
            throw new Error();
        }
    } catch (error) {
        res.status(401).json({
            error: 'Not authorized to access this resources',
        });
    }
};

module.exports = {
    isLoginUser,
};