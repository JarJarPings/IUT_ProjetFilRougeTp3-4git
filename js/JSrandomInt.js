$(document).ready(function (){
    alert('doc ok');



    let numMyst = Math.floor(Math.random() * 11);
    $("#nbMyst").html(numMyst);
    $("#nbMyst").hide();


    let Click = 0;


    $('#btnRep').click(function (){
       let nbM = $("#nbMyst").html();
       let nbR = $("#rep").val();

       let nbT = Click+=1;
       $('#tentative').html(nbT);
       if (nbT >= 3){
           $('#btnRep').hide();
           $('#finalMsg').html('Perdu !')
       }

        if (nbR < nbM){
            $('#finalMsg').html(nbR +" nan c'est plus !");
        }else if (nbR > nbM){
            $('#finalMsg').html(nbR + " nan c'est moins !");
        }else if (nbR == nbM){
            $('#finalMsg').html(nbR + " est égal à" + nbM + " !!!");
            $('#nbMyst').show();
        }

    })
})