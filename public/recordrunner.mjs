const em = {}

function prepareHandles() {
    em.input = document.querySelector('#reg');
    em.save = document.querySelector('#save');
    em.start = document.querySelector('#start');
    em.layout = document.querySelector('#layout');
    em.template = document.querySelector('#playersaved'); 
    em.saverunner = document.querySelector('#saverunner');
}

async function storeRunner() {
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({runnerName: em.input.value});
    const options = { method, headers, body }

    const response = await fetch('runner', options);

    if (!response.ok) {
        console.log('failed to save', response);
    }

    em.saverunner.shadowRoot.querySelector('h4').innerText = `${em.input.value} saved`;
}

function saveButton() {
    em.save.addEventListener("touchstart", () => {
        em.save.classList.toggle('active');
    });

    em.save.addEventListener("touchend", () => {
        em.save.classList.toggle('active');
        storeRunner();
    });
}

function startButton() {
    em.start.addEventListener("touchstart", () => {
        em.start.classList.toggle('active');
    });

    em.start.addEventListener("touchend", () => {
        em.start.classList.toggle('active');
        window.location.href = `./startrace.html`;
    });
}

function addEventListeners() {
    saveButton();
    startButton();
}

function recordRunner() {
    prepareHandles();
    addEventListeners();
}

const template = document.createElement('template');
template.innerHTML = `<div>
    <h4></h4>
</div>`

class Savedrunner extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.
        cloneNode(true));
        this.shadowRoot.querySelector('h4').innerText = 
        '';
    }

}

window.customElements.define('saved-runner', Savedrunner);

document.addEventListener("DOMContentLoaded", recordRunner);