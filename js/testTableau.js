let listAnimaux = ["Macaque","Lion","Perroquet","Koala"];
let longnimal = listAnimaux.length;

let valueInputTest = document.getElementById("inputTestAnimal").value;

const tbodyTestAnimaux = document.getElementById('tbodyTestAnimaux');

const btnTestAdd = document.getElementById('btnTestAdd');


const fragTr = document.createDocumentFragment();
const fragTd = document.createDocumentFragment();

let trAnimal = document.createElement('tr');
let tdAnimal = document.createElement('td');

listAnimaux.forEach((animal) =>{

    trAnimal = document.createElement('tr');
    tdAnimal = document.createElement('td');
    tdAnimal.textContent = animal;
    trAnimal.appendChild(tdAnimal);
    //fragTd.appendChild(tdAnimal)
    fragTr.appendChild(trAnimal);


    //tdAnimal;

    //trAnimal.appendChild(tdAnimal);
    //tdAnimal.textContent = animal;
    console.log(animal);


});

tbodyTestAnimaux.appendChild(fragTr);

btnTestAdd.onclick = function (){
    valueInputTest = document.getElementById("inputTestAnimal").value;
    listAnimaux.push(valueInputTest);
    console.log(listAnimaux);

    while (tbodyTestAnimaux.firstChild){
        tbodyTestAnimaux.removeChild(tbodyTestAnimaux.firstChild);
    };

    listAnimaux.forEach((animal) =>{

        trAnimal = document.createElement('tr');
        tdAnimal = document.createElement('td');
        tdAnimal.textContent = animal;
        trAnimal.appendChild(tdAnimal);
        //fragTd.appendChild(tdAnimal)
        fragTr.appendChild(trAnimal);


        //tdAnimal;

        //trAnimal.appendChild(tdAnimal);
        //tdAnimal.textContent = animal;
        console.log(animal);


    });

    tbodyTestAnimaux.appendChild(fragTr);


}