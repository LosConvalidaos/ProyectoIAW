/* Carlos Labiano Cerón */
/*        2ºASIR        */
/*
    VARIABLES GLOBALES
*/
var ShopCat = HPGetURLSegment(1,'?'); //Categoria de los productos a mostrar
/* 
    FUNCIONES
*/
// Funcion que rellena los diferentes bloques de los productos
function FillProducts() {
    var ArrProdIMGBlock = document.getElementsByClassName('img'),
        ArrProdInfoCostBlock = document.getElementsByClassName('infocost');
    var randArrNums = HPArRandomNums(ShopProds.length);
    for (let i = 0; i < ArrProdIMGBlock.length; i++) {
        let ProdNameBlock = ArrProdInfoCostBlock[i].getElementsByClassName('name')[0],
            ProdInfoBlock = ArrProdInfoCostBlock[i].getElementsByClassName('desc')[0],

            ProdIMGBlock = ArrProdIMGBlock[i],
            ProdRatingBlock = ArrProdInfoCostBlock[i].getElementsByClassName('rating')[0],
            ProdCostBlock = ArrProdInfoCostBlock[i].getElementsByClassName('cost')[0];

        ProdNameBlock.innerHTML = ShopProds[randArrNums[i]].name;
        ProdInfoBlock.innerHTML = ShopProds[randArrNums[i]].descr;
        ProdIMGBlock.src = '../IMGs/' + ShopProds[randArrNums[i]].img;
        ProdRatingBlock.innerHTML = ShopProds[randArrNums[i]].rating;
        ProdCostBlock.innerHTML = ShopProds[randArrNums[i]].CalcSell() + '€';
    }
}
/*
    HELPERS
*/
//HELPER | Obtiene y devuelve el segmento solicitado de una URL
function HPGetURLSegment(segment = 0, spltchar = '/') {
    //Crea un array resultado de la division de la URL usando el caracter pasado
    var url = window.location.href.split(spltchar); 
    //alert(url[segment]);
    return url[segment];
}
//HELPER | Genera numeros aleatorios para el acceso a un array dada su longitud
function HPArRandomNums(arr_length) {
    var randNums = [], //Array para los numeros a devolver
        randN = 0; //Numero aleatorio
    var i = 0; //Contador para rellenar el array

    do {
        //Genera un numero entre 0(Incl.) y la longitud del array(Excl.)
        randN = Math.floor(Math.random()*(arr_length));
        //Añade el numero si no se repite y aumenta contador
        if (randNums.indexOf(randN) == -1) {
            randNums[i] = randN;
            i++;
        }
        //alert(randNums)
    } while (randNums.length != arr_length);
    //alert(randNums)
    return randNums;
}

/* INFO */
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