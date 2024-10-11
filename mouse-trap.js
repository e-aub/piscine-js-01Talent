document.addEventListener('click', function (event) {
    createCircle(event)
})
document.addEventListener('mousemove', function (event) {
    moveCircle(event)
})
let isInsideBox = false;

export function createCircle(event) {
    const x = event.clientX;
    const y = event.clientY;
    let circle = document.createElement('div');
    let box = document.querySelector('.box');

    let boxRect = box.getBoundingClientRect();
        if (
            x > boxRect.left + circle.offsetWidth&&
            x  < boxRect.right -circle.offsetWidth &&
            y > boxRect.top + circle.offsetHeight&&
            y  < boxRect.bottom - circle.offsetHeight
        ) {
           circle.style.backgroundColor = 'var(--purple)'
        }else{
           circle.style.backgroundColor = 'white'
        }
    circle.style.position = 'absolute'
    circle.style.left = `${x - 25}px`;
    circle.style.top = `${y - 25}px`;
    circle.classList.add('circle');
    document.body.appendChild(circle)
    isInsideBox = false
}

export function moveCircle(event) {
    let circles = document.getElementsByClassName('circle');
    if (circles.length === 0) return;

    var lastCircle = circles[circles.length - 1];
    const halfsize = lastCircle.offsetWidth / 2;
    let box = document.querySelector('.box');
    let boxRect = box.getBoundingClientRect();

    let x = event.clientX - halfsize;
    let y = event.clientY - halfsize;

    if (isInsideBox) {
        if (x < boxRect.left) {
            x = boxRect.left;
        } else if (x > boxRect.right - lastCircle.offsetWidth) {
            x = boxRect.right - lastCircle.offsetWidth;
        }

        if (y < boxRect.top) {
            y = boxRect.top;
        } else if (y > boxRect.bottom - lastCircle.offsetHeight) {
            y = boxRect.bottom - lastCircle.offsetHeight;
        }
        lastCircle.style.left = `${x}px`;
        lastCircle.style.top = `${y}px`;
    } else {
        lastCircle.style.left = `${x}px`;
        lastCircle.style.top = `${y}px`;

        if (
            x > boxRect.left + lastCircle.offsetWidth&&
            x  < boxRect.right -lastCircle.offsetWidth &&
            y > boxRect.top + lastCircle.offsetHeight&&
            y  < boxRect.bottom - lastCircle.offsetHeight
        ) {
            isInsideBox = true;
            lastCircle.style.backgroundColor = 'var(--purple)';
        }
    }
}

export function setBox() {
    document.body.style.display = 'flex'
    document.body.style.justifyContent = 'center'
    document.body.style.alignItems = 'center'
    let box = document.createElement('div')
    box.classList.add('box')
    box.style.position = 'relative';
    document.body.appendChild(box)
    console.log()
}

