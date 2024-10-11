import { styles } from "./pimp-my-style.data.js";

var counter = 0
export function pimp() {
    let button = document.querySelector('button');
    let classList = button.classList;
    if(!classList.contains('unpimp')){
        classList.add(styles[counter])
        counter++
    }else{
        classList.remove(styles[counter])
        counter--
        if (counter === 0){
            button.classList.toggle('unpimp')
        }
    }
    if (counter === styles.length){
        button.classList.toggle('unpimp')
    }
}