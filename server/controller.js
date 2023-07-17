const db = [
    {
        anId: 1,
        animalType: "Elephants",
        animalQuantity: 8,
    },
    {
        anId: 2,
        animalType: "Tigers",
        animalQuantity: 4,
    }, {
        anId: 3,
        animalType: "Horses",
        animalQuantity: 25,
    },
    {
        anId: 4,
        animalType: "Dogs",
        animalQuantity: 8,
    },
    {
        anId: 5,
        animalType: "Monkeys",
        animalQuantity: 2,
    }

]

let anId = 6

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
        let { animalType, animalQuantity } = req.body
        let newAn = {
            anId,
            animalType,
            animalQuantity
        }
        db.push(newAn);
        res.status(200).send(db)
        anId++

    },

    deleteAnimal: (req, res) => {
        const { id } = req.params;
        const indexofAnimal = db.findIndex((animal) => animal.anId === +id);
        if (indexofAnimal === -1) {
            res.status(400).send("Animal doesn't exist");
            return;
        }
        db.splice(indexofAnimal, 1);
        res.status(200).send(db);
    },


    updateAnimal: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = db.findIndex(elem => +elem.anId === +id)
        console.log(res)
        console.log(index)
        console.log(id)
        if (db[index].animalQuantity <= 1 && type === 'minus') {
            db[index].animalQuantity = 0
            res.status(200).send(db)
        } else if (type === 'plus') {
            db[index].animalQuantity += 1
            res.status(200).send(db)
        } else if (type === 'minus') {
            db[index].animalQuantity -= 1
            res.status(200).send(db)
        } else {
            res.sendStatus(400)
        }
    }
}

