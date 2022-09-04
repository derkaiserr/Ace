let lines = document.querySelector('.lines')
let phoneNav = document.querySelector('.draw-out')
let phoneNavv = document.getElementById('draw-out')
let webNav = document.querySelector('.nav')
let x = document.querySelector('.x')
let body = document.querySelector('body')
let section = document.querySelector('.section-one')
let sectionT = document.querySelector('.section-two')
let header = document.querySelector('header')

lines.addEventListener('click', function(){
 
    section.style.transition = 'all 0.4s ease-in'
    body.style.transition = 'all 0.4s ease-in'
    header.style.transition = 'all 0.4s ease-in'
    phoneNav.style.visibility = 'visible'
    body.style.overflow = 'hidden'
    section.style.filter = 'blur(0.2rem)'
    sectionT.style.filter = 'blur(0.2rem)'
    body.style.backgroundColor = 'grey'
    sectionT.style.backgroundColor = 'grey'
    header.style.backgroundColor = 'grey'
    header.style.filter = 'blur(0.2rem)'
    phoneNav.style.transform = 'translateX(-135%)'
    
}, false)

x.addEventListener('click', function(){
    header.style.filter = 'blur(0rem)'
    phoneNav.style.transform = 'translateX(200px)'
    section.style.filter = 'blur(0rem)'
    sectionT.style.filter = 'blur(0rem)'
    body.style.overflow = 'visible'
    sectionT.style.backgroundColor = '#f0efef'
    body.style.backgroundColor = 'white'
    header.style.backgroundColor = '#f0efef'
    
} )


