const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function verifyUserAuthentication(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username === 'user' && password === 'pass') {
        const token = jwt.sign({ username: username, password: password }, jwtPassword);
        res.locals.jwtToken = token;
        next();
    } else {
        res.send('Invalid inputs');
    }
}

function verifyUserJwtToken(req, res, next) {
    const jwtToken = req.headers.authorization;
    const decoded = jwt.verify(jwtToken, jwtPassword);
    if (decoded.username === 'user' && decoded.password === 'pass') {
        next();
    } else {
        res.send('Token expired/invalid');
    }
}

module.exports = {
    verifyUserAuthentication,
    verifyUserJwtToken
}