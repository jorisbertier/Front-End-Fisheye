import { MediaCard } from "../templates/MediaCard.js";

class LightBox {
    constructor(data, media) {
        this.data = data;
        this.media = media;
        this.currentIndex = 0;
    }

    createLightBox() {
        const { id, photographerId, title, likes, date, price } = this.data;
        let mediaSrc;

        if (this.data.image) {
            mediaSrc = `<img src="/assets/medias/${this.data.image}" class="lightbox-media" alt="${title}" />`;
        } else if (this.data.video) {
            mediaSrc = `
                <video class="rounded lightbox-media" controls tabindex="-1" width="100%" height="100%" aria-label="">
                    <source src="assets/medias/${this.data.video}"  type="video/mp4">
                </video>
            `;
        } else {
            throw 'Unknown media type';
        }

        
        const template = document.createElement('template')
        template.innerHTML = `
        <div id="lightbox_modal" class="lightbox-modal">
        <div class="lightbox-content">
            <div class="lightbox-navigation lightbox-navigation-left">
                <span class="lightbox-arrow">&lt;</span>
            </div>
            <div class="lightbox-media-container">
                ${mediaSrc}
            </div>
            <div class="lightbox-navigation lightbox-navigation-right">
                <span class="lightbox-arrow">&gt;</span>
            </div>
            <span class="lightbox-close">&times;</span>
        </div>
        </div>
        `;

        // const lightboxContainer = document.querySelector('#lightbox_modal');
        // const lightboxOpen = document.querySelector('.lightbox');
        // const lightboxClose = document.querySelector('.lightbox-close');
        // const lightbox = document.querySelector('.lightbox');
        // console.log(lightbox)

        // function displaylightBox() {
        //     lightboxContainer.style.display = "block";
        // }

        // function closeLightBox() {
        //     lightboxContainer.style.display = "none";
        // }

        // lightboxOpen.addEventListener('click', ()=> {
        //     displaylightBox()
        // })
        // let htmlCollection = document.getElementsByClassName('wrapper__media--img');
        // let medias = Array.from(htmlCollection);
        // // console.log(medias)
        
        // medias.forEach(media => {
        //     media.addEventListener('click', () => {
        //         displaylightBox()
        //     // console.log(media)
        //     });
        // });




        // lightboxClose.addEventListener('click', ()=> {
        //     closeLightBox()
        // })
        return template.content.cloneNode(true);
    }


}


export { LightBox }
