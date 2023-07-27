const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const animalsDB = document.getElementById('animalsDB')
const addAnimalForm = document.getElementById('addAnimalForm')
// const addAnimalType = document.getElementById('addAnimalType')
// const addAnimalType = document.getElementById('addAnimalType')

const getCompliment = () => {
    axios.get("http://18.119.1.84/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const printFortune = (fortune) => {
    let fortuneAnswer = document.getElementById('fortuneAnswer')
    fortuneAnswer.textContent = fortune

}

printAnimalsDB = (animals) => {

    animalsDB.innerHTML = ``;
    animals.map((animal) => {
        const holdingDiv = document.createElement("div");
        holdingDiv.innerHTML = `
              <ul>
                <li>ID: ${animal.anId}</li>    
                <li>Animal: ${animal.animalType}</li>
                  <li>Count: ${animal.animalQuantity}</li>
                  <button onclick="deleteAnimal(${animal.anId})">delete</button>
                  <button onclick="updateAnimal(${animal.anId}, 'plus')">Add 1 more</button>
                  <button onclick="updateAnimal(${animal.anId}, 'minus')">Remove 1</button>
              </ul>
          `;
        animalsDB.appendChild(holdingDiv);
    });
};

const addAnimal = (an) => {
    an.preventDefault();
    const body = {
        animalType: addAnimalType.value,
        animalQuantity: addAnimalAmount.value,
    };
    axios.post("http://18.119.1.84/api/animals/", body).then(res => printAnimalsDB(res.data))
    addAnimalType.value = ""
    addAnimalAmount.value = ""
}

const getAnimals = () => {
    axios.get("http://18.119.1.84/api/animals/").then(res => printAnimalsDB(res.data))
}

const getFortune = () => {
    axios.get("http://18.119.1.84/api/fortune/")
        .then(res => printFortune(res.data));
};

const deleteAnimal = (anId) =>
    axios.delete(`http://18.119.1.84/api/animals/${anId}`).then(res => printAnimalsDB(res.data)).catch((err) => console.error(err));

const updateAnimal = (anId, type) =>
    axios.put(`http://18.119.1.84/api/animals/${anId}`, { type }).then(res => printAnimalsDB(res.data)).catch((err) => console.error(err))

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addAnimalForm.addEventListener("submit", addAnimal)
document.addEventListener("DOMContentLoaded", getAnimals);