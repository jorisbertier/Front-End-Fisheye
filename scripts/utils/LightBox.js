let mediaUrls = [];
let mediaUrl;
let currentMediaIndex = 0;
let medias

function displaylightBox() {
    const lightbox = document.getElementById('lightbox_modal');
    lightbox.style.display = 'flex';
    body.classList.add('no-scroll');

    document.addEventListener('keydown', handleKeydown)
}


document.addEventListener('DOMContentLoaded', async function() {
setTimeout(() => {
    
    let htmlCollection = document.getElementsByClassName('wrapper__media--img');
    
    medias = Array.from(htmlCollection);

    medias.forEach((media) => {
        if (media.tagName === 'IMG') {
            mediaUrls.push(media.src);
        } else if (media.tagName === 'VIDEO') {
            mediaUrls.push(media.querySelector('source').src);
        }

        media.addEventListener('click', () => {
            if (media.tagName === 'IMG') {
                mediaUrl = media.src;
            } else if (media.tagName === 'VIDEO') {
                mediaUrl = media.querySelector('source').src;
            }

            currentMediaIndex = mediaUrls.indexOf(mediaUrl);

            updateLightboxMedia(mediaUrl);

            displaylightBox();
        });
        });

}, 1000)
setTimeout(() => {
    document.querySelector('.lightbox-navigation-left').addEventListener('click', showPreviousMedia);
    document.querySelector('.lightbox-navigation-right').addEventListener('click', showNextMedia);
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
}, 1000)

});

const body = document.querySelector('body')

function updateLightboxMedia(mediaUrl) {
    const imgElement = document.querySelector('.lightbox-media');
    const videoElement = document.querySelector('.wrapper__media--video');
    const sourceElement = document.querySelector('.video__source');

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
}

function showPreviousMedia() {
    currentMediaIndex = (currentMediaIndex - 1 + mediaUrls.length) % mediaUrls.length;
    // if (currentMediaIndex === 0) {
    //     currentMediaIndex = mediaUrls.length - 1;
    // } else {
    //     currentMediaIndex--;
    // }
    const previousMediaUrl = mediaUrls[currentMediaIndex];
    updateLightboxMedia(previousMediaUrl);
}

function showNextMedia() {
    currentMediaIndex = (currentMediaIndex + 1) % mediaUrls.length;
    // currentMediaIndex++;
    // if(currentMediaIndex >= mediaUrls.length) {
    //     currentMediaIndex = 0;
    // }
    const nextMediaUrl = mediaUrls[currentMediaIndex];
    updateLightboxMedia(nextMediaUrl);
}

function closeLightbox() {
    document.getElementById('lightbox_modal').style.display = 'none';
    body.classList.remove('no-scroll')
}

function handleKeydown(event){
    if(event.key === "ArrowRight") {
        showNextMedia()
    } else if(event.key === "ArrowLeft") {
        showPreviousMedia()
    }
}