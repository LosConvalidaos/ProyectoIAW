function answers() {
	var myanswer = document.getElementById('input_answer').value;
	var arr_h2 = document.getElementsByTagName('h2') // Con get_elementsByTagName, se crea un Array con los elementos h2.
	var arr_p = document.getElementsByTagName('p') // Se crea otro Array, con los elementos p de la página.
	var h2s = arr_h2 // Creamos otra variable para tomar el valor del Array de los tag h2. //PUEDE SER NECESARIO PARA NO TENER QUE TANTO DOCUMENT.GETELEMENTS VARIAS VECES...
	var ps = arr_p // Creamos otra variable para tomar el valor del Array de tag P.
	
	if (isNaN(myanswer)){
		alert('El dato introducido no es numerico');
	}
	if (myanswer > 10){ // Nos aseguramos que el usuario ha tecleado un número entre 1 y 10, no puede ser superior a 10.
		alert('El numero introducido no puede ser superior a 10');
	}
	for (i=1; i <=10; i++){
		h2s[myanswer -1].style.visibility="visible";
		ps[myanswer -1].style.visibility="visible";
	}
	
	
}