let openDropdown = document.querySelector('.fa-chevron-down')
let closeDropdown = document.querySelector('.fa-chevron-up')

let buttonPopularity = document.querySelector('.dropdown__menu--popularity')
let buttonDate = document.querySelector('.dropdown__menu--date')
let buttonTitle = document.querySelector('.dropdown__menu--title')
let borderTop = document.querySelector('.border-top');
let borderBottom = document.querySelector('.border-bottom');


openDropdown.addEventListener('click', ()=> {
    buttonDate.style.display = "flex";
    buttonTitle.style.display = "flex";
    openDropdown.style.display = "none";
    closeDropdown.style.display = "flex";
    borderTop.style.display = "block";
    borderBottom.style.display = "block";
})

closeDropdown.addEventListener('click', ()=> {
    buttonDate.style.display = "none";
    buttonTitle.style.display = "none";
    openDropdown.style.display = "flex";
    closeDropdown.style.display = "none";
    borderTop.style.display = "none";
    borderBottom.style.display = "none";
})

function reorderButtons(clickedButton) {
    let wrapperButton = document.querySelector('.dropdown__menu')
    
    let existingBorderTop = wrapperButton.querySelector('.border-top');
    let existingBorderBottom = wrapperButton.querySelector('.border-bottom');
    if (existingBorderTop) {
        existingBorderTop.remove();
    }
    if (existingBorderBottom) {
        existingBorderBottom.remove();
    }
    wrapperButton.insertBefore(clickedButton, wrapperButton.firstChild)
    clickedButton.appendChild(closeDropdown)

    let secondButton = wrapperButton.children[1];
    
    wrapperButton.insertBefore(borderTop, secondButton);
    wrapperButton.insertBefore(borderBottom, secondButton.nextSibling);

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