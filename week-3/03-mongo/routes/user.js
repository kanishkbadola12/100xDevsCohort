const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const SCHEMAS = require("../db/index");

let purchasedCourse = [];

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
        .catch(() => res.status(400).send('Unable to save to database'));
});

router.get('/courses', userMiddleware, (req, res) => {
    SCHEMAS.Course.find().then(courses => res.json({ courses: courses }) );
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = parseInt(req.params.courseId);
    SCHEMAS.Course.find().then(courses => {
        const isCourseFound = courses.filter(course => course.id === courseId);
        if (isCourseFound.length > 0) {
            purchasedCourse.push(isCourseFound[0]);
            res.json({ message: 'Course purchased successfully' });
        } else {
            res.send('No courses found');
        }
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    if (purchasedCourse.length > 0) {
        res.json({ purchasedCourse: purchasedCourse });
    } else {
        res.send('No courses purchased');
    }
});

module.exports = router;
