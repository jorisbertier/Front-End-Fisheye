class LightBox {
    constructor(data) {
        this.data = data;
        // this.media = media;
        // this.currentIndex = 0;
    }

    createLightBox() {
        const { id, photographerId, title, likes, date, price } = this.data;

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

    changeImage(index) {
        // Cachez l'image actuelle (et la vidéo si elle est affichée)
        this.mediaElements[this.currentIndex].classList.remove('show');
        // Mettez à jour l'index actuel
        this.currentIndex = index;
        // Affichez la nouvelle image (ou vidéo)
        this.mediaElements[this.currentIndex].classList.add('show');
    }
}

export { LightBox }
