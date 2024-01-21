export const button1 = document.querySelector('.button1');
export const button2 = document.querySelector('.button2');
export const tab1 = document.querySelector('.tab-1');
export const tab2 = document.querySelector('.tab-2');
export var isActive = 0;

export function clickHandler1() {
    // check if tab 1 is hidden
    // hide tab 2 contents and display tab 1 contents
    if (tab1.classList.contains('hidden')) {
        tab1.classList.remove('hidden') 
        tab2.classList.add('hidden')
        isActive++;
        console.log(isActive);
    }
    else if (isActive >= 1) {
        //do nothing
    }

}
// Function for handling clicks
export function clickHandler2() {
    // check if tab 2 is hidden
    // hide tab 1 contents and display tab 2 contents
    if (tab2.classList.contains('hidden')) {
        tab2.classList.remove('hidden')
        tab1.classList.add('hidden') 
        isActive++;
        console.log(isActive);
    }
    else if (isActive >= 1) {
        //do nothing
    }
}