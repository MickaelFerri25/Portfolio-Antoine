const block_bg = document.querySelector('.nav-phone')
const i_bg = document.querySelector('.i-bg')
const i_croix = document.querySelector('.i-croix')

i_bg.addEventListener('click', () => {
    
    block_bg.style.transform = "translateX(0)"
})

window.addEventListener('resize', () => {
    block_bg.style.transform = "translateX(-560px)"
})

i_croix.addEventListener('click', () => {
    block_bg.style.transform = "translateX(-560px)"
})