// create buttons
export function addButton(parentId, textContent) {
    const parentElem = document.querySelector(`#${parentId}`);
    const button = document.createElement('button');
    button.textContent = textContent;
    parentElem.append(button);
    return button;
}

//add touch effect
export function touchEffect(elem) {
    elem.addEventListener('touchstart', () => {
        elem.classList.toggle('active');
    });
    elem.addEventListener('touchend', () => {
        elem.classList.toggle('active');
    });
}