const express = require('express');
const { newCard, updateCard, deleteCard } = require('./types');
const { cardModel } = require('./db');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.post('/newCard', async (req, res) => {
    const parsedPayLoad = newCard.safeParse(req.body);
    if (!parsedPayLoad.success) {
        res.status(411).json({
            message: 'You sent the wrong inputs'
        });
        return;
    }

    await cardModel.create({
        name: parsedPayLoad.data.name,
        description: parsedPayLoad.data.description,
        socialMedia: parsedPayLoad.data.socialMedia,
        interests: parsedPayLoad.data.interests
    })

    res.json({
        message: 'New card is created'
    })
});

app.get('/cards', async (req, res) => {
    const cards = await cardModel.find({});
    res.json({cards})
});

app.put('/updateCard/:id', async (req, res) => {
    const parsedPayLoad = newCard.safeParse(req.body);
    const parsedId = deleteCard.safeParse(req.params.id)

    if (!parsedPayLoad.success) {
        res.status(411).json({
            message: 'You sent the wrong inputs'
        });
        return;
    }

    const updatedItem = await cardModel.findByIdAndUpdate(parsedId.data, {
        name: parsedPayLoad.data.name,
        description: parsedPayLoad.data.description,
        socialMedia: parsedPayLoad.data.socialMedia,
        interests: parsedPayLoad.data.interests
    });

    if (!Object.keys(updatedItem).length > 0) {
        res.status(404).json({
            message: 'Item not found'
        });
        return;
    }

    res.json({
        message: 'Card is updated successfully'
    });
});

app.delete('/deleteCard/:id', async (req, res) => {
    const parsedId = deleteCard.safeParse(req.params.id)
    if(!parsedId.success) {
        res.status(411).json({
            message: 'You sent the wrong inputs'
        });
        return;
    }

    const deletedItem = await cardModel.findByIdAndDelete(parsedId.data);
    
    if (!Object.keys(deletedItem).length > 0) {
        res.status(404).json({
            message: 'Item not found'
        });
        return;
    }

    res.json({
        message: 'Card is deleted successfully'
    });
});

app.listen(3000);