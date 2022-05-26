function evaluarJuego() {
  var jugadaComputadora=generarJugadaComputadora();
  var jugadaUsuario=document.getElementById('jugadaUsuario').value;
  var mostrarJugadaComputadora=document.getElementById('jugadaComputadora');
  mostrarJugadaComputadora.value=jugadaComputadora;
  var mostrarResultado=document.getElementById('resultado');

  var resultado="";
  if(jugadaComputadora==jugadaUsuario){
    resultado="EMPATE";
  }
  else{
    if(jugadaComputadora=="piedra" && jugadaUsuario=="papel"){
      resultado="Has Ganado";
    }
    if(jugadaComputadora=="piedra" && jugadaUsuario=="tijera"){
      resultado="Has Perdido";
    }
    if(jugadaComputadora=="papel" && jugadaUsuario=="piedra"){
      resultado="Has Perdido";
    }
    if(jugadaComputadora=="papel" && jugadaUsuario=="tijera"){
      resultado="Has Perdido";
    }
    if(jugadaComputadora=="tijera" && jugadaUsuario=="papel"){
      resultado="Has Perdido";
    }
    if(jugadaComputadora=="tijera" && jugadaUsuario=="piedra"){
      resultado="Has Ganado";
    }

  }
  mostrarResultado.value=resultado;
  console.log(""+resultado);

}
function generarJugadaComputadora() {
  var jugadaComputadora="";
  var azar=Math.floor(Math.random()*3)+1;
  if(azar==1){
    jugadaComputadora="piedra";
  }
  if(azar==2){
    jugadaComputadora="papel";
  }
  if(azar==3){
    jugadaComputadora="tijera";
  }
  return jugadaComputadora;
}
function volverAJugar() {

  var jugadaComputadora=document.getElementById('jugadaComputadora');
  var jugadaUsuario=document.getElementById('jugadaUsuario');
  var resultado=document.getElementById('resultado');
  jugadaUsuario.value="";
}
