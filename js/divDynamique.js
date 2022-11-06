//Nos listes de villes
let listCityFR = ["Grenoble","Rennes","Montpellier","Saint-Etienne","Lyon","Marseille"];
let longFr = listCityFR.length;
//console.log(listCityFR.length);
//console.log(longFr);
let listCityESP = ["Barcelone","Grenade","Madrid","Cordou"];
let longESP = listCityESP.length;
let listCityIT =  ["Rome","Venise","Florence","Turin","Milan"];
let longIT = listCityIT.length;
let listCityALL = ["Berlin","Hambourg","Munich","Cologne"];
let longALL = listCityALL.length;

/*


REF PIERRE GIRAUD !!!!
Pour itérer dans cette liste d’objets NodeList et accéder à un élément en particulier,
 on va pouvoir utiliser la méthode forEach().
 */
//Récupération des éléments
const divTest = document.getElementById('divFR');
const elementUlFR = document.getElementById('ulFR');
const elementUlESP = document.getElementById('ulESP');
const elementUlIT = document.getElementById('ulIT');
const elementUlALL = document.getElementById('ulALL');
//Crée un nouveau vide DocumentFragment dans lequel des nœuds DOM peuvent être ajoutés
// pour construire un arbre DOM hors écran.
const fragment = document.createDocumentFragment();
//crée une liste  dans un DocumentFragment,
// puis ajoute la nouvelle sous-arborescence DOM au document à afficher.
// ref MDN website


//Create élément li
let liFR = document.createElement('li');
let liESP = document.createElement('li');
let liIT = document.createElement('li');
let liALL = document.createElement('li');


//Récup id botoon ADD des villes par pays
const btnAddFRcity = document.getElementById('btnAddFR');
btnAddFRcity.style.visibility = "hidden";
const btnAddESPcity = document.getElementById('btnAddESP');
btnAddESPcity.style.visibility = "hidden";
const btnAddITcity = document.getElementById('btnAddIT');
btnAddITcity.style.visibility = "hidden";
const btnAddALLcity = document.getElementById('btnAddALL');
btnAddALLcity.style.visibility = "hidden";

//ENSEMBLE DE FOREACH SUR NOS TABLEAU FR ESP IT ALL
//Utilise forEach pour itérer sur tout les élément de nos liste de villes et incrémenter le param
listCityFR.forEach((listCityfr) =>{
    //Variable liFR sert a créer élément li
    liFR = document.createElement('li');
    //Les élément li créer aurons comment contenu text les itération incrémenter
    liFR.textContent = listCityfr;
    //On créer un nouveau vide dans lequel on ajoute les nouveaux nœuds DOM li
    fragment.appendChild(liFR);
});
//ON ajoute le nouveau fragment DOM en précisant sont emplacement, ici la 'ulFR" qui est parent
elementUlFR.appendChild(fragment);

listCityESP.forEach((listCityesp) =>{
    liESP = document.createElement('li');
    liESP.textContent = listCityesp;
    fragment.appendChild(liESP);
});
elementUlESP.appendChild(fragment);

//Pour tous les éléments de listCityIT(lenght)
//Stock dans param listCityit l'élément correspondant
//C'est a dire qu'a la premére itération de la boucle
//listCityit = listCityIT[0] puis index 1,2,3...n.lenght
listCityIT.forEach((listCityit) =>{
    //Créer une balise li
    liIT = document.createElement('li');
    //lui associer du text
    liIT.textContent = listCityit;
    //L'intégrer au "vide" sous ensemble noeuds
    fragment.appendChild(liIT);
    //En gros le forEach répéte l'opération autant
    // de fois qu'il y a d'élements dans la liste/tableau
    //ON ne défini pas le nombre d'itération comme dans for
});
//Une fois tous les enfants LI créer dans le parent(createDocumentFragment)
//Ajoute l'ensmble du fragment en tant qu'enfant de la liste UL.
elementUlIT.appendChild(fragment);

listCityALL.forEach((listCityall) =>{
    liALL = document.createElement('li');
    liALL.textContent = listCityall;
    fragment.appendChild(liALL);
});
elementUlALL.appendChild(fragment);


//PARTIE CONTROLE DE l'EVENT SUR BOUTTON
const btnValideDest = document.getElementById("btnValideDest");
const  inputDest = document.getElementById("inputDest");

btnValideDest.onclick = function (){
    //On récup la value passé par l'user dasn l'input au moment du click
    //On ne préfixe pas la variable par let ou const
    //ainsi sa portée est globale méme en étant déclarer dans fonction
    valueInputDest = document.getElementById("inputDest").value;
    //valueInputDest.trim();
    //Supprimez les espaces avec trim()
    console.log(valueInputDest.trim());
    //Supprimez les espaces avec replace()
    // en utilisant une expression régulière :
    alert("Vous étes à  " + valueInputDest);

    parafTest = document.getElementById('pTest');
    parafTest.textContent = "Vous étes à "+valueInputDest+", cette ville n'est pas encore référencée";


    listCityFR.forEach((valDest) =>{
        if (valueInputDest == valDest){
            parafTest.textContent = "Bienvenue en France";
            btnAddFRcity.style.visibility = "visible";
            btnValideDest.style.visibility = "hidden";
        };
    });

    listCityESP.forEach((valDest) =>{
        if (valueInputDest == valDest){
            parafTest.textContent = "Bienvenue en Espagne";
            btnAddESPcity.style.visibility = "visible";
            btnValideDest.style.visibility = "hidden";
        };
    });

    listCityIT.forEach((valDest) =>{
        if (valueInputDest == valDest){
            parafTest.textContent = "Bienvenue en Italie";
            btnAddITcity.style.visibility = "visible";
            btnValideDest.style.visibility = "hidden";
            //Comment faire pour afficher la liste des villes qu'il restent a visiter  dans se pays sans afficher celle qui en passer en value d' linput par l'user ???
        };
    });

    listCityALL.forEach((valDest) =>{
        if (valueInputDest == valDest){
            parafTest.textContent = "Bievenue en Allemagne";
            btnAddALLcity.style.visibility = "visible";
            btnValideDest.style.visibility = "hidden";
        };
    });

    valueInputDest = document.getElementById("inputDest").value = "";
    //document.getElementById("inputDest").value = "";
    //C'est en click sur btnValideDest qu'on initialise la value
    //de inputDest

};

/*
Premièrement, pour ajouter ou supprimer un élément à la fin du tableau,
    vous pouvez respectivement utiliser push() et pop().
 */
let addOK =0;

//BTN ADD FR CITY
btnAddFRcity.onclick = function (){
//ON réinitialise la valueInputDest
    valueInputDest = document.getElementById("inputDest").value;

    listCityFR.forEach((valDest) =>{
        if (valueInputDest !== valDest){
            //listCityFR.push(valueInputDest);
            addOK = addOK+1;
            console.log("addOK +"+addOK);
            if (valueInputDest !== valDest && addOK == longFr){
                listCityFR.push(valueInputDest);
                addOK = 0;
                console.log("addOK reitinit : "+addOK);
                //addOK = longFr+1;
                //console.log("addOK >= longFr"+addOK);
            }else if (valueInputDest == valDest && addOK == longFr){
                console.log("Sortie de if")
            };
            console.log(listCityFR);
            btnAddFRcity.style.visibility = "hidden";
            btnValideDest.style.visibility = "visible";
        }else if (valueInputDest == valDest && addOK <= longFr){
            console.log(" else if : "+addOK);
            alert("cette ville est déja référencée !");
            listCityFR.pop();
            valueInputDest = document.getElementById("inputDest").value = "";
            //addOK = 0;
            //parafTest.textContent = "Bienvenue en France";
        };


    });

//On delete tous les firstChild un a un tant qu'il y en a un
    while(elementUlFR.firstChild){
        elementUlFR.removeChild(elementUlFR.firstChild);
    }

    listCityFR.forEach((listCityfr) =>{
        liFR = document.createElement('li');
        liFR.textContent = listCityfr;
        fragment.appendChild(liFR);
    });
    //elementUlFR.removeChild('li');
    elementUlFR.appendChild(fragment);
    //elementUlFR.replaceChild(fragmentFR,fragment2);


};

//BTN ADD ESP CITY

btnAddESPcity.onclick = function (){

    valueInputDest = document.getElementById("inputDest").value;

    listCityESP.forEach((valDest) =>{
        if (valueInputDest !== valDest){
            addOK = addOK+1;
            console.log("addOK +"+addOK);
            if (valueInputDest !== valDest && addOK == longESP){
                listCityESP.push(valueInputDest);
                addOK = 0;
                console.log("addOK reitinit : "+addOK);
            };
            console.log(listCityESP);
            btnAddESPcity.style.visibility = "hidden";
            btnValideDest.style.visibility = "visible";
        }else if (valueInputDest == valDest){
            console.log(" else if : "+addOK);
            alert("cette ville est déja référencée !");
            listCityESP.splice(longESP+1,1);
            //listCityESP.pop();
            valueInputDest = document.getElementById("inputDest").value = "";
        };

    });

    while(elementUlESP.firstChild){
        elementUlESP.removeChild(elementUlESP.firstChild);
    }
    listCityESP.forEach((listCityfr) =>{
        liESP = document.createElement('li');
        liESP.textContent = listCityfr;
        fragment.appendChild(liESP);
    });
    elementUlESP.appendChild(fragment);

};


//BTN ADD IT CITY

btnAddITcity.onclick = function (){

    valueInputDest = document.getElementById("inputDest").value;

    listCityIT.forEach((valDest) =>{
        if (valueInputDest !== valDest){
            addOK = addOK+1;
            console.log("addOK +"+addOK);
            if (valueInputDest !== valDest && addOK >= longIT){
                listCityIT.push(valueInputDest);
                addOK = 0;
                console.log("addOK reitinit : "+addOK);
            }else if (valueInputDest == valDest && addOK == longIT){
                console.log("Sortie de if")
            };
            console.log(listCityIT);
            btnAddITcity.style.visibility = "hidden";
            btnValideDest.style.visibility = "visible";
        }else if (valueInputDest == valDest && addOK <= longIT){
            console.log(" else if : "+addOK);
            listCityIT.push(valueInputDest);
            alert("cette ville est déja référencée !");
            listCityIT.pop();
            valueInputDest = document.getElementById("inputDest").value = "";
        };

    });

    while(elementUlIT.firstChild){
        elementUlIT.removeChild(elementUlIT.firstChild);
    }
    listCityIT.forEach((listCityfr) =>{
        liIT = document.createElement('li');
        liIT.textContent = listCityfr;
        fragment.appendChild(liIT);
    });
    elementUlIT.appendChild(fragment);

};

//BTN ADD ALL CITY


btnAddALLcity.onclick = function (){

    valueInputDest = document.getElementById("inputDest").value;

    listCityALL.forEach((valDest) =>{
        if (valueInputDest !== valDest){
            addOK = addOK+1;
            console.log("addOK +"+addOK);
            if (valueInputDest !== valDest && addOK >= longALL){
                listCityALL.push(valueInputDest);
                addOK = 0;
                console.log("addOK reitinit : "+addOK);
            };
            console.log(listCityALL);
            btnAddALLcity.style.visibility = "hidden";
            btnValideDest.style.visibility = "visible";
        }else if (valueInputDest == valDest && addOK <= longFr){
            console.log(" else if : "+addOK);
            alert("cette ville est déja référencée !");
            listCityALL.push(valueInputDest);
            listCityALL.pop();
            valueInputDest = document.getElementById("inputDest").value = "";
        };

    });

    while(elementUlALL.firstChild){
        elementUlALL.removeChild(elementUlALL.firstChild);
    }
    listCityALL.forEach((listCityfr) =>{
        liALL = document.createElement('li');
        liALL.textContent = listCityfr;
        fragment.appendChild(liALL);
    });
    elementUlALL.appendChild(fragment);

};



