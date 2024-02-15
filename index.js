let team1 = document.getElementById("points-one");
let team2 = document.getElementById("points-two");
let reset = document.getElementById("reset-btn");

let countEl1 = document.getElementById("btn1");
let countEl2 = document.getElementById("btn2");
let countEl3 = document.getElementById("btn3");
let countEl4 = document.getElementById("btn4");
let countEl5 = document.getElementById("btn5");
let countEl6 = document.getElementById("btn6");

let count = 0;

countEl1.addEventListener('click', function() {
    count+=1;
    team1.textContent = count;   
});

countEl2.addEventListener('click', function() {
    count+=2;
    team1.textContent = count; 
});

countEl3.addEventListener('click', function() {
    count+=3;
    team1.textContent = count; 
});

countEl4.addEventListener('click', function() {
    count+=1;
    team2.textContent = count;
});

countEl5.addEventListener('click', function() {
    count+=2;
    team2.textContent = count;
});

countEl6.addEventListener('click', function() {
    count+=3;
    team2.textContent = count;
});


reset.addEventListener('click', function() {
   count = 0;
   team1.textContent = count;
   team2.textContent = count;
});