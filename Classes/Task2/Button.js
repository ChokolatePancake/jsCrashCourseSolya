class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`<button style="width:${this.width}px;height:${this.height}px;">${this.text}</button>`);
    }
}

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        document.write(`<button class="btn" style="width:${this.width}px;height:${this.height}px;background-color:${this.color};">${this.text}</button>`);
    }
}

let button = new Button(60, 60, "Hello");
let button2 = new BootstrapButton(50,40, "World", "yellow");
button.showBtn();
button2.showBtn();