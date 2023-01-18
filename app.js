//stretch goal
//add a new game button
let homeCount = 0;
let guestCount = 0;
let resetCount = 0;

let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let btnOne = document.getElementById('btn1');
let btnTwo = document.getElementById('btn2');
let btnThree = document.getElementById('btn3');
let GuestBtnOne = document.getElementById('guest-btn1');
let GuestBtnTwo = document.getElementById('guest-btn2');
let GuestBtnThree = document.getElementById('guest-btn3');

let resetBtn = document.getElementById('reset-btn')


btnOne.addEventListener('click', function() {
    homeCount += 1;
    homeScore.textContent = homeCount;
})
btnTwo.addEventListener('click', function() {
    homeCount += 2;
    homeScore.textContent = homeCount;
})
btnThree.addEventListener('click', function() {
    homeCount += 3;
    homeScore.textContent = homeCount;
})

GuestBtnOne.addEventListener('click', function() {
    guestCount += 1;
    guestScore.textContent = guestCount;
})
GuestBtnTwo.addEventListener('click', function() {
    guestCount += 2;
    guestScore.textContent = guestCount;
})
GuestBtnThree.addEventListener('click', function() {
    guestCount += 3;
    guestScore.textContent = guestCount;
})

resetBtn.addEventListener('click', function() {
    location.reload();
})