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

function initMoreScreen()
{
    const openBtns  = document.querySelectorAll(".more-btn")
    const closeBtns = document.querySelectorAll(".return-btn")

    openBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target")
            const targetSection = document.getElementById(targetId)

            if(targetSection){
                targetSection.classList.add("active")
                console.log(`Adcionou active em: ${targetSection}`)
            }
            else{
                console.warn(`Não encontrei section com id ${targetId}`)
            }
        })
    })

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const parentSection = btn.closest(".more")

            parentSection.classList.remove("active")
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    initSideMenu()
    initMoreScreen()
})