import * as util from './utils.js';

function homepage() {
    const button = util.addButton("center", "Create race");
    util.touchEffect(button);
}

document.addEventListener("DOMContentLoaded", homepage);