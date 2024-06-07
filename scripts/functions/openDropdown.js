let openDropdown = document.querySelector('.open__dropdown-menu')
let list = document.querySelector('.dropdown-menu__list')
let closeDropdown = document.querySelector('.fa-chevron-up')

openDropdown.addEventListener('click', ()=> {
    list.classList.add('open')
    openDropdown.classList.add('close')
})

closeDropdown.addEventListener('click', ()=> {
    list.classList.remove('open')
    list.classList.add('close')
    openDropdown.classList.remove('close')
})