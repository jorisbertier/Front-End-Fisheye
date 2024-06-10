class MediaCard {
    constructor(data, media, updateTotalLikesCallback) {
        this.data = data
        this.media = media
        this.likes = data.likes;
        this.updateTotalLikesCallback = updateTotalLikesCallback;
        this.hasLiked = false
    }

    createCardMedia() {
        const { title } = this.data
        let mediaSrc;

        if(this.data.image) {
            mediaSrc = `
                <img src="/assets/medias/${this.data.image}" class="wrapper__media--img" alt="${title}" role="image" aria-label="Image intitulé ${title}"/>
            `
        }
        else if(this.data.video) {
            mediaSrc =
            `
            <video class="rounded wrapper__media--img" controls tabindex="-1" width="100%" height="100%" alt="${title}" role="video" aria-label="Vidéo intitulé ${title}">
                <source src="assets/medias/${this.data.video}"  type="video/mp4">
            </video>
            `
        }

        const template = document.createElement('template')
        template.innerHTML = `
            <article class="wrapper__media" role="article">
                
                ${mediaSrc}
                <div class="wrapper__media--content">
                    <h3 class="wrapper__media--content--title">${title}</h3>
                    <div class="wrapper__media--content--like">
                        <p class="wrapper__media--content--like--p" aria-label="Nombre de likes total image: ${title}">${this.likes}</p>
                        <span class="wrapper__media--content--like-icon" aria-label="Like ou dislike image">♥</span>
                    </div>
                </div>
            </article>
        `

        const mediaElement = template.content.cloneNode(true);

        const likeIcon = mediaElement.querySelector('.wrapper__media--content--like-icon');
        const likesElement = mediaElement.querySelector('.wrapper__media--content--like--p');

        likeIcon.addEventListener('click', () => {

            if(!this.hasLiked) {
                this.likes += 1;
                this.updateTotalLikesCallback(1);
                this.hasLiked = true
                likeIcon.setAttribute('style', 'color: #901C1C !important')
            } else {
                this.likes -= 1;
                this.updateTotalLikesCallback(-1);
                this.hasLiked = false
                likeIcon.setAttribute('style', 'color: #DB8876 !important')
            }
            
            likesElement.innerText = this.likes;
        });

        return mediaElement;
    }
}

export { MediaCard }