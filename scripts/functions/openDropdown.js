let openDropdown = document.querySelector('.fa-chevron-down')
let closeDropdown = document.querySelector('.fa-chevron-up')

let buttonPopularity = document.querySelector('.dropdown__menu--popularity')
let buttonDate = document.querySelector('.dropdown__menu--date')
let buttonTitle = document.querySelector('.dropdown__menu--title')


openDropdown.addEventListener('click', ()=> {
    buttonDate.style.display = "block";
    buttonTitle.style.display = "block";
    openDropdown.style.display = "none";
    closeDropdown.style.display = "block";
})

closeDropdown.addEventListener('click', ()=> {
    buttonDate.style.display = "none";
    buttonTitle.style.display = "none";
    openDropdown.style.display = "block";
    closeDropdown.style.display = "none";
})

function reorderButtons(clickedButton) {
    let wrapperButton = document.querySelector('.dropdown__menu')
    wrapperButton.insertBefore(clickedButton, wrapperButton.firstChild)
    clickedButton.appendChild(closeDropdown)
}

buttonPopularity.addEventListener('click', ()=> {
    reorderButtons(buttonPopularity)
})

buttonDate.addEventListener('click', ()=> {
    reorderButtons(buttonDate)
})

buttonTitle.addEventListener('click', ()=> {
    reorderButtons(buttonTitle)
})