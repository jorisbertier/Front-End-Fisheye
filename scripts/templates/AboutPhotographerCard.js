class AboutPhotographerCard {
    constructor(data) {
        this.data = data
    }

    createCard() {
        const { name, portrait, city, country, tagline } = this.data;
        let template = document.createElement('template');
        template.innerHTML = `
        <div class="main__content" aria-labelledby="photographer-name">
            <h1 class="main__content--title">${name}</h1>
            <h2 class="main__content--subtitle">${city}, ${country}</h2>
            <h3 class="main__content--subtitle-text">${tagline}</h3>
        </div>
        <div class="photograph-header main__modal">
            <button class="contact_button" onclick="displayModal()"  aria-label="Ouvrir le formulaire de contact de ${name}">Contactez-moi</button>
        </div>
        <div class="main__picture">
            <img src="/assets/photographers/${portrait}" alt="Profile picture ${name}" class="main__picture--img"/>
        </div>
        `
        return template.content.cloneNode(true);
    }
}

export { AboutPhotographerCard }