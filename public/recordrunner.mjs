import * as util from './utils.js';

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

    if (em.input.value) {
        em.saverunner.name = `${em.input.value}`;
    }
}

function addEventListeners() {
    util.setupButtons(em.save, storeRunner);
    util.setupButtons(em.start, () => {
        window.location.href = `./startrace.html`;
    });
}

function recordRunner() {
    prepareHandles();
    addEventListeners();
}

const template = document.createElement('template');
template.innerHTML = `
<div>
    <h4 style= "color: red"></h4>
</div>`

class Savedrunner extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    set name(value) {
        this.shadowRoot.querySelector('h4').innerText = 
        `${value} saved`;
    }
}

window.customElements.define('saved-runner', Savedrunner);

document.addEventListener("DOMContentLoaded", recordRunner);