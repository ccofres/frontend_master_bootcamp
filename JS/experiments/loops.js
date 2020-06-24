//First loop
/*let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
console.log(friendsAtYourParty);
*/

//First loop: while
/*let friendsInLoop = 0;
while (friendsInLoop < 10){
    //console.log( friendsInLoop );
    friendsInLoop = friendsInLoop + 1;
    console.log( friendsInLoop );
}
console.log(friendsInLoop);
*/

//Second loop: while
/*let friendsInLoop = 0;
while (friendsInLoop < 10){
    //console.log( friendsInLoop );
    //friendsInLoop = friendsInLoop + 1;    //Permite modificar el incremento
    friendsInLoop += 1;                   //permite modificar el incremento
    //friendsInLoop =+ 1;                   //Esto no funciona
    //friendsInLoop++;                      //incremento +1
    //++friendsInLoop;                      //incremento +1, no utilizado
    console.log( friendsInLoop );
}
console.log(friendsInLoop);
*/

let friendsInLoop = 0;
for (let i = 0; i < 10; i++){
    console.log(i);
    friendsInLoop++;
}
console.log(friendsInLoop);


const character = 'f';
const timesToRepeat = 3;
let myString = '';
/*while (myString < timesToRepeat){
  myString = myString + character;
}*/
for(let i = 0; i < timesToRepeat; i++){
  //myString = myString + character;
  myString += character;
}
console.log(myString);
