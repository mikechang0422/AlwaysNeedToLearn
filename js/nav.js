const navIcon = document.querySelector('.nav_icon')
const navBody = document.querySelector('.nav_body')

navIcon.addEventListener('click', function(){
    navIcon.classList.toggle('active')
    navBody.classList.toggle('active')
})