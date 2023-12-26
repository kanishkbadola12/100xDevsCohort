const { Router } = require("express");
const MIDDLEWARE = require("../middleware/admin");
const router = Router();
const SCHEMAS = require('../db/index');

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    
    const adminModel = new SCHEMAS.Admin({
        username: username,
        password: password
    });

    adminModel.save()
        .then(() => res.json({ message: 'Admin created successfully' }))
        .catch(() => res.send('Unable to save to database'))
});

router.post('/signin', MIDDLEWARE.verifyAdminAuthentication, (req, res) => {
    if (res.locals.jwtToken) {
        res.json({ token: res.locals.jwtToken});
    } else {
        res.send('Malformed token/request');
    }
});

router.post('/courses', MIDDLEWARE.verifyAdminAuthentication, MIDDLEWARE.verifyAdminJwtToken, (req, res) => {
    const courses = req.body.course;
    console.log(courses);
    const courseModel = new SCHEMAS.Course({ ...courses });

    courseModel.save()
        .then((data) => res.json({ message: `${data.title} course created successfully` }))
        .catch(() => res.status(400).send('Unable to save to database'));
});

router.get('/courses', MIDDLEWARE.verifyAdminAuthentication, MIDDLEWARE.verifyAdminJwtToken, (req, res) => {
    SCHEMAS.Course.find().then(courses => res.json({ courses: courses }) );
});

module.exports = router;