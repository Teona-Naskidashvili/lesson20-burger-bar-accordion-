// accordion
let accordion = document.querySelectorAll(".conteiner");

for(let i=0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active-accordion')
    });
}
// burger bar

let navigation = document.getElementById('navbarlist');
let togglenav = document.getElementById('toggleburger');
let burgerOne = document.getElementById('burgerOne');
let burgerTwo = document.getElementById('burgerTwo');
let burgerThree = document.getElementById('burgerThree');

togglenav.addEventListener('click', function() {
    navigation.classList.toggle('activeNav');
    burgerOne.classList.toggle('oneline');
    burgerTwo.classList.toggle('twoline');
    burgerThree.classList.toggle('threeline');
});