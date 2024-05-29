import { PhotographerCard } from '../templates/PhotographerCard.js';

class Photographer {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.city = data.city,
        this.country = data.country,
        this.tagline = data.tagline,
        this.price = data.price,
        this.portrait = data.portrait
    }

    getUserCardDOM() {
        let photographerCard = new PhotographerCard(this)
        return photographerCard.createCard()
    }
}

export { Photographer }