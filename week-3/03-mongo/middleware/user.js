function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username === 'user' && password === 'pass') {
       next();
    } else {
        res.send('Invalid inputs');
    }
}

module.exports = userMiddleware;