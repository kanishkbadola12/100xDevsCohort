// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username === 'admin' && password === 'pass') {
       next();
    } else {
        res.send('Invalid inputs');
    }
}

module.exports = adminMiddleware;