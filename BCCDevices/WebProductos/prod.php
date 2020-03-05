<!DOCTYPE html>
<!-- Carlos Labiano Cerón | 2º ASIR -->
<html lang="es">
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="CSS/compra.css">
    <link rel="stylesheet" href="CSS/prod.css">
    <link rel="shortcut icon" href="../IMGs/logo_header/logo.ico" type="image/x-icon">
    <script src="JS/store.js"></script>
    </head>
    <body>
        <!-- PHP | DATABASE CONNECTION + GET CATEGORY -->
        <?php
            $id = htmlspecialchars($_GET["id"]); #Obtener ID del producto seleccionado
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
            <?php
                // Establecer consulta SQL parametrica
                $sql = "SELECT * FROM productos WHERE IDProducto = ?";
                // Preparacion y ejecucion
                $sqlstm = $dbconx->prepare($sql); #Preparar consulta SQL
                $sqlstm->bind_param('i', $id); #Asignación de parametros
                $sqlstm->execute(); #Ejecuion de la sentencia
                // Almacenar objeto 'result' devuelto por la consulta y tratarlo
                $data = $sqlstm->get_result();
                $proddata = $data->fetch_assoc(); #Convertir resultado en un array asociativo
            ?>
            <?php if ($sqlstm) { ?> <!-- Comprobar ejecucion de la consulta -->
                <!-- Crear tabla con datos del producto -->
                <table class="listacompra">
                    <tr>
                        <td class="imgcont">
                            <img src="IMGs/<?php echo $proddata["Imagen"]; ?>" alt="IMG">
                            <div class="rating">Valoración: <span> 
                                <?php
                                    // Representa graficamente la valoracion
                                    for ($i=0; $i < $proddata["Valoracion"]; $i++) { 
                                        echo '★ ';
                                    }
                                    for ($i=5; $i > $proddata["Valoracion"]; $i--) { 
                                        echo '  ';
                                    }
                                ?>
                            </span></div>
                        </td>
                        <td class="costaction">
                            <div class="cost">
                                <?php echo $proddata["Precio"] ?> €
                                <p>Precio con IVA incluido</p>
                            </div>
                            <div class="actions">
                                Cantidad: 
                                <input type="number" id="qty">
                                <button class="buybtt" onclick="BtnRedir(1,<?php echo $id; ?>)">COMPRAR</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="info">
                            <div class="name">
                                <?php echo $proddata["Nombre"]; ?>
                            </div>
                            <div class="desc">
                                <?php echo $proddata["Descripcion"]; ?>
                            </div>
                        </td>
                    </tr>
                </table>
            <?php } ?>
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