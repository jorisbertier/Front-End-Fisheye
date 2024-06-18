export function displayTotalLikes(total) {
    let sectionLike = document.querySelector('.wrapper__fixed--like')
    sectionLike.innerText = total + " ♥";

    sectionLike.tabIndex = 0;  // Make the element focusable
    sectionLike.addEventListener('keydown', (event) => {
        // If the "Enter" key is pressed and the active element is sectionLike
        if (event.key === 'Enter' && document.activeElement === sectionLike) {
            total += 1;
            sectionLike.innerText = total + " ♥";
        }
    });


    // add a 'click' event listener to increase the like via mouse click
    sectionLike.addEventListener('click', () => {
        total += 1;
        sectionLike.innerText = total + " ♥";
    });
}

let totalLikes = 0;
document.addEventListener('DOMContentLoaded', () => {
    displayTotalLikes(totalLikes);
});
