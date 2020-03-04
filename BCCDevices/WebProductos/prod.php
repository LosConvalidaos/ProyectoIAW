<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="compra.css">
    <link rel="stylesheet" href="prod.css">
    <script src="store.js"></script>
    </head>
    <body>
        <!-- PHP -->
        <?php
            $id = htmlspecialchars($_GET["id"]);
            $dbconx = new mysqli('localhost', 'root', '4vientos', 'iaw', 3306);
            // Mostrar errores de conexion
            /*if ($dbconx->connect_error) {
                die("DB Message: " . $dbconx->connect_error);
            }*/
        ?>
        <!-- PHP -->
        <header>
            <a href="../index.html"><img src="../logo header/Logo.png"></a>
            <a href="../index.html"><img src="../logo header/logo3.png"></a>
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
            <!-- <div id="StoreTitle">
                <?php
                /*switch ($storeCat) {
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
                }*/?>
            </div> -->
                <?php
                    $sql = "SELECT * FROM productos WHERE IDProducto = ?";

                    $sqlstm = $dbconx->prepare($sql);
                    $sqlstm->bind_param('i', $id);
                    $sqlstm->execute();

                    $data = $sqlstm->get_result();
                    $proddata = $data->fetch_assoc();
                ?>
                <?php if ($sqlstm) { ?>
                    <table class="listacompra">
                        <tr>
                            <td class="imgcont">
                                <img src="IMGs/<?php echo $proddata["Imagen"]; ?>" alt="IMG">
                                <div class="rating">Valoración: <span> 
                                    <?php
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
                    <li><img class="iconos" src="../Iconos/portatil.png"><a href="store.php?cat=0">PC´s Torre</a></li>
                    <li><img src="../Iconos/componentes.png"><a href="store.php?cat=1">Componentes</a></li>
                    <li><img src="../Iconos/perifericos.png"><a href="store.php?cat=2">Periféricos</a></li>
                    <li><img src="../Iconos/discosduros.png"><a href="store.php?cat=4">Discos Duros</a></li>
                    <li><img src="../Iconos/gaming.png"><a href="store.php?cat=5">Gaming</a></li>
                    <li><img src="../Iconos/merchan.png"><a href="store.php?cat=3">Merchandising</a></li>
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