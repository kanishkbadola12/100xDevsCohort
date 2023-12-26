const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const SCHEMAS = require("../db/index");

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
        .catch(() => res.status(400).send('Unable to save to database'));
});

router.post('/courses', adminMiddleware, (req, res) => {
    const courses = req.body.course;
    const courseModel = new SCHEMAS.Course({ ...courses });

    courseModel.save()
        .then(() => res.json({ message: 'Course created successfully' }))
        .catch(() => res.status(400).send('Unable to save to database'));
});

router.get('/courses', adminMiddleware, (req, res) => {
    SCHEMAS.Course.find().then(courses => res.json({ courses: courses }) );
});

module.exports = router;