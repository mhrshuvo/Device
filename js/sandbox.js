const DOE = document.querySelector('.DOE');
const DO  = document.querySelector('.DO');
const ODO = document.querySelector('.ODO')
const OOC = document.querySelector('.OOC')
const DM = document.querySelector('.DM')

console.log("this is working");
const fun = () =>{
    navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
}

fun();




if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', function(event) {

    DOE.innerHTML =`Device orientation working: Alpha ${event.alpha.toFixed(2)} Beta ${event.beta.toFixed(2)} Gamma ${event.gamma.toFixed(2)}`;

    });

}else{
    DOE.innerHTML =`Device orientation working: Alpha ${event.alpha} Beta ${event.beta} Gamma ${event.gamma}`
}


window.addEventListener("deviceorientation", function(event) {
    // process event.alpha, event.beta and event.gamma
    DO.innerHTML = `Device Orientation working alpha ${event.alpha.toFixed(2)}  beta ${event.beta.toFixed(2)} gamma ${event.gamma.toFixed(2)}`;
}, true);

window.ondeviceorientation = function(event) {
    // process event.alpha, event.beta and event.gamma
    ODO.innerHTML = `On Device Orientation alpha ${Math.round(event.alpha)}  beta ${Math.round(event.beta)} gamma ${Math.round(event.gamma)}`;
}

window.onorientationchange = function() { 
    OOC.innerHTML = `On Orientation chenge ${screen.orientation.angle} }`;
    console.log(screen.orientation.angle);
};


window.addEventListener('devicemotion', function(event) {
    console.log(event.acceleration.x + ' m/s2');
    DM.innerHTML = `alpha ${Math.round(event.acceleration.x *100) }  beta ${Math.round(event.acceleration.y*100)} gamma ${Math.round(event.acceleration.x*100)}`;
});
