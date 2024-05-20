


function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')

        img.setAttribute("src", picture)
        article.classList.add('wrapper__photographers')
        img.classList.add('wrapper__photographers--img')
        h2.classList.add('wrapper__photographers--title')
        h3.classList.add('wrapper__photographers--second-title')
        p.classList.add('wrapper__photographers--content')
        span.classList.add('wrapper__photographers--span')


        h2.textContent = name;
        h3.innerText = `${city}, ${country}`
        p.innerText = `${tagline}`
        span.innerText = `${price}€/jour`

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3)
        article.appendChild(p)
        article.appendChild(span)
        return (article);
    }
    return { name, picture, getUserCardDOM }
}