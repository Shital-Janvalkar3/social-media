const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = async(req, res, next) => {
    try {

        const jwtToken = req.header("x-access-token");

        if (!jwtToken) {
            return res.status(403).json("Unauthorised");
        }
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

        req.user = payload.user;

        next();

    } catch (err) {
        console.log(err.message);
        return res.status(403).json("Unauthorised");
    }
}