import * as scrollanimations from  "./scrollanimations.js";
import * as switchabletabs from './switchable-tabs.js';



switchabletabs.button1.addEventListener('click', switchabletabs.clickHandler1);
switchabletabs.button2.addEventListener('click', switchabletabs.clickHandler2);

for (var i = 0; i < scrollanimations.skillprof.length; i++) {
    var barWidth = scrollanimations.skillprof[i].offsetWidth
    scrollanimations.widthData.push(barWidth);
    scrollanimations.skillprof[i].style.width = 0 + 'px';
} 
window.addEventListener('resize', scrollanimations.handleResize);
document.addEventListener('DOMContentLoaded', scrollanimations.scrollHandler);
setInterval(scrollanimations.scrollHandler, 100);

scrollanimations.skillprof.forEach(scrollanimations.scrollHandler);   