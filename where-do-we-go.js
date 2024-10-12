import { places } from './where-do-we-go.data.js'

let scrollY = 0


function degreeToDecimal(latitude) {
    const match = latitude.match(/^(\d+)°(\d+)'(\d+\.\d+)"([NSEW])$/)

    let decimalLatitude = parseFloat(match[1]) + (parseFloat(match[2]) / 60) + (parseFloat(match[3]) / 3600)
    if (match[4] === 'W' || match[4] === 'S') {
        decimalLatitude *= -1
    }
    return decimalLatitude
}

function explore() {
    places.sort((a, b) => {
        const aLatitude = degreeToDecimal(a.coordinates.split(' ')[0]);
        const bLatitude = degreeToDecimal(b.coordinates.split(' ')[0]);
        return bLatitude - aLatitude
    });

    for (let i = 0; i < places.length; i++) {
        const imageUrl = './where-do-we-go_images/' + (places[i].name.split(', ')[0].replace(/\s+/g, '-').toLocaleLowerCase()) + '.jpg'
        const section = document.createElement('section')
        section.style.height = '100vh'
        section.style.width = '100%'
        section.style.backgroundSize = "cover"
        section.style.backgroundPosition = "center";
        section.style.backgroundRepeat = "no-repeat";
        section.style.background = `url('${imageUrl}')`
        document.body.appendChild(section)
    }

    let compass = document.createElement('div');
    compass.classList.add('direction');
    document.body.append(compass)

    let locationIndicator = document.createElement('a')
    locationIndicator.classList.add('location')
    document.body.append(locationIndicator)

    window.addEventListener('scroll', () => {
        if (scrollY < window.scrollY) {
            compass.innerText = 'S'
        } else if (scrollY > window.scrollY) {
            compass.innerText = 'N'
        }
        scrollY = window.scrollY
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        document.querySelectorAll('section').forEach((section, i) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                locationIndicator.innerText = `${places[i].name}\n${places[i].coordinates}`
                locationIndicator.setAttribute('target', "_blank")
                locationIndicator.setAttribute('href', `https://google.com/maps/place/${places[i].coordinates}`)

                locationIndicator.style.color = places[i].color
            }
        })
    })
console.log(document.getElementsByTagName('section').length)

}



export { explore }