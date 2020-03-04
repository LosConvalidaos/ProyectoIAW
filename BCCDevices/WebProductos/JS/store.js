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
    var urlaux = 'http://freyja-mkiaw/ProyectoIAW_dev/BCCDevices/WebProductos/prod.php?id=';
    
    window.location.href = urlaux + id;
}
function BtnRedir_Buy(IDProd) {
    var id = IDProd;

    if (document.getElementById('qty') == null) {
        console.error('ERROR, product quantity not found or is NULL/1');
    } else {
        var qty = document.getElementById('qty').value;
        if (qty == '') {qty = 1;}
    }

    alert('¡ENHORABUENA! Ha comprado '+qty+' unidades');
    if (document.getElementById('qty') != null) {
        document.getElementById('qty').value = '';
    }
}
