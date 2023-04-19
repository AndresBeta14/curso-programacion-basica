let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3 

function inicarJuego() {

  
   let botonMascotaJugador = document .getElementById('boton-mascota')
   botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

   let botonFuego = document.getElementById('boton-Fuego')
   botonFuego.addEventListener('click', ataqueFuego)
   let botonAgua = document.getElementById('boton-Agua')
   botonAgua.addEventListener('click', ataqueAgua)
   let botonPlanta = document.getElementById('boton-Planta')
   botonPlanta.addEventListener('click',ataquePlanta)
   
   let botonReiniciar = document.getElementById("boton-reiniciar")
   botonReiniciar.addEventListener('click', reiniciarJuego)
}


function seleccionarMascotaJugador (){
    let inputMarguas = document.getElementById('Marguas')
    let inputfirezard = document.getElementById('firezard')
    let inputpalzard = document.getElementById('palzard') 
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputMarguas.checked) {
        spanMascotaJugador.innerHTML= 'Marguas'
     }  else if (inputfirezard.checked) {
        spanMascotaJugador.innerHTML= 'firezard'
     }   else if (inputpalzard.checked)   {
        spanMascotaJugador.innerHTML= 'palzard'
     }   else {
        alert('selecciona una mascota')

     }
     seleccionarMascotaEnemigo ()
}

function seleccionarMascotaEnemigo () {
 let mascotaAleatorio = aleatorio (1,3)
 let spanMascotaEnemigo = document.getElementById ('mascota-enemigo')

 if (mascotaAleatorio == 1) {
   spanMascotaEnemigo.innerHTML = 'Marguas'
 } else if (mascotaAleatorio == 2){
   spanMascotaEnemigo.innerHTML = 'firezard'
 } else {
   spanMascotaEnemigo.innerHTML = 'palzard'
 }
}

function ataqueFuego() {
   ataqueJugador = 'FUEGO'
   alert(ataqueJugador)
   ataqueAleatorioEnemigo()
}

function ataqueAgua() {
   ataqueJugador = 'AGUA'
   alert(ataqueJugador)
   ataqueAleatorioEnemigo()
}

function ataquePlanta() {
   ataqueJugador = 'PLANTA'
   alert(ataqueJugador)
   ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
 let ataqueAleatorio = aleatorio(1,3)
 
 if (ataqueAleatorio == 1) {
   ataqueEnemigo == 'FUEGO'

 } else if (ataqueAleatorio == 2) {
   ataqueEnemigo = 'AGUA'

 } else {
   ataqueEnemigo = 'PLANTA'
 }
 combate()

}
function combate() {
  let spanVidasJugador = document.getElementById('vidas-jugador')
  let spanVidasEnemigo = document.getElementById('vidas-enemigo')

   if (ataqueEnemigo == ataqueJugador) {
      crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
      crearMensaje("PERDISTE")
      vidasJugador--
      spanVidasJugador.innerHTML = vidasJugador
      
    }
    revisarVidas()
    
  
}
function revisarVidas(){
if(vidasEnemigo == 0 ){
  crearMensajeFinal ("FELICITACIONES GANASTE :D")
} else if (vidasJugador == 0) {
  crearMensajeFinal ('Lo siento, perdiste, por manco :(')
}

}

function crearMensaje(resultado){
   let sectionMensajes = document.getElementById ('mensajes')

   let parrafo = document.createElement ('p')
   parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador + ',las mascotas del enemigo ataco con ' + ataqueEnemigo + '- ' + resultado

   sectionMensajes.appendChild (parrafo)
}


function crearMensajeFinal(resultadoFinal){
  let sectionMensajes = document.getElementById ('mensajes')

  let parrafo = document.createElement ('p')
  parrafo.innerHTML = resultadoFinal
  sectionMensajes.appendChild (parrafo)

  let botonFuego = document.getElementById('boton-Fuego')
   botonFuego.disabled = true
   let botonAgua = document.getElementById('boton-Agua')
   botonAgua.disabled = true
   let botonPlanta = document.getElementById('boton-Planta')
   botonPlanta.disabled = true
}

function reiniciarJuego(){
  location.reload()
}

function aleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) +
     min)
}


window.addEventListener('load', inicarJuego)
