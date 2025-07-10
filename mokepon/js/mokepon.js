let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')  
   sectionSeleccionarAtaque.style.display = 'none'
  
   let sectionReiniciar = document.getElementById('reiniciar')
   sectionReiniciar.style.display = 'none'
 
 
   let botonSeleccionJugador = document.getElementById('boton-seleccion')
     botonSeleccionJugador.addEventListener('click', seleccionarMascotaJugador)
     
     let botonFuego = document.getElementById("boton-fuego")
     botonFuego.addEventListener('click', ataqueFuego)
     let botonAgua = document.getElementById("boton-agua")
     botonAgua.addEventListener('click', ataqueAgua)
     let botonTierra = document.getElementById("boton-tierra")
     botonTierra.addEventListener('click', ataqueTierra)
     
     let botonReiniciar = document.getElementById('boton-reiniciar')
     botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
 let sectionSeleccionarMascota = document.getElementById('seleccion-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
  
   let inputDreidon = document.getElementById('Dreidon')
   let inputTortu = document.getElementById('Tortu')
   let inputRamon = document.getElementById('Ramon')
   let spanmascotaJugador = document.getElementById('mascota-jugador')
  
   
   if (inputDreidon.checked){
       spanmascotaJugador.innerHTML = 'Dreidon'
   } else if (inputTortu.checked){
    spanmascotaJugador.innerHTML = 'Tortu'
   } else if (inputRamon.checked){
    spanmascotaJugador.innerHTML = 'Ramon'
   } else{
    alert('No has elegido a ninguna mascota')
   }
     seleccionarMascotaEnemigo()
}
 
   function seleccionarMascotaEnemigo() {
      let rivalAleatorio = aleatorio(1,3)
      let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
      
      if (rivalAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Dreidon'
      } else if (rivalAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Tortu'
      } else {
        spanMascotaEnemigo.innerHTML = 'Ramon'
      }

   }

function ataqueFuego(){
  ataqueJugador = 'FUEGO'
  ataqueAleatorioEnemigo()
}
function ataqueAgua(){
  ataqueJugador = 'AGUA'
  ataqueAleatorioEnemigo()
}
function ataqueTierra(){
  ataqueJugador = 'TIERRA'
ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
  let ataqueAleatorio = aleatorio(1,3)

  if (ataqueAleatorio == 1){
      ataqueEnemigo = 'FUEGO'
  } else if (ataqueAleatorio == 2){
      ataqueEnemigo = 'AGUA'
  } else{
      ataqueEnemigo = 'TIERRA'
  } 
 
  combate()
}

function combate (){
  let spanVidasJugador = document.getElementById('vidas-jugador')
  let spanVidasEnemigo = document.getElementById('vidas-enemigo')
  
  if(ataqueEnemigo == ataqueJugador){
   crearMensaje(" EMPATE")
  } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
   crearMensaje(" GANASTE")
   vidasEnemigo--
   spanVidasEnemigo.innerHTML = vidasEnemigo
 } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
  crearMensaje(" GANASTE")
  vidasEnemigo--
   spanVidasEnemigo.innerHTML = vidasEnemigo
 } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
  crearMensaje(" GANASTE")
  vidasEnemigo--
  spanVidasEnemigo.innerHTML = vidasEnemigo
 } else{
   crearMensaje(" Perdiste")
   vidasJugador--
   spanVidasJugador.innerHTML = vidasJugador
 }

 revisarVidas()
}

function revisarVidas(){
  if (vidasEnemigo == 0){
    crearMensajeFinal('FELICIDADES, HAS CONSEGUIDO LA VICTORIA')
  } else if (vidasJugador == 0){
    crearMensajeFinal('LO SENTIMOS, VUELVELO A INTENTAR')
  }
}


function crearMensaje(resultado){
  let sectionMensaje = document.getElementById ('mensajes')
  let parrafo = document.createElement('p')
 
  parrafo.innerHTML ='Tu mascota ataco con ' + ataqueJugador + ', el rival ataco con '  + ataqueEnemigo + ' - ' + resultado
  sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
  let sectionMensaje = document.getElementById ('mensajes')
  let parrafo = document.createElement('p')
  
  parrafo.innerHTML = resultadoFinal
  
  sectionMensaje.appendChild(parrafo)
 
  let botonFuego = document.getElementById("boton-fuego")
  botonFuego.disabled = true
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.disabled = true
  let botonTierra = document.getElementById("boton-tierra")
  botonTierra.disabled = true

  let sectionReiniciar = document.getElementById('reiniciar')
   sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
  location.reload()
}
 

function aleatorio(min,max){
  return Math.floor(Math.random()* (max - min + 1) + min)
 }

window.addEventListener('load', iniciarJuego) 