// Footer Year
const today = new Date();
let currentYear = today.getFullYear();

const year = document.querySelector('.year');
year.innerHTML = currentYear;

// Display Toggle Zones
const portada = document.querySelector('#portada');
const fichas  = document.querySelector('#fichas');
const header  = document.querySelector('#header');
const navBar  = document.querySelector('.nav-bar');

navBar.addEventListener('click', () => {
    portada.classList.toggle('d-none');
    fichas.classList.toggle('d-none');
});

header.addEventListener('click', () => {
    fichas.classList.toggle('d-none');
    portada.classList.toggle('d-none');
});

// Open Accordions Items
const btnBases = document.querySelector('.btn-bases');
const accordionBases = document.querySelector('#accordionBases');
btnBases.addEventListener('click', () => {
    setTimeout(() => {
        accordionBases.classList.add('show')
    }, 500);
});

const btnCaldos = document.querySelector('.btn-caldos');
const accordionCaldos = document.querySelector('#accordionCaldos');
btnCaldos.addEventListener('click', () => {
    setTimeout(() => {
        accordionCaldos.classList.add('show')
    }, 500);
});

const btnPlatos = document.querySelector('.btn-platos');
const accordionPlatos = document.querySelector('#accordionPlatos');
btnPlatos.addEventListener('click', ()=> {
    setTimeout(() => {
        accordionPlatos.classList.add('show')
    }, 500)
})

