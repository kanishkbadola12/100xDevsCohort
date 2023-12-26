const { Router } = require("express");
const router = Router();
const MIDDLEWARE = require("../middleware/user");
const SCHEMAS = require('../db/index');

// let purchasedCourse = [];

// User Routes
router.post('/signup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const userModel = new SCHEMAS.User({
        username: username,
        password: password
    });

    userModel.save()
        .then(() => res.json({ message: 'User created successfully' }))
        .catch(() => res.send('Unable to save to database'))
});

router.post('/signin', MIDDLEWARE.verifyUserAuthentication, (req, res) => {
    if (res.locals.jwtToken) {
        res.json({ token: res.locals.jwtToken });
    } else {
        res.send('Malformed token/request');
    }
});

router.get('/courses', MIDDLEWARE.verifyUserAuthentication, MIDDLEWARE.verifyUserJwtToken, (req, res) => {
    SCHEMAS.Course.find().then(courses => res.json({ courses: courses }));
});

router.post('/courses/:courseId', MIDDLEWARE.verifyUserAuthentication, MIDDLEWARE.verifyUserJwtToken, (req, res) => {
    const courseId = parseInt(req.params.courseId);
    SCHEMAS.Course.find().then(courses => {
        let purchasedCourse = courses.filter(course => course.id === courseId)[0];
        if (purchasedCourse) {
            purchasedCourse = (({ title, description, price, imageLink, id }) => ({ title, description, price, imageLink, id }))(purchasedCourse);
            const purchasedCoursesModel = new SCHEMAS.PurchasedCourses({ ...purchasedCourse });
            purchasedCoursesModel.save()
                .then((data) => res.json({ message: `${data.title} course purchased successfully` }))
                .catch(() => res.send('Unable to save to database'))
        } else {
            res.send('No courses found');
        }
    });
});

router.get('/purchasedCourses',MIDDLEWARE.verifyUserAuthentication, MIDDLEWARE.verifyUserAuthentication, (req, res) => {
    SCHEMAS.PurchasedCourses.find().then(courses => res.json({ purchasedCourses: courses }));
});

module.exports = router;
