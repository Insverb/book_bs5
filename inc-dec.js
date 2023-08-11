let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');
let num = document.querySelectorAll('.num');
let price = document.querySelectorAll('.price1');
let total1 = document.querySelectorAll('.total1');
let total2 = document.querySelector('.total2');

for (let i = 0; i < num.length; i++) {
    plus[i].addEventListener('click', function() {
        num[i].value = parseInt(num[i].value) + 1;
        let x = num[i].value;
        total1[i].textContent = parseInt(price[i].textContent) * x;
        let y = 0;
        for (let total of total1) {
            y += parseInt(total.textContent);
        }
        total2.textContent = y;
     });
}

for (let i = 0; i < num.length; i++) {
    minus[i].addEventListener('click', function() {
        if (num[i].value > 0) {
            num[i].value = parseInt(num[i].value) - 1;
            total1[i].textContent = parseInt(total1[i].textContent) - parseInt(price[i].textContent);
            let y = 0;
            for (let total of total1) {
            y += parseInt(total.textContent);
            }
            total2.textContent = y;
        }
    });
}

