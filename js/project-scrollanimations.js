//function for handling animations
// stores as skill proficiency bar elements as array
export const statusbar = Array.from(document.getElementsByClassName("statusbar"));
export const statustext = Array.from(document.getElementsByClassName("statustext"))
//set current width to 0    
export var index = 0;
export var statusbarvalue = statusbar[index];
export var originalWidth = statusbarvalue.offsetWidth;
export var widthData = []

//function for handling resize
export function handleResize() {
    var originalWidth = statusbarvalue.offsetWidth; 
    console.log(statusbarvalue.offsetWidth);
    statusbarvalue.style.width = originalWidth + 'px';
    console.log('resize')
}

//Function that Check if element is in viewport
export function isInViewport() {
    var elmt = statusbarvalue.getBoundingClientRect();
    //variable that returns bottom edge of current viewport
    var bottomY = window.scrollY + window.innerHeight;
    return (elmt.top >= 0 && bottomY < elmt.bottom);
}

//function that returns elements to original size for animations\
export function returnToOriginalSize() {
    var statusbarvalue = statusbar[index];  
    console.log(widthData[index]);
    statusbarvalue.style.width = widthData[index] + 'px';
    return (statusbarvalue.style.width);
}

//function that fades in proficiency percentage text after returning width to original size
export function fadeText() {
    statustext[index].style.opacity = '1.0';
}

//function that handles scroll animations
//function calls itself until end of index
export function scrollHandler() {
    if (index <= statusbar.length) {
        if (isInViewport(statusbarvalue) == false ) {
            isInViewport();
            returnToOriginalSize();
            fadeText();
            //move to next element
            index++;
        }   
        else {
            //stop recursive function   
        }
    }
}
