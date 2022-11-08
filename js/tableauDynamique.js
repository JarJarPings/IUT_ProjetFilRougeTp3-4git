console.log(animauxJson);
let jsonAnimaux = animauxJson;
const jsonAnimauxLion = animauxJson['espece'][2];

console.log(jsonAnimaux);
console.log(jsonAnimauxLion);



//Gestion dynamique du tableau

const divTableAnimaux = document.getElementById("divTableAnimaux");
const mainTable = document.getElementById("MainTable");
const animauxTbody = document.getElementById("animauxTbody");

const addFrag = document.createDocumentFragment();
