


let indice=0;


let tableCityFr = document.getElementById("france");
const tBdodyFR = document.getElementById('tBodyFR');


let newRowCityFr = document.createElement('tr');
let newColCityFr = document.createElement('td');


let allTR = document.getElementsByTagName("tr");
//let allRowFR = document.querySelector('#tBodyFR tr');
let selectTrFr = document.querySelectorAll('tr.trFR')


let classTrFR = document.getElementsByClassName("trFR");
let tdFR = document.getElementsByClassName("tdFR");

//tableCityFr.append(newRowCityFr, newColCityFr)


/*
while (indice < longFr){
   indice++;
   console.log("indice de listCityFr : "+indice);
}

 */

/*
REF PIERRE GIRAUD !!!!
Pour itérer dans cette liste d’objets NodeList et accéder à un élément en particulier,
 on va pouvoir utiliser la méthode forEach().
 */

for (let i = 0; i<=longFr; i++){
//il faut créer les td a partir du noeud tr
   //indice = i;
   //indice = indice + 1;
   tBdodyFR.append(newRowCityFr.cloneNode());
   newRowCityFr.className = 'trFR';
   newRowCityFr.id ="fr"+i;
   let getIdRowFr = newRowCityFr.getAttribute('id');
   console.log("id row :" +getIdRowFr);
   //Marche dans console mais pas dans navigateur ???
   //newRowCityFr.textContent = listCityFR;
   //newRowCityFr.prepend(newColCityFr);
   //let x = document.getElementById("fr"+i);
   //newRowCityFr.textContent = listCityFR[indice];


   //console.log(x);

}
console.log(newRowCityFr);
console.log(selectTrFr);

for (let i = 0; i<=longFr; i++){
   //Trouver comment stock les tr de tBodyFr; fait comme pour tBdodyFR
   //allRowFR.appendChild(newColCityFr);
   //newColCityFr.textContent = listCityFR;
}



/*

   tBdodyFR.appendChild(newRowCityFr);
   newRowCityFr.appendChild(newColCityFr);
   newColCityFr.textContent = listCityFR[indice];

   document.getElementById('tBodyFR').append(newRowCityFr)
   document.getElementsByTagName('tr').append(newColCityFr)

   tBdodyFR.append(newRowCityFr);
   newRowCityFr.append(newColCityFr);

   Premièrement, pour ajouter ou supprimer un élément à la fin du tableau,
    vous pouvez respectivement utiliser push() et pop().
 */



/*
for (let i = -1; i < longFr; i++){
   tBdodyFR.append(newRowCityFr);
   newRowCityFr.append(newColCityFr);
   indice = indice+1;
}

let i = 0;
while (i < 4){
   i++;
   newColCityFr.textContent = listCityFR[i];

}
 */

//gps = input id localise
let gps = document.getElementById("localise").value;
console.log(gps);


//document.getElementsByName();

//document.getElementsByClassName();

btnValidation = document.getElementById("btnLocal");

btnValidation.onclick = function (){
   alert("click");
};

/*
 if (gpsVal == cityFR[0] || gpsVal == cityFR[1] || gpsVal == cityFR[2] || gpsVal == cityFR[3]){
  //$('#france td').removeChild();
  //cityFR.splice(suppTown);
  alert("Bienvenue en France. Vous pouvez aussi visiter :" + cityFR);

 }else if (gpsVal == cityESP[0] || gpsVal == cityESP[1] || gpsVal == cityESP[2] || gpsVal == cityESP[3]){
  alert("Bienvenue en Espagne");

 }else if (gpsVal == cityIT[0] || gpsVal == cityIT[1] || gpsVal == cityIT[2] || gpsVal == cityIT[3]){
  alert("Bienvenue en Italie");

 }else if (gpsVal == cityALL[0] || gpsVal == cityALL[1] || gpsVal == cityALL[2] || gpsVal == cityALL[3]){
  alert("Bienvenue en Allemagne");

 }else{
  console.error("ville non réf");
  alert("ville non réf");
 }
 */

