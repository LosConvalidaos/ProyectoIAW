/* Carlos Labiano Cerón */
/*        2ºASIR        */
//Porcentaje de beneficio
var benefitTX = 0.30;
class ShopItem {
    constructor ({Nombre = 'Placeholder',Precio = 0,Stock = 0,Valoracion = 0,Imagen = null,Descripcion = 'Placeholder'}) {
        this.name = Nombre;
        this.cost = Precio;
        this.qty = Stock;
        this.rating = Valoracion;
        this.img = Imagen;
        this.descr = Descripcion;
    }
    /* Getters + Setters */
    /* Metodos */
    //Devuelve el precio con IVA mas el porcentaje de beneficio
    CalcSell() {
        return this.cost + (this.cost*0.21)+(this.cost*benefitTX);
    }
    //Metodo que muestra de forma mas visual la valoracion
    //WIP
    ShowStars() {

    }
}
function pruebas() {
    var test = new ShopItem('NombrePRB',0,0,0,'IMG','Prueba');
    alert(test.rtn);
}