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
//récup tbody => devenu divWidget suite modif responsive
const animauxTbody = document.getElementById("divWidget");
//const animauxTbody = document.getElementById("animauxTbody");

//On récup chaine js qu'on parse

const animauxParse = JSON.parse(animauxJson);
console.log(animauxParse);
//Fonction affichage éléments JSON AVEC TABLEAU
/*
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
        const checkB = document.createElement('input');

        h3Td1.textContent = jsonObj[i].name;
        imgTd1.setAttribute('src',jsonObj[i].imgsource);
        newTd2.textContent = 'Descriptif : '+ jsonObj[i].description;
        newTd2.className = 'new2td';
        newTd3.textContent = "Origine : "+jsonObj[i].origine;

        btnDelete.textContent = "supp";
        btnDelete.setAttribute('id','btnSupp'+[i]);

        btnModif.textContent = "modif";
        btnModif.setAttribute('id','btnModif'+[i]);
        //checkB.setAttribute('type','checkbox');
        //checkB.className = "checkAnimal";
        newTr.setAttribute('id','newTr'+[i]);

        newTr.appendChild(newTd1);
        newTd1.appendChild(h3Td1);
        newTd1.appendChild(imgTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);

        newTd4.appendChild(btnModif);
        newTd4.appendChild(btnDelete);
        //newTd4.appendChild(checkB);
        newTr.appendChild(newTd4);


        animauxTbody.appendChild(newTr);

    };
};
//showAnimaux(animauxParse);
//console.log(animauxParse.indexOf(jsonObj[i]));

 */

//FONCTION AFFICHAGE AVEC WIDGETS
function widgetTab(jsonObj){
    animauxTbody.innerHTML = "";

    for (let i = 0; i < jsonObj.length; i++){
        const newDiv = document.createElement('div');
        const h3Div = document.createElement('h3');
        const imgDiv = document.createElement('img');
        const paraDiv = document.createElement('p');
        const para2Div = document.createElement('p');
        const hrDiv = document.createElement('hr')
        const divBtn = document.createElement('div');
        const btnDelete = document.createElement('button');
        const btnModif = document.createElement('button');

        newDiv.className = "jumbotron";
        h3Div.className = "display-4";
        paraDiv.className = "lead";
        hrDiv.className = "my-4";
        divBtn.className = "lead";
        btnDelete.className = "btn btn-primary btn-lg";
        btnModif.className = "btn btn-primary btn-lg";
        //imgDiv.

        newDiv.setAttribute('id','wid'+[i]);

        h3Div.textContent = "Nom : "+jsonObj[i].name;
        imgDiv.setAttribute('src',jsonObj[i].imgsource);
        paraDiv.textContent = 'Descriptif : '+ jsonObj[i].description;

        para2Div.textContent = "Origine : "+jsonObj[i].origine;

        btnDelete.textContent = "supp";
        btnDelete.setAttribute('id','btnSupp'+[i]);

        btnModif.textContent = "modif";
        btnModif.setAttribute('id','btnModif'+[i]);

        newDiv.appendChild(h3Div);
        newDiv.appendChild(imgDiv);
        newDiv.appendChild(paraDiv);
        newDiv.appendChild(para2Div);
        newDiv.appendChild(hrDiv);
        divBtn.appendChild(btnModif);
        divBtn.appendChild(btnDelete)
        newDiv.appendChild(divBtn);

        animauxTbody.appendChild(newDiv);

    };
};
widgetTab(animauxParse);
//ça peux pas marcher a cause des régles css du tbody


//Gestion dynamique du tableau

//Récup des élément byID
//récup <table>
const mainTable = document.getElementById("MainTable");
//Récup form
const formAddAnimal = document.getElementById("formAddAnimal");
//Récup VALUE des input
/*let valueAddAnimalNom = document.getElementById("inputNomFormAddAnimal").value;
let valueAddAnimalDescri = document.getElementById('inputDescripFormAddAnimal').value;
let valueAddAnimalOrigin = document.getElementById('inputOriginFormAddAnimal').value;
let valueAddAnimalImg = document.getElementById('inputImageFormAddAnimal').value;

 */
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

//On récup toutes les value du form pour en faire un nouvel objet
    let myObj = {
        "name":valueAddAnimalNom,
        "imgsource":valueAddAnimalImg,
        "description":valueAddAnimalDescri,
        "origine":[valueAddAnimalOrigin]
    };

    console.log("créer myObj :");
    console.log(myObj);
    //Add le nouvel élément à notre liste animauxParse
    animauxParse.push(myObj);
    console.log(animauxParse);
    widgetTab(animauxParse);

    //console.log(animauxParse[3]);

};



const btnSupp = document.getElementById('btnSupp');
let checkSelect = document.getElementsByClassName('checkAnimal');
console.log(checkSelect);


function suppAnimal(){

    for (i=0; i<checkSelect.length; i++){
        let test = checkSelect[i].getAttribute('checked');
        console.log(test);
    }

}
//checked
// :
// false
btnSupp.onclick = function (){

    for (let i=0; i<checkSelect.length; i++){
        //checkSelect[i].getAttribute('checked');
        console.log(checkSelect[i].getAttribute('checked'));
    }
   //suppAnimal();

}


//console.log(animauxParse.indexOf('1'));

/*
function addNameList(jsObj){

    let nameList = [];

    for (let i = 0; i < jsObj.length; i++) {
        let nameList = jsObj[i].name;
        console.log(nameList);
    }
}
 */