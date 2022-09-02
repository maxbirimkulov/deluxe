let allBtn = document.querySelector('.projects__btns-btn_all')
let livedBtn = document.querySelector('.projects__btns-btn_lived')
let comersBtn = document.querySelector('.projects__btns-btn_comers')

let projectsCards = document.querySelectorAll('.projects__card')
let projectsCardsComers = document.querySelectorAll('.projects__card_comers')
let projectsCardsLived = document.querySelectorAll('.projects__card_lived')

allBtn.onclick = function () {
    allBtn.classList.add('projects__btns-btn_active')
    livedBtn.classList.remove('projects__btns-btn_active')
    comersBtn.classList.remove('projects__btns-btn_active')

    projectsCards.forEach(function (card) {
        card.style.display = 'block'
    })
}
livedBtn.onclick = function () {
    livedBtn.classList.add('projects__btns-btn_active')
    allBtn.classList.remove('projects__btns-btn_active')
    comersBtn.classList.remove('projects__btns-btn_active')

    projectsCardsComers.forEach(function (card) {
        card.style.display = 'none'
    })
    projectsCardsLived.forEach(function (card) {
        card.style.display = 'block'
    })
}

comersBtn.onclick = function () {
    comersBtn.classList.add('projects__btns-btn_active')
    allBtn.classList.remove('projects__btns-btn_active')
    livedBtn.classList.remove('projects__btns-btn_active')

    projectsCardsLived.forEach(function (card) {
        card.style.display = 'none'
    })
    projectsCardsComers.forEach(function (card) {
        card.style.display = 'block'
    })

}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".repair__next",
        prevEl: ".repair__prev",
    },
});