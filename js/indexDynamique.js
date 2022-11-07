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

//Récup ID MainTitle
let mainTitle = document.getElementById('MainTitle');

//Par différent events onClick on indique quels éléments DOM s'affiche ou non

//ANCRE ACCEUIL
ancreAcceuill.onclick = function (){

    mainTitle.innerText = "Acceuil";

    mainSectAcceuil.style.display = "block";
    listInfosPerso.style.display = "none";
    divPageAudio.style.display = "none";
    divPageVideo.style.display = "none";
    formPageContact.style.display = "none";
    divTableAnimaux.style.display = "none";


    //indexMenuValue = 1;
    //console.log(indexMenuValue);

};




//ANCRE PERSO
ancrePerso.onclick = function (){

    mainTitle.innerText = "Mes infos persos !";

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

    divTableAnimaux.style.display = "block";
    formPageContact.style.display = "none";
    divPageVideo.style.display = "none";
    divPageAudio.style.display = "none";
    mainSectAcceuil.style.display = "none";
    listInfosPerso.style.display = "none";
};
