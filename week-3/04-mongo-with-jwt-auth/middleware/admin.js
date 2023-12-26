const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// Middleware for handling auth
function verifyAdminAuthentication(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username === 'admin' && password === 'pass') {
        const token = jwt.sign({ username: username, password: password }, jwtPassword);
        res.locals.jwtToken = token;
        next();
    } else {
        res.send('Invalid inputs');
    }
}

function verifyAdminJwtToken(req, res, next) {
    const jwtToken = req.headers.authorization;
    const decoded = jwt.verify(jwtToken, jwtPassword);
    if (decoded.username === 'admin' && decoded.password === 'pass') {
        next();
    } else {
        res.send('Token expired/invalid');
    }
}

module.exports = {
    verifyAdminAuthentication,
    verifyAdminJwtToken
};