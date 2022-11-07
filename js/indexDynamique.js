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

//ancreAcceuill.style.visibility = "hidden";

let indexMenuValue;

//Par différent events onClick on indique quels éléments DOM s'affiche ou non


//ANCRE ACCEUIL
ancreAcceuill.onclick = function (){
    mainSectAcceuil.style.display = "block";
    listInfosPerso.style.display = "none";
    divPageAudio.style.display = "none";
    divPageVideo.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";
    //indexMenuValue = 1;
    //console.log(indexMenuValue);

};

console.log(indexMenuValue);


//ANCRE PERSO
ancrePerso.onclick = function (){
    //indexMenuValue = 2;
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
    divPageAudio.style.display = "block";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
    divPageVideo.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";
};

//ANCRE VIDEO
ancreVideo.onclick = function (){
    divPageVideo.style.display = "block";
    divPageAudio.style.display = "none";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";
};


//ANCRE CONTACT
ancreContact.onclick = function (){
    formPageContact.style.display = "block";
    divPageVideo.style.display = "none";
    divPageAudio.style.display = "none";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
    divTableAnimaux.style.display = "none";
};


//ANCRE ANIMAUX
ancreAnimaux.onclick = function (){
    divTableAnimaux.style.display = "block";
    formPageContact.style.display = "none";
    divPageVideo.style.display = "none";
    divPageAudio.style.display = "none";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
};

/*
if (indexMenuValue !== 1){
    mainSectAcceuil.style.display = "none";
}else if (indexMenuValue == 1){
    mainSectAcceuil.style.display = "block";
};
*/

/*
if (indexMenuValue == 1){
    console.log("index = 1");
    mainSectAcceuil.style.display = "block";
}else if (indexMenuValue == 2){
    console.log("index = 2");
    listInfosPerso.style.display = "block";
};



function calculIndex (valIndx){
    if (valIndx == 1){
        console.log("index = 1");
        mainSectAcceuil.style.display = "block";
    }else if (valIndx == 2){
        console.log("index = 2");
        listInfosPerso.style.display = "block";
    };
}
calculIndex(indexMenuValue);

 */