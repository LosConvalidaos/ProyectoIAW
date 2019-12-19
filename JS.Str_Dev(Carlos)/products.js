/* Carlos Labiano Cerón */
/*        2ºASIR        */
//Porcentaje de beneficio
//var benefitTX = 0.30;
class ShopItem {
    constructor (Nombre = 'Placeholder',Precio = 0,Stock = 0,Valoracion = 0,Imagen = 'Placeholder.jpg',Descripcion = 'Placeholder', Tipo = null) {
        this.name = Nombre;
        this.cost = Precio;
        this.qty = Stock;
        this.rating = Valoracion;
        this.img = Imagen;
        this.descr = Descripcion;
        this.type = Tipo;
        /* [Tabla de correlacion Array - Tipo prod]
                        0 - PCs
                    1 - Componentes
                    2 - Perifericos
                    3 - Merchandising
                    4 - Discos duros
                        5 - Gaming
                    null - Otros
        */
    }
    /* Getters + Setters */
    get typestr() {
        var prodtypes = ['PCs','Componentes','Perifericos','Merchandising','Discos duros','Gaming'];
        if (this.type == null) {
            return 'Otros';
        } else {
            return prodtypes[this.type];
        }
    }
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
    // Productos globales
    //prod1 = new ShopItem('Prod1',100,10,5,'Prod1.jpg','Producto 1'),
    //prod2 = new ShopItem('Prod2',3,253,1,'Prod2.jpg','Producto 2'),
    //prod3 = new ShopItem('Prod3',300.99,13,4.5,'Prod3.jpg','Producto 3'),
    //prod4 = new ShopItem('Prod4',75,143,3,'Prod4.jpg','Producto 4'),
    //prod5 = new ShopItem('Prod5',9.99,1080,0.5,'Prod5.jpg','Producto 5'),
    //prod6 = new ShopItem('Prod6',100,10,5,'Prod6.jpg','Producto 6'),
    //prod7 = new ShopItem('Prod7',3,253,1,'Prod7.jpg','Producto 7'),
    //prod8 = new ShopItem('Prod8',300.99,13,4.5,'Prod8.jpg','Producto 8'),
    //prod9 = new ShopItem('Prod9',75,143,3,'Prod9.jpg','Producto 9');
    //prodn = new ShopItem('Nombre',Precio,Stock,Valoracion,'Imagen','Descripcion',Tipo(0 a 5))
}