
	//------------------------------------------------------------------------------------------------------------------
	function juegoNuevo(){
				
		document.getElementById("juego_terminado").value=0; //resetea el valor de juego_terminado a cero para una nueva partida
		document.getElementById("turno").value=1; //para que el jugador 1 o O empieze jugando siempre
		document.getElementById("turno_jugador").innerHTML='<img src="../images/o.jpg" width="100" height="100" />'; //reinicia la imagen del turno añ reiniciar juego
		
		//vuelve a pintar el tablero 
		for(i=1; i<=9; i++){
			document.getElementById("imagen_"+i).innerHTML='<img src="../images/blanco.png" width="100" height="100" id="'+i+'" onclick="jugar(this.id);" />';
			//resetea todas las posiciones a 0 para que no esten ocupadas
			document.getElementById("posicion_"+i).value=0;
		}
	}
	//------------------------------------------------------------------------------------------------------------------
	function casillaOcupada(){
		alert("Esta posicion ya esta ocupada");	
	}	
	//------------------------------------------------------------------------------------------------------------------
	function jugar(id){
		var pos1,	pos2,	pos3,	pos4,	pos5,	pos6,	pos7,	pos8,	pos9, continuar = 1, victorias_j1=0, victorias_j2=0;
		//obtiene el valor del turno 1 = O  , 0 = X 
		turno = document.getElementById("turno").value;
		//obtiene el valor del juego 0 juego nuevo  , 1 juego terminado
		juegoTerminado = document.getElementById("juego_terminado").value;
		document.getElementById("turno").value="";
if (juegoTerminado==0){
	
		if(turno==1){
			document.getElementById("imagen_"+id).innerHTML='<img src="../images/o.jpg" width="100" height="100" id="1" onclick="casillaOcupada();" />';
			document.getElementById("turno_jugador").innerHTML='<img src="../images/x.png" width="100" height="100" />';			
			document.getElementById("turno").value=2;
			document.getElementById("posicion_"+id).value=1;	
		}else{
			document.getElementById("imagen_"+id).innerHTML='<img src="../images/x.png" width="100" height="100" id="2" onclick="casillaOcupada();" />';
			document.getElementById("turno_jugador").innerHTML='<img src="../images/o.jpg" width="100" height="100" />'; //cambia la imagen del turno del jugador
			document.getElementById("turno").value=1;
			document.getElementById("posicion_"+id).value=2;
		}
	//}
	//------------------------------------------------------------------------------------------------------------------
	pos1 = document.getElementById("posicion_1").value;
	pos2 = document.getElementById("posicion_2").value;
	pos3 = document.getElementById("posicion_3").value;
	pos4 = document.getElementById("posicion_4").value;
	pos5 = document.getElementById("posicion_5").value;
	pos6 = document.getElementById("posicion_6").value;
	pos7 = document.getElementById("posicion_7").value;
	pos8 = document.getElementById("posicion_8").value;
	pos9 = document.getElementById("posicion_9").value;

	if(pos1==1 && pos2==1 && pos3==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;

	}else if(pos4==1 && pos5==1 && pos6==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;


	}else if(pos7==1 && pos8==1 && pos9==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;

	}else if(pos3==1 && pos5==1 && pos7==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;

	}else if(pos1==1 && pos5==1 && pos9==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;

	}else if(pos1==1 && pos4==1 && pos7==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;

	}else if(pos2==1 && pos5==1 && pos8==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;

	}else if(pos3==1 && pos6==1 && pos9==1){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 1!"); continuar = 2;
	}
	//------------------------------------------------------------------------------------------------------------------
	if(pos1==2 && pos2==2 && pos3==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}else if(pos4==2 && pos5==2 && pos6==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}else if(pos7==2 && pos8==2 && pos9==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}else if(pos3==2 && pos5==2 && pos7==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}else if(pos1==2 && pos5==2 && pos9==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}else if(pos1==2 && pos4==2 && pos7==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}else if(pos2==2 && pos5==2 && pos8==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}else if(pos3==2 && pos6==2 && pos9==2){
		document.getElementById("juego_terminado").value=1;
		alert("¡Felicitaciones, victoria para el Jugador 2!"); continuar = 2;

	}
	//-----------------------------------------------------Empate-------------------------------------------------------------
	if(pos1!=0 && pos2!=0 && pos3!=0 && pos4!=0 && pos5!=0 && pos6!=0 && pos7!=0 && pos8!=0 && pos9!=0 && continuar!=2){
		alert("¡Esta vez el juego ha quedado empatado!");
		document.getElementById("juego_terminado").value=1;
	}
	}
	
	// Final del if juego terminaod = 0
}