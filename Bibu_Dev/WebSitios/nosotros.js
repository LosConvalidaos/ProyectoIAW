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
	var txts = new Array("Este es Bibu, es el director general de la empresa", "Este es Cris, es el presidente de la empresa", "Este es Carlos, este es el vicepresidente de la empresa");
	var txt = document.getElementById('text');
	txt.style.visibility = "visible";
	txt.innerHTML = txts[i];
}