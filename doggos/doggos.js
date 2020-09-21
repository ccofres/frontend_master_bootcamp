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
