export function sortMediasByDate(medias) {
    return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function sortMediasByTitle(medias) {
    return medias.sort((a, b)=>  a.title.localeCompare(b.title));
}

export function sortMediasByPopularity(medias) {
    // return medias.sort((a, b)=>  a.title.localeCompare(b.title));
    return medias.sort((a, b) => b.likes - a.likes)
}


function addEventListenerToButton(buttonId, action) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
        action();
    });
    button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            action();
        }
    });
}

// Function to attach event listeners to sort buttons
export function attachEventListenersSorts(getMediasByPhotographer) {
    // add event listener by date
    addEventListenerToButton('date', () => {
        getMediasByPhotographer('date'); // Call getMediasByPhotographer with the 'date' parameter
    });

    addEventListenerToButton('title', () => {
        getMediasByPhotographer('title');
    });

    addEventListenerToButton('popularity', () => {
        getMediasByPhotographer('popularity');
    });
}