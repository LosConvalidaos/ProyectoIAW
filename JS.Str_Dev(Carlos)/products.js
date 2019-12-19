/* Carlos Labiano Cerón */
/*        2ºASIR        */
//Porcentaje de beneficio
//var benefitTX = 0.30;
class ShopItem {
    constructor (Nombre = 'Placeholder',Precio = 0,Stock = 0,Valoracion = 0,Imagen = 'Placeholder.jpg',Descripcion = 'Placeholder', Tipo = null) {
        this.name = Nombre;
        this.cost = Precio;
        this.qty = Stock;
        this.rating = Valoracion;
        this.img = Imagen;
        this.descr = Descripcion;
        this.type = Tipo;
        /* [Tabla de correlacion Array - Tipo prod]
                        0 - PCs
                    1 - Componentes
                    2 - Perifericos
                    3 - Merchandising
                    4 - Discos duros
                        5 - Gaming
                    null - Otros
        */
    }
    /* Getters + Setters */
    get typestr() {
        var prodtypes = ['PCs','Componentes','Perifericos','Merchandising','Discos duros','Gaming'];
        if (this.type == null) {
            return 'Otros';
        } else {
            return prodtypes[this.type];
        }
    }
    /* Metodos */
    //Devuelve el porcentaje de beneficio correspondiente segun el tipo de producto
    CalcBenefit(t) {
        var prodtypes = [0.1,0.5,0.3,0.25,0.75];
        if (t == null) {
            return 0.2;
        } else {
            return prodtypes[t];
        }
    }
    //Devuelve el precio con IVA mas el porcentaje de beneficio
    CalcSell() {
        return this.cost + (this.cost*0.21)+(this.cost*this.CalcBenefit(this.type));
    }
    //Metodo que muestra de forma mas visual la valoracion
    //WIP
    ShowStars() {
        
    }
}
//INIT
function init() {
    alert('init');
    // Productos globales
    //prod1 = new ShopItem('Prod1',100,10,5,'Prod1.jpg','Producto 1'),
    //prod2 = new ShopItem('Prod2',3,253,1,'Prod2.jpg','Producto 2'),
    //prod3 = new ShopItem('Prod3',300.99,13,4.5,'Prod3.jpg','Producto 3'),
    //prod4 = new ShopItem('Prod4',75,143,3,'Prod4.jpg','Producto 4'),
    //prod5 = new ShopItem('Prod5',9.99,1080,0.5,'Prod5.jpg','Producto 5'),
    //prod6 = new ShopItem('Prod6',100,10,5,'Prod6.jpg','Producto 6'),
    //prod7 = new ShopItem('Prod7',3,253,1,'Prod7.jpg','Producto 7'),
    //prod8 = new ShopItem('Prod8',300.99,13,4.5,'Prod8.jpg','Producto 8'),
    //prod9 = new ShopItem('Prod9',75,143,3,'Prod9.jpg','Producto 9');
    //prodn = new ShopItem('Nombre',Precio,Stock,Valoracion,'Imagen','Descripcion',Tipo(0 a 5))
    //PCs 0
    prod0 = new ShopItem('NombrePRB',0,0,0,'Placeholder.jpg','Prueba',0);
    prod01 = new ShopItem('PcCom Basic Office Pro Intel Core i5-7400/8GB/240 SSD',313.36,55,4.5,'prod01.jpg','Excelente relación calidad/precio para este PC con componentes de primeras marcas, la máxima garantía y gran rendimiento, ideal para usuarios que buscan hacer "de todo un poco. Pensado para un uso general en el hogar o en la oficina, el PcCom Office Pro se presenta como un equipo equilibrado en el que su procesador i5-7400, sus 8GB de RAM DDR4 y su rápido disco SSD de 240GB permiten trabajar de forma holgada en muy diferentes tareas, lo que lo hace ideal para entornos domésticos o de oficina.',0);
    prod02 = new ShopItem('PcCom Bronze AMD Ryzen 3 2200G/8GB/1TB+240SSD',311.94,10,4.5,'prod02.jpg','Una vez más Pc Componentes sorprende a la industria de la informática con el lanzamiento de los nuevos PcCom, la nueva línea de Pcs de sobremesa para juegos creada tras un amplio trabajo de investigación para ofrecer el mayor rendimiento y optimización en el juego para nuestros clientes. Ensamblados por nuestros expertos de montaje, los nuevos PcCom ofrecen un rendimiento increíble, con máxima velocidad, capacidad de ampliación y un amplio abanico de posibilidades dentro de la gama, en la que podrás elegir el producto óptimo según las necesidades y el tipo de Pc que estas buscando',0);
    prod03 = new ShopItem('Medion Akoya M80 P66033 PC888 Intel Core i3-8100/8GB/1TB+128GB SSD',371.08,5,5,'prod03.jpg','Diseño en color plateado compacto y elegante. Una torre que le proporciona un alto rendimiento en una ubicación fija. El MEDION® Akoya® M80 – P66033 se adapta a sus necesidades, pudiendo encontrar el equipo con diferentes configuraciones. Un ordenador que le sigue el ritmo.',0);
    prod04 = new ShopItem('HP Pavilion Gaming TG01-0012NS Intel Core i5-9400/8GB/1TB+256GB SSD/GTX1650',536.67,32,4,'prod04.jpg','Juega como siempre has querido. Este potente equipo está diseñado para seguir el ritmo de los juegos más actuales y de los que están por venir. Bajo su exterior compacto y elegante, encontrarás toda la potencia que necesitas para jugar a lo que quieras y el espacio necesario para incorporar mejoras. Potencia y rendimiento para un entretenimiento de primera clase, juegos y experiencia multitarea.',0);
    prod05 = new ShopItem('HP Pavilion 15-BC519NS Intel Core i5-9300H/8GB/512GB SSD/GTX 1050/15.6',619.01,61,4.5,'prod05.jpg','Prepárese para crear contenidos, disfrutar de sus archivos multimedia y jugar cuanto quiera, porque este ordenador portátil HP Pavilion ha sido diseñado para responder ante cualquier situación. Gracias a un rendimiento excepcional, puede pasar de unas sesiones de transmisión envolventes a editar vídeo sin retardos, y todo ello desde cualquier lugar.',0);
    prod06 = new ShopItem('Apple MacBook Air Intel Core i5/8GB/128GB SSD/13" Plateado',808.10,149,4.5,'prod06.jpg','El MacBook Air te ofrece hasta 12 horas de autonomía con una sola carga. Vamos, que puedes encenderlo por la mañana y olvidarte de cargarlo hasta la noche. Por ejemplo, si te apetece una maratón de películas de iTunes, tienes hasta 12 largas horas por delante. Además aguanta hasta un mes en reposo, así que puedes pasarte semanas sin usarlo y estará listo cuando tú quieras.',0);
    prod07 = new ShopItem('MSI Prestige 15 A10SC-044XES Intel Core i7-10710U/16GB/512GB SSD/GTX 1650/15.6',990.91,22,4.75,'prod07.jpg','MSI aprovecha el espíritu de exploración y creatividad al diseñar la mejor colección de computadoras portátiles: la serie Prestige. Para seguir empujando los límites creativos, estas máquinas finamente diseñadas no solo muestran un gusto único, sino que también son inmensamente poderosas. Es hora de dejar volar la inspiración y crear nuestros propios momentos en la vida.',0);
    prod08 = new ShopItem('MSI GT75 Titan 9SG-285ES Intel Core i9-9980HK/64GB/2TB SSD/RTX 2080/17.3',4338.15,1,0,'prod08.jpg','¿Estás buscando el máximo rendimiento? No busques más y quédate con GT75 Titan, este fantástico portátil gaming contiene el rendimiento de un ordenador de sobremesa en su chasis portable, cuenta con los más novedosos componentes en hardware junto con el mejor teclado, sistema de refrigeración y panel para gamers y entusiastas del hardware. Disfruta de una perfecta experiencia gaming con GT75 Titan. Prepárate para sentir todo el poder del juego con el potente ordenador portátil de MSI GT75 Titan 9SG. Un portátil gaming dotado con un procesador Coffeelake i9, 64GB de RAM, 2TB SSD de almacenamiento, y todo bajo una potente gráfica NVIDIA GeForce® RTX 2080 8GB GDDR6.',0);
    prod09 = new ShopItem('Corsair One i164 Compact Intel Core i9-9900K/32GB/2TB+960GB SSD/RTX 2080Ti',3222.32,6,0,'prod09.jpg','Corsair One. Una sola vida, haga que merezca la pena. El factor de forma ultracompacto y minimalista del CORSAIR ONE, revestido con una carcasa de aluminio de 2 mm de grosor, está diseñado para mostrarse desde encima del escritorio, no para esconderse debajo de este.',0);
    //COMPONENTES 1
    prod11 = new ShopItem('PNY Quadro RTX 6000 24GB GDDR6X',4084.76,7,5,'prod11.jpg','NVIDIA® Quadro RTX™ 6000, impulsada por la arquitectura NVIDIA Turing y la plataforma NVIDIA RTX, ofrece el avance más importante de las últimas dos décadas en gráficos por ordenador para los flujos de trabajo profesionales. Ahora, los diseñadores y artistas pueden aprovechar el sombreado avanzado, el aprendizaje automático y el trazado de rayos con aceleración de hardware para impulsar drásticamente su productividad y crear contenido increíble mucho más rápido que nunca.',1);
    prod12 = new ShopItem('Gigabyte GeForce RTX 2080 SUPER Gaming OC 8GB GDDR6',652.81,42,4.5,'prod12.jpg','El sistema de refrigeración WINDFORCE 3X cuenta con ventiladores de cuchilla exclusivos de 3x 82 mm, ventilador de hilado alternativo, 6 tubos de calor de cobre compuesto, función de contacto directo del tubo de calor y ventilador activo 3D, que entregan una capacidad efectiva de disipación de calor para un mayor rendimiento a temperaturas más bajas.',1);
    prod13 = new ShopItem('Corsair Vengeance LPX DDR4 3000 PC4-24000 16GB 2x8GB CL15',78.09,1015,4.75,'prod13.jpg','La memoria Vengeance LPX se ha diseñado para overclocking de alto rendimiento. El disipador de calor, fabricado en aluminio puro, permite una disipación térmica más rápida; la placa impresa de ocho capas administra el calor y proporciona una capacidad superior para incrementar el overclocking. Cada circuito integrado está seleccionado individualmente para el máximo potencial de rendimiento. El formato DDR4 está optimizado para las placas base Intel de la serie X99 más recientes y ofrece frecuencias más elevadas, mayor ancho de banda y menor consumo energético que los módulos DDR3. Se ha verificado la compatibilidad de los módulos Vengeance LPX DDR4 para toda las placas base de la serie X99, lo que asegura un rendimiento rápido y fiable. Compatibilidad con XMP 2.0 para un overclocking automático sin problemas. Y están disponibles en distintos colores para combinar con su placa base, sus componentes, o sencillamente con su estilo personal.',1);
    prod14 = new ShopItem('Crucial DDR4 2400 PC4-19200 8GB CL17',32.95,615,4.75,'prod14.jpg','CT8G4DFS824A  es un módulo DDR4 de rango único de 8 GB para ordenadores de sobremesa que funciona con velocidades de hasta 2400 MT/s y tiene una latencia CL17. Es una DIMM sin búfer. Cumple con el estándar de la industria para DDR4 ECC UDIMM con disposición de 288 pines y es compatible con ordenadores que utilizan memorias UDIMM DDR4 a 2400 MT/s.',1);
    prod15 = new ShopItem('Cooler Master Hyper TX3 EVO CPU Cooler',16.52,2535,4.5,'prod15.jpg','La serie Hyper TX ha evolucionado junto con los requisitos de las CPU principales. El lanzamiento de Hyper TX3 EVO marca otro hito con la tecnología de contacto directo mejorado de Cooler Master, que mejora aún más el rendimiento de refrigeración.',1);
    prod16 = new ShopItem('Nfortec Hydrus V2 120 Red Kit de Refrigeración Líquida',41.31,12,4.5,'prod16.jpg','Llega la nueva versión de nuestra reconocida refrigeración líquida Hydrus. Una renovación completa de todos los materiales originales que aumentan su efectividad y funcionamiento, manteniendo la gran durabilidad que siempre ha caracterizado a nuestra refrigeración veterana. Os presentamos a Nfortec Hydrus V2.',1);
    prod17 = new ShopItem('Gigabyte B450 AORUS M',83.99,159,4.5,'prod17.jpg','AMD presenta los últimos procesadores de la serie Ryzen ™ 2000 para proporcionar la potencia de cómputo necesaria para los juegos. Las placas base de la serie 400 de GIGABYTE se ajustan perfectamente al rendimiento informático de los procesadores de la serie AMD Ryzen ™ 2000 con más funciones y más control. Los usuarios pueden disfrutar los beneficios traídos por los procesadores de la serie AMD Ryzen ™ 2000.',1);
    prod18 = new ShopItem('Asus Rog Strix Z390-F Gaming',229.90,71,5,'prod18.jpg','Te presentamos la placa base Rog Strix Z390-F Gaming con socket 1151 de octava generación y Chipset Z390 de Asus.',1);
    prod19 = new ShopItem('Tempest Gaming GPSU Fuente de Alimentación 750W',37.18,121,4,'prod19.jpg','Te presentamos la Fuente de Alimentación Tempest Gaming GPSU 750W.',1);
}