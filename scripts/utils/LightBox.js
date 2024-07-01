let mediaUrls = [];
let mediaTitles = [];
let mediaUrl;
let currentMediaIndex = 0;
let mediasArray;

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
    const mediaUrls = [];
    const mediaTitles = [];
    let currentMediaIndex = -1; // Index du média actuel

    setTimeout(() => {
        let htmlCollection = document.getElementsByClassName('wrapper__media--img');
        let mediasArray = Array.from(htmlCollection);

        mediasArray.forEach((media) => {
            let mediaTitle = '';
            let mediaSrc = '';

            // Récupération de l'URL du média
            if (media.tagName === 'IMG') {
                mediaSrc = media.src;
            } else if (media.tagName === 'VIDEO') {
                let sourceElement = media.querySelector('source');
                if (sourceElement) {
                    mediaSrc = sourceElement.src;
                }
            }

            // Verify if mediaSrc is Valide
            if (mediaSrc) {
                //Add url media at the array
                mediaUrls.push(mediaSrc);

                // Extracting file name from media URL
                let mediaFilename = mediaSrc.split('/').pop();
                console.log(`Extracted media filename: ${mediaFilename}`);

                // Find matching title in JSON data
                let mediaInfo = medias.find(item => item.image === mediaFilename || item.video === mediaFilename);
                if (mediaInfo) {
                    mediaTitle = mediaInfo.title;
                    // Adding the title to the title table
                    mediaTitles.push(mediaTitle);
                } else {
                    console.log(`No matching media found for ${mediaFilename}`);
                    mediaTitles.push('Unknown Title'); // Add a default title in case of no match
                }
            } else {
                console.log('Invalid media source found');
                mediaTitles.push('Unknown Title'); // Add a default title for invalid sources
            }

            // Add an event listener to open the lightbox when media is clicked
            media.addEventListener('click', () => {
                openLightboxWithMedia(media, mediaTitle);
            });


            media.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    openLightboxWithMedia(media, mediaTitle);
                }
            });

            // Make elements focusable
            media.tabIndex = 0;
        });

        console.log('Media URLs:', mediaUrls);
        console.log('Media Titles:', mediaTitles);
    }, 1000);

    setTimeout(() => {
        document.querySelector('.lightbox-navigation-left').addEventListener('click', showPreviousMedia);
        document.querySelector('.lightbox-navigation-right').addEventListener('click', showNextMedia);
        document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape") {
                closeLightbox();
            }
        });
    }, 1000);

    // Open the lightbox with the selected media
    function openLightboxWithMedia(media, mediaTitle) {
        let mediaUrl = '';
        if (media.tagName === 'IMG') {
            mediaUrl = media.src;
        } else if (media.tagName === 'VIDEO') {
            mediaUrl = media.querySelector('source').src;
        }

        currentMediaIndex = mediaUrls.indexOf(mediaUrl);
        updateLightboxMedia(mediaUrl, mediaTitle);
        displaylightBox();
    }

    // Update the lightbox content with the provided URL and title
    function updateLightboxMedia(mediaUrl, mediaTitle) {
        if (!mediaUrl) {
            console.log('No media URL found.');
            return;
        }

        const imgElement = document.querySelector('.lightbox-media');
        const videoElement = document.querySelector('.wrapper__media--video');
        const sourceElement = document.querySelector('.video__source');
        const titleElement = document.querySelector('.lightbox-title');

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

        // Update the title
        titleElement.innerHTML = mediaTitle;
    }

    function showPreviousMedia() {
        currentMediaIndex = (currentMediaIndex - 1 + mediaUrls.length) % mediaUrls.length;
        const previousMediaUrl = mediaUrls[currentMediaIndex];
        const previousMediaTitle = mediaTitles[currentMediaIndex];
        updateLightboxMedia(previousMediaUrl, previousMediaTitle);
    }

    function showNextMedia() {
        currentMediaIndex = (currentMediaIndex + 1) % mediaUrls.length;
        const nextMediaUrl = mediaUrls[currentMediaIndex];
        const nextMediaTitle = mediaTitles[currentMediaIndex];
        updateLightboxMedia(nextMediaUrl, nextMediaTitle);
    }

    function closeLightbox() {
        document.getElementById('lightbox_modal').style.display = 'none';
        body.classList.remove('no-scroll');

        document.removeEventListener('keydown', handleKeydown);
    }

    /* Accessibility keydown right & left carrousel */
    function handleKeydown(event) {
        if (event.key === "ArrowRight") {
            showNextMedia();
        } else if (event.key === "ArrowLeft") {
            showPreviousMedia();
        }
    }

    const body = document.querySelector('body');

    // Show lightbox and prevent page scrolling
    function displaylightBox() {
        const lightbox = document.getElementById('lightbox_modal');
        lightbox.style.display = 'flex';
        body.classList.add('no-scroll');

        document.addEventListener('keydown', handleKeydown);
    }
});