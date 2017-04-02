
'use strict';

function setDirectionName (name) {
    $('.compass .direction').text(name);
}
setDirectionName('NE');

function setAngle (degree) {
    degree = parseInt(degree, 10) || 0;
    $('.compass .angle').text(degree);
}
setAngle(); 

function rotateCompass (angle) {
    $('.compass .disc').css({
        transform: 'rotate(' + angle  + 'deg)'
    })
}
rotateCompass();

$(window).on('deviceorientation',function(event){
    event = event.originalEvent;
    // event.alpha 
    // event.beta
    // event.gamma
    rotateCompass(event.alpha)
    setAngle(event.alpha)

    $('.compass').css({
        transform: 'rotate3d(1,0,0,' + (event.beta * -1)  + 'deg)'
    })
})