/* Carlos Labiano Cerón */
/*        2ºASIR        */
//Porcentaje de beneficio
//var benefitTX = 0.30;
/* Funciones */
function pruebas() {
    var test = new ShopItem('NombrePRB',0,0,0,'Placeholder.jpg','Prueba');
    alert(test.img);
    alert(prod5.typestr)

    document.getElementById('test').src = test.img;
    /*  Pruebas de acceso a ficheros, no funciona con formato file://
        por tanto seria necesario un servidor web o similar */
    //var response = fetch('../README.md');
    //alert(response.text());
}
/*function pruebas2() {
    var prods = [prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9],
        randNums = rand(prods.length);

    for (let i = 0; i < prods.length; i++) {
        //Acceso estatico
        //document.getElementsByTagName('td')[i].innerHTML = prods[i].name;
        //Acceso aleatorio
        document.getElementsByTagName('td')[i].innerHTML = prods[randNums[i]].name;
    }
}*/
function pruebas2() {
    //var prods = [prod01,prod12,prod23,prod34,prod45,prod56,prod07,prod18,prod29],
    var randNums = rand(prods.length);
    for (let i = 0; i < prods.length; i++) {
        //Acceso estatico
        //document.getElementsByTagName('td')[i].innerHTML = prods[i].name;
        //Acceso aleatorio
        document.getElementsByTagName('td')[i].innerHTML = prods[randNums[i]].name;
    }
}
//HELPER | Genera numeros aleatorios para el acceso a un array dada su longitud
function rand(ar_length) {
    var randNums = [], //Array para los numeros a devolver
        randN = 0; //Numero aleatorio
    var i = 0; //Contador para rellenar el array

    do {
        //Genera un numero entre 0(Incl.) y la longitud del array(Excl.)
        randN = Math.floor(Math.random()*(ar_length));
        //Añade el numero si no se repite y aumenta contador
        if (randNums.indexOf(randN) == -1) {
            randNums[i] = randN;
            i++;
        }
        //alert(randNums)
    } while (randNums.length != ar_length);
    //alert(randNums)
    return randNums;
}
/* IDEAS */
/*
    [Tabla de correlacion Array - Tipo prod]
        0 - PCs
        1 - Componentes
        2 - Perifericos
        3 - Merchandising
        4 - Discos duros
        5 - Gaming
        null - Otros
*/