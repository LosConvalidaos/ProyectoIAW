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
    
}
function BtnRedir_Buy(IDProd) {
    
}
