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
        image: 'https://m.media-amazon.com/images/M/MV5BMjM3MzY4ODg4NF5BMl5BanBnXkFtZTgwMzY5OTY5NjE@._V1_.jpg',
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


]



button.addEventListener('click', function () {
    let randomMovie = movies[Math.floor(Math.random() * movies.length)];
    imageMovie.style.backgroundImage = `url('${randomMovie.image}')`
    title.innerText = randomMovie.title;
    movieDescription.innerText = randomMovie.description;
})


// {
//     image: '',
//     title: '',
//     description: ''
// }