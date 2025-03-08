import * as util from './utils.js';
const em = {}

function prepareHandles() {
    em.createRace = document.querySelector('#send');
}

function addEventListeners() {
    em.createRace.addEventListener("touchstart", () => {
        em.createRace.classList.toggle('active');
    });

    em.createRace.addEventListener("touchend", () => {
        em.createRace.classList.toggle('active');
        window.location.href = `./recordrunner.html`;
    })
}

function homepage() {
    prepareHandles();
    addEventListeners();
}

document.addEventListener("DOMContentLoaded", homepage);