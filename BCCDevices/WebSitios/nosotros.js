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

var cambiaridiomaglobal;

function imagen_txt_glb(i) {
	/*var txts = new Array("Este es Bibu, es el director general de la empresa", "Este es Cris, es el presidente de la empresa", "Este es Carlos, este es el vicepresidente de la empresa");
	var txt = document.getElementById('text');
	txt.style.visibility = "visible";
	txt.innerHTML = txts[i];*/
	var txtesp = new Array("Este es Bibu, es el director general de la empresa", "Este es Cris, es el presidente de la empresa", "Este es Carlos, este es el vicepresidente de la empresa");
	var txteusk = new Array("Hau Bibu da empresako general zuzendaria", "Hau Cris da, empresako lehendakaria", "Hau Carlos da, empresako lehendakariordea");
	var txtingl = new Array("This is Bibu, he is the general manager of the company", "This is Cris, he is the president of the company", "This is Carlos, this is the vice president of the company");
	var txt = document.getElementById("presentacion");
	if (cambiaridiomaglobal == 1 ) {
		txt.innerHTML = txteusk[i]
	}
	if (cambiaridiomaglobal == 2) {
		txt.innerHTML = txtesp[i]
	}
	if (cambiaridiomaglobal == 3 ) {
		txt.innerHTML = txtingl[i]
	}

}
	

function castellano(){
		var castellano = document.getElementsByClassName("castellano");
		var ingles = document.getElementsByClassName("ingles");
		var euskera = document.getElementsByClassName("euskera");
	for ( w = 0; w < castellano.length; w++) {
		castellano[w].style.display="block"
		euskera[w].style.display="none"
		ingles[w].style.display="none"		
	}
	
}

function cambiaridioma(x){
		cambiaridiomaglobal = x;
		var castellano = document.getElementsByClassName("castellano");
		var ingles = document.getElementsByClassName("ingles");
		var euskera = document.getElementsByClassName("euskera");
	if (x==1) {
		for ( w = 0; w < euskera.length; w++) {
			castellano[w].style.display="none"
			euskera[w].style.display="block"
			ingles[w].style.display="none"
			
		}
	}	
	if (x==2) {
		for ( w = 0; w < castellano.length; w++) {
			castellano[w].style.display="block"
			euskera[w].style.display="none"
			ingles[w].style.display="none"
			
		}
	}
	if (x==3) {
		for ( w = 0; w < ingles.length; w++) {
			castellano[w].style.display="none"
			euskera[w].style.display="none"
			ingles[w].style.display="block"
			
		}
	}
}

