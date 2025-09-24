function initSideMenu()
{
    const sideMenu = document.querySelector('.side-menu')
    const openBtn  = document.querySelector(".mobile-btn")
    const closeBtn = document.querySelector('.exit-btn')

    openBtn.addEventListener('click', () => {
        sideMenu.classList.add('active')
    })

    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active')  
    })
}

document.addEventListener("DOMContentLoaded", () => {
    initSideMenu()
})