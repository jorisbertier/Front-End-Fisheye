export function sortMediasByDate(medias) {
    return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function sortMediasByTitle(medias) {
    return medias.sort((a, b)=>  a.title.localeCompare(b.title));
}