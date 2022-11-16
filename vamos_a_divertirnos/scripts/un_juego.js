let hola = document.querySelector("h1")
let boton = document.querySelector("button")



var numclicks = 0
var canclickvar = false
var tiempo = 0


function holaclick() {

    


switch (numclicks) {
    case 0:

    hola.textContent = "¿Quieres pasartelo bien?"
    boton.textContent = "Quiero pasarmelo bien"

    numclicks++
    break;


    case 1:

    hola.textContent = "¡Perfecto! Tengo un juego para tí"
    boton.textContent = 'Vamos a jugar'

    numclicks++
    break;

    case 2:






    hola.style = "font-size: 200%;"
    



    $.getJSON('http://www.geoplugin.net/json.gp', function(data) {
        console.log(JSON.stringify(data, null, 2));
      });
















    default:
        break;
}



}





function text(url) {
    return fetch(url).then(res => res.text());
  }
  







