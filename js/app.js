let imageMovie = document.querySelector('.image');
let title = document.querySelector('.movie-title');
let button = document.querySelector('.button');
let movieDescription = document.querySelector('.movie-description');

let movies = [
    {
        title: 'Ponyo',
        image: 'https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/Ponyo%20en%20el%20acantilado%20senal%20colombia%20ghibli.jpg',
        description: 'Durante una excursión prohibida para ver el mundo de la superficie, una princesa pez de colores conoce a un niño llamado Sosuke, quien le pone el nombre de Ponyo. Ponyo quiere volverse un humano, y mientras crece su amistad, ella se vuelve más humana. El padre de Ponyo la regresa al reino del océano, pero el deseo de Ponyo es tan poderoso que ella se libera, y en el proceso, derrama una colección de elixires mágicos que ponen en peligro la aldea de Sosuke.'
    },
    {
        title: 'El Castillo Vagabundo',
        image: 'https://finde.latercera.com/wp-content/uploads/2020/03/El-castillo-ambulante.jpg',
        description: 'Después de que una bruja la transforma en una anciana, una fabricante de sombreros busca refugio en la casa ambulante de un singular mago.'
    },
    {
        title: 'Princesa Mononoke',
        description: 'Un príncipe se ve involucrado en un conflicto entre una princesa del bosque y el abuso de la mecanización.     ',
        image: 'https://i.pinimg.com/originals/99/29/a4/9929a49ce3646402743b8e599ef6679b.png',


    },
    {
        title: 'El Viaje de Chihiro',
        image: 'https://www.xtrafondos.com/wallpapers/resized/kaonashi-no-face-de-el-viaje-de-chihiro-pelicula-5034.jpg?s=large',
        description: 'Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.'
    },
    {
        title: 'Nausicaa',
        image: 'https://i.pinimg.com/originals/18/5b/e4/185be488acf6db56836b0420ef478b99.jpg',
        description: 'Una princesa descubre la verdad acerca de un bosque tóxico y se enfrenta a los planes criminales de un dictador que intenta destruirlo.'
    },
    {
        title: 'La Brujita Kiki',
        description: 'Sinopsis: “Kiki es una joven bruja de 13 años en periodo de entrenamiento, que se divierte volando en su escoba junto a Jiji, un sabio gato negro. Según la tradición, todas las brujas de esa edad deben abandonar su hogar durante un año para saber valerse por sí mismas.        ',
        image: 'https://i0.wp.com/cuatrobastardos.com/wp-content/uploads/2020/03/Nicky-la-aprendiz-de-bruja.jpg?resize=678%2C381&ssl=1'
    },
    {
        title: 'Mi Vecino Totoro',
        image: 'https://m.eldiario.es/fotos/vecino-Totoro-vuelve-actual-treinta_EDIIMA20190104_0342_5.jpg',
        description: 'Esta historia animada del director Hayao Miyazaki sigue a las estudiantes y hermanas Satsuke y Mei mientras se establecen en su casa de campo con su padre y esperan a que su madre se recupere de una enfermedad en un hospital del área. Cuando las hermanas exploran su nueva casa, descubren y hacen amistad con unos duendes juguetones, y en el bosque cercano encuentran a una enorme criatura conocida como Totoro.        '

    },
    {
        title: 'Arriety y el Mundo de los Diminutos',
        image: 'http://2.bp.blogspot.com/-ON9fEqP-oe8/T_6Txskr2XI/AAAAAAAADSU/dhiizhaFp2c/s1600/Arrietty+diminutos+borrowers+2010.jpg',
        description: 'Arrietty, una pequeña joven, vive con sus padres en una casa de los suburbios, a escondidas del dueño y la ama de casa. Como otros de su especie, Arrietty se mantiene oculta de sus anfitriones humanos, pero ocasionalmente se aventura más allá de los pisos en busca de azúcar y otros suministros. Una amistad secreta se forma cuando Shawn, de 12 años, conoce a Arrietty, pero su relación podría ser peligrosa para la familia de Arrietty. '

    },
    {
        image: 'https://vistapointe.net/images/amelie-4.jpg',
        title: 'Amelie',
        description: 'El hallazgo de un tesoro olvidado pone a una camarera parisina a cuestionar, y alterar la vida de quienes la rodean.'
    },

    {
        image: 'https://images.alphacoders.com/635/635681.jpg',
        title: 'Donnie Darko',
        description: 'Un joven extraño a menudo es visitado por un conejo profético, que como él, aguarda el inminente fin del mundo.'
    },
    {
        image: 'https://pics.filmaffinity.com/Las_v_rgenes_suicidas-415529694-large.jpg',
        title: 'The Virgin Suicides',
        description: 'Hombres recuerdan a cinco hermanas intrigantes, cuyos padres las mantuvieron en cuarentena después del suicidio de una de ellas.'
    },

    {
        image: 'https://images7.alphacoders.com/766/thumb-1920-766369.jpg',
        title: 'Carol',
        description: 'En la Nueva York de la década de 1950, una joven trabajadora de una tienda de moda y una mujer elegante y sofisticada, que vive inmersa en un matrimonio en el que no encuentra la felicidad, entablan una amistad que dará paso a una creciente atracción mutua para desembocar en una relación lésbica de consecuencias complicadas para las vidas de ambas.'
    },
    {
        image: 'https://www.mobilekino.de/wp-content/uploads/2017/05/moonlight-film-movie-2016.jpeg',
        title: 'Moonlight',
        description: 'Un joven de familia humilde que vive en Miami en la época en que los cárteles de la droga libran en la ciudad una auténtica batalla, tiene problemas para aceptar su homosexualidad. Mientras madura en un ambiente hostil, experimenta la alegría, la ira, el placer de la belleza, el éxtasis y el dolor. Todo lo conocerá y de todo aprenderá.'
    },
    {
        image: 'https://www.cinemascomics.com/wp-content/uploads/2020/05/call_me_by_your_name-943415078-large-1536x1025.jpg.webp',
        title: 'Call Me By Your Name',
        description: 'En Italia, en la década de 1980, en medio del esplendor del verano, Elio y Oliver descubren la embriagadora belleza de un deseo naciente que va a alterar sus vidas para siempre.    '
    },
    {
        image: 'https://indiehoy.com/wp-content/uploads/2016/01/Macbeth.jpg',
        title: 'Macbeth',
        description: 'El general Macbeth celebra victoria tras victoria. Un día escucha la profecía de tres mujeres que le dicen que pronto va a convertirse en el rey de Escocia. Su mujer, Lady Macbeth, le fuerza a matar el rey y así ascender al trono. A partir de ese momento, Macbeth es perseguido por sentimientos de culpabilidad y paranoia y se convierte en un tirano. El nuevo rey sigue cometiendo más asesinatos hasta el punto de provocar una guerra civil.'
    },
    {
        image: 'https://img.hdv.fun/backdrop/tt0093512.jpg',
        title: 'Maurice',
        description: 'Un universitario de Cambridge en 1910 tiene problemas con su homosexualidad. Basada en la novela de E.M. Forster.        '
    },
    {
        image: 'https://jojud265nia2bj9sy4ah9b61-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/FemaleGaze_HouseOfTolerance_01-1600x900-c-default.jpg',
        title: 'House of Tolerance',
        description: 'Casa de tolerancia es un drama francés que retrata cómo se vivía antiguamente en lo que hoy en día llamamos prostíbulos. Ambientada en el siglo XIX, la película se centra en los abusos y comportamientos indeseables de los clientes, concretamente en el trágico suceso que desfigura a una chica.'
    },
    {
        image: 'https://media.newyorker.com/photos/5909745f019dfc3494ea28bf/master/pass/Brody-AMasterfulEmilyDickinsonMovie2.jpg',
        title: 'A quiet passion',
        description: 'La gran poeta Emily Dickinson pasó la mayor parte de su vida en casa de sus padres en Amherst, Massachusetts. La mansión en la que vivió sirve de telón de fondo al retrato de una mujer nada convencional de la que se sabe muy poco.'
    },
    {
        image: 'https://images.justwatch.com/backdrop/71057513/s1440/una-habitacion-con-vistas',
        title: 'A room with a view',
        description: 'En 1907, una señorita inglesa viaja a Florencia acompañada por un primo y se enamora de un hombre.'

    },
    {
        image: 'https://s3.amazonaws.com/criterion-production/janus_stills/928-/27627id_764_062_primary_w1600.jpg',
        title: 'Black Moon',
        description: 'Una serie de personajes extraños predominan en esta historia acerca de una mujer que huye de unas fuerzas enemigas en un país futurista.        '
    },
    {
        image: 'https://wp.stanforddaily.com/wp-content/uploads/2019/04/Death-in-Venice-2.jpg',
        title: 'Death in venice',
        description: 'Mientras está de vacaciones en un hotel en Venecia, un compositor se siente atraído por un joven muchacho.'
    },
    {
        image: 'https://images.justwatch.com/backdrop/10972695/s1440/diarios-de-motocicleta',
        title: 'Diarios de Motocicleta',
        description: 'En 1952, el estudiante de medicina Ernesto "Che" Guevara y su amigo Alberto Granado realizan un viaje a través de Sudamérica que cambia sus vidas.    '
    },
    {
        image: 'https://pbs.twimg.com/media/CDjHjLRUMAEc7DB.jpg',
        title: 'Effie Grey',
        description: 'En la Inglaterra victoriana, la esposa del crítico John Ruskin busca la anulación de su matrimonio para que ella pueda casarse con su protegido, Everett Millais.'
    },
    {
        image: 'https://1.bp.blogspot.com/-NVGUknGbOzI/UoUsa-db_LI/AAAAAAAAQA8/CAxiqFhziAs/s1600/Russian_Ark_Cult1+copy.jpg',
        title: 'Russian Ark',
        description: 'Un marqués francés se pasea a través de un vasto laberinto de corredores, teatros y salones de baile en una recepción para el embajador persa. '
    },
    {
        image: 'https://4.bp.blogspot.com/-NQlj8gs_r6g/WymXPYagcuI/AAAAAAAAB3g/S2biyAJ9Ud4z0l3PbBhRi8a33nSR94zhgCLcBGAs/s1600/23-picnic-at-hanging-rock.w1200.h630.jpg',
        title: 'Picnic at Hanging Rock',
        description: 'A principios del siglo XX, Miranda asiste a un internado para niñas en Australia. Durante un Día de San Valentín, la estricta directora de la escuela invita a las niñas a un día de campo en una inusual formación volcánica llamada Hanging Rock. A pesar de las reglas, Miranda y otras niñas se aventuran por el lugar. No es hasta el final del día que la institución descubre que las niñas y una de las maestras (Vivean Gray) han desaparecido misteriosamente.'
    },
    {
        image: 'https://cartelera.elpais.com/assets/uploads/2019/07/26030114/F_00893.jpg',
        title: 'La doble vida de Verónica',
        description: 'Dos niñas nacen en dos ciudades diferentes, en Francia y en Polonia. Sus familias nunca se conocieron, sin embargo son iguales: zurdas, una voz magnífica, la misma malformación cardiaca difícilmente detectable. '
    },
    {
        image: 'https://images-1.wuaki.tv/system/shots/2762/original/practicamente-magia-1557410034.jpeg',
        title: 'Practical Magic',
        description: 'Dos hermanas que no encuentran solución a los problemas de la vida y el amor, usan sus habilidades de brujería.        '
    },
    {
        image: 'https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2012/09/14/Style/Images/PERKS-012-DF-05972.JPG?t=20170517',
        title: 'The Perks Of Being A Wallflower',
        description: 'Charlie es un joven socialmente torpe y siempre está viendo la vida desde la barrera, hasta que dos estudiantes carismáticos se convierten en sus mentores. Sam y su hermanastro Patrick ayudan a Charlie a descubrir las alegrías de la amistad, el primer amor, la música y mucho más, mientras que un maestro provoca que él sueñe con ser un escritor. Sin embargo, mientras sus nuevos amigos se preparan para ir a la universidad, su tristeza interior amenaza con destruir su confianza.'
    },
    {
        image: 'https://www.beursschouwburg.be/site/assets/files/148037/the-punk-singer--2web.1800x1200.jpg',
        title: 'The Punk Singer',
        description: 'La cineasta Sini Anderson analiza la vida y carrera de la rockera punk Kathleen Hanna, la líder de Bikini Kill, quien se convirtió en pionera del movimiento "riot grrrl" de los años noventa.        '
    },
    {
        image: 'https://3.bp.blogspot.com/-azpio3FJTgs/W7ppvGcQ8YI/AAAAAAAAwfU/6gG717VdjnU4JvYksn4p7Lh5WoIGdwf8wCEwYBhgL/s1600/zerkalo00001.png',
        title: 'Zerkalo (El Espejo)',
        description: 'En la Rusia de la Segunda Guerra Mundial, sueños severos e imágenes muestran fragmentos de una vida, desde la infancia hasta la etapa adulta.        '
    },
    {
        image: 'https://revistayume.com/wp-content/uploads/2020/03/Orlando4.jpg',
        title: 'Orlando',
        description: 'Basada en la novela de Virginia Woolf sobre un personaje eternamente joven que vive como un hombre y una mujer.        '
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/lionsgate-2000849-206307-Full-Image_GalleryBackground-en-US-1483993507538._SX1080_.jpg',
        title: 'El Piano',
        description: 'Una mujer muda llamada Ada se queda viuda y viaja con su hija a Nueva Zelanda para un matrimonio concertado. Su marido se niega a llevarse a casa el piano desde Escocia, pero un vecino lo rescata y se lo deja usar si acepta un turbio pacto.        '
    },
    {
        image: 'https://a.ltrbxd.com/resized/sm/upload/ad/c3/b3/xe/phantom-of-the-paradise-1200-1200-675-675-crop-000000.jpg?k=e2efc31cfc',
        title: 'Phantom of the Paradise',
        description: 'Un compositor de ópera rock es víctima de un empresario sin escrúpulos que intenta usar sus canciones para abrir una nueva casa de espectáculos.        '
    },
    {
        image: 'https://d.newsweek.com/en/full/380243/rocky-horror-picture-show.jpg?w=1440&h=720&f=6bd1a329e088e30da3a761daeea283c1',
        title: 'The Rocky Horror Picture Show',
        description: 'Una pareja, formada por Brad y Janet, se encuentra a merced de un científico loco, el Dr. Frank-N-Furter y sus invitados. (buee camo buscá una sinopsis mas larga)'
    },
    {
        image: 'https://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/86/12/90/19824346.jpg',
        title: 'Mozart´s Sister',
        description: 'Niña prodigio, Nannerl Mozart es presentada con su joven hermano en todas las cortes europeas. Tras un viaje de tres años, conoce en Versalles al hijo de Louis XV que la incita a escribir música. En esa época una niña no tiene derecho a componer.        '
    },
    {
        image: 'https://video-images.vice.com/articles/5ab36264db3fb200061666e5/lede/1521797281146-Captura-de-pantalla-2018-03-23-a-las-102538-1.png?crop=0.9583333333333334xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*',
        title: 'Mujeres al borde de un ataque de nervios',
        description: 'Una mujer que busca a su ex amante se encuentra con caos cuando un diverso grupo de extraños entra en su vida. '
    },
    {
        image: 'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/77/91/78/19649907.jpg',
        title: 'Jane Eyre',
        description: 'Dueña de un singular temperamento desde su complicada infancia de huérfana, primero a cargo de una tía poco cariñosa y después en la escuela Lowood, Jane Eyre logra el puesto de institutriz en Thornfield Hall para educar a la hija de su atrabiliario y peculiar dueño, el señor Rochester.'
    },
    {
        image: 'https://metropolitano.gal/wp-content/uploads/2018/02/lovingvincent.jpg',
        title: 'Loving Vincent',
        description: 'Francia, 1981. Antes de morir, el artista Vincent Van Gogh dejó una carta para su hermano Theo y la tarea de entregársela recae sobre el joven Armand Roulin, hijo del cartero personal de Van Gogh. Tras descubrir que Theo falleció poco después que su hermano, Armand viaja al pueblo en el que Van Gogh se quitó la vida para buscar otro posible destinatario de la carta.        '
    },
    {
        image: 'https://estaticos.elperiodico.com/resources/jpg/7/6/mary-shelley-48283-1531239889067.jpg',
        title: 'Mary Shelley',
        description: 'La familia de Mary no aprueba su relación con Percy Shelley, pero ellos huyen. Tiempo después, en la mansión de Lord Byron, el escritor propone a sus invitados, entre los que está la pareja, que inventen un cuento de terror: así nace Frankenstein.        '
    },
    {
        image: 'https://i1.wp.com/www.4ye.co.uk/wp-content/uploads/2018/02/misspettigrew.jpg',
        title: 'Miss Pettigrew Lives for a Day',
        description: 'Un institutriz británica de mediana edad prueba la vida glamurosa cuando acepta trabajar para una celebridad estadounidense.'
    },
    {
        image: 'https://i0.wp.com/larsruby.com/wp-content/uploads/2018/08/critique-blackkklansman-spike-lee-larsruby.jpg?fit=1500%2C767&ssl=1',
        title: 'BlacKkKlansman',
        description: 'En 1979, Ron se convierte en el primer policía negro de Colorado Springs, pero sus superiores no lo reciben con agrado. Ron y su compañero Flip, judío, afrontan una misión casi suicida: infiltrarse en el Ku Klux Klan local y desmantelarlo.        '
    },
    {
        image: 'https://images.justwatch.com/backdrop/11112405/s1440/retrato-de-una-obsesion',
        title: 'Fur',
        description: 'Nueva York, 1958, Diane Arbus es una ama de casa que trabaja como asistente de su marido. Su vida transcurre cómoda y tranquila, hasta que un nuevo vecino se muda al barrio y capta la atención de Diane. La llegada de este hombre la lleva a descubrir su propio talento y a transgredir las costumbres de la época.        '
    },
    {
        image: 'https://www.critikat.com/wp-content/uploads/fly-images/37275/arton2268-1450x800-c.jpg',
        title: 'Holiday',
        description: 'Un hombre inconformista pasa las vacaciones con la hermana de su novia, que está obsesionada con la riqueza. Este hombre poco ortodoxo pronto descubre que tiene más cosas en común con la pequeña hermana rebelde que con la mujer que lo ama.        '
    },
    {
        image: 'https://filmdaily.co/wp-content/uploads/2020/03/Heavenly-Creatures-1.jpg',
        title: 'Heavenly Creatures',
        description: 'La intensa amistad entre dos estudiantes termina en tragedia, cuando su vívida imaginación provoca impulsos asesinos.        '
    },
    {
        image: 'https://canalhollywood.es/wp-content/uploads/frankie-y-johnny-1.jpg',
        title: 'Frankie and Johnny',
        description: 'Una camarera que evita involucrarse sentimentalmente, no sabe qué hacer con los galanteos del nuevo cocinero.'
    },
    {
        image: 'https://images.justwatch.com/backdrop/11071662/s1440/fabrica-de-suenos',
        title: 'Factory Girl',
        description: 'A mediados de los años sesenta, la millonaria Edie Sedgwick conoce al artista Andy Warhol. Edie se une a la famosa Fábrica de Warhol y se convierte en su musa. A pesar de que ella parece tenerlo todo, Edie no puede tener el amor que desea de Andy. Edie tiene un romance con un músico carismático, que la presiona a independizarse de Andy y de la Fábrica.        '
    },
    {
        image: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/MUzx3org1hbL1e5rUWMCB5HER9s=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ZKVGLQE6X4I6DGM3BQN777PUB4.jpg',
        title: 'Hysteria',
        description: 'Dos médicos en la Inglaterra victoriana usan la estimulación manual en los genitales femeninos para curar las enfermedades de sus pacientes, provocando la invención del vibrador.        '
    },
    {
        image: 'https://cinemagavia.es/wp-content/uploads/2020/04/Cleo-de-5-a-7..jpg',
        title: 'Cleo de 5 a 7',
        description: 'Una cantante francesa compra, llora, canta y visita a sus amigos mientras espera los resultados de sus pruebas de cáncer.'
    },
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5444dab7e4b06e8b47e07b97/1488722437548-6XO0OO8A43EE4CVU7DY4/ke17ZwdGBToddI8pDm48kAEir-smB8irBsStMBh0JyxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIqNx8gER7_lUUbWIyiqcNnDo9fqxu5XoQHKZJigU3B2kKMshLAGzx4R3EDFOm1kBS/Los+400+golpes',
        title: 'Los 400 golpes',
        description: 'Tras ser marginado por sus padres, un joven estudiante parisino llamado Antoine Doinel escapa de su casa y se refugia en el mundo del crimen.        '
    },
    {
        image: 'https://s1.eestatic.com/2018/01/18/cultura/cine/Cine_278236331_61046937_1024x576.jpg',
        title: '120 latidos por minuto',
        description: 'París, comienzos de la década de 1990. El grupo de jóvenes activistas Act Up lucha por conseguir una mayor visibilidad e implicación del Gobierno y de las farmacéuticas en la lucha contra el sida.        '
    },
    {
        image: 'https://assets.mubicdn.net/images/film/35159/image-w1280.jpg?1554492395',
        title: 'Big Eden',
        description: 'Un comerciante local guarda el secreto de un artista homosexual que ha vuelto a Montana a cuidar a su abuelo enfermo.        '
    },
    {
        image: 'https://inmendoza.com/wp-content/uploads/2018/12/Colette.jpg',
        title: 'Colette',
        description: 'Después de mudarse a París, la escritora Sidonie Gabrielle Colette acepta ser la autora de una novela semibiográfica sobre su esposo. Su éxito la inspira a luchar por los derechos de autor y enfrentarse a los contratos de principios de siglo XX.        '
    },
    {
        image: 'https://lh3.googleusercontent.com/proxy/jhzZPShehwh_XuD9-x9ldLq6s8jC_0NYAsUoAtUG3U_u79iraiyEy1yFpzALwAejl9NCtbRh_FBKCRlt2qqqRIOssLpu4OcX2NFmy80ACFUdKwxz_bo4s-EwWkQSEyVa-tyb_gZI839Dw1xf-8qj8_lzBPRQzdOtCwfoYJMiX-m6lxrtenQJlBuF',
        title: 'Desert Hearts',
        description: 'El sereno comportamiento de una maestra de inglés se ve alterado al envolverse en una relación lésbica con una crupier.        '
    },
    {
        image: 'https://cdn1.thr.com/sites/default/files/2016/11/esteros_-_still_-_h_-_2016_0.jpg',
        title: 'Esteros',
        description: 'Dos amigos de la infancia, ahora adultos, se reencuentran y exploran sentimientos que han sido reprimidos por mucho tiempo.        '
    },
    {
        image: 'https://lh3.googleusercontent.com/proxy/RnCq-FbXz8b2FwZDMbCRq4-Kk-pXMMQDibZLEj28trFCQ4-DnAi5zMVPXnrs9PCsfjO-4XKbHbZojFyDv9wGNFfwh4mpuZM4NP9fNtFqd7RjGTOm5n4pj88elvScd7fP1j4heRtiGtAeNw',
        title: 'Edward II',
        description: 'Inglaterra, siglo XIV, el rey Eduardo II se enamora de Piers Gaveston, un joven de origen humilde al que colma de títulos y honores. El ostensible desprecio por su esposa Isabella, y la negligencia que demuestra frente a las cuestiones de Estado le granjean la peligrosa enemistad de la nobleza y el clero.        '
    },
    {
        image: 'https://i2.wp.com/lalulula.tv/wp-content/uploads/2019/09/D2uUAjGWoAEelGE.png?fit=1980%2C787&ssl=1',
        title: 'Caravaggio',
        description: 'El pintor Michelangelo Merisi, nacido en Caravaggio, se está muriendo lejos de su hogar. En el lecho de muerte recuerda los comienzos de su vida como pintor. El niño Michelangelo dejó su Caravaggio natal al quedar huérfano, y se traslada a Milán, donde se inicia como pintor en diferentes talleres, hasta que establece un taller propio, en la Roma de los Papas, ganándose el favor de la Iglesia, que le encarga numerosas obras. Llegan entonces la fama, el dinero, sus amores homosexuales, las intrigas políticas y religiosas, la envidia y el crimen.'
    },
    {
        image: 'https://www.mor.bo/wp-content/uploads/2017/08/goc.jpg',
        title: 'God´s own country',
        description: 'Johnny Saxby es un joven granjero de Yorkshire que intenta olvidar sus problemas personales con la bebida y el sexo. Cuando llega al pueblo un inmigrante rumano para trabajar con su familia, su visión de la vida y de sí mismo cambia.        '
    },
    {
        image: 'https://redaragon.elperiodicodearagon.com/img/upload/40893_g.JPG',
        title: 'Happy Together',
        description: 'Una relación romántica ocurre entre dos hombres de Hong Kong que viven en Argentina.'
    },
    {
        image: 'https://ogimg.infoglobo.com.br/in/14879268-d02-e69/FT1086A/652/Eu-Nao-Quero-Voltar-Sozinho-Lacuna-filmes.jpg',
        title: 'Hoje eu quero voltar sozinho',
        description: 'Leonardo es un adolescente invidente que busca independencia. Su vida diaria, la relación con su mejor amiga, Giovana, y la forma en la que él ve el mundo cambia completamente con la llegada de Gabriel.        '
    },
    {
        image: 'https://lh3.googleusercontent.com/proxy/CMI7r3vE0Swvl987F4YxQVfRBsWSv7mOVN8D9vTboWJ7g6jDwhH8bXe8Pp9FcIuEjlYHQFPjOY-YvewYq3aki7wtPt4Gis4qsxe7PZQt7NaKGuUJyExEf3AmgQw64Do5jLexPWn2Ucp9JSSxnizELPyTNk5H',
        title: 'La belle saison',
        description: 'En 1971, Carole y Delphine se conocen y se enamoran. Cuando Carole sigue a Delphine hasta la granja de su familia, ambas descubren que el lesbianismo y el feminismo no son fáciles en el campo.        '
    },
    {
        image: 'https://i-d-images.vice.com/images/articles/meta/2015/01/16/untitled-article-1421410111.jpeg?crop=1xw%3A0.8832644628099173xh%3Bcenter%2Ccenter&resize=2000%3A*',
        title: 'Paris is burning',
        description: 'Este documental se centra en personas trans que viven en la ciudad de Nueva York y su cultura, la cual proporciona un sentido de comunidad y apoyo para los artistas rechazados por la sociedad. Grupos de cada casa compiten en elaborados reuniones que se basan en el mundo de la moda. También se tocan temas como el racismo y la pobreza, y el filme presenta entrevistas con un número de renombradas drag queens, incluyendo a Willi Ninja, Pepper LaBeija y Dorian Corey.        '
    },
    {
        image: 'https://theplaylist.net/wp-content/uploads/2017/10/Princess-Cyd.jpg',
        title: 'Princess Cyd',
        description: 'Ansiosa por escapar de su padre, la joven Cyd decide visitar a su tía novelista en Chicago durante el verano. Allí se enamorará de una chica del vecindario. '
    },
    {
        image: 'https://i.pinimg.com/originals/7a/b1/df/7ab1df57b69afc9c551d182689f8f655.jpg',
        title: 'The scent of green papaya',
        description: 'Una chica pobre descubre la vida cuando trabaja como criada para una familia rica en Saigón durante los años 50.        '
    },
    {
        image: 'https://variacionespop.com/wp-content/uploads/2020/03/inthemoodforlove00.jpg',
        title: 'In the mood for love',
        description: ' Chow, redactor jefe de un diario local, se muda con su mujer a un edificio habitado principalmente por residentes de Shanghai. Allí conoce a Li-zhen, una joven que acaba de instalarse en el mismo edificio con su esposo. Ella es secretaria de una empresa de exportación y su marido está continuamente de viaje de negocios. Como la mujer de Chow también está casi siempre fuera de casa, Li-zhen y Chow pasan cada vez más tiempo juntos y se hacen muy amigos. Un día, ambos descubrirán algo inesperado sobre sus respectivos cónyuges.'
    },
    {
        image: 'https://media1.popsugar-assets.com/files/thumbor/opStgU_t5XjcplFGtYssXy7ULYM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/11/10/058/n/1922283/a99d6d98f1eb50d0_i1HhY9CjasaGF/i/What-Eating-Gilbert-Grape-1993.png',
        title: 'What´s Eating Gilbert Grape',
        description: 'En Endora, un pequeño pueblo del Medio Oeste estadounidense, vive Gilbert Grape, un joven empleado en un supermercado cuya vida es cuidar de una madre inmensamente obesa y de un hermano con discapacidad mental, y está cansado de su rutina. Su vida transcurre anodina hasta que la llegada de Becky, una chica moderna y muy especial, lo cambia todo.        '
    },
    {
        image: 'https://indiehoy.com/wp-content/uploads/2019/09/irreversible-1200x605.jpg',
        title: 'Irreversible',
        description: 'No hay sinopsis porque spoilea, mirala.'
    }


]

const imagePreloader = () => {
    movies.forEach(movieObject => {
        const loaded = new Image();
        loaded.src = movieObject.image
    })
}
imagePreloader()

let randomNumber

button.addEventListener('click', function () {
    let newNumber = Math.floor(Math.random() * movies.length);
    while (randomNumber === newNumber) {
        newNumber = Math.floor(Math.random() * movies.length);
    }
    randomNumber = newNumber;
    imageMovie.style.backgroundImage = `url('${movies[newNumber].image}')`
    title.innerText = movies[newNumber].title;
    movieDescription.innerText = movies[newNumber].description;
})

// {
//     image: '',
//     title: '',
//     description: ''
// }


