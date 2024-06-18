// Selection elements of DOM
let openDropdown = document.querySelector('.fa-chevron-down')
let closeDropdown = document.querySelector('.fa-chevron-up')

let buttonPopularity = document.querySelector('.dropdown__menu--popularity')
let buttonDate = document.querySelector('.dropdown__menu--date')
let buttonTitle = document.querySelector('.dropdown__menu--title')
let borderTop = document.querySelector('.border-top');
let borderBottom = document.querySelector('.border-bottom');


// Function for open the dropdown
openDropdown.addEventListener('click', ()=> {
    buttonDate.style.display = "flex";
    buttonTitle.style.display = "flex";
    openDropdown.style.display = "none";
    closeDropdown.style.display = "flex";
    borderTop.style.display = "block";
    borderBottom.style.display = "block";
})

// Function for close the dropdown
closeDropdown.addEventListener('click', ()=> {
    buttonDate.style.display = "none";
    buttonTitle.style.display = "none";
    openDropdown.style.display = "flex";
    closeDropdown.style.display = "none";
    borderTop.style.display = "none";
    borderBottom.style.display = "none";
})

// Function for reoder buttons & insert border for style
function reorderButtons(clickedButton) {
    let wrapperButton = document.querySelector('.dropdown__menu')

     // Delete borders existing
    let existingBorderTop = wrapperButton.querySelector('.border-top');
    let existingBorderBottom = wrapperButton.querySelector('.border-bottom');

    if (existingBorderTop) {
        existingBorderTop.remove();
    }
    if (existingBorderBottom) {
        existingBorderBottom.remove();
    }

    // Insert button first position
    wrapperButton.insertBefore(clickedButton, wrapperButton.firstChild)
    clickedButton.appendChild(closeDropdown)

    let secondButton = wrapperButton.children[1];
    
    // Re insert border before & after second button
    wrapperButton.insertBefore(borderTop, secondButton);
    wrapperButton.insertBefore(borderBottom, secondButton.nextSibling);

}

// Add event listener for each button
buttonPopularity.addEventListener('click', ()=> {
    reorderButtons(buttonPopularity)
})

buttonDate.addEventListener('click', ()=> {
    reorderButtons(buttonDate)
})

buttonTitle.addEventListener('click', ()=> {
    reorderButtons(buttonTitle)
})


/* Accesibilty keydown enter open and close dropdown */
openDropdown.addEventListener('keydown', (event)=> {
    if(event.key === "Enter") {
        buttonDate.style.display = "flex";
        buttonTitle.style.display = "flex";
        openDropdown.style.display = "none";
        closeDropdown.style.display = "flex";
        borderTop.style.display = "block";
        borderBottom.style.display = "block"
    }
})

closeDropdown.addEventListener('keydown', (event)=> {
    if(event.key === "Enter") {
        buttonDate.style.display = "none";
        buttonTitle.style.display = "none";
        openDropdown.style.display = "flex";
        closeDropdown.style.display = "none";
        borderTop.style.display = "none";
        borderBottom.style.display = "none";
    }
})