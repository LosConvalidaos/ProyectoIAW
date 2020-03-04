/*      JavaScript de Servicios
    Carlos Labiano Cerón | 2º ASIR
*/
function DisplayDropdown(SrvNum) {
    var ARDropArrow = document.getElementsByClassName('dropdown'),
        ARArtSrvTxt = document.getElementsByClassName('artsrvtxt');

    if (ARDropArrow[SrvNum].src.includes('IMGs/sugerenciasdropup.png')) {
        ARArtSrvTxt[SrvNum].style.display = 'none';
        document.getElementById('artsrviimg').style.display = 'none';

        AlterDropArrow(SrvNum);
    } else {
        document.getElementById('artsrviimg').src = 'IMGs/srvi' + SrvNum + '.jpg';
        document.getElementById('artsrviimg').style.display = 'inline';

        for (let i = 0; i < ARArtSrvTxt.length; i++) {
            ARArtSrvTxt[i].style.display = 'none';
        }
        ARArtSrvTxt[SrvNum].style.display = 'block';

        AlterDropArrow(SrvNum);
    }
}
function AlterDropArrow(ArrowSrvNum) {
    var ARDropArrow = document.getElementsByClassName('dropdown');

    if (ARDropArrow[ArrowSrvNum].src.includes('IMGs/sugerenciasdropup.png')) {
        ARDropArrow[ArrowSrvNum].src = 'IMGs/sugerenciasdrop.png';
    } else {
        for (let i = 0; i < ARDropArrow.length; i++) {
            ARDropArrow[i].src = 'IMGs/sugerenciasdrop.png';
        }
        ARDropArrow[ArrowSrvNum].src = 'IMGs/sugerenciasdropup.png';
    }
}