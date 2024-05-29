class MediaPhotographer {
    constructor(data) {
        this.data = data
    }

    createCardMedia() {
        const {id, photographerId, title, image, video, likes, date, price} = this.data

        const template = document.createElement('template')
        template.innerHTML = `
            <article class="wrapper__media">
                <a href="#">
                    <img src="/assets/medias/${image}" class="wrapper__media--img" alt="${title}"/>
                </a>
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

export { MediaPhotographer }