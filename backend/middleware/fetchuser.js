const jwt = require('jsonwebtoken');
const JWT_SIGN = "amd82197@";

const fetchuser = (req, res, next) => {
    //Get the user from the jwt token and add id to objecte req.

    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Not Found!" });
    };
    try {
        const data = jwt.verify(token, JWT_SIGN);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Can't verify you!" });
    };

};


module.exports = fetchuser;





