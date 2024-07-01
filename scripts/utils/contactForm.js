const modal = document.getElementById("contact_modal");
let modalContent = document.querySelector('.modal')
const form = document.getElementById('form')

// used Template class AboutPhotographerCard, no delete
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
        <img class="closeForm" src="assets/icons/close.svg" onclick="closeModal()" alt="Fermer le formulaire" />
        <h2>Formulaire de contact envoyé !</h2>
        `
        for (let input of form.querySelectorAll('input, textarea')) {
            console.log(`Champ ${input.name}: ${input.value}`);
        }
    } else {
        console.log('Formulaire non envoyé')
    }
})


function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

/* Accesibity keydown */ 

let closeForm = document.querySelector('.close__form')

closeForm.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        closeModal()
    }
})
