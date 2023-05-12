let time = {
    hour: 23,
    minutes: 59,
    second: 58,

    show() {
        const hh = String(this.hour).padStart(2, '0');
        const mm = String(this.minutes).padStart(2, '0');
        const ss = String(this.second).padStart(2, '0');
        return `${hh}:${mm}:${ss}`;
        },

    addSecond() {
        this.second++;
        if(this.second == 60) {
            this.second = 0;
            this.minutes++;
        }
        if(this.minutes == 60) {
            this.minutes = 0;
            this.hour++;
        }
        if(this.hour == 24) {
            this.hour = 0;
        }
    },

    substractSecond() {
        this.second--;
        if(this.second == -1) {
            this.second = 59;
            this.minutes--;
        }
        if(this.minutes == -1) {
            this.minutes = 59;
            this.hour--;
        }
        if(this.hour == -1) {
            this.hour = 23;
        }
    },

    displayOnPage: function () {
        document.write(this.show());
    }
}

console.log(time.show());
time.addSecond();
console.log(time.show());
time.addSecond();
console.log(time.show());
time.substractSecond();
console.log(time.show());
time.displayOnPage();
