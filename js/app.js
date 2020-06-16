let imageMovie = document.querySelector('.image');
let title = document.querySelector('.movie-title')
let button = document.querySelector('.button')

let movies = [
    {
        title: 'Doggo1',
        image: 'https://thumbs.dreamstime.com/z/perrito-lindo-de-la-mezclado-raza-del-golden-retriever-33418956.jpg',
    },
    {
        title: 'Doggo2',
        image: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg',
    }
]



button.addEventListener('click', function () {
    let randomMovieTitle = movies[Math.floor(Math.random()*movies.length)].title;    
    let randomMovie = movies[Math.floor(Math.random()*movies.length)];   

    imageMovie.style.backgroundImage = `url('${randomMovie.image}')`
    imageMovie.style.backgroundSize = 'cover';

    title.innerText = randomMovie.title;
})

