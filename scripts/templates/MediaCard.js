class MediaCard {
    constructor(data, media) {
        this.data = data
        this.media = media
    }

    createCardMedia() {
        const {id, photographerId, title, likes, date, price} = this.data
        let mediaSrc;

        if(this.data.image) {
            mediaSrc = `
            <a href="#">
                <img src="/assets/medias/${this.data.image}" class="wrapper__media--img" alt="${title}"/>
            </a>
            `
        }
        else if(this.data.video) {
            mediaSrc =
            `
            <video class="rounded wrapper__media--img" controls tabindex="-1" width="100%" height="100%" aria-label="">
                <source src="assets/medias/${this.data.video}"  type="video/mp4">
            </video>
            `
        }

        const template = document.createElement('template')
        template.innerHTML = `
            <article class="wrapper__media">
                
                ${mediaSrc}
                <div class="wrapper__media--content">
                    <h3 class="wrapper__media--content--title">${title}</h3>
                    <div class="wrapper__media--content--like">
                        <p class="wrapper__media--content--like--p">${likes}</p>
                        <span class="wrapper__media--content--like-icon">♥</span>
                    </div>
                </div>
            </article>
        `
        return template.content.cloneNode(true);
    }
}

export { MediaCard }