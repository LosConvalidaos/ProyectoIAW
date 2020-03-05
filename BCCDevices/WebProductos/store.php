<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="CSS/compra.css">
    <script src="JS/store.js"></script>
    </head>
    <body>
        <!-- PHP | DATABASE CONNECTION + GET CATEGORY -->
        <?php
            $storeCat = htmlspecialchars($_GET["cat"]); #Obtener categoria seleccionada
            $dbconx = new mysqli('localhost', 'root', '4vientos', 'iaw', 3306);
            // Mostrar errores de conexion
            /*if ($dbconx->connect_error) {
                die("DB Message: " . $dbconx->connect_error);
            }*/
        ?>
        <!-- PHP -->
        <header>
            <a href="../index.html"><img src="../IMGs/logo_header/logo.png"></a>
            <a href="../index.html"><img src="../IMGs/logo_header/logo3.png"></a>
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
                <?php #Mostrar titulo tienda según categoria
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
                    // Establecer consulta SQL parametrica
                    $sql = "SELECT * FROM productos WHERE Tipo = ?";
                    // Preparacion y ejecucion
                    $sqlstm = $dbconx->prepare($sql); #Preparar consulta SQL
                    $sqlstm->bind_param('i', $storeCat); #Asignación de parametros
                    $sqlstm->execute(); #Ejecuion de la sentencia
                    // Almacenar objeto un 'result' devuelto por la consulta
                    $data = $sqlstm->get_result();
                ?>
                <?php if ($sqlstm) { ?> <!-- Comprobar ejecucion de la consulta -->
                    <?php while ($datarow = $data->fetch_assoc()) { ?>
                    <!-- Por cada registro creación de su entrada en la tabla -->
                        <tr>
                            <td class=imgcont>
                                <img src="IMGs/<?php echo $datarow["Imagen"]; ?>" alt="IMG">
                            </td>
                            <td class="info">
                                <div class="name">
                                    <?php echo $datarow["Nombre"]; ?>
                                </div>
                                <div class="rating">
                                    Valoración: <span>
                                    <?php
                                        // Representa graficamente la valoracion
                                        for ($i=0; $i < $datarow["Valoracion"]; $i++) { 
                                            echo '★ ';
                                        }
                                        for ($i=5; $i > $datarow["Valoracion"]; $i--) { 
                                            echo '  ';
                                        }
                                    ?>
                                    </span>
                                </div>
                            </td>
                            <td class="costaction">
                                <div class="cost">
                                    <?php echo $datarow["Precio"] . '€'; ?>
                                </div>
                                <div class="actions">
                                    <button class=morebtt onclick='BtnRedir(0,<?php echo $datarow["IDProducto"]; ?>)'>Ficha completa</button>
                                    <button class=buybtt onclick='BtnRedir(1,<?php echo $datarow["IDProducto"]; ?>)'>COMPRAR</button>
                                </div>
                            </td>
                    </tr>
                    <?php } ?>
                <?php } ?>
                </tbody>
            </table>
        </section>
        <aside>
            <nav>
                <ul id="menuaside">
                    <li><img src="../IMGs/iconos/portatil.png"><a href="store.php?cat=0">PC´s Torre</a></li>
                    <li><img src="../IMGs/iconos/componentes.png"><a href="store.php?cat=1">Componentes</a></li>
                    <li><img src="../IMGs/iconos/perifericos.png"><a href="store.php?cat=2">Periféricos</a></li>
                    <li><img src="../IMGs/iconos/discosduros.png"><a href="store.php?cat=4">Discos Duros</a></li>
                    <li><img src="../IMGs/iconos/gaming.png"><a href="store.php?cat=5">Gaming</a></li>
                    <li><img src="../IMGs/iconos/merchan.png"><a href="store.php?cat=3">Merchandising</a></li>
                </ul>
            </nav>
        </aside>
        <footer>
            <div id="divpie">
                <a>Todos los derechos reservados B&C&C &copy; 2019</a>
                <a href="www.intagram.com"><img src="../IMGs/redes_sociales/instagram.png"></a>
                <a href="www.facebook.com"><img src="../IMGs/redes_sociales/facebook.png"></a>
                <a href="www.twiter.com"><img src="../IMGs/redes_sociales/twiter.png"></a>
            </div>
        </footer>
    </body>
</html>