function photographerTemplate(data) {
    const {id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const template = document.createElement('template');
        template.innerHTML =
        `
        <article class="wrapper__photographers">
            <a href="photographer.html?id=${id}" class="wrapper__photographers--link">
                <img src="${picture}" alt="Profile picture ${name}" class="wrapper__photographers--img"/>
                <h2 class="wrapper__photographers--title">${name}</h2>
            </a>
            <h3 class="wrapper__photographers--second-title">${city}, ${country}</h3>
            <p class="wrapper__photographers--content">${tagline}</p>
            <span class="wrapper__photographers--span">${price}€/jour</span>
        </article>
        `;
        return template.content.cloneNode(true);
        // return template.content.firstChild;
        // return sectionPhotographer.textContent.firstChild
    }

    return { name, picture, getUserCardDOM }
}