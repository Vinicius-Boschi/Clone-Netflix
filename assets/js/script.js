import { myList, high, stranger, eccentric } from './app.js'

let categorys = document.querySelector('#myList')
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
        highCategorys.innerHTML += `
            <div class="main__item">
                <img src="${high[i].image}" alt="${high[i].name}">
            </div>
        `
    }
}

let strangerCategorys = document.querySelector('#stranger')
function showStrangerCategory() {
    for (let i = 0; i < stranger.length; i++) {
        strangerCategorys.innerHTML += `
            <div class="main__item">
                <img src="${stranger[i].image}" alt="${stranger[i].name}">
            </div>
        `
    }
}

let eccentricCategorys = document.querySelector('#eccentric')
function showEccentricCategory() {
    for (let i = 0; i < eccentric.length; i++) {
        eccentricCategorys.innerHTML += `
            <div class="main__item">
                <img src="${eccentric[i].image}" alt="${eccentric[i].name}">
            </div>
        `
    }
}

showList()
showHighCategory()
showStrangerCategory()
showEccentricCategory()