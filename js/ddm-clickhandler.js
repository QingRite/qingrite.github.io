import { updateIndex } from './dropdownmenu.js';

export var dropdownitems = document.querySelectorAll('.dropdown-item');

export function ddmClickHandler() {
    dropdownitems.forEach(item => {
        item.style.opacity = '0';
    });
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    updateIndex(0);
}