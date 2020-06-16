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

    }
]



button.addEventListener('click', function () {
    let randomMovie = movies[Math.floor(Math.random() * movies.length)];
    imageMovie.style.backgroundImage = `url('${randomMovie.image}')`
    imageMovie.style.backgroundSize = 'cover';
    title.innerText = randomMovie.title;
    movieDescription.innerText = randomMovie.description;
})

