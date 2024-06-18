import { MediaCard } from "../templates/MediaCard.js";
import { AboutPhotographerCard } from '../templates/AboutPhotographerCard.js'
import { LightBox } from "../templates/LightBoxCard.js";
import { displayTotalLikes } from '../functions/likes.js'
import { sortMediasByDate, sortMediasByTitle, attachEventListenersSorts } from '../functions/sort.js'

// given url string
// get url string current
var url_str = document.URL; 
let url = new URL(url_str);
let search_params = url.searchParams; 

// get value of "id" parameter
const idPhotographer = parseInt(search_params.get('id'), 10)
console.log(idPhotographer)


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

// get photographer by id
async function getPhotographerByid() {
    const { photographers } = await getPhotographers();
    let photographer = photographers.find((photographer) => photographer.id === idPhotographer)

    const section = document.querySelector('#main');
    let aboutPhotographer = new AboutPhotographerCard(photographer)

    const aboutPhotogarpherCardDOM = aboutPhotographer.createCard()
    section.appendChild(aboutPhotogarpherCardDOM)

    let price = document.querySelector('.wrapper__fixed--price')
    price.innerText = `${photographer.price}€ / jour`
}

let totalLikes = 0;

async function getMediasByPhotographer(sortBy = null) {
    const { medias } = await getMedias();
    
    const section = document.querySelector('.section__media');
    section.innerHTML = '';

    // Prevent add total
    totalLikes = 0;

    let allMediasByPhotographer = medias.filter((media) => media.photographerId === idPhotographer);

    // Create LightBox modal for each media
    let sectionModal = document.querySelector('#lightbox_modal')
    const lightBox = new LightBox(medias);
    const aboutPhotogarpherCardDOM = lightBox.createLightBox()
    sectionModal.appendChild(aboutPhotogarpherCardDOM)
    
    if (sortBy === 'date') {
        allMediasByPhotographer = sortMediasByDate(allMediasByPhotographer);
        // console.log('Medias sorted by date:', allMediasByPhotographer);
    }

    if (sortBy === 'title') {
        allMediasByPhotographer = sortMediasByTitle(allMediasByPhotographer);
        // console.log('Medias sorted by title:', allMediasByPhotographer);
    }

    const updateTotalLikesCallback = (likesToAdd) => {
        totalLikes += likesToAdd;
        displayTotalLikes(totalLikes);
    };

    allMediasByPhotographer.forEach((media) => {
        const section = document.querySelector('.section__media')
        let mediaCard;
        totalLikes += media.likes

        if(media.image) {
            mediaCard = new MediaCard(media, 'image', updateTotalLikesCallback)
        } else if(media.video) {
            mediaCard = new MediaCard(media, 'video', updateTotalLikesCallback)
        } else {
            throw 'Unknown type format'
        }

        const mediaCardDOMmedia = mediaCard.createCardMedia()
        section.appendChild(mediaCardDOMmedia)

});
displayTotalLikes(totalLikes)    
}

function init() {
    attachEventListenersSorts(getMediasByPhotographer)
    getMediasByPhotographer()
    getPhotographerByid()
}

init()