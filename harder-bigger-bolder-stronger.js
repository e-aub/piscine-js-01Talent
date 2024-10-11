export function generateLetters() {
    var fontSize = 11
    var fontWeight = 300
    var body = document.body;
    for (let i = 1; i <= 120; i++) {
        let element = document.createElement('div');
        const asciiStart = 65;
        const random = Math.floor(Math.random() * 26)
        const UppercaseLetter = String.fromCharCode(asciiStart + random);
        element.textContent = UppercaseLetter;
        element.style.fontSize = `${fontSize}px`;
        element.style.fontWeight = String(fontWeight)
        body.appendChild(element)
        fontSize++
        if (i === 40 || i === 80) {
            fontWeight += 100
        }
    }
}