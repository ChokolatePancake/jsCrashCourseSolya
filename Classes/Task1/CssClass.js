class CssClass {
    constructor(className, styles = {}) {
        this.className = className;
        this.styles = styles;
    }

    setStyle(property, value) {
        this.styles[property] = value;
    }

    removeStyle(property) {
        delete this.styles[property];
    }

    getCSS() {
        const styleStr = Object.entries(this.styles)
            .map(([property, value]) => `${property}: ${value};`)
            .join(" ");
        return `.${this.className} { ${styleStr} }`;
    }
}

const myClass = new CssClass("my-class", { color: "red", "font-size": "16px" });
console.log(myClass.getCSS());
myClass.setStyle("background-color", "yellow");
console.log(myClass.getCSS());
myClass.removeStyle("color");
console.log(myClass.getCSS());