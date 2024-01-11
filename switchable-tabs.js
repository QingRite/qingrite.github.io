const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const tab1 = document.querySelector('.tab-1');
const tab2 = document.querySelector('.tab-2');
var isActive = 0;

function clickHandler1() {
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
function clickHandler2() {
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


button1.addEventListener('click', clickHandler1);
button2.addEventListener('click', clickHandler2);

//function for handling animations
// stores as array
const skillprof = Array.from(document.getElementsByClassName("skill-prof"));

//set current width to 0    
const currentWidth = 0;
var index = 0;
var skillprofvalue = skillprof[index];
var originalWidth = skillprofvalue.offsetWidth;
var widthData = []
//copies original width properties of each element and set each width to 0
for (var i = 0; i < skillprof.length; i++) {
    barWidth = skillprof[i].offsetWidth
    widthData.push(barWidth);
    skillprof[i].style.width = 0 + 'px';
} 






//function for handling resize
function handleResize() {
    var originalWidth = skillprofvalue.offsetWidth;
    console.log(skillprofvalue.offsetWidth);
    skillprofvalue.style.width = originalWidth + 'px';
    console.log('resize')
}

window.addEventListener('resize', handleResize);




//Function that Check if element is in viewport
function isInViewport() {
    var elmt = skillprofvalue.getBoundingClientRect();
    //variable that returns bottom edge of current viewport
    var bottomY = window.scrollY + window.innerHeight;
    return (elmt.top >= 0 && bottomY < elmt.bottom);
}

//function that returns elements to original size for animations\
function returnToOriginalSize() {
    var skillprofvalue = skillprof[index];  
    console.log(widthData[index]);
    skillprofvalue.style.width = widthData[index] + 'px';
    return (skillprofvalue.style.width);
}

//function that handles scroll animations
//function calls itself until end of index
function scrollHandler() {
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

document.addEventListener('DOMContentLoaded', scrollHandler);
setInterval(scrollHandler, 100);

skillprof.forEach(scrollHandler);   