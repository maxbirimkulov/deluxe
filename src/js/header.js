let accordion = document.querySelectorAll('.header__list-accordion')

accordion.forEach(function (el) {
    el.addEventListener('click', function () {
        accordion.forEach(function (item) {
            if (el !== item || el.classList.contains('header__list-open')) {
                item.classList.remove('header__list-open');
            } else {
                item.classList.add('header__list-open');
            }
        });
    });
});