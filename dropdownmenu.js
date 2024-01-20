export var nav = document.querySelector('.nav');
export var dropdownitems = document.querySelectorAll('.dropdown-item');
export var hamburger = document.querySelector('.hamburger')
export var index = 0;
//export var allelements = document.querySelectorAll('*');
//export var allelementsarray = Array.from(allelements);
//export var elementsexceptone = allelementsarray.filter(function(element) {
//    return element != dropdownitems;
//});



export function showMenu() {
    dropdownitems.forEach(item => {
        item.style.opacity = '1';
    });
    document.body.style.overflow = 'hidden';
//    elementsexceptone.style.visibility = 'hidden';
}

export function hideMenu() {
    dropdownitems.forEach(item => {
        item.style.opacity = '0';
    });
    document.body.style.overflow = 'auto';
//    elementsexceptone.style.visibility = 'visible';
}

export function dropDownMenuHandler() {
    //update index every time the hamburger icon is clicked
    index++;
    if (index % 2 == 0) {
        hideMenu();
    }
    //odd
    else if (index % 2 != 0) {
        showMenu();
    }
    console.log(index);
}