function aleatorio(min,max){
            return Math.floor(Math.random()* (max - min + 1) + min)
              }
              function eleccion(jugada){
                let resultado = ""
                if( jugada == 1){
                    resultado = "papel 🧻"
                }
                  else if(jugada == 2){
                    resultado = "piedra 🪨"
                }
                  else if(jugada == 3){
                    resultado = "tijeras ✂️"
                }
                 else{
                    resultado = "NULO" 
                }
                return resultado 

              }
           // 1 papel, 2 piedra, 3 tijera
            let jugador = 0
            let pc = 0
            let triunfos = 0
            let perdidas = 0

            while (triunfos < 3 && perdidas <3){
               pc = aleatorio (1,3)
               jugador = prompt("Elige: 1 para papel, 2 para piedra, 3 tijera")
             //alert("Elegiste" + jugador)
                
               alert("Pc elige:" + eleccion(pc))
               alert("Tu eliges:" + eleccion(jugador))

             //combate
              if(pc == jugador){
              alert("EMPATE")
              }
              else if(jugador ==1 && pc ==2){
              alert("GANASTE")
              triunfos = triunfos + 1
              }
              else if(jugador ==2 && pc ==3){
              alert("GANASTE")
              triunfos = triunfos + 1
              }
              else if(jugador ==3 && pc == 1){
              alert("GANASTE")
              triunfos = triunfos + 1
              }
              else{
              alert("Perdiste")
              perdidas = perdidas + 1
              }
             }

             alert("GANASTE" + triunfos + "veces. Perdiste" + perdidas + "veces.")
            
            
