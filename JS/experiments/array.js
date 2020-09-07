// Array usa corchetes/brakets
//Son objetos que conservan un orden
/*
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(daysOfTheWeek );
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[5]);
console.log(daysOfTheWeek[6]);
*/
/*
const primeNumbers = [1,2,3,5,7,11,13,17];
console.log( primeNumbers[0] );
console.log(primeNumbers.length);
console.log(primeNumbers.join(" signo "));
console.log(primeNumbers.join());
*/

const courses = [
  { "teacher": "Kyle Simpson" , course: "JS Function Lite"},
  { teacher: "Sarah Drasner" , course: "Intro to Vue"},
  {teacher: "Brian Holt" , course: "Complete intro to React v3"},
  true,
  14,
  "hola hola"
];
/*
console.log( courses );
courses.push({ teacher: "Sean Larkin", course: "Webpack"  });
console.log( courses.length  );   //largo del array
console.log(courses);

const course = courses.pop();   //Remueve el
console.log(course);
console.log( courses.length  );

console.log(courses[2]);
courses[2] = {teacher: "Brian Holt" , course: "Complete intro to React v4"};
console.log(courses[2]);

console.log( courses);
*/
/*
console.log(courses);
const subarray= courses.splice(1,1,"hola");
console.log(subarray);
console.log(courses);
console.log( Object.keys(courses[0])  );
*/

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];
//Metodo 1
for(i = 0; i< cities.length; i++){
  console.log(cities[i]);
  //console.log(cities[i].toUpperCase());
};
console.log(`----------`);
//Metodo 2, con funcion buildint: functional programing
cities.forEach(function(cities, index){
  console.log(cities, index);
  //console.log(cities.toUpperCase());
});
//Metodo 3, map function
/**
 * MAP recorre el array y crea un nuevo array con cada una de las cosas
 * La idea es tomar un array de algo, y transformalo en un array de otro tipo
 */
const newCities = cities.map(function(city){
  return city.toUpperCase()
});
console.log(newCities);






