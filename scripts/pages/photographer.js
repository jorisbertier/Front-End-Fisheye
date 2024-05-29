import { MediaCard } from "../templates/MediaCard.js";
//Mettre le code JavaScript lié à la page photographer.html
// given url string
// get url string current
var url_str = document.URL; 
let url = new URL(url_str);
let search_params = url.searchParams; 

// get value of "id" parameter
const idPhotographer = parseInt(search_params.get('id'), 10)

// get allPhotographers
async function getPhotographers() {
    let photographers = []
    try {
        const response = await fetch('data/photographers.json')
        let data = await response.json()
        photographers = data['photographers']
    } catch(error) {
        console.log('Error gettings datas photographers', error)
    }
    return ({
        photographers: [...photographers]})
}
// get allMedia
async function getMedias() {
    let medias = []
    try {
        const response = await fetch('data/photographers.json')
        let data = await response.json()
        medias = data['medias']
    } catch(error) {
        console.log('Error gettings datas photographers', error)
    }
    return ({
        medias: [...medias]})
}

async function getPhotographerByid() {
    const { photographers } = await getPhotographers();
    let photographer = photographers.find((photographer) => photographer.id === idPhotographer)
    console.log(photographer.name)

    let name = document.querySelector('.main__content--title')
    let city = document.querySelector('.main__content--subtitle')
    let tagline = document.querySelector('.main__content--subtitle-text')
    let price = document.querySelector('.wrapper__fixed--price')
    let portrait = document.querySelector('.main__picture--img')
    name.innerText = photographer.name
    city.innerText = `${photographer.city}, ${photographer.country}`
    tagline.innerText = photographer.tagline
    portrait.setAttribute('src', `/assets/photographers/${photographer.portrait}`)
    price.innerText = `${photographer.price}€ / jour`
}

async function getMediasByPhotographer() {
    const { medias } = await getMedias();

    let allMediasByPhotographer = medias.filter((media) => media.photographerId === idPhotographer);


    allMediasByPhotographer.forEach((media) => {
        const section = document.querySelector('.section__media')
        let mediaCard;

        if(media.image) {
            mediaCard = new MediaCard(media, 'image')
        } else if (media.video) {
            mediaCard = new MediaCard(media, 'video')
        } else {
            throw 'Unknown type format'
        }

        const mediaCardDOMmedia = mediaCard.createCardMedia()
        section.appendChild(mediaCardDOMmedia)

});
    
    
}

getMediasByPhotographer()
getPhotographerByid()

// addInformationPhotgraphers()