class PhotographerCard {

    constructor(data) {
        this.data = data
    }

    createCard() {
        const {id, name, portrait, city, country, tagline, price } = this.data;

        const picture = `assets/photographers/${portrait}`;
    
        const template = document.createElement('template');
        template.innerHTML =
        `
        <article class="wrapper__photographers" role="article" aria-labelledby="photographer-${id}-name">
            <a href="photographer.html?id=${id}" class="wrapper__photographers--link" aria-label="Ouvrir le carrousel à partir de l'article ${name}">
                <img src="${picture}" alt="Image profil de ${name}" aria-label="Profil de ${name}" class="wrapper__photographers--img"/>
                <h2 class="wrapper__photographers--title">${name}</h2>
            </a>
            <h3 class="wrapper__photographers--second-title">${city}, ${country}</h3>
            <p class="wrapper__photographers--content">${tagline}</p>
            <span class="wrapper__photographers--span">${price}€/jour</span>
        </article>
        `;
        return template.content.cloneNode(true);
    }
    
}

export { PhotographerCard };