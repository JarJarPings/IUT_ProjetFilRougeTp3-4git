//let xhr = new XMLHttpRequest();
//xhr.open("POST","connexion.php",true,"admin","ajax");

$(document).ready(function (){
   //alert("script ajax top");

   $('#formConnex').submit(function (event){

       //code
       var donnees = $('#formConnex').serialize();

       var requete = $.ajax(
           {
               type:"GET",
               url:"connexion.php",
               dataType: 'json',
               data: donnees,
               encode:true
           }
       );
       requete.done(function (data){
          if (data.success){
              console.log(data.login);
              console.log(data.password);
          }else {
              console.log("error");
          }
       });

       requete.fail()

       //Stop le submit "normal" et évite de rafraichir page
       //event.preventDefault();
   })


});





