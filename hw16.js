class Clock {
    constructor(elem) {
        this.format = true;
        this.element = elem;
        this.element.addEventListener('click', function(){ this.changeFormat()});
        setInterval(()=> {
            this.display()
        }, 1000);
    }

    display() {
        if (this.format) {
            this.element.innerHTML = new Date().toLocaleTimeString();
        } else {
            this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
        }
    }

    changeFormat() {
        this.format = !this.format;
    }
}

class ClockWithDate extends Clock {
    constructor(elem) {
        super(elem);
    }

    display() {
        if (this.format) {
            this.element.innerHTML = 'Data: ' + new Date().toLocaleDateString() + ' Time: ' + new Date().toLocaleTimeString();
        } else {
            this.element.innerHTML = 'Data: ' + new Date().toLocaleDateString() + ' Time: ' + new Date().toLocaleTimeString().substring(0, 5);
        }
    }
}

class RegularClock extends Clock {
    constructor(elem) {
        super(elem);
    }

    display() {
        if (this.format) {
            this.element.innerHTML = 'Actual time: ' + new Date().toLocaleTimeString();
        } else {
            this.element.innerHTML = 'Actual time: ' + new Date().toLocaleTimeString().substring(0, 5);
        }
    }
}

let timeNow1 = document.querySelector('#timeNow1');
let timeNow2 = document.querySelector('#timeNow2');

let clock1 = new ClockWithDate(timeNow1);
let clock2 = new RegularClock(timeNow2);