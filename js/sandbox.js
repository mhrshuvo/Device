const DOE = document.querySelector('.DOE');
const DO  = document.querySelector('.DO');
const ODO = document.querySelector('.ODO')
const OOC = document.querySelector('.OOC')
const DM = document.querySelector('.DM')

console.log("this is working");




if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', function(event) {

    DOE.innerHTML =`Device orientation working: Alpha ${event.alpha} Beta ${event.beta} Gamma ${event.gamma}`;

    });

}else{
    DOE.innerHTML =`Device orientation working: Alpha ${event.alpha} Beta ${event.beta} Gamma ${event.gamma}`
}


window.addEventListener("deviceorientation", function(event) {
    // process event.alpha, event.beta and event.gamma
    DO.innerHTML = `Device Orientation working alpha ${Math.round(event.alpha)}  beta ${Math.round(event.beta)} gamma ${Math.round(event.gamma)}`;
}, true);

window.ondeviceorientation = function(event) {
    // process event.alpha, event.beta and event.gamma
    ODO.innerHTML = `On Device Orientation alpha ${event.alpha}  beta ${event.beta} gamma ${event.gamma}`;
}

window.onorientationchange = function() { 
    OOC.innerHTML = `On Orientation chenge ${screen.orientation.angle} }`;
};


window.addEventListener('devicemotion', function(event) {
    console.log(event.acceleration.x + ' m/s2');
    DM.innerHTML = `alpha ${event.acceleration.x }  beta ${event.acceleration.y } gamma ${event.acceleration.x}`;
});
