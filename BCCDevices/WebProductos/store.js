/*
Proyecto IAW JavaScript Tienda
    Carlos Labiano Cerón
    2º ASIR | 2020-03-02
*/
//function prueba() {alert(1);}
function BtnRedir(i, prod = null) {
    if (prod == null) {
        alert('ERROR, PRODUCTO NO EXISTENTE');
        return;
    }
    switch (i) {
    case 0:
        BtnRedir_More(prod);
        break;
    case 1:
        BtnRedir_Buy(prod);
        break;
    }
}
function BtnRedir_More(IDProd) {
    var id = IDProd,
        url = 'http://localhost/iaw/ProyectoIAW/BCCDevices/WebProductos/prod.php?id=';
    //Para desarrollo
    var urlaux = 'http://192.168.5.199/iaw/ProyectoIAW/BCCDevices/WebProductos/prod.php?id='
    
    window.location.href = urlaux + id;
}
function BtnRedir_Buy(IDProd) {
    var IDProd = id;
}
