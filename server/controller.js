const db = [
    {
        animalType: "Elephants",
        animalQuantity: 8,
    },
    {
        animalType: "Tigers",
        animalQuantity: 4,
    }, {
        animalType: "Horses",
        animalQuantity: 25,
    },
    {
        animalType: "Dogs",
        animalQuantity: 8,
    },
    {
        animalType: "Monkeys",
        animalQuantity: 2,
    }

]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will one day go to the moon!", "You are destined for great things!", "You will own 8 cats when you are old!", "Follow the way of the butterfly and you will achieve greatness!", "Avoid having snakes in your life, they may bite you."]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune);

    },

    getAnimals: (req, res) => {
        res.status(200).send(db)
    },

    addAnimal: (req, res) => {
        const { animalType, animalQuantity } = req.query

        db.push({ animalType: animalType, animalQuantity: animalQuantity });
        res.status(200).send(db)

    },
}
