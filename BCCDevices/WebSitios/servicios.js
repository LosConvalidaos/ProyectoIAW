/*      JavaScript de Servicios
    Carlos Labiano Cerón | 2º ASIR
*/
function DisplayDropdown(SrvNum) {
    var ARDropArrow = document.getElementsByClassName('dropdown'),
        ARArtSrvTxt = document.getElementsByClassName('artsrvtxt');

    if (ARDropArrow[SrvNum].src == 'file:///D:/Proyectos/ProyectoIAW/BCCDevices/WebSitios/sugerenciasdropup.png') {
        ARArtSrvTxt[SrvNum].style.visibility = 'hidden';
        document.getElementById('artsrviimg').style.visibility = 'hidden';

        AlterDropArrow(SrvNum)
    } else {
        document.getElementById('artsrviimg').src = 'srvi' + SrvNum + '.jpg'
        document.getElementById('artsrviimg').style.visibility = 'visible';

        for (let i = 0; i < ARArtSrvTxt.length; i++) {
            ARArtSrvTxt[i].style.visibility = 'hidden'
        }
        ARArtSrvTxt[SrvNum].style.visibility = 'visible'

        AlterDropArrow(SrvNum)
    }
}
function AlterDropArrow(ArrowSrvNum) {
    var ARDropArrow = document.getElementsByClassName('dropdown');

    if (ARDropArrow[ArrowSrvNum].src == 'file:///D:/Proyectos/ProyectoIAW/BCCDevices/WebSitios/sugerenciasdropup.png') {
        ARDropArrow[ArrowSrvNum].src = 'sugerenciasdrop.png';
    } else {
        ARDropArrow[ArrowSrvNum].src = 'sugerenciasdropup.png';
    }
}