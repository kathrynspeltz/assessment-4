const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '226d31c39023482084798cc418115a3c',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const { getCompliment, getFortune, addAnimal, getAnimals, deleteAnimal, updateAnimal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/animals", getAnimals);
app.post("/api/animals", addAnimal);
app.delete("/api/animals/:id", deleteAnimal)
app.put("/api/animals/:id", updateAnimal)

app.listen(4000, () => console.log("Server running on 4000"));
