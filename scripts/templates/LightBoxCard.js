class LightBox {
    constructor(data) {
        this.data = data;
    }

    createLightBox() {
        const { title } = this.data;
        const $wrapper = document.createElement("div");
        $wrapper.style.height = '100vh';
        $wrapper.style.width = '100vw';
        $wrapper.style.display = 'flex';
        $wrapper.style.justifyContent = 'center';
        $wrapper.style.alignItems = 'center';

        const lightBox = `
            <div class="lightbox-content" role="carrousel" aria-label="${title} relative">
                <div class="lightbox-navigation lightbox-navigation-left" aria-label="bouton image précédente du carrousel" tabindex="0">
                    <span class="lightbox-arrow"><i class="fa-solid fa-angle-left"></i></span>
                </div>
                <div class="lightbox-media-container" aria-labelledby="carrousel-titre-média" tabindex="0">
                    <img src="" class="lightbox-media" alt="${title}" aria-labelledby="carrousel-titre-média">
                    <video class="rounded wrapper__media--video hidden" controls tabindex="-1" width="100%" height="100%" alt="${title}" aria-labelledby="carrousel-titre-média">
                        <source src="" class="video__source"type="video/mp4">
                    </video>
                </div>
                <div class="lightbox-title absolute"></div>
                <div class="lightbox-navigation lightbox-navigation-right" aria-label="bouton image suivante du carrousel" tabindex="0">
                    <span class="lightbox-arrow"><i class="fa-solid fa-angle-right"></i></span>
                </div>
                <span aria-label="bouton fermer carrousel" class="lightbox-close" tabindex="0"><i class="fa-solid fa-xmark"></i></span>
            </div>
        `;
        $wrapper.innerHTML = lightBox;
        return $wrapper;
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
