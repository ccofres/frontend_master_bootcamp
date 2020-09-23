/*
const BREED_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo() {
  //esta es la parte asincrona de AJAX
  fetch(BREED_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Cute doggos";

      document.querySelector(".doggos").appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addDoggo);
*/

const BREED_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");

fetch(BREED_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    //const breedsObject = data.message;
    //const breedsArray = Object.keys(breedsObject);
    const breedsArray = Object.keys(data.message);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });

select.addEventListener("change", function (event) {
  //console.log(event.target.value);
  //event.target.value === select.value;
  //console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`);
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

  getNewDoggo(url);
});

const img = document.querySelector(".dog-img");
function getNewDoggo(url) {
  //esta es la parte asincrona de AJAX
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      img.src = data.message;
    });
}

function init() {
  const breedUrl =
    "https://dog.ceo/api/breed/australian/shepherd/images/random";
  fetch(breedUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let img = document.createElement("img");
      img.src = data.message;
      img.alt = "Doggos";
      document.querySelector(".dog-img").appendChild(img);
    });
}

init();
