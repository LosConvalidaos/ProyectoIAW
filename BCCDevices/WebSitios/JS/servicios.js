/*      JavaScript de Servicios
    Carlos Labiano Cerón | 2º ASIR
*/
// Funcion que gestiona la visibilidad
function DisplayDropdown(SrvNum) {
    //Obtener todos los elementos HTML necesarios
    var ARDropArrow = document.getElementsByClassName('dropdown'),
        ARArtSrvTxt = document.getElementsByClassName('artsrvtxt');
    //Ocultar el servicio especifico si esta ya mostrado (Comprobar estado de la flecha)
    if (ARDropArrow[SrvNum].src.includes('IMGs/sugerenciasdropup.png')) {
        ARArtSrvTxt[SrvNum].style.display = 'none'; //Ocultar texto del servicio
        document.getElementById('artsrviimg').style.display = 'none'; //Ocultar imagen mostrada
        //Alterar estado de la flecha
        AlterDropArrow(SrvNum);
    } else {
        //Mostrar el serivicio especifico si no es ya visible
        document.getElementById('artsrviimg').src = 'IMGs/srvi' + SrvNum + '.jpg'; //Establecer imagen correspondiente
        document.getElementById('artsrviimg').style.display = 'inline'; //Hacer visible la imagen
        //Ocultar todos los textos existentes
        for (let i = 0; i < ARArtSrvTxt.length; i++) {
            ARArtSrvTxt[i].style.display = 'none';
        }
        ARArtSrvTxt[SrvNum].style.display = 'block'; //Hacer visible el texto correspondiente
        //Alterar estado de la flecha
        AlterDropArrow(SrvNum);
    }
}
// Funcion auxiliar que altera la flecha de despliegue
function AlterDropArrow(ArrowSrvNum) {
    //Obtener elemento HTML de la flecha
    var ARDropArrow = document.getElementsByClassName('dropdown');
    //Comprobar estado actual de la flecha correspondiente
    if (ARDropArrow[ArrowSrvNum].src.includes('IMGs/sugerenciasdropup.png')) {
        //Si se encuentra arriba, invertir la imagen (Cambio de imagen)
        ARDropArrow[ArrowSrvNum].src = 'IMGs/sugerenciasdrop.png';
    } else {
        //Establecer todas las flechas a estado inicial
        for (let i = 0; i < ARDropArrow.length; i++) {
            ARDropArrow[i].src = 'IMGs/sugerenciasdrop.png';
        }
        //Establecer flecha seleccionada como desplegada
        ARDropArrow[ArrowSrvNum].src = 'IMGs/sugerenciasdropup.png';
    }
}