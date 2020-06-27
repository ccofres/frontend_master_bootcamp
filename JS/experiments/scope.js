/*function addFive(number) {
    const someVariable = "you can't see me outside this function";
    console.log(anotherVariable); //variable global
    
    return number + 5;
}

const anotherVariable = `something else`; //variable global

console.log(addFive(10));
console.log(someVariable); //someVariable es una variable local
                            //por lo tanto, esta fuera del scope
*/
/*
let friendsInLoop = 0;
for (let i = 0; i <= 10; i++){
    console.log(friendsInLoop);
    friendsInLoop++;
}

let yetAnotherVariable;
if (true){
    yetAnotherVariable = `in the scope?`
} console.log(yetAnotherVariable);
*/

//This code is taking exactly from: https://frontendmasters.github.io/bootcamp/functions-and-scope
/*
const A = "A";
let F;

function doStuff(B) {
  console.log(B); // funciona, paramatro B dentro del scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // no funciona, D fue declarado en el if anterior
  console.log(H); // funciona, H fue declarado como variable local de la funcion doStuff
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // funciona, A es una varible declarada en el scope global
  const G = "G";
}
console.log(E); // funciona, E es una variable declarada fuera del bloque while, es scope global
console.log(G); // no funciona, G fue declada como variable local, y por lo tanto disponible solo dentro del bloque while

doStuff("B");
console.log(B); // no funciona, B fue declarada solo como parametro de la funcion doStuff. Solo disponible en el scope de la funcion
console.log(C); // no funciona, C fue declarada como parametro de doStuff. Disponible solo en el scope local de la funcion
console.log(F); // funciona
*/
let something = `outside the function`;
let thingToKeep;
function thing(){
    let something = `outside the if statement`;
    if(true){
        let something = `inside the if statement`;
        console.log(something);
    }
    console.log(something);
    thingToKeep = `defined now inside the function`;
}

console.log(thingToKeep );
thing();
console.log(something);
console.log(thingToKeep );

