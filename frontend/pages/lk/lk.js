
let namee = JSON.parse(localStorage.getItem('fio'))
console.log(namee[0].fio)

const elem = document.querySelector('.elem')
elem.textContent = namee[0].fio

const buttonExit = document.querySelector('.btn')
buttonExit.addEventListener('click', () => {
    localStorage.removeItem('fio');
    document.location.href="/frontend/pages/authorization/log.html"
});