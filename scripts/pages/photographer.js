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

async function getPhotographerByid() {
    const { photographers } = await getPhotographers();
    let photographer = photographers.find((photographer) => photographer.id === idPhotographer)
    console.log(photographer)
}

getPhotographerByid()