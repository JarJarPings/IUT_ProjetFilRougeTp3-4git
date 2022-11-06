$(document).ready(function (){
    alert("doc ok");

    $('#btnAjoutDestFr').hide();

    let cityFR = ["Grenoble","Rennes","Montpellier","Saint-Etienne"];
    let longFr = cityFR.length;
    let cityESP = ["Barcelone","Grenade","Madrid","Cordou"];
    let cityIT =  ["Rome","Venise","Florence","Turin"];
    let cityALL = ["Berlin","Hambourg","Munich","Cologne"];



    /*
        $.each(cityFR, function (){
            $('#france').append("<tr><td>city</td></tr>");
        });
 */
        for (let i=0; i<=cityFR.size; i++){
             console.log(i)
         }



    $('#btnLocal').click(function (){
        let gps = $('#localise').val();
        //let suppTown= gps.text;
        //alert("Bienvenue à " + gps);
        if (gps == cityFR[0] || gps == cityFR[1] || gps == cityFR[2] || gps == cityFR[3]){
            //$('#france td').removeChild();
            //cityFR.splice(suppTown);
            alert("Bienvenue en France. Vous pouvez aussi visiter :" + cityFR);
            $('#btnLocal').hide();
            $('#btnAjoutDest').show();
        }else if (gps == cityESP[0] || gps == cityESP[1] || gps == cityESP[2] || gps == cityESP[3]){
            alert("Bienvenue en Espagne");
            $('#btnLocal').hide();
            $('#btnAjoutDest').show();
        }else if (gps == cityIT[0] || gps == cityIT[1] || gps == cityIT[2] || gps == cityIT[3]){
            alert("Bienvenue en Italie");
            $('#btnLocal').hide();
            $('#btnAjoutDest').show();
        }else if (gps == cityALL[0] || gps == cityALL[1] || gps == cityALL[2] || gps == cityALL[3]){
            alert("Bienvenue en Allemagne");
            $('#btnLocal').hide();
            $('#btnAjoutDest').show();
        }else{
            console.error("ville non réf");
            alert("ville non réf");
        }

    })


    $('#test').text(cityFR);
})