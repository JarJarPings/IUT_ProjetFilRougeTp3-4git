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
let mainTitle = document.getElementById('FirstTitle');
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
//récup tbody
const animauxTbody = document.getElementById("animauxTbody");
//const animauxJson déclarer dans fichier animaux.JSON
//console.log(animauxJson);
//Qu'on récup dans une autre variable jsonAnimaux

const animauxParse = JSON.parse(animauxJson);
console.log(animauxParse);
function showAnimaux(jsonObj){

    animauxTbody.innerHTML = "";

    for (let i = 0; i < jsonObj.length; i++){
        let newTr = document.createElement('tr');
        //newTr vas inclure les éléments suivants en enfants DOM :
        const newTd1 = document.createElement('td');
        const h3Td1 = document.createElement('h3');
        const imgTd1 = document.createElement('img');
        const newTd2 = document.createElement('td');
        const newTd3 = document.createElement('td');
        const newTd4 = document.createElement('td');
        const btnDelete = document.createElement('button');
        const btnModif = document.createElement('button');

        h3Td1.textContent = jsonObj[i].name;
        //imgTd1.textContent = animaux[i].imgsource;
        imgTd1.setAttribute('src',jsonObj[i].imgsource);
        newTd2.textContent = 'Descriptif : '+ jsonObj[i].description;
        newTd2.className = 'new2td';
        newTd3.textContent = "Origine : "+jsonObj[i].origine;

        btnDelete.textContent = "supp";
        btnModif.textContent = "modif";

        newTr.appendChild(newTd1);
        newTd1.appendChild(h3Td1);
        newTd1.appendChild(imgTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);

        newTd4.appendChild(btnModif);
        newTd4.appendChild(btnDelete);
        newTr.appendChild(newTd4);


        animauxTbody.appendChild(newTr);

    }

}
showAnimaux(animauxParse);
//showAnimaux(animauxParse);



let jnewE;
//Gestion dynamique du tableau
//const divTableAnimaux = document.getElementById("divTableAnimaux");

//Récup des élément byID

//récup <table>
const mainTable = document.getElementById("MainTable");

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

    //const aJson = JSON.parse(jsonAnimaux);
    //console.log("animauxJson récup données JSON : ");
    //console.log(aJson);
    //console.log("animauxJson récup value :")
    //console.log("animauxJson : ");
    //console.log(animauxJson);





    /*SyntaxError: JSON.parse: unexpected character
    let myPars = JSON.parse(jsonAnimaux);
    console.log(" myPars = jsonAnimaux parse : ");
    console.log(myPars);

     */


    //let indexLg= jsonAnimaux.length +1;

    let myObj = {
        "name":valueAddAnimalNom,
        "imgsource":valueAddAnimalImg,
        "description":valueAddAnimalDescri,
        "origine":[valueAddAnimalOrigin]
    };

    console.log("créer myObj :");
    console.log(myObj);
    animauxParse.push(myObj);
    console.log(animauxParse);
    showAnimaux(animauxParse);

    //SyntaxError: JSON.parse: unexpected character
    //jnewE = JSON.parse(myObj);

    /*
    jnewE = JSON.stringify(myObj);
    console.log("jnewE :");
    console.log(jnewE);

     */

    //jsonAnimaux.splice(indexLg, 0, myObj);
    //animauxJson.push(jnewE);
    //const newJSON = JSON.parse(jnewE);
    //console.log("newJSON :");
    //console.log(newJSON);
    //const newAnimal = JSON.parse(jnewE);

    //animauxJson.push(myObj);

    //console.log(jsonAnimaux);

    /*
    Méthode a mmathieu :
    // Update header text
document.querySelector('#header').innerHTML = message
const json = '[{"nom": "Forestier","prenom":"Quentin"},{"nom": "Panel","prenom":"mathieu"}]';

const obj = JSON.parse(json);

console.log(obj.count);
obj.forEach(element => document.getElementById("container").append(element.nom));

const newElement = '{"nom":"Fernandes","prenom":"Alex"}';
const jnewE = JSON.parse(newElement);
obj.push(jnewE);
obj.forEach(element => document.getElementById("container").append(element.nom));
// Log to console
console.log(obj);


     */

    //console.log(typeof ("type myObj : " + myObj))
    //console.log("myObj JS avant stringify : " + myObj);

    /*
   let myJSON = JSON.stringify(myObj);
    console.log("myObj aprés stringify"+myObj);
//console.log(typeof ("type myJSON : " + myJSON))
    console.log("myJSON aprés stringify"+myJSON);


/*

//Stock data JSON en localStorage en paire clé/valeur
    localStorage.setItem("objet",myJSON);

//Lecture
    myJSON = localStorage.getItem("objet");
    myObj = JSON.parse(myJSON);
    console.log("myObj 2 :");
    console.log(myObj);

    let newJsonAnimaux = myObj;
    console.log("New Json Animaux : ");
    console.log(newJsonAnimaux);

    //let jsonAnimaux = animauxJson;
    //console.log(jsonAnimaux);


    let newTr = document.createElement('tr');
    //newTr vas inclure les éléments suivants en enfants DOM :
    let newTd1 = document.createElement('td');
    let h3Td1 = document.createElement('h3');
    let imgTd1 = document.createElement('img');
    let  newTd2 = document.createElement('td');
    let newTd3 = document.createElement('td');
    let newTd4 = document.createElement('td');
    let btnZoom = document.createElement('button');

    h3Td1.textContent = newJsonAnimaux.name;
    //imgTd1.textContent = animaux[i].imgsource;
    imgTd1.setAttribute('src',newJsonAnimaux.imgsource);
    newTd2.textContent = 'Descriptif : '+ newJsonAnimaux.description;
    newTd3.textContent = "Origine : "+newJsonAnimaux.origine;

    btnZoom.textContent = "Zoom";

    newTr.appendChild(newTd1);
    newTd1.appendChild(h3Td1);
    newTd1.appendChild(imgTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);

    newTd4.appendChild(btnZoom);
    newTr.appendChild(newTd4);

    animauxTbody.appendChild(newTr);


//document.getElementById('testParaf').innerHTML = myJSON;

    console.log(jsonAnimaux);

     */




};


