const em = {}

function prepareHandles() {
    em.input = document.querySelector('#reg');
    em.next = document.querySelector('#next');
    em.done = document.querySelector('#done');
}

function sendDetails() {
    console.log(`message: ${em.input.value}`);
}

function addEventListeners() {
    em.next.addEventListener("touchstart", () => {
        em.next.classList.toggle('active');
    });

    em.next.addEventListener("touchend", () => {
        em.next.classList.toggle('active');
        sendDetails();
    });
}

function recordRunner () {
    prepareHandles();
    addEventListeners();
}

document.addEventListener("DOMContentLoaded", recordRunner);