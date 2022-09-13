let char1 = "Topolino";
console.log(char1);
let char2 = "Paperino";
console.log(char2);
var char3 = "Pippo";
console.log(char3);
var char4 = "Orazio";

const city1 = "Topolinia";
const city2 = "Paperopoli";
console.log(city1);
console.log(city2);

console.log(`${char1} abita a ${city1}`);
console.log(`${char2} abita a ${city2}`);
console.log(`${char3} abita a ${city1}`);
console.log(`${char4} abita a ${city1}`);

let negation = false;
console.log(`${char2} abita a ${city1}? ` + negation);
console.log(`${char4} non abita a ${city1}: ` + negation);

let tNephews = 2;
let pNephews = 3;
let gNephews = 1;
let oNephews = 0;

console.log(tNephews);
console.log(pNephews);
console.log(gNephews);
console.log(oNephews);

console.log(`I nipoti dei personaggi che abitano a ${city1} sono in totale ` + (tNephews + gNephews + oNephews));
console.log(`I nipoti che abitano a ${city2} sono ` + (tNephews + pNephews + gNephews + oNephews - (tNephews + gNephews)));
