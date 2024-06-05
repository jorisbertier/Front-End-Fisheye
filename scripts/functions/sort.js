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

    document.getElementById('popularity').addEventListener('click', () => {
        getMediasByPhotographer(null);
    });
}