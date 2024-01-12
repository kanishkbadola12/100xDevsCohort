const zod = require('zod');

const newCard = zod.object({
    name: zod.string(),
    description: zod.string(),
    socialMedia: zod.object({
        twitter: zod.string(),
        linkedin: zod.string(),
        facebook: zod.string()
    }),
    interests: zod.array(zod.string())
});

const updateCard = zod.string();

const deleteCard = zod.string();

module.exports = {
    newCard,
    updateCard,
    deleteCard
}