export function getArchitects(){
    return [document.querySelectorAll('body a'), document.querySelectorAll('body span')]
}

export function getClassical(){
    return [document.querySelectorAll('a.classical'), document.querySelectorAll('a:not(.classical)')]
}

export function getActive(){
    var archeticts = getClassical()[0]
    var active = []
    var inactive = []
    for(let i = 0; i < archeticts.length;i++){
        if(archeticts[i].classList.contains('active')){
            active.push(archeticts[i])
        }else{
            inactive.push(archeticts[i])
        }
    }
    return [active, inactive]
}

export function getBonannoPisano(){
    var activeArcheticts = getActive();

    var remaining =  activeArcheticts.filter(archetict => {return archetict.id != 'BonannoPisano'})
    return [document.getElementById('BonannoPisano'), remaining]
}