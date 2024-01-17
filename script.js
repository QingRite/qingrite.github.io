import * as scrollanimations from  "./scrollanimations.js";
import * as switchabletabs from './switchable-tabs.js';



switchabletabs.button1.addEventListener('click', switchabletabs.clickHandler1);
switchabletabs.button2.addEventListener('click', switchabletabs.clickHandler2);

for (var i = 0; i < scrollanimations.skillprof.length; i++) {
    //copy each bar width 
    var barWidth = scrollanimations.skillprof[i].offsetWidth
    //push bar width data into an array
    scrollanimations.widthData.push(barWidth);
    //set all skill proficiency bar width to 0
    scrollanimations.skillprof[i].style.width = 0 + 'px';
} 

//hide all skill proficiency values
for (var j = 0; j < scrollanimations.proftext.length; j++) {
    scrollanimations.proftext[j].style.opacity = '0';
}

window.addEventListener('resize', scrollanimations.handleResize);
document.addEventListener('DOMContentLoaded', scrollanimations.scrollHandler);
setInterval(scrollanimations.scrollHandler, 100);

scrollanimations.skillprof.forEach(scrollanimations.scrollHandler);   