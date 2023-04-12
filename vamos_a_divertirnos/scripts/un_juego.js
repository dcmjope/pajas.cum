let hola = document.querySelector("h1")
let boton = document.querySelector("button")



var numclicks = 0
var canclickvar = false
var tiempo = 0


function holaclick() {

fetch('https://www.cloudflare.com/cdn-cgi/trace')
.then(response => console.log(JSON.stringify(response))
.then(console.log(response))

)









/*
function(data){
  data = data.trim().split('\n').reduce(function(obj, pair){
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  },
  {}
  );
  console.log(data)
}
*/




    


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
    



   















    default:
        break;
}



}












