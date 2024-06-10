const modal = document.getElementById("contact_modal");
let modalContent = document.querySelector('.modal')
const form = document.getElementById('form')

// used Template class AboutPhotographerCard
function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    closeModal();
});

document.getElementById('form').addEventListener('submit', (event)=> {
    event.preventDefault()
    let valid = true;

    for(let input of form.querySelectorAll('input[data-validation]')) {
        if (!input.checkValidity()) {
            valid = false;

            console.log('Champ invalide:', input.name);
            break;
        }
    }

    const emailInput = form.querySelector('#email');
    if (emailInput && !isValidEmail(emailInput.value)) {
        valid = false;
        emailInput.reportValidity();
        console.log('Champ invalide: email');
    }

    if(valid) {
        modalContent.innerHTML = `
        <img src="assets/icons/close.svg" onclick="closeModal()" />
        <h2>Formulaire de contact envoyé !</h2>
        `
    } else {
        console.log('Formuaire non envoyé')
    }
})


function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}