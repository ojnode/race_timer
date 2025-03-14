const em = {};

const template = document.createElement('template');
template.innerHTML = `<div>
    <h4>
        <div id="marathonclock">
                <div id='hour'></div> :
                <div id='min'></div> :
                <div id='sec'></div>
        </div>
    </h4>
</div>
<style>
    #marathonclock {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        color: red !important;
        font-size: 3rem;
        gap: 2px;
    }
</style>`

class Timer extends HTMLElement {
    constructor() {
        super();

        this.intervalid;
        this.intervalidd;
        this.intervaliddd;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    startTimer() {
        this.shadowRoot.querySelector('#hour').innerText = `${0}`;
        this.shadowRoot.querySelector('#min').innerText = `${0}`;
        this.shadowRoot.querySelector('#sec').innerText = `${0}`;
        this.intervalid = setInterval(() => {
            this.shadowRoot.querySelector('#sec').innerText++;
            if (this.shadowRoot.querySelector('#sec').innerText == 3) {
                this.intervalidd = setInterval(() => {
                    this.shadowRoot.querySelector('#min').innerText++;
                    if (this.shadowRoot.querySelector('#min').innerText == 3) {
                        this.intervaliddd = setInterval(() => {
                            this.shadowRoot.querySelector('#hour').innerText++;
                        }, 1000);
                    }
                }, 1000);
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.intervalid);
        clearInterval(this.intervalidd);
        clearInterval(this.intervaliddd);
    }

}

function load() {
    em.timer = document.querySelector('#timer');
    startTimer();
    stopTimer();
}

// function to restart marathon timer
function startTimer() {
    em.timer.startTimer();
    em.restart = document.querySelector('#restart');
    em.restart.addEventListener("touchstart", () => {
        em.restart.classList.toggle('active');
    });

    em.restart.addEventListener("touchend", () => {
        em.restart.classList.toggle('active');
        em.timer.stopTimer();
        em.timer.startTimer();
    });
}

// function to stop marathon timer
function stopTimer() {
    em.stop = document.querySelector('#stop');
    em.stop.addEventListener("touchstart", () => {
        em.stop.classList.toggle('active');
    });

    em.stop.addEventListener("touchend", () => {
        em.stop.classList.toggle('active');
        em.timer.stopTimer();
    });
}

window.customElements.define('custom-timer', Timer);
document.addEventListener("DOMContentLoaded", load);