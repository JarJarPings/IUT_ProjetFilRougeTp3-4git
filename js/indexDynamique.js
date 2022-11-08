//Récupération des element DOM composant la page index par leurs ID
const mainSectAcceuil = document.getElementById("mainSectionAcceuil");
const listInfosPerso = document.getElementById("listInfosPerso");
const divPageAudio = document.getElementById('divPageAudio');
const divPageVideo = document.getElementById('divPageVideo');
const formPageContact = document.getElementById('formPageContact');
const divTableAnimaux = document.getElementById('divTableAnimaux');

//Rendre les éléments hidden par défauts à l'affichage
mainSectAcceuil.style.display = "none";
listInfosPerso.style.display = "none";
divPageAudio.style.display = "none";
divPageVideo.style.display = "none";
formPageContact.style.display = "none";
divTableAnimaux.style.display = "none";

//Récupérer l'ID des ancres <a> du menu
const ancreAcceuill = document.getElementById("ancreAcceuill");
const ancrePerso = document.getElementById("ancrePerso");
const ancreAudio = document.getElementById('ancreAudio');
const ancreVideo = document.getElementById('ancreVideo');
const ancreContact = document.getElementById('ancreContact');
const ancreAnimaux = document.getElementById('ancreAnimaux');

//Récup ID MainTitle et paraNav
let mainTitle = document.getElementById('MainTitle');
let paraNav = document.getElementById('paraNav');

//Par différent events onClick on indique quels éléments DOM s'affiche ou non

//ANCRE ACCEUIL
ancreAcceuill.onclick = function (){

    mainTitle.innerText = "Acceuil";
    paraNav.style.display = "none";

    mainSectAcceuil.style.display = "block";
    listInfosPerso.style.display = "none";
    divPageAudio.style.display = "none";
    divPageVideo.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";

//On aurais pu faire mieux avec des classes toggle et l'usage du this
    //On click et c'est l'objet courant(this) qui est visible tandis que les autres reste hidden
    //indexMenuValue = 1;
    //console.log(indexMenuValue);

};




//ANCRE PERSO
ancrePerso.onclick = function (){

    mainTitle.innerText = "Mes infos persos !";
    paraNav.style.display = "none";

    listInfosPerso.style.display = "block";
    mainSectAcceuil.style.display = "none";
    divPageAudio.style.display = "none";
    divPageVideo.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";


    //console.log(indexMenuValue);

};

//ANCRE AUDIO
ancreAudio.onclick = function (){

    mainTitle.innerText = "Visite audio";
    paraNav.style.display = "none";

    divPageAudio.style.display = "block";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
    divPageVideo.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";


};

//ANCRE VIDEO
ancreVideo.onclick = function (){

    mainTitle.innerText = "Visite vidéo";
    paraNav.style.display = "none";

    divPageVideo.style.display = "block";
    divPageAudio.style.display = "none";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";


};


//ANCRE CONTACT
ancreContact.onclick = function (){

    mainTitle.innerText = "Contact";
    paraNav.style.display = "none";

    formPageContact.style.display = "block";
    divPageVideo.style.display = "none";
    divPageAudio.style.display = "none";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
    divTableAnimaux.style.display = "none";

};


//ANCRE ANIMAUX
ancreAnimaux.onclick = function (){

    mainTitle.innerText = "Nos animaux";
    paraNav.style.display = "none";

    divTableAnimaux.style.display = "block";
    formPageContact.style.display = "none";
    divPageVideo.style.display = "none";
    divPageAudio.style.display = "none";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//NOUVELLE PARTIE SUR GESTION DYNAMIQUE INSERT TABLEAU ANIMAUX
//AVEC FICHIER JSON

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//JSON
console.log(animauxJson);
let jsonAnimaux = animauxJson;
const jsonAnimauxLion = animauxJson['espece'][2];

console.log(jsonAnimaux);
console.log(jsonAnimauxLion);



//Gestion dynamique du tableau
//const divTableAnimaux = document.getElementById("divTableAnimaux");

//Récup des élément byID

//récup <table>
const mainTable = document.getElementById("MainTable");
//récup tbody
const animauxTbody = document.getElementById("animauxTbody");
//Récup form
const formAddAnimal = document.getElementById("formAddAnimal");
//Récup VALUE des input
let valueAddAnimalNom = document.getElementById("inputNomFormAddAnimal").value;
let valueAddAnimalDescri = document.getElementById('inputDescripFormAddAnimal').value;
let valueAddAnimalOrigin = document.getElementById('inputOriginFormAddAnimal').value;
let valueAddAnimalImg = document.getElementById('inputImageFormAddAnimal').value;
//Récup boutton AddAnimal
const btnAddNewAnimal = document.getElementById('btnAddNewAnimal');

//Add new Fragment dans DOM
const addFrag = document.createDocumentFragment();


//Event onClick sur boutton addNewAnimal

btnAddNewAnimal.onclick = function (){
    valueAddAnimalNom = document.getElementById("inputNomFormAddAnimal").value;
    console.log("nom: "+valueAddAnimalNom);
    valueAddAnimalDescri = document.getElementById('inputDescripFormAddAnimal').value;
    console.log("descriptif : "+valueAddAnimalDescri);
    valueAddAnimalOrigin = document.getElementById('inputOriginFormAddAnimal').value;
    console.log("pays origine : "+valueAddAnimalOrigin);
    valueAddAnimalImg = document.getElementById('inputImageFormAddAnimal').value;
    console.log("url img :" +valueAddAnimalImg);
};

function testJson (jsonObj){
    let myH3 = document.createElement('h3');
    myH3.textContent = jsonObj['espece']+jsonObj['name'];
    animauxTbody.appendChild(myH3);

};

testJson(jsonAnimaux);