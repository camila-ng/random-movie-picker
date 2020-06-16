let image = document.querySelector('.image');
let title = document.querySelector('.movie-title')
let button = document.querySelector('.button')

const movies = [
    {
        title: 'Doggo1',
        image: 'https://thumbs.dreamstime.com/z/perrito-lindo-de-la-mezclado-raza-del-golden-retriever-33418956.jpg',
    },

    {
        title: 'Doggo2',
        image: 'https://https://i.imgur.com/z9UAzcd.jpg.dreamstime.com/z/perrito-lindo-de-la-mezclado-raza-del-golden-retriever-33418956.jpg',
    },
]


button.addEventListener('click', function(){
    image.style.backgroundImage = "url('https://thumbs.dreamstime.com/z/perrito-lindo-de-la-mezclado-raza-del-golden-retriever-33418956.jpg')";
    image.style.backgroundSize = 'cover';
    image.style.backgroundPosition = 'left';

})

