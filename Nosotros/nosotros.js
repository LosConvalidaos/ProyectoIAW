function imagen(i) {
	var imagenes = new Array("bibu", "cris", "carlos");
	var pics = new Array("pic1.png", "pic2.png", "pic3.png");
	var titles = document.getElementById('title')
	titles.innerHTML = imagenes[i];
	var persons = document.getElementById('person')
	persons.src = pics[i]
	//imagen_txt();
	//imagen2_txt();
	//imagen3_txt();
	imagen_txt_glb(i);
}

function imagen_txt_glb(i) {
	var txts = new Array("Este es Bibu, es el director general de la empresa", "Este es Cris, es el director de la empresa", "Este es Carlos, este es el vicepresidente de la empresa");
	var txt = document.getElementById('text');
	txt.style.visibility = "visible";
	txt.innerHTML = txts[i];
}

/*function imagen_txt() {
	var imagenes_txt = document.getElementById('texts'),
		textbox = imagenes_txt.getElementsByTagName('h4');
	textbox[0].style.visibility = "visible";
	imagen(i);
}
function imagen2_txt() {
	var imagenes2_txt = document.getElementById('texts'),
	textbox2 = imagenes2_txt.getElementsByTagName('h4');
	textbox2[1].style.visibility = "visible";
}
function imagen3_txt() {
	var imagenes3_txt = document.getElementById('texts'),
	textbox3 = imagenes3_txt.getElementsByTagName('h4');
	textbox3[2].style.visibility = "visible";
}*/
