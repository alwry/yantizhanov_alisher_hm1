// console.log("JS file connected");

// const vectorGraphic = document.querySelectorAll('.icon');

// function logThisId() {
//     console.log(this);
//     console.log('clicked on this element', this.id);
// }

// vectorGraphic.addEventListener('click', logThisId);


// function logMyId() {
//     console.log(this.id);
// }

// const iconsClick = document.querySelectorAll('svg');

// iconsClick.forEach(function () {
//     addEventListener('click', logMyId);
// });

// console.log(iconsClick);



console.log("JS file connected");

const iconSvg1 = document.querySelector('#flower');
const iconSvg2 = document.querySelector('#house');
const iconSvg3 = document.querySelector('#sand');
const iconSvg4 = document.querySelector('#folder');
const iconSvg5 = document.querySelector('#bulb');
const iconSvg6 = document.querySelector('#bat');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

iconSvg1.addEventListener('click', logThisId);
iconSvg2.addEventListener('click', logThisId);
iconSvg3.addEventListener('click', logThisId);
iconSvg4.addEventListener('click', logThisId);
iconSvg5.addEventListener('click', logThisId);
iconSvg6.addEventListener('click', logThisId);

