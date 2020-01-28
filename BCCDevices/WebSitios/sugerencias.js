function answers() {
	var myanswer = document.getElementById('input_answer').value;
	var arr_h2 = document.getElementsByTagName('h2') // Con get_elementsByTagName, se crea un Array con los elementos h2.
	var arr_p = document.getElementsByTagName('p') // Se crea otro Array, con los elementos p de la página.
	var h2s = arr_h2 // Creamos otra variable para tomar el valor del Array de los tag h2.
	var ps = arr_p // Creamos otra variable para tomar el valor del Array de tag P.
	
	if (isNaN(myanswer)){
		alert('El dato introducido no es numerico');
	}
	if (myanswer > 10){ // Nos aseguramos que el usuario ha tecleado un número entre 1 y 10, no puede ser superior a 10.
		alert('El numero introducido no puede ser superior a 10');
	}
	//Hacemos los diferentes If...
	if (myanswer == 1){ // Hacemos las diferentes comparaciones con el número que hayamos insertado con la posición del Array de P y H2.
		h2s[0].style.visibility="visible"; //Conseguimos hacerlo visible si el usuario pulsa 1. En este caso, en el Array el primer elemento es el 0. Así seguimos....
		ps[0].style.visibility="visible";
	}
	if (myanswer == 2){
		h2s[1].style.visibility="visible";
		ps[1].style.visibility="visible";
	}
	if (myanswer == 3){
		h2s[2].style.visibility="visible";
		ps[2].style.visibility="visible";
	}
	if (myanswer == 4){
		h2s[3].style.visibility="visible";
		ps[3].style.visibility="visible";
	}
	if (myanswer == 5){
		h2s[4].style.visibility="visible";
		ps[4].style.visibility="visible";
	}
	if (myanswer == 6){
		h2s[5].style.visibility="visible";
		ps[5].style.visibility="visible";
	}
	if (myanswer == 7){
		h2s[6].style.visibility="visible";
		ps[6].style.visibility="visible";
	}
	if (myanswer == 8){
		h2s[7].style.visibility="visible";
		ps[7].style.visibility="visible";
	}
	if (myanswer == 9){
		h2s[8].style.visibility="visible";
		ps[8].style.visibility="visible";
	}
	if (myanswer == 10){
		h2s[9].style.visibility="visible";
		ps[9].style.visibility="visible";
	}
	
	
}