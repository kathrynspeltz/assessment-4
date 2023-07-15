const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const animalsDB = document.getElementById('animalsDB')
const addAnimalForm = document.getElementById('addAnimalForm')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const printFortune = (fortune) => {
    let fortuneAnswer = document.getElementById('fortuneAnswer')
    fortuneAnswer.textContent = fortune

}

const printAnimalsDB = (animals) => {

    animalsDB.innerHTML = ``;
    animals.map((animal) => {
        const holdingDiv = document.createElement("div");
        holdingDiv.innerHTML = `
              <ul>
                  <li>Animal: ${animal.animalType}</li>
                  <li>Count: ${animal.animalQuantity}</li>
                  <button onclick="deleteAnimal(${animal.animalType})"> Delete </button>
                  <button onclick="addAnimal(${animal.animalType})">Add 1 more</button>
                  <button onclick="removeAnimal(${animal.animalType})">Remove 1</button>
              </ul>
          `;
        animalsDB.appendChild(holdingDiv);
    });
};

const addAnimal = () => {
    e.preventDefault();
    const body = {
        animalType: addAnimalType.value,
        animalQuantity: addAnimalAmount.value,
    };
    axios.post("http://localhost:4000/api/animals/").then(res => printAnimalsDB(res.data))
}

const getAnimals = () => {
    axios.get("http://localhost:4000/api/animals/").then(res => printAnimalsDB(res.data))
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => printFortune(res.data));
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addAnimalForm.addEventListener("submit", addAnimal)
document.addEventListener("DOMContentLoaded", getAnimals);