//Récupération des element DOM composant la page index par leurs ID
const mainSectAcceuil = document.getElementById("mainSectionAcceuil");
const listInfosPerso = document.getElementById("listInfosPerso");

//Rendre les éléments hidden par défauts à l'affichage
//mainSectAcceuil.style.display = "none";
listInfosPerso.style.display = "none";

//Récupérer l'ID des ancres <a> du menu
const ancreAcceuill = document.getElementById("ancreAcceuill");
const ancrePerso = document.getElementById("ancrePerso");

//ancreAcceuill.style.visibility = "hidden";

let indexMenuValue;

//Par différent events onClick on indique quels éléments DOM s'affiche ou non

ancreAcceuill.onclick = function (){
    indexMenuValue = 1;
    console.log(indexMenuValue);

};

console.log(indexMenuValue);

ancrePerso.onclick = function (){
    indexMenuValue = 2;
    console.log(indexMenuValue);

};

if (indexMenuValue !== 1){
    mainSectAcceuil.style.display = "none";
}else if (indexMenuValue == 1){
    mainSectAcceuil.style.display = "block";
};


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