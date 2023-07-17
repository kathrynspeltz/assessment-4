const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addAnimal, getAnimals, deleteAnimal, updateAnimal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/animals", getAnimals);
app.post("/api/animals", addAnimal);
app.delete("/api/animals/:id", deleteAnimal)
app.put("/api/animals/:id", updateAnimal)

app.listen(4000, () => console.log("Server running on 4000"));
