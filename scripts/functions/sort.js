export function sortMediasByDate(medias) {
    return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function sortMediasByTitle(medias) {
    return medias.sort((a, b)=>  a.title.localeCompare(b.title));
}

export function attachEventListenersSorts(getMediasByPhotographer) {
    document.getElementById('date').addEventListener('click', () => {
        getMediasByPhotographer('date');
    });

    document.getElementById('title').addEventListener('click', () => {
        getMediasByPhotographer('title');
    });


    document.getElementById('popularity').addEventListener('click', (event) => {
        if (event.currentTarget === event.target) {
            getMediasByPhotographer(null);
        }
    });

    /* Accesibility keydown enter sort*/
    document.getElementById('date').addEventListener('keydown', (event) => {
        if(event.key === "Enter") {
            getMediasByPhotographer('date');
        }
    });

    document.getElementById('title').addEventListener('keydown', (event) => {
        if(event.key === "Enter") {
            getMediasByPhotographer('title');
        }
    });

    document.getElementById('popularity').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            getMediasByPhotographer(null);
        }
    });
}