let x = 0;
let y = 0;
let height = 0;
let width = 0;
function pick() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    document.body.appendChild(svg);
    const xLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    xLine.setAttribute('id', 'axisX')
    svg.appendChild(xLine);

    const yLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    yLine.setAttribute('id', 'axisY')

    svg.appendChild(yLine);

    const hslDiv = document.createElement('div');
    hslDiv.classList.add('hsl');
    document.body.appendChild(hslDiv);

    const hueDiv = document.createElement('div')
    hueDiv.classList.add('hue', 'text');
    document.body.appendChild(hueDiv);

    const luminosityDiv = document.createElement('div')
    luminosityDiv.classList.add('luminosity', 'text');
    document.body.appendChild(luminosityDiv);

    document.addEventListener('mousemove', (event) => {
        height = window.innerHeight;
        width = window.innerWidth;
        x = event.clientX;
        y = event.clientY;


        xLine.setAttribute('x1', 0);
        xLine.setAttribute('y1', y);
        xLine.setAttribute('x2', width);
        xLine.setAttribute('y2', y);

        yLine.setAttribute('x1', x);
        yLine.setAttribute('y1', 0)
        yLine.setAttribute("x2", x);
        yLine.setAttribute("y2", height);

        const hsl = calculateHsl(x, y, height, width)

        document.body.style.background = hsl
        hslDiv.innerText = hsl
        hueDiv.innerText = `hue\n${hsl.match(/\d+%/g)[1]}`
        luminosityDiv.innerText = `luminosity\n${hsl.match(/\d+%/g)[1]}`



    })

    document.addEventListener('click', (event) => {
        document.execCommand('copy');
    })

    document.addEventListener('copy', (event) => {
        event.preventDefault();
        const hsl = calculateHsl(x, y, height, width)
        event.clipboardData.setData('text/plain', hsl)
    })
}


function calculateHsl(x, y, height, width) {
    const hue = Math.round((x / width) * 360)
    const luminosity = Math.round((y / height) * 100);
    const saturation = 50
    return `hsl(${hue}, ${saturation}%, ${luminosity}%)`
}
export { pick }