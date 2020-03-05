/*
Proyecto IAW JavaScript Tienda
    Carlos Labiano Cerón
    2º ASIR | 2020-03-05
*/
// Funcion que gestiona las redirecciones de la tienda (Productos)
function BtnRedir(i, prod = null) {
    //Si existe ID producto o es NULL, ERROR
    if (prod == null) {
        alert('ERROR, PRODUCTO NO EXISTENTE');
        console.error('CRITICAL ERROR, product ID is NULL');
        return;
    }
    //Según que boton se le llame Mas info(0) y Comprar(1), llamar a una funcion u otra
    switch (i) {
    case 0:
        BtnRedir_More(prod); //Llamar funcion de Mas Info
        break;
    case 1:
        BtnRedir_Buy(prod); //Llamar funcion de Compra
        break;
    default:
        console.warn('WARNING, button identifier can not be read or is non-existant');
    }
}
/* FUNCIONES AUXILIARES */
// Funcion que muestra mas información sobre el producto (Redireccion)
function BtnRedir_More(IDProd) {
    var id = IDProd,
        url = 'http://localhost/iaw/ProyectoIAW/BCCDevices/WebProductos/prod.php?id=';
    //Para desarrollo
    var urlaux = 'http://freyja-mkiaw/ProyectoIAW_dev/BCCDevices/WebProductos/prod.php?id=';
    
    window.location.href = urlaux + id;
}
// Funcion que gestiona la compra de un producto (Maqueta no funcional)
function BtnRedir_Buy(IDProd) {
    var id = IDProd, //Obtiene y almacena el ID del producto seleccionado
        datachk = true; //Almacena la correcta comprobacion de los datos
    // Comprobar si es llamada desde la tienda (No existe cantidad) o desde el producto
    if (document.getElementById('qty') == null) {
        console.warn('WARNING, product quantity not found or is NULL');
        //Si no se detecta una cantidad avisar de ello
        var qty = 1; //Establecer por defecto la cantidad como 1 unidad
    } else {
        //Obtener la cantidad seleccionada por el usuario
        var qty = document.getElementById('qty').value;
        if (qty == '') {qty = 1;} //Si la cantidad es nula, establecer por defecto a 1
        //Filtrar entrada del usuario
        if (parseInt(qty) <= 0 || isNaN(qty)) {
            alert('ERROR, por favor introduzca un numero mayor que 0 como cantidad');
            datachk = false; //Indica que no se ha superado el control de datos
            console.error('ERROR, user data violates required format');
        }
    }
    //Maqueta de aviso, realmente aqui se redireccionaria al carrito/sistema de pago
    if (datachk) {alert('¡ENHORABUENA! Ha comprado '+qty+' unidades');}
    //Si existe el campo 'Cantidad', restablecer su valor
    if (document.getElementById('qty') != null) {
        document.getElementById('qty').value = '';
    }
}
