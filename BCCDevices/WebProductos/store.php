<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="CSS/compra.css">
    <script src="JS/store.js"></script>
    </head>
    <body>
        <!-- PHP -->
        <?php
            $storeCat = htmlspecialchars($_GET["cat"]);
            $dbconx = new mysqli('localhost', 'root', '4vientos', 'iaw', 3306);
            // Mostrar errores de conexion
            /*if ($dbconx->connect_error) {
                die("DB Message: " . $dbconx->connect_error);
            }*/
        ?>
        <!-- PHP -->
        <header>
            <a href="index.html"><img src="../IMGs/logo_header/logo.png"></a>
            <a href="index.html"><img src="../IMGs/logo_header/logo3.png"></a>
            <nav>
                <ul id="menuheader">
                    <li><a href="../WebSitios/contacto.html">CONTACTO</a></li>
                    <li><a href="../WebSitios/nosotros.html">QUIENES SOMOS</a></li>
                    <li><a href="../WebSitios/sugerencias.html">SUGERENCIAS</a></li>
                    <li><a href="../WebSitios/servicios.html">SERVICIOS</a></li>
                </ul>
            </nav>
        </header>
        <section>
            <div id="StoreTitle">
                <?php
                switch ($storeCat) {
                    case '0':
                        echo '<h1>Ordenadores De Torre</h1>';
                        break;
                    case '1':
                        echo '<h1>Componentes de PC</h1>';
                        break;
                    case '2':
                        echo '<h1>Perifericos</h1>';
                        break;
                    case '3':
                        echo '<h1>Merchandising y Figuras</h1>';
                        break;
                    case '4':
                        echo '<h1>Discos duros y SSDs</h1>';
                        break;
                    case '5':
                        echo '<h1>Accesorios Gaming</h1>';
                        break;
                    default:
                        echo '<h1>ERROR</h1>';
                        break;
                }
                ?>
            </div>
            <table class="listacompra">
                <tbody>
                <?php
                    //DEPRECATED
                    /*$sql = "SELECT * FROM productos WHERE Tipo = $storeCat;";
                    $data = $dbconx->query($sql);*/
                    $sql = "SELECT * FROM productos WHERE Tipo = ?";

                    $sqlstm = $dbconx->prepare($sql);
                    $sqlstm->bind_param('i', $storeCat);
                    $sqlstm->execute();

                    $data = $sqlstm->get_result();
                    while ($datarow = $data->fetch_assoc()) {
                        echo "<tr>";
                            echo "<td class=imgcont>";
                                echo '<img src="IMGs/'. $datarow["Imagen"] .'" alt="IMG">';
                            echo "</td>";
                            echo '<td class="info">';
                                echo '<div class="name">';
                                    echo $datarow["Nombre"];
                                echo "</div>";
                                /*echo '<div class="desc">';
                                    echo $datarow["Descripcion"];
                                echo "</div>";*/
                                echo '<div class="rating">';
                                    //echo 'Valoración: ' . $datarow["Valoracion"] . '/5';
                                    echo 'Valoración: <span>';
                                    for ($i=0; $i < $datarow["Valoracion"]; $i++) { 
                                        echo '★ ';
                                    }
                                    for ($i=5; $i > $datarow["Valoracion"]; $i--) { 
                                        echo '  ';
                                    }
                                    echo '</span>';
                                echo "</div>";
                                /*echo '<div class="cost">';
                                    echo 'Precio: ' . $datarow["Precio"] . '€';
                                echo "</div>";*/
                            echo "</td>";
                            echo '<td class="costaction">';
                                echo '<div class="cost">';
                                    echo $datarow["Precio"] . '€';
                                    
                                echo "</div>";
                                echo '<div class="actions">';
                                echo "<button class=morebtt onclick='BtnRedir(0," . $datarow["IDProducto"] . ")'>Ficha completa</button>";
                                    echo "<button class=buybtt onclick='BtnRedir(1," . $datarow["IDProducto"] . ")'>COMPRAR</button>";
                                echo "</div>";
                            echo "</td>";
                    echo "</tr>";
                    /* TO DO
                        > Implementar separador entre productos
                    */
                    }
                ?>
                </tbody>
            </table>
        </section>
        <aside>
            <nav>
                <ul id="menuaside">
                    <li><img class="iconos" src="../IMGs/iconos/portatil.png"><a href="store.php?cat=0">PC´s Torre</a></li>
                    <li><img src="../IMGs/iconos/componentes.png"><a href="store.php?cat=1">Componentes</a></li>
                    <li><img src="../IMGs/iconos/perifericos.png"><a href="store.php?cat=2">Periféricos</a></li>
                    <li><img src="../IMGs/iconos/discosduros.png"><a href="store.php?cat=4">Discos Duros</a></li>
                    <li><img src="../IMGs/iconos/gaming.png"><a href="store.php?cat=5">Gaming</a></li>
                    <li><img src="../IMGs/iconos/merchan.png"><a href="store.php?cat=3">Merchandising</a></li>
                </ul>
            </nav>    
        </aside>
        <!-- <footer>
            <div id="divpie">
                <a>Todos los derechos reservados B&C&C &copy; 2019</a>
                <a href="www.intagram.com"><img src="../redes sociales/instagram.png"></a>
                <a href="www.facebook.com"><img src="../redes sociales/facebook.png"></a>
                <a href="www.twiter.com"><img src="../redes sociales/twiter.png"></a>
            </div>
            
        </footer> -->
    </body>
</html>