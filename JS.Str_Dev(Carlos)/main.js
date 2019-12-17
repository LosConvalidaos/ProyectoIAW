/* Carlos Labiano Cerón */
/*        2ºASIR        */
//Porcentaje de beneficio
var benefitTX = 0.30;
class ShopItem {
    constructor (Nombre = 'Placeholder',Precio = 0,Stock = 0,Valoracion = 0,Imagen = 'Placeholder.jpg',Descripcion = 'Placeholder', Tipo = null) {
        this.name = Nombre;
        this.cost = Precio;
        this.qty = Stock;
        this.rating = Valoracion;
        this.img = Imagen;
        this.descr = Descripcion;
        this.type = Tipo;
    }
    /* Getters + Setters */
    /* Metodos */
    //Devuelve el porcentaje de beneficio correspondiente segun el tipo de producto
    CalcBenefit(t) {
        var prodtypes = [0.1,0.5,0.3,0.25,0.75];
        if (t == null) {
            return 0.2;
        } else {
            return prodtypes[t];
        }
    }
    //Devuelve el precio con IVA mas el porcentaje de beneficio
    CalcSell() {
        return this.cost + (this.cost*0.21)+(this.cost*this.CalcBenefit(this.type));
    }
    //Metodo que muestra de forma mas visual la valoracion
    //WIP
    ShowStars() {

    }
}
//INIT
function init() {
    alert('init');
    prod1 = new ShopItem('Prod1',100,10,5,'Prod1.jpg','Producto 1'),
    prod2 = new ShopItem('Prod2',3,253,1,'Prod2.jpg','Producto 2'),
    prod3 = new ShopItem('Prod3',300.99,13,4.5,'Prod3.jpg','Producto 3'),
    prod4 = new ShopItem('Prod4',75,143,3,'Prod4.jpg','Producto 4'),
    prod5 = new ShopItem('Prod5',9.99,1080,0.5,'Prod5.jpg','Producto 5');
}

/* Funciones */
function pruebas() {
    var test = new ShopItem('NombrePRB',0,0,0,'Placeholder.jpg','Prueba');
    alert(test.img);
    alert(prod5.CalcSell())

    document.getElementById('test').src = test.img;
    /*  Pruebas de acceso a ficheros, no funciona con formato file://
        por tanto seria necesario un servidor web o similar */
    //var response = fetch('../README.md');
    //alert(response.text());
}

/* IDEAS */
/*
    -> Calcular el benefitTX segun el tipo de producto
    [Tabla de correlacion Array - Tipo]
        0 - PCs
        1 - Componentes
        2 - Perifericos
        3 - Merchandising
        4 - Discos duros
        5 - Gaming
        null - Otros
    -> Generar dinamicamente la cantidad de productos (Bucle for)
*/