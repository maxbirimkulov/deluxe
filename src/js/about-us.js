let accordions = document.querySelectorAll('.about-us__recs-item')

accordions.forEach(function (el) {
    el.addEventListener('click', function () {
        accordions.forEach(function (item) {
            if (el !== item || el.classList.contains('about-us__recs-item-open')) {
                item.classList.remove('about-us__recs-item-open');
            } else {
                item.classList.add('about-us__recs-item-open');
            }
        });
    });
});