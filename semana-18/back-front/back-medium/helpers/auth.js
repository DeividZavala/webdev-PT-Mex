const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.verifyToken = (req, res, next) =>{
    const token = req.headers['x-access-token'];
    if(!token) return res.status(403).json({msg:"No te pases, manda un token"});
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err) return res.status(403).json({err, msg:"Ya te expiro"});
        req.user = await User.findById(decoded.id);
        next();
    })
};