export function build(bricksNumber) {
    var body = document.body;
    let bricks = 1
    var interval =  setInterval(()=>{
        var brick = document.createElement('div');
        brick.id = `brick-${bricks}`
        if(bricks % 3 === 2){
            brick.dataset.foundation = 'true';
        }
        body.appendChild(brick);
        bricks++
        if(bricks > bricksNumber){
            clearInterval(interval)
        }
    }, 100)
}

export function repair(...ids) {
    ids.forEach(id =>{
        let element =  document.getElementById(id);
        if(element.dataset.foundation === 'true'){
            element.dataset.repaired = 'in progress'
        }else{
            element.dataset.repaired = 'true'
        }
    })
}

export function destroy() {
    var body = document.body;
    let toDelete = body.lastElementChild;
    toDelete.remove()
}