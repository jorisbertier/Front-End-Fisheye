let mediaUrls = [];
let mediaUrl;
let currentMediaIndex = 0;
let medias;

// Show lightbox and prevent page scrolling
function displaylightBox() {
    const lightbox = document.getElementById('lightbox_modal');
    lightbox.style.display = 'flex';
    body.classList.add('no-scroll');

    document.addEventListener('keydown', handleKeydown);
}

document.addEventListener('DOMContentLoaded', async function() {
    setTimeout(() => {
        
        let htmlCollection = document.getElementsByClassName('wrapper__media--img');
        medias = Array.from(htmlCollection);

        medias.forEach((media) => {
            // Add the media URL (image or video) to the mediaUrls array
            if (media.tagName === 'IMG') {
                mediaUrls.push(media.src);
            } else if (media.tagName === 'VIDEO') {
                mediaUrls.push(media.querySelector('source').src);
            }

            // Add an event listener to open the lightbox when the media is clicked
            media.addEventListener('click', () => {
                openLightboxWithMedia(media);
            });

            // add event listener by enter key
            media.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    openLightboxWithMedia(media);
                }
            });
            // Make elements focusable
            media.tabIndex = 0;
        });
    }, 1000);

    setTimeout(() => {
        document.querySelector('.lightbox-navigation-left').addEventListener('click', showPreviousMedia);
        document.querySelector('.lightbox-navigation-right').addEventListener('click', showNextMedia);
        document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        document.addEventListener('keydown', (event)=> {
            if(event.key === "Escape") {
                closeLightbox()
            }
    });
    }, 1000);
});

const body = document.querySelector('body');

// Open the lightbox with the selected media
function openLightboxWithMedia(media) {
    if (media.tagName === 'IMG') {
        mediaUrl = media.src;
    } else if (media.tagName === 'VIDEO') {
        mediaUrl = media.querySelector('source').src;
    }

    currentMediaIndex = mediaUrls.indexOf(mediaUrl);
    updateLightboxMedia(mediaUrl);
    displaylightBox();
}


// Update the lightbox content with the provided URL
function updateLightboxMedia(mediaUrl) {
    const imgElement = document.querySelector('.lightbox-media');
    const videoElement = document.querySelector('.wrapper__media--video');
    const sourceElement = document.querySelector('.video__source');

    // Check if the media is a video or an image
    if (mediaUrl.endsWith('.mp4')) {
        // Show the video and hide the image
        imgElement.classList.add('hidden');
        videoElement.classList.remove('hidden');
        sourceElement.src = mediaUrl;
        videoElement.load();
    } else {
        // Show the image and hide the video
        videoElement.classList.add('hidden');
        imgElement.classList.remove('hidden');
        imgElement.src = mediaUrl;
    }
}

function showPreviousMedia() {
    // If currentMediaIndex reaches the end of the array (mediaUrls.length), this operation resets it to zero (cycle)
    currentMediaIndex = (currentMediaIndex - 1 + mediaUrls.length) % mediaUrls.length;
    const previousMediaUrl = mediaUrls[currentMediaIndex];
    updateLightboxMedia(previousMediaUrl);
}

function showNextMedia() {
    currentMediaIndex = (currentMediaIndex + 1) % mediaUrls.length;
    const nextMediaUrl = mediaUrls[currentMediaIndex];
    updateLightboxMedia(nextMediaUrl);
}

function closeLightbox() {
    document.getElementById('lightbox_modal').style.display = 'none';
    body.classList.remove('no-scroll');

    document.removeEventListener('keydown', handleKeydown);
}

/* Accesibility keydown right & left carrousel */

function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        showNextMedia();
    } else if (event.key === "ArrowLeft") {
        showPreviousMedia();
    }
}
