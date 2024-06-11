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
        <article class="wrapper__photographers" role="article" aria-label="Article de ${name}" aria-labelledby="photographer-${id}-name">
            <a href="photographer.html?id=${id}" class="wrapper__photographers--link" aria-label="Ouvrir la page d'information de ${name} à partir de cette l'article" tabindex="0">
                <img src="${picture}" alt="Image profil de ${name}" aria-label="Image de profile de ${name}" class="wrapper__photographers--img"/>
                <h2 class="wrapper__photographers--title">${name}</h2>
            </a>
            <h3 class="wrapper__photographers--second-title" aria-label="Ville et pays de ${name} ${city}, ${country}" tabindex="0">${city}, ${country}</h3>
            <p class="wrapper__photographers--content" aria-label="Expression favorite de ${name}, ${tagline}" tabindex="0">${tagline}</p>
            <span class="wrapper__photographers--span" aria-label="Prix de ${price} euros par jour pour ${name}" tabindex="0">${price}€/jour</span>
        </article>
        `;
        return template.content.cloneNode(true);
    }
    
}

export { PhotographerCard };