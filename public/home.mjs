export function addButton(parentElement, textContent) {
    const createRace = document.querySelector(`#${parentElement}`);
    const button = document.createElement('button');
    button.textContent = textContent;
    createRace.append(button);
    return button;
}

function homepage() {
    const button = addButton("center", "Create race");
    button.addEventListener('touchstart', () => {
        button.classList.toggle('active');
    });
    button.addEventListener('touchend', () => {
        button.classList.toggle('active');
    });
}

document.addEventListener("DOMContentLoaded", homepage);