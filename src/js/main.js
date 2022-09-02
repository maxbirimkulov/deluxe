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
    navigation: {
        nextEl: ".feedback__next",
        prevEl: ".feedback__prev",
    },
    loop: true
});


let burger = document.querySelector('.burger')
let headerList = document.querySelector('.header__list')

burger.onclick = function () {
    burger.classList.toggle('burger_active')
    headerList.classList.toggle('header__list_active')

}