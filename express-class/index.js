const express = require('express');
const app = express();
app.use(express.json())

var user = {
    name: 'John',
    kidneys: [{
        healthy: false
    }]
};

app.get('/', (req, res) => {
    const kidneys = user.kidneys;
    const numberOfKidneys = kidneys.length;
    const numberOfHealthyKidneys = kidneys.filter(kidney => kidney.healthy).length;
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    user.kidneys.push({ healthy: isHealthy })
    res.json({ message: 'Post Done' });
});

app.put('/', (req, res) => {
    user.kidneys.forEach(kidney => {
        kidney.healthy = true;
    })

    res.json({ message: 'Put Done' });
});

app.delete('/', (req, res) => {
    const userWithHealthyKidneys = user.kidneys.filter(kidney => kidney.healthy)
    user.kidneys = userWithHealthyKidneys

    res.json({ message: 'Delete Done' });
});

app.listen(3000);
