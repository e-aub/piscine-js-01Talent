let circles = [];
let box;
let isInsideBox = false;

document.addEventListener('click', function (event) {
    createCircle(event);
});

document.addEventListener('mousemove', function (event) {
    moveCircle(event);
});

function createCircle(event) {
    const x = event.clientX - 25;
    const y = event.clientY - 25;
    let circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.backgroundColor = 'white'; 
    circle.classList.add('circle');
    document.body.appendChild(circle);
    circles.push(circle); 
    isInsideBox = false;
}

function moveCircle(event) {
    if (circles.length === 0) return;

    let lastCircle = circles[circles.length - 1];
    const x = event.clientX - 25;
    const y = event.clientY - 25;
    let boxRect = box.getBoundingClientRect();

    if (isInsideBox) {
        let constrainedX = Math.max(boxRect.left, Math.min(x, boxRect.right - lastCircle.offsetWidth));
        let constrainedY = Math.max(boxRect.top, Math.min(y, boxRect.bottom - lastCircle.offsetHeight));
        lastCircle.style.backgroundColor = 'var(--purple)'; 

        lastCircle.style.left = `${constrainedX}px`;
        lastCircle.style.top = `${constrainedY}px`;
    } else {
        lastCircle.style.left = `${x}px`;
        lastCircle.style.top = `${y}px`;
        if (
            x >= boxRect.left &&
            x + lastCircle.offsetWidth <= boxRect.right &&
            y >= boxRect.top &&
            y + lastCircle.offsetHeight <= boxRect.bottom
        ) {
            isInsideBox = true;
        }
    }
}

function setBox() {
    box = document.createElement('div');
    box.classList.add('box');
    box.style.position = 'relative';
    document.body.appendChild(box);
}

export { createCircle, moveCircle, setBox };
