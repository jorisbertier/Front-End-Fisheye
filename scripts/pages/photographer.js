//Mettre le code JavaScript lié à la page photographer.html
// given url string
// get url string current
var url_str = document.URL; 
let url = new URL(url_str);
let search_params = url.searchParams; 

// get value of "id" parameter
const idPhotographer = parseInt(search_params.get('id'), 10)

// get allPhotographers
async function getPhotographers() {
    let photographers = []
    try {
        const response = await fetch('data/photographers.json')
        let data = await response.json()
        photographers = data['photographers']
    } catch(error) {
        console.log('Error gettings datas photographers', error)
    }
    return ({
        photographers: [...photographers]})
}
// get allMedia
async function getMedias() {
    let medias = []
    try {
        const response = await fetch('data/photographers.json')
        let data = await response.json()
        medias = data['medias']
    } catch(error) {
        console.log('Error gettings datas photographers', error)
    }
    return ({
        medias: [...medias]})
}

async function getPhotographerByid() {
    const { photographers } = await getPhotographers();
    let photographer = photographers.find((photographer) => photographer.id === idPhotographer)
    console.log(photographer.name)

    let name = document.querySelector('.main__content--title')
    let city = document.querySelector('.main__content--subtitle')
    let tagline = document.querySelector('.main__content--subtitle-text')
    let price = document.querySelector('.wrapper__fixed--price')
    let portrait = document.querySelector('.main__picture--img')
    name.innerText = photographer.name
    city.innerText = `${photographer.city}, ${photographer.country}`
    tagline.innerText = photographer.tagline
    portrait.setAttribute('src', `/assets/photographers/${photographer.portrait}`)
    price.innerText = `${photographer.price}€ / jour`
}

async function getMediasByPhotographer() {
    const { medias } = await getMedias();

    let allMediasByPhotographer = medias.filter((media) => media.photographerId === idPhotographer);


    allMediasByPhotographer.forEach((media) => {
        const section = document.querySelector('.section__media')
        const article = document.createElement("article");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const a = document.createElement("a");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const span = document.createElement("span");

        article.classList.add('wrapper__media')
        a.setAttribute('src', '#')
        img.classList.add('wrapper__media--img')
        div.classList.add('wrapper__media--content')
        h3.classList.add('wrapper__media--content--title')
        div2.classList.add('wrapper__media--content--like')
        p.classList.add('wrapper__media--content--like--p')
        span.classList.add('wrapper__media--content--like--icon')
    

        section.appendChild(article);
        article.appendChild(a);
            a.appendChild(img),
        article.appendChild(div),
            div.appendChild(h3),
            div.appendChild(div2),
                div2.appendChild(p),
                div2.appendChild(span),
        
        img.setAttribute('src', `/assets/medias/${media.image}`)
        h3.innerText = media.title
        p.innerText = media.likes
        span.innerText = "ok"
        console.log(media)
        
});
    
    
}

getMediasByPhotographer()
getPhotographerByid()

// addInformationPhotgraphers()