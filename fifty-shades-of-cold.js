import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    var head = document.head;
    var style = document.createElement('style')
    for (let color of colors) {
        style.innerHTML += `.${color} {\nbackground: ${color};}\n\n`
    }
    head.append(style);
}

export function generateColdShades() {
    var body = document.body;
    for (let color of colors) {
        if ((/aqua|blue|turquoise|green|cyan|navy|purple/).test(color)) {
            let div = document.createElement('div')
            div.innerText = color;
            div.classList.add(color)
            body.append(div)
        }
    }
}
export function choseShade(shade) {
    var divs = document.getElementsByTagName('div')
    for(let div of divs){
        div.classList.replace(div.classList[0], shade)
    }
}