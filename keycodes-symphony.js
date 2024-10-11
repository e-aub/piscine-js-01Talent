document.addEventListener('keydown', (event) => {
    compose(event)
})


export function compose(event) {
    if(event.key === undefined){
        return
    }
    var body = document.body
    if (event.key >= 'a' && event.key <= 'z' || event.key === ' ') {
        var note = document.createElement('div')
        note.classList.add('note');
        note.innerText =event.key;
        let key = event.key.charCodeAt(0)
        note.style.backgroundColor = `rgb(${key+10}, ${key}, 200)`
        body.append(note)
    }else if(event.key === 'Backspace'){
      body.lastChild.remove()
    }else if (event.key === 'Escape'){
        var allNotes = document.querySelectorAll('.note')
        for (let i = allNotes.length - 1; i >= 0; i--) {
            allNotes[i].remove(); 
        }
    }
}

