class LightBox {
    constructor(data) {
        this.data = data;
        // this.media = media;
        // this.currentIndex = 0;
    }

    createLightBox() {
        const { id, photographerId, title, likes, date, price } = this.data;
        // let mediaSrc;

        // if (this.data.image) {
        //     mediaSrc = `<img src="/assets/medias/${this.data.image}" class="lightbox-media" alt="${title}" />`;
        // } else if (this.data.video) {
        //     mediaSrc = `
        //         <video class="rounded lightbox-media" controls tabindex="-1" width="100%" height="100%" aria-label="">
        //             <source src="assets/medias/${this.data.video}"  type="video/mp4">
        //         </video>
        //     `;
        // } else {
        //     throw 'Unknown media type';
        // }

        
        const template = document.createElement('template')
        template.innerHTML = `
            <div class="lightbox-content">
                <div class="lightbox-navigation lightbox-navigation-left">
                    <span class="lightbox-arrow"><i class="fa-solid fa-angle-left"></i></span>
                </div>
                <div class="lightbox-media-container">
                    <img src="" class="lightbox-media" alt="${title}">
                    <video class="rounded wrapper__media--video hidden" controls tabindex="-1" width="100%" height="100%" alt="${title}" aria-label="">
                        <source src="" class="video__source"type="video/mp4">
                    </video>
                </div>
                <div class="lightbox-navigation lightbox-navigation-right">
                    <span class="lightbox-arrow"><i class="fa-solid fa-angle-right"></i></span>
                </div>
                <span class="lightbox-close"><i class="fa-solid fa-xmark"></i></span>
            </div>
        `;
        return template.content.cloneNode(true);
    }
}

export { LightBox }
