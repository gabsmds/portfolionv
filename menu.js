 let btnMenu = document.getElementById('btn-menu')
 let menu = document.getElementById('menu-mobile')
 let overlay = document.getElementById('overlay-menu')

 let links = document.querySelectorAll('.js-link');
 let sections = document.querySelectorAll('.section')

window.addEventListener('scroll', () => {
   console.log('scroll')
})


 btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
 })

 menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
 })

 overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
 })