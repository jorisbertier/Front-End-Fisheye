let mediaUrls = [];
let mediaUrl;
let currentMediaIndex = 0;
let img = document.querySelector('.lightbox-media')
let medias

document.addEventListener('DOMContentLoaded', async function() {
setTimeout(() => {
    
    let htmlCollection = document.getElementsByClassName('wrapper__media--img');
    console.log(htmlCollection)
    
    medias = Array.from(htmlCollection);
    console.log(medias);

    medias.forEach((media) => {
            mediaUrls.push(media.getAttribute('data-url'))
            // console.log(mediaUrls)
            media.addEventListener('click', () => {
            // mediaUrl = mediaUrls[currentMediaIndex];
            currentMediaIndex = mediaUrls.indexOf(mediaUrl) + 2;
            console.log(currentMediaIndex)
            mediaUrl = media.getAttribute('data-url');
            img.setAttribute('src', mediaUrl)
            displaylightBox(mediaUrl)
        });
    });

}, 1000)
});

const lightboxContainer = document.querySelector('#lightbox_modal');
const lightboxOpen = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox-close');
let nextMedia = document.querySelector('.lightbox-navigation-right')
let prevMedia = document.querySelector('.lightbox-navigation-left')

function displaylightBox() {
    lightboxContainer.style.display = "block";
}

function closeLightBox() {
        lightboxContainer.style.display = "none";
}

lightboxOpen.addEventListener('click', ()=> {
    displaylightBox()
})

lightboxClose.addEventListener('click', ()=> {
    closeLightBox()
})


nextMedia.addEventListener('click', ()=> {
    //get index img at click
    // currentMediaIndex = mediaUrls.indexOf(mediaUrl);
    currentMediaIndex++;
    // currentMediaIndex = (currentMediaIndex + 1) % mediasUrl.length;
    // currentMediaIndex = currentMediaIndex + 1;
    console.log(currentMediaIndex)
    if(currentMediaIndex >= mediaUrls.length) {
        currentMediaIndex = 0;
    }
    //get index src array img click
    img.setAttribute('src', mediaUrls[currentMediaIndex])
        // Logs pour déboguer
    console.log(`Index actuel: ${currentMediaIndex}`);
    console.log(`URL actuelle: ${mediaUrl}`);
})

prevMedia.addEventListener('click', ()=> {
    currentMediaIndex = (currentMediaIndex - 1 + mediaUrls.length) % mediaUrls.length;

    // Mettre à jour l'URL de l'image et l'afficher dans la lightbox
    mediaUrl = mediaUrls[currentMediaIndex];
    document.querySelector('.lightbox-media').setAttribute('src', mediaUrl);

    // Logs pour déboguer
    console.log(`Index actuel: ${currentMediaIndex}`);
    console.log(`URL actuelle: ${mediaUrl}`);
})


