let upward = document.querySelector('.upward');

window.onscroll = function() {
    if (window.pageYOffset > 300) {
        upward.classList.add('active');
    } else {
        upward.classList.remove('active');
    };
};

upward.onclick = function () {
    window.scrollTo(0, 0);
};