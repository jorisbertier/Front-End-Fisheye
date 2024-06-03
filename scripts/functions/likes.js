export function displayTotalLikes(total) {
    let sectionLike = document.querySelector('.wrapper__fixed--like')
    sectionLike.innerText = total + " ♥";
}
