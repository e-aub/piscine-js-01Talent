import { gossips } from './gossip-grid.data.js'

function grid() {
    // ranges container 
    const rangesContainer = document.createElement('div');
    rangesContainer.classList.add('ranges');
    document.body.append(rangesContainer);
    const widthRange = createRange('width', '200', '800')
    const fontSizeRange = createRange('fontSize', '20', '40')
    const backgroundRange = createRange('background', '20', '75')

    rangesContainer.append(widthRange)
    rangesContainer.append(fontSizeRange)
    rangesContainer.append(backgroundRange)

    createForm();

    for (let i = 0; i < gossips.length; i++) {
        document.body.appendChild(createGossip(gossips[i]));
    }

    widthRange.addEventListener('input', (event) => {
        console.log(event.target.value)
        const gossips = document.querySelectorAll('.gossip')
        for (let gossip of gossips) {
            gossip.style.width = `${event.target.value}px`
        }
    })

    fontSizeRange.addEventListener('input', (event) => {
        const gossips = document.querySelectorAll('.gossip')
        for (let gossip of gossips) {
            gossip.style.fontSize = `${event.target.value}px`
        }
    })

    backgroundRange.addEventListener('input', (event) => {
        const gossips = document.querySelectorAll('.gossip')
        for (let gossip of gossips) {
            gossip.style.background = `hsl(280, 50%, ${event.target.value}%)`
        }
    })
}

function createForm() {
    const form = document.createElement('form')
    form.classList.add('gossip')
    document.body.appendChild(form);
    const textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'text')
    textArea.setAttribute('placeholder', 'got a gossip to share')
    const submitButton = document.createElement('button')
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Share gossip!'
    form.append(textArea, submitButton)


    form.addEventListener('submit', (event) => {
        addGossip(event, textArea)
    })
}


function createRange(id, min, max) {
    const widthRange = document.createElement('input');
    widthRange.setAttribute('type', 'range');
    widthRange.setAttribute('id', id);
    widthRange.setAttribute('min', min)
    widthRange.setAttribute('max', max)
    return widthRange
}

function createGossip(gossip) {
    let temp = document.createElement('div');
    temp.classList.add('gossip')
    temp.innerText = gossip
    return temp
}


function addGossip(event, textArea) {
    event.preventDefault()
    if (textArea.value === '') return
    const toInsertBefore = document.querySelectorAll('.gossip')[1];
    console.log(toInsertBefore)
    document.body.insertBefore(createGossip(textArea.value), toInsertBefore)
    textArea.value = ''
    console.log(gossips)
}



export { grid }