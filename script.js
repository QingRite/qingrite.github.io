import * as skillscrollanimations from './skill-scrollanimations.js';
import * as projectscrollanimations from './project-scrollanimations.js'
import * as switchabletabs from './switchable-tabs.js';



switchabletabs.button1.addEventListener('click', switchabletabs.clickHandler1);
switchabletabs.button2.addEventListener('click', switchabletabs.clickHandler2);

for (var i = 0; i < skillscrollanimations.skillprof.length; i++) {
    //copy each bar width 
    var barWidth = skillscrollanimations.skillprof[i].offsetWidth
    //push bar width data into an array
    skillscrollanimations.widthData.push(barWidth);
    //set all skill proficiency bar width to 0
    skillscrollanimations.skillprof[i].style.width = 0 + 'px';
} 

//hide all skill proficiency values
for (var j = 0; j < skillscrollanimations.proftext.length; j++) {
    skillscrollanimations.proftext[j].style.opacity = '0';
}

for (var i = 0; i < projectscrollanimations.statusbar.length; i++) {
    //copy each bar width 
    var barWidth = projectscrollanimations.statusbar[i].offsetWidth
    //push bar width data into an array
    projectscrollanimations.widthData.push(barWidth);
    //set all skill proficiency bar width to 0
    projectscrollanimations.statusbar[i].style.width = 0 + 'px';
} 

//hide all skill proficiency values
for (var j = 0; j < projectscrollanimations.statustext.length; j++) {
    projectscrollanimations.statustext[j].style.opacity = '0';
}

window.addEventListener('resize', skillscrollanimations.handleResize);
window.addEventListener('resize', projectscrollanimations.handleResize);
document.addEventListener('DOMContentLoaded', skillscrollanimations.scrollHandler);
document.addEventListener('DOMContentLoaded', projectscrollanimations.scrollHandler);
setInterval(projectscrollanimations.scrollHandler, 100);
setInterval(skillscrollanimations.scrollHandler, 100);

skillscrollanimations.skillprof.forEach(skillscrollanimations.scrollHandler);
projectscrollanimations.skillprof.forEach(projectscrollanimations.scrollHandler);   