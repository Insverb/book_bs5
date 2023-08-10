let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let num = document.querySelector('.num');
let a = 0;

plus.addEventListener('click', function() {
    a++;
    num.innerText = a;
});
