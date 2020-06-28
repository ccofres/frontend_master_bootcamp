const person = {
    name: `Cristian Cofre`,         //name es una key
    city: `The city of cold`,                //las key deben ser unicas
    state: `Araucania`,
    favoriteFood: `arroz con carne`,
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100,
    //ageRange: `25-35`
};
//console.log(person);
console.log(person.city);
console.log(person.name);

const person1 = {
    name: `Cristian`,
    ageRange: `25-35`
};
const person2 = {
    name: `Baco`,
    ageRange: `0-5`
};
function suggestMusic(person) {
    if (person.ageRange === "25-35"){
      console.log("We think you'll like Daft Punk you crazy millenial.");
    }
    else if(person.ageRange === "65-75"){
      console.log("You are obviously going to like Johnny Cash. He walks the line.");
    }
    else {
      console.log("Uh, maybe try David Bowie? Everyone likes David Bowie, right?");
    }
}
suggestMusic(person1);
suggestMusic(person2);
suggestMusic(person);

const dog = {
  name: "dog",
  speak() {                     // METODO
    console.log("woof woof");
  }
};
dog.speak();


const me = {
  name: {
    first:`Cristian`,            //name es una key
    last:`Cofre`,
    pollos:{
      another: `another woof woof, by pollos`,
      anotherPollos: "Arrrggghh, by pollos"
    }
  },
  location:{
    city: `The city of cold`,   //las key deben ser unicas
    state: `Araucania`,
    country: `Chile`
  }
};
console.log(me);                //Muestra toda la informacion
console.log(me.name);           // Cristian Cofre
console.log(me.name.first);     // Cristian
console.log(me.location.country);  // The city of cold
console.log(me.name.pollos);
console.log(me.name.pollos.another);
console.log(me.name.pollos.anotherPollos);
/*
 * No hay límite para objetos anidados (nested objects)
 * No hay límite para la cantidad de propiedades que un objeto puede tener
 * Las propiedades de un objeto pueden ser de cualquier tipo...
 * Si una propiedad de un objeto es una funcion ==> es un METODO
 */

