export function displayTotalLikes(total) {
    let sectionLike = document.querySelector('.wrapper__fixed--like')
    sectionLike.innerText = total + " ♥";

    sectionLike.tabIndex = 0;  // Rendre l'élément focusable
    sectionLike.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && document.activeElement === sectionLike) {
            total += 1;
            sectionLike.innerText = total + " ♥";
            console.log('like')
        }
    });

    // Vous pouvez aussi ajouter un écouteur d'événement 'click' pour augmenter le like via clic de la souris
    sectionLike.addEventListener('click', () => {
        total += 1;
        sectionLike.innerText = total + " ♥";
    });
}

let totalLikes = 0;
document.addEventListener('DOMContentLoaded', () => {
    displayTotalLikes(totalLikes);
});
