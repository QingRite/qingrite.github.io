//function for handling animations
// stores as array
export const skillprof = Array.from(document.getElementsByClassName("skill-prof"));

//set current width to 0    
export const currentWidth = 0;
export var index = 0;
export var skillprofvalue = skillprof[index];
export var originalWidth = skillprofvalue.offsetWidth;
export var widthData = []

//function for handling resize
export function handleResize() {
    var originalWidth = skillprofvalue.offsetWidth; 
    console.log(skillprofvalue.offsetWidth);
    skillprofvalue.style.width = originalWidth + 'px';
    console.log('resize')
}

//Function that Check if element is in viewport
export function isInViewport() {
    var elmt = skillprofvalue.getBoundingClientRect();
    //variable that returns bottom edge of current viewport
    var bottomY = window.scrollY + window.innerHeight;
    return (elmt.top >= 0 && bottomY < elmt.bottom);
}

//function that returns elements to original size for animations\
export function returnToOriginalSize() {
    var skillprofvalue = skillprof[index];  
    console.log(widthData[index]);
    skillprofvalue.style.width = widthData[index] + 'px';
    return (skillprofvalue.style.width);
}

//function that handles scroll animations
//function calls itself until end of index
export function scrollHandler() {
    if (index <= skillprof.length) {
        if (isInViewport(skillprofvalue) == false ) {
            isInViewport();
            returnToOriginalSize();
            //move to next element
            index++;
        }   
        else {
            //stop recursive function   
        }
    }
}
