const em = {}

function prepareHandles() {
    em.input = document.querySelector('#reg');
    em.next = document.querySelector('#next');
    em.done = document.querySelector('#done');
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
}

function addEventListeners() {
    em.next.addEventListener("touchstart", () => {
        em.next.classList.toggle('active');
    });

    em.next.addEventListener("touchend", () => {
        em.next.classList.toggle('active');
        storeRunner();
    });

    em.done.addEventListener("touchstart", () => {
        em.next.classList.toggle('active');
    });

    em.done.addEventListener("touchend", () => {
        em.next.classList.toggle('active');
        storeRunner();
        window.location.href = `./startrace.html`;
    });
}

function recordRunner () {
    prepareHandles();
    addEventListeners();
}

document.addEventListener("DOMContentLoaded", recordRunner);