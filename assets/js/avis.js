const button_avis = document.querySelector('.button-avis')
const form = document.querySelector('.form-avis')
button_avis.addEventListener('click', () => {
    form.classList.toggle('block')
})