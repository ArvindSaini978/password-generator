const togglePass = document.querySelector('.showPass');
const passOverlay = document.querySelector('.pass-overlay')
const togglePassImg = document.querySelector('.showPass img')

const showHidePassword = async ()=>{
    passOverlay.classList.toggle('show-hide')
    if (passOverlay.matches('.show-hide')) {
        togglePassImg.src = "./hide.png"
    }
    else{
        togglePassImg.src = "./show.png"
    }
}
togglePassImg.addEventListener('click', showHidePassword)