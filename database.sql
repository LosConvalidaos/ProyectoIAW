/*
  Proyecto IAW BD Productos
    Carlos Labiano Cerón
    2º ASIR | 2020-03-02
*/
CREATE DATABASE iaw;

USE iaw;

CREATE TABLE productos (
    IDProducto INT NOT NULL AUTO_INCREMENT,
	Nombre NVARCHAR(100) NOT NULL,
    Precio INT NOT NULL,
    Stock INT NOT NULL,
    Valoracion TINYINT,
    Imagen NVARCHAR(10),
    Descripcion LONGTEXT,
    Tipo TINYINT NOT NULL,

    PRIMARY KEY (IDProducto)
);

INSERT INTO productos (Nombre, Precio, Stock, Valoracion, Imagen, Descripcion, Tipo)
VALUES
    ('PcCom Basic Office Pro Intel Core i5-7400/8GB/240 SSD',313.36,55,4.5,'prod01.jpg','Excelente relación calidad/precio para este PC con componentes de primeras marcas, la máxima garantía y gran rendimiento, ideal para usuarios que buscan hacer "de todo un poco. Pensado para un uso general en el hogar o en la oficina, el PcCom Office Pro se presenta como un equipo equilibrado en el que su procesador i5-7400, sus 8GB de RAM DDR4 y su rápido disco SSD de 240GB permiten trabajar de forma holgada en muy diferentes tareas, lo que lo hace ideal para entornos domésticos o de oficina.',0),
    ('PcCom Bronze AMD Ryzen 3 2200G/8GB/1TB+240SSD',311.94,10,4.5,'prod02.jpg','Una vez más Pc Componentes sorprende a la industria de la informática con el lanzamiento de los nuevos PcCom, la nueva línea de Pcs de sobremesa para juegos creada tras un amplio trabajo de investigación para ofrecer el mayor rendimiento y optimización en el juego para nuestros clientes. Ensamblados por nuestros expertos de montaje, los nuevos PcCom ofrecen un rendimiento increíble, con máxima velocidad, capacidad de ampliación y un amplio abanico de posibilidades dentro de la gama, en la que podrás elegir el producto óptimo según las necesidades y el tipo de Pc que estas buscando',0),
    ('Medion Akoya M80 P66033 PC888 Intel Core i3-8100/8GB/1TB+128GB SSD',371.08,5,5,'prod03.jpg','Diseño en color plateado compacto y elegante. Una torre que le proporciona un alto rendimiento en una ubicación fija. El MEDION® Akoya® M80 – P66033 se adapta a sus necesidades, pudiendo encontrar el equipo con diferentes configuraciones. Un ordenador que le sigue el ritmo.',0),
    ('HP Pavilion Gaming TG01-0012NS Intel Core i5-9400/8GB/1TB+256GB SSD/GTX1650',536.67,32,4,'prod04.jpg','Juega como siempre has querido. Este potente equipo está diseñado para seguir el ritmo de los juegos más actuales y de los que están por venir. Bajo su exterior compacto y elegante, encontrarás toda la potencia que necesitas para jugar a lo que quieras y el espacio necesario para incorporar mejoras. Potencia y rendimiento para un entretenimiento de primera clase, juegos y experiencia multitarea.',0),
    ('HP Pavilion 15-BC519NS Intel Core i5-9300H/8GB/512GB SSD/GTX 1050/15.6',619.01,61,4.5,'prod05.jpg','Prepárese para crear contenidos, disfrutar de sus archivos multimedia y jugar cuanto quiera, porque este ordenador portátil HP Pavilion ha sido diseñado para responder ante cualquier situación. Gracias a un rendimiento excepcional, puede pasar de unas sesiones de transmisión envolventes a editar vídeo sin retardos, y todo ello desde cualquier lugar.',0),
    ('Apple MacBook Air Intel Core i5/8GB/128GB SSD/13" Plateado',808.10,149,4.5,'prod06.jpg','El MacBook Air te ofrece hasta 12 horas de autonomía con una sola carga. Vamos, que puedes encenderlo por la mañana y olvidarte de cargarlo hasta la noche. Por ejemplo, si te apetece una maratón de películas de iTunes, tienes hasta 12 largas horas por delante. Además aguanta hasta un mes en reposo, así que puedes pasarte semanas sin usarlo y estará listo cuando tú quieras.',0),
    ('MSI Prestige 15 A10SC-044XES Intel Core i7-10710U/16GB/512GB SSD/GTX 1650/15.6',990.91,22,4.75,'prod07.jpg','MSI aprovecha el espíritu de exploración y creatividad al diseñar la mejor colección de computadoras portátiles: la serie Prestige. Para seguir empujando los límites creativos, estas máquinas finamente diseñadas no solo muestran un gusto único, sino que también son inmensamente poderosas. Es hora de dejar volar la inspiración y crear nuestros propios momentos en la vida.',0),
    ('MSI GT75 Titan 9SG-285ES Intel Core i9-9980HK/64GB/2TB SSD/RTX 2080/17.3',4338.15,1,0,'prod08.jpg','¿Estás buscando el máximo rendimiento? No busques más y quédate con GT75 Titan, este fantástico portátil gaming contiene el rendimiento de un ordenador de sobremesa en su chasis portable, cuenta con los más novedosos componentes en hardware junto con el mejor teclado, sistema de refrigeración y panel para gamers y entusiastas del hardware. Disfruta de una perfecta experiencia gaming con GT75 Titan. Prepárate para sentir todo el poder del juego con el potente ordenador portátil de MSI GT75 Titan 9SG. Un portátil gaming dotado con un procesador Coffeelake i9, 64GB de RAM, 2TB SSD de almacenamiento, y todo bajo una potente gráfica NVIDIA GeForce® RTX 2080 8GB GDDR6.',0),
    ('Corsair One i164 Compact Intel Core i9-9900K/32GB/2TB+960GB SSD/RTX 2080Ti',3222.32,6,0,'prod09.jpg','Corsair One. Una sola vida, haga que merezca la pena. El factor de forma ultracompacto y minimalista del CORSAIR ONE, revestido con una carcasa de aluminio de 2 mm de grosor, está diseñado para mostrarse desde encima del escritorio, no para esconderse debajo de este.',0),
    ('PNY Quadro RTX 6000 24GB GDDR6X',4084.76,7,5,'prod11.jpg','NVIDIA® Quadro RTX™ 6000, impulsada por la arquitectura NVIDIA Turing y la plataforma NVIDIA RTX, ofrece el avance más importante de las últimas dos décadas en gráficos por ordenador para los flujos de trabajo profesionales. Ahora, los diseñadores y artistas pueden aprovechar el sombreado avanzado, el aprendizaje automático y el trazado de rayos con aceleración de hardware para impulsar drásticamente su productividad y crear contenido increíble mucho más rápido que nunca.',1),
    ('Gigabyte GeForce RTX 2080 SUPER Gaming OC 8GB GDDR6',652.81,42,4.5,'prod12.jpg','El sistema de refrigeración WINDFORCE 3X cuenta con ventiladores de cuchilla exclusivos de 3x 82 mm, ventilador de hilado alternativo, 6 tubos de calor de cobre compuesto, función de contacto directo del tubo de calor y ventilador activo 3D, que entregan una capacidad efectiva de disipación de calor para un mayor rendimiento a temperaturas más bajas.',1),
    ('Corsair Vengeance LPX DDR4 3000 PC4-24000 16GB 2x8GB CL15',78.09,1015,4.75,'prod13.jpg','La memoria Vengeance LPX se ha diseñado para overclocking de alto rendimiento. El disipador de calor, fabricado en aluminio puro, permite una disipación térmica más rápida; la placa impresa de ocho capas administra el calor y proporciona una capacidad superior para incrementar el overclocking. Cada circuito integrado está seleccionado individualmente para el máximo potencial de rendimiento. El formato DDR4 está optimizado para las placas base Intel de la serie X99 más recientes y ofrece frecuencias más elevadas, mayor ancho de banda y menor consumo energético que los módulos DDR3. Se ha verificado la compatibilidad de los módulos Vengeance LPX DDR4 para toda las placas base de la serie X99, lo que asegura un rendimiento rápido y fiable. Compatibilidad con XMP 2.0 para un overclocking automático sin problemas. Y están disponibles en distintos colores para combinar con su placa base, sus componentes, o sencillamente con su estilo personal.',1),
    ('Crucial DDR4 2400 PC4-19200 8GB CL17',32.95,615,4.75,'prod14.jpg','CT8G4DFS824A  es un módulo DDR4 de rango único de 8 GB para ordenadores de sobremesa que funciona con velocidades de hasta 2400 MT/s y tiene una latencia CL17. Es una DIMM sin búfer. Cumple con el estándar de la industria para DDR4 ECC UDIMM con disposición de 288 pines y es compatible con ordenadores que utilizan memorias UDIMM DDR4 a 2400 MT/s.',1),
    ('Cooler Master Hyper TX3 EVO CPU Cooler',16.52,2535,4.5,'prod15.jpg','La serie Hyper TX ha evolucionado junto con los requisitos de las CPU principales. El lanzamiento de Hyper TX3 EVO marca otro hito con la tecnología de contacto directo mejorado de Cooler Master, que mejora aún más el rendimiento de refrigeración.',1),
    ('Nfortec Hydrus V2 120 Red Kit de Refrigeración Líquida',41.31,12,4.5,'prod16.jpg','Llega la nueva versión de nuestra reconocida refrigeración líquida Hydrus. Una renovación completa de todos los materiales originales que aumentan su efectividad y funcionamiento, manteniendo la gran durabilidad que siempre ha caracterizado a nuestra refrigeración veterana. Os presentamos a Nfortec Hydrus V2.',1),
    ('Gigabyte B450 AORUS M',83.99,159,4.5,'prod17.jpg','AMD presenta los últimos procesadores de la serie Ryzen ™ 2000 para proporcionar la potencia de cómputo necesaria para los juegos. Las placas base de la serie 400 de GIGABYTE se ajustan perfectamente al rendimiento informático de los procesadores de la serie AMD Ryzen ™ 2000 con más funciones y más control. Los usuarios pueden disfrutar los beneficios traídos por los procesadores de la serie AMD Ryzen ™ 2000.',1),
    ('Asus Rog Strix Z390-F Gaming',229.90,71,5,'prod18.jpg','Te presentamos la placa base Rog Strix Z390-F Gaming con socket 1151 de octava generación y Chipset Z390 de Asus.',1),
    ('Tempest Gaming GPSU Fuente de Alimentación 750W',37.18,121,4,'prod19.jpg','Te presentamos la Fuente de Alimentación Tempest Gaming GPSU 750W.',1),
    ('HP OMEN X Emperium 64.5" LED UltraHD 4K HDR 144Hz G-Sync',1652.07,6,4.5,'prod21.jpg','Que no te pille desprevenido, porque ni el juego ni el entretenimiento en casa volverán a ser lo mismo. Este vanguardista monitor da vida a toda la sala de estar gracias a las sorprendentes imágenes 4K HDR, a NVIDIA® G-SYNC® Ultimate con frecuencias de actualización ultrarrápidas de hasta 144 Hz y a la integración de NVIDIA® SHIELD™. Juega, visualiza ocio en streaming y sumérgete en una brillante pantalla de 64,5" (163,8 cm): cuando se trata de inmersión, nada puede ser mejor, o más grande, que esto.',2),
    ('Philips 273V7QDAB 27" LED IPS FullHD',123.96,28,4,'prod22.jpg','Una amplia pantalla con imágenes impresionantes que se extienden de borde a borde sin dañar la vista con un diseño fino y compacto.',2),
    ('Tempest Apocalypse Combo Gaming Teclado + Ratón + Auriculares + Alfombrilla',33.05,61,4.25,'prod23.jpg','Tempest, una de la marcas más punteras y con mejor calidad precio del mercado una vez más lo vuelve a hacer, el pack perfecto para todos aquellos que quieran iniciarse en el gaming, dar a su pc un look más gamer o mejorar parte de los elementos de los que ya disponen. Para ello han seleccionado 4 productos de excelente calidad con los cuales dotar a tu pc de luz, color y una experiencia de juego a la vanguardia de gaming actual.  No lo pienses más, tus partidas no volverán a ser iguales.',2),
    ('Razer Epic Gaming Pack Kraken X Lite + Cynosa Chroma + Deathadder Essential + Goliathus MSE',90.89,32,4.5,'prod24.jpg','Gana a todos tus rivales con este magnífico pack gaming de Razer. Un combo espectacular compuesto por el teclado Cynosa Chroma, los auriculares Kraken X Lite, el ratón Deathadder Essential y la alfombrilla Goliathus Mobile Stealth Edition. ¿Quieres ganar a tus enemigos? Serás el más rápido juegues a lo que juegues.',2),
    ('Logitech G502 Special Edition Ratón Gaming 16000DPI',35.53,64,5,'prod25.jpg','Tu ratón para gaming de alto rendimiento favorito ofrece más funciones y precisión que nunca. Personaliza la iluminación RGB para que coincida con tu estilo y entorno o sincronízala con otros productos Logitech G. El ratón para gaming de alto rendimiento G502 incluye nuestro sensor óptico HERO 16K de próxima generación para máxima precisión y seguimiento superior.',2),
    ('Logitech Wireless Mouse M185 Gris',8.26,735,4.5,'prod26.jpg','Sencillo y fiable ratón inalámbrico de fácil conexión. Conexión inalámbrica fiable. Sin retrasos ni interrupciones. El minúsculo receptor inalámbrico proporciona una conexión de confianza.',2),
    ('Thrustmaster T300RS GT Edition Volante PC/PS4/PS3',274.38,134,4.5,'prod27.jpg','Te presentamos el Volante T300RS GT Edition para PC/PS4/PS3 de Thrustmaster',2),
    ('Thrustmaster T.16000M FCS Joystick',41.31,44,4,'prod28.jpg','La Palanca de vuelo T.16000M FCS cuenta con la Precisión exclusiva: H.E.A.R.T* HallEffect AccuRate Technology™, sensores magnéticos 3D (Hall Effect) situados en la palanca, niveles de precisión 256 veces mayores que los sistemas actuales (¡resolución de 16 bits: 16.000 x 16.000 valores!).',2),
    ('Noblechairs Epic Nappa Black Silla Gaming Negra',825.62,1,1,'prod29.jpg','Silla gaming transpirable de noblechairs en negro con costuras negras, ruedas de 60 mm, reposabrazos 4D, totalmente tapizada y cubierta en cuero Nappa.',2),
    ('Vegeta (Metallic)',32.00,43,5,'prod31.jpg','Dragonball Z Pop!',3),
    ('Boba Fett (Droids)',680,3,5,'prod32.jpg','Boba Fett - Star Wars Pop!',3),
    ('Mamako Osuki (Nendoroid 1263)',61.90,17,2.5,'prod33.jpg','¡Mamako Osuka es la madre perfecta! Genial figura Nendoroid 1263 de Mamako Osuki del manga y anime Do You Love Your Mom and Her Two Hit Multi Target Attacks?. Esta figura mide 10 cms y ha sido fabricada por Good Smile Company en materiales de alta calidad. ¡Dale un toque aventurero a tu colección con esta genial Figura Nendoroid 1263 Mamako Osuki Do You Love Your Mom and Her Two Hit Multi Target Attacks?!',3),
    ("Jeanne d'Arc Casual (Fate)",99.90,14,5,'prod34.jpg',"¡Jeanne d'Arc en su día a día! Increíble figura Figma 466 de Jeanne d'Arc Casual del anime Fate Apocrypha. Esta figura articulada mide 14 cms y ha sido fabricada por Max Factory en PVC de alta calidad. ¡Dale un toque casual a tu colección con esta figura Figma 466 Jeanne d'Arc Casual Fate Apocrypha!",3),
    ('Katana Larga Bankai Ichigo (Bleach)',43.56,23,2.5,'prod35.jpg','Katana Bankai de Ichigo de la famosa serie manga y anime Bleach. Hoja fabricada en acero al carbono con una capa de pintura negra. Incluye vaina de color neegro.',3),
    ('The Anduril Sword',877.50,36,5,'prod36.jpg','The Lord of the Rings Anduril sword is a recreation from the popular trilogy written by J.R,.R. Tolkien. The Anduril is hand Crafted with 5160 High Carbon steel, dual hardened to a Rockwell of 60 at the edge and 48-50 at the core. The beautifully detailed leather handle is accentuated by the unique pommel, making this one of the most recognized fantasy swords. The blade is forged with a deep full length fuller.',3),
    ('FIGURA ACCIÓN FORTNITE: NITEHARE 18 CM',29.95,10,0,'prod37.jpg','Figura del personaje NITEHARE de Fortnite, edicion exclusiva de B&C&C Devices',3),
    ('FIGURA ACCIÓN FORTNITE: JONESY 18CM',29.95,103,3.5,'prod38.jpg','¡La fiebre de Fortnite llega a McFarlane Toys! Descubre la nueva línea de figuras de tu Battle Royale favorito con más de 18 puntos de articulación. Jonesy, Raven, Dark Bomber… Elige tu personaje favorito y dale vida en el mundo real con esta increíble colección. Sobrevive en la batalla y álzate con la Victoria Magistral. La figura de Jonesy tiene una altura aproximada de 18 cm.',3),
    ('Proyecto Yi (Ritopls)',25,13,4,'prod39.jpg','Iniciando... PROYECTO: Yi. Altamente compatible con combates de objetivos múltiples.',3),
    ('Seagate BarraCuda 3.5" 1TB SATA3',31.49,3694,4.5,'prod41.jpg','Versátiles. Rápidos. Fiables. La unidad de disco duro más increíble que haya conocido.',4),
    ('WD Blue 2TB 3.5 SATA 3',56.19,458,4.75,'prod42.jpg','Te presentamos en PcComponentes los discos duros Western Digital Blue, una gama de discos duros con unas características de primer nivel, disfruta de altas velocidades de lectura y escritura y capacidades de almacenamiento que te ayudarán en tu dia a dia con tu ordenador.',4),
    ('Zone Evil ZE45733 500GB 2.5" USB 3.0 Negro',24.71,5,3,'prod43.jpg','Caja externa de aluminio con almacenamiento de 500GB. Es una solución ideal para transportar una gran cantidad de información. Con conexión a través del puerto USB 3.0 tiene una velocidad de transferencia de hasta 5.0Gbps. Incluye un LED indicador del estado de conexión y acceso a tu disco duro. Realizada en aluminio para una óptima disipación del calor.',4),
    ('Seagate Expansion 5TB 2.5 USB 3.0 Negro',106.62,11,4,'prod44.jpg','Las unidades portátiles Expansion de Seagate son compactas y perfectas para un estilo de vida activo. Añada más espacio de almacenamiento instantáneamente a su equipo, y lleve sus archivos de gran tamaño a cualquier parte con este disco duro portátil de 2.5" y una capacidad de 5TB.',4),
    ('Samsung 970 EVO Plus 500GB SSD NVMe M.2',103.30,362,5,'prod45.jpg','Te presentamos el 970 EVO Plus de Samsung, un disco SSD con la última tecnología Samsung. El 970 EVO Plus es más rápido que su antecesor, el 970 EVO, alcanzando velocidades de escritura y lectura de hasta 3500MB/s.',4),
    ('Kingston A2000 M.2 500GB PCI Express 3.0 NVMe',59.50,42,4.75,'prod46.jpg','El disco SSD PCIe NVMe A2000 de Kingston es una solución de almacenamiento accesible, con un extraordinario rendimiento. Al alcanzar velocidades de lectura/escritura de hasta 2.200/2.000 MB/s*, el A2000 triplica el rendimiento de los discos SSD SATA por sus más rápidos tiempos de carga, menor consumo y menos calentamiento. El SSD A2000 ha sido diseñado para principiantes, fabricantes de sistemas a medida, personas que construyen sus propios sistemas y quienes buscan mejorar sus PC. Con su delgado diseño M.2 de una cara, el A2000 alcanza su pleno potencial instalado en un Ultrabook o en un PC de pequeño factor de forma (PC SFF).',4),
    ('HP S700 500GB SSD SATA 3',57.78,40,5,'prod47.jpg','La serie HP SSD S700 lo ayudará a proteger y transferir sus archivos de datos. El consumo de energía es inferior a 5 mW en el modo de suspensión del dispositivo, lo que ahorra significativamente el consumo de energía del sistema en el estado de espera y logra tanto la velocidad como la resistencia. La serie HP S700 puede ayudar a que la batería de su computadora portátil dure más tiempo. Ninguna pieza móvil dentro del SSD puede mantener su computadora operando a una temperatura más baja y lograr una operación casi silenciosa.',4),
    ('Samsung 860 QVO SSD 1TB SATA 3 V-NAND MLC',106.28,61,5,'prod48.jpg','El 860 QVO SSD le brinda gran capacidad de almacenamiento, con un rendimiento y confiabilidad sólidos. Con valor excepcional. Este avance se logró con la última tecnología de flash NAND MLC de 4 bits de Samsung.',4),
    ('Hewlett Packard Enterprise 2.5" 1.2 TB 12G SAS',198.01,5,0,'prod49.jpg','Unidad de disco duro basada en semiconductores HP Enterprise, 1200 GB, 12 G, SAS, 10.000 rpm.',4),
    ('Asus Rog Delta Auriculares Gaming',114.88,9,5,'prod51.jpg','ROG Delta es el primer auricular para juegos del mundo con el DAC cuádruple ESS 9218 de alta fidelidad líder en la industria, que ofrece un sonido impecablemente claro y detallado para dar a los jugadores serios la ventaja que necesitan para ganar. ROG Delta cuenta con un conector USB-C y viene con un adaptador USB-C a USB 2.0 para que pueda jugar en su PC, consola y dispositivo móvil sin cambiar los auriculares. El efecto de iluminación RGB circular tipo arco iris, único en su clase, ofrece una apariencia elegante para distinguirte en el campo de batalla.',5),
    ('Tempest GHS300 Auriculares Gaming 7.1 RGB PC/PS4',33.05,132,4.25,'prod52.jpg','Los nuevos Tempest GHS300 7.1 llevan el estatus de nuestra marca a un nuevo nivel. Estos nuevos auriculares disponen de altavoces estéreo de altísima calidad los cuales te harán disfrutar de tus largas sesiones de juego de una manera increíble.',5),
    ('Newskill Scylla Auriculares Gaming Inalámbricos',66.07,12,4,'prod53.jpg','Auriculares Wireless con sonido estéreo. Nuestros Newskill Scylla destacan por su diseño elegante con toques RGB.  Con sus almohadillas extra cómodas y su diadema acolchada te olvidarás de que estás usando unos auriculares y te sumergiras a fondo en cada partida. Para Scylla hemos apostado por una movilidad completa, además de ser completamente libre de cables, el micrófono es totalmente removible. Disfruta de nuestros auriculares en PC, PS4, Switch, Xbox One e incluso en tu smartphone.',5),
    ('Asus ROG Balteus Qi Alfombrilla Gaming',89.26,31,0,'prod54.jpg','ROG Balteus Qi es un mouse pad para juegos que brinda la comodidad de la carga inalámbrica Qi en el escritorio. Su gran superficie orientada al retrato ofrece un amplio espacio para jugar con comodidad mientras enciende dispositivos compatibles, y su acabado de textura micro está optimizado para un seguimiento ultrarrápido. Con 15 zonas de iluminación Aura Sync RGB personalizables, prepárate para jugar a tu manera, a tu estilo.',5),
    ('BenQ Zowie Camade Bungee Gaming',20.65,65,4.75,'prod55.jpg','ZOWIE CAMADE es una solución a los problemas de los ratones con cable, como restricciones de espacio o enredos de cable. CAMADE gestiona el cable, asegurando que no ocurra esto y permitiendo a los jugadores ajustar la longitud del cable disponible para poder realizar movimientos rápidos y sin obstáculos.',5),
    ('Mars Gaming MGL1 Gafas Gaming',13.63,686,4,'prod56.jpg','Las largas sesiones delante de la pantalla generan fatiga y tensión ocular y sequedad en los ojos y, a la larga, pueden provocar la aparición precoz de enfermedades como la Degeneración Macular e incluso ceguera. Las lentes especiales de las MGL1 de Mars Gaming protegen tus ojos de la dañina luz azul. El uso de las gafas gaming MGL1 reducen el impacto negativo de la luz azul generada por las pantallas. Sus lentes especiales de policarbonato impiden el paso de esta luz, mejorando la sensación de vista cansada que surge tras largas horas delante del ordenador. El diseño retro clásico de las MGL1, unas gafas de pasta negra, te permitirán utilizarlas no sólo en tus largas sesiones gaming, sino en cualquier momento en el que necesites proteger tu vista de la luz emitida por las pantallas: frente al ordenador, la televisión, el móvil o la tablet. Las MGL1 son las gafas perfectas para usar en cualquier situación. Además, sus patillas, ligeramente curvadas, harán que las gafas se ajusten a la perfección para que las puedas usas durante horas. Estas MGL1, con su diseño de cristales transparentes, son perfectas para mantener una visión real y están especialmente recomendadas para ambientes bien iluminados.',5),
    ('Newskill Byakko V2 Soporte de Volante Profesional para Logitech/Thrustmaster',66.11,55,3.5,'prod57.jpg','Byakko V2 mantiene la robustez y durabilidad que caracterizaba a su primera versión pero con un diseño modificado que le otorga un plus de estabilidad y firmeza. A su sólida estructura de metal reforzado, hemos añadido unas bases de mayor dimensión para mejorar la consistencia de Byakko V2 y favorecer el control total sobre el dispositivo.',5),
    ('Silla Racing Sports Azul/Negra',53.71,963,4,'prod58.jpg','En el trabajo, ¿por qué las sillas de oficina deben ser sobrias y serias? Y en su hogar ¿Quiere darle un toque de distinción a su habitación? y en sus ratos de ocio en su consola o PC ¿le gustaría estar sentado sintiendo la misma sensación que un piloto de coches?',5),
    ('Noblechairs Epic Nappa Black Silla Gaming Negra', 825.62,1,1,'prod59.jpg','Silla gaming transpirable de noblechairs en negro con costuras negras, ruedas de 60 mm, reposabrazos 4D, totalmente tapizada y cubierta en cuero Nappa.',5);