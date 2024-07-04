let mediaUrls = [];
let mediaTitles = [];
let currentMediaIndex = 0;
let mediasArray = [];

// Fonction pour récupérer les médias
async function getMedias() {
    let medias = [];
    try {
        const response = await fetch('data/photographers.json');
        let data = await response.json();
        medias = data['medias'];
    } catch (error) {
        console.log('Error getting data for medias', error);
    }
    return { medias };
}

document.addEventListener('DOMContentLoaded', async function() {
    const { medias } = await getMedias();
    
    mediaUrls = [];
    mediaTitles = [];
    currentMediaIndex = -1; // Index du média actuel

    updateMediaArrays(medias);
    initializeMediaEvents(); // Appeler la fonction pour initialiser les événements

    console.log('Media URLs:', mediaUrls);
    console.log('Media Titles:', mediaTitles);
});

export function updateMediaArrays(medias) {
    let htmlCollection = document.getElementsByClassName('wrapper__media--img');
    mediasArray = Array.from(htmlCollection);

    mediaUrls = [];
    mediaTitles = [];

    mediasArray.forEach((media) => {
        let mediaTitle = '';
        let mediaSrc = '';

        if (media.tagName === 'IMG') {
            mediaSrc = media.src;
        } else if (media.tagName === 'VIDEO') {
            let sourceElement = media.querySelector('source');
            if (sourceElement) {
                mediaSrc = sourceElement.src;
            }
        }

        if (mediaSrc) {
            mediaUrls.push(mediaSrc);

            let mediaFilename = mediaSrc.split('/').pop();
            let mediaInfo = medias.find(item => item.image === mediaFilename || item.video === mediaFilename);
            if (mediaInfo) {
                mediaTitle = mediaInfo.title;
                mediaTitles.push(mediaTitle);
            } else {
                mediaTitles.push('Unknown Title');
            }
        } else {
            mediaTitles.push('Unknown Title');
        }
    });
}

export function initializeMediaEvents() {
    removeMediaEventListeners();

    let htmlCollection = document.getElementsByClassName('wrapper__media--img');
    mediasArray = Array.from(htmlCollection);

    mediasArray.forEach((media, index) => {
        // let mediaTitle = media.getAttribute('data-title') || 'Unknown Title';

        media.addEventListener('click', () => {
            removeMediaEventListeners();
            openLightboxWithMedia(media, index);
        });

        media.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                openLightboxWithMedia(media, index);
            }
        });

        media.tabIndex = 0;
    });

    document.querySelector('.lightbox-navigation-left').addEventListener('click', showPreviousMedia);
    document.querySelector('.lightbox-navigation-right').addEventListener('click', showNextMedia);
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
}


function openLightboxWithMedia(media) {
    let mediaUrl = '';
    if (media.tagName === 'IMG') {
        mediaUrl = media.src;
    } else if (media.tagName === 'VIDEO') {
        mediaUrl = media.querySelector('source').src;
    }

    currentMediaIndex = mediaUrls.indexOf(mediaUrl);
    updateLightboxMedia(mediaUrl, mediaTitles[currentMediaIndex]);
    displayLightbox();
}

function updateLightboxMedia(mediaUrl, mediaTitle) {
    if (!mediaUrl) {
        return;
    }

    const imgElement = document.querySelector('.lightbox-media');
    const videoElement = document.querySelector('.wrapper__media--video');
    const sourceElement = document.querySelector('.video__source');
    const titleElement = document.querySelector('.lightbox-title');

    if (mediaUrl.endsWith('.mp4')) {
        imgElement.classList.add('hidden');
        videoElement.classList.remove('hidden');
        sourceElement.src = mediaUrl;
        videoElement.load();
    } else {
        videoElement.classList.add('hidden');
        imgElement.classList.remove('hidden');
        imgElement.src = mediaUrl;
    }

    titleElement.innerHTML = mediaTitle;
}

function showPreviousMedia() {
    currentMediaIndex = (currentMediaIndex - 1 + mediaUrls.length) % mediaUrls.length;
    updateLightboxMedia(mediaUrls[currentMediaIndex], mediaTitles[currentMediaIndex]);
}

function showNextMedia() {
    currentMediaIndex = (currentMediaIndex + 1) % mediaUrls.length;
    updateLightboxMedia(mediaUrls[currentMediaIndex], mediaTitles[currentMediaIndex]);
}

function closeLightbox() {
    document.getElementById('lightbox_modal').style.display = 'none';
    document.querySelector('body').classList.remove('no-scroll');
    document.removeEventListener('keydown', handleKeydown);
}

function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        showNextMedia();
    } else if (event.key === "ArrowLeft") {
        showPreviousMedia();
    }
}

function removeMediaEventListeners() {

    let htmlCollection = document.getElementsByClassName('wrapper__media--img');
    mediasArray = Array.from(htmlCollection);
    mediasArray.forEach((media) => {
        console.log(media)
        console.log('normalemnte delete')
        media.removeEventListener('click', openLightboxWithMedia);
    });

    // Vous pouvez également retirer les autres événements si nécessaire
}

function displayLightbox() {
    const lightbox = document.getElementById('lightbox_modal');
    lightbox.style.display = 'flex';
    document.querySelector('body').classList.add('no-scroll');
    document.addEventListener('keydown', handleKeydown);
}
