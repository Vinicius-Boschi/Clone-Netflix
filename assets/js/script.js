import { myList } from './app.js'

let categorys = document.querySelector('.main__section')
function showList() {
    for (let i = 0; i < myList.length; i++) {
        categorys.innerHTML += `
            <div class="main__item">
                <img src="${myList[i].image}" alt="${myList[i].name}">
            </div>
        `
    }
}

let highCategorys = document.querySelector('#high')
function showHighCategory() {
    for (let i = 0; i < high.length; i++) {
        highCategorys += `
            <div class="main__item">
                <img src="assets/img/top10/poster_01.jpeg" alt="foto da série">
            </div>
            <div class="main__item">
                <img src="assets/img/top10/poster_02.jpeg" alt="foto da série">
            </div>
            <div class="main__item">
                <img src="assets/img/top10/poster_03.jpeg" alt="foto da série">
            </div>
            <div class="main__item">
                <img src="assets/img/top10/poster_04.jpeg" alt="foto da série">
            </div>
            <div class="main__item">
                <img src="assets/img/top10/poster_05.jpeg" alt="foto da série">
            </div>
        `
    }
}

showList()
showHighCategory()