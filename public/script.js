// Flashlight animation on home page
let flashlightContainer = document.getElementById("flashlight-zone")
function update(e) {
    if (flashlightContainer) {
        var x = e.clientX || e.touches[0].clientX
        var y = e.clientY || e.touches[0].clientY

        flashlightContainer.style.setProperty('--cursorX', x + 'px')
        flashlightContainer.style.setProperty('--cursorY', y + 'px')
    }
}
document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)


// Portfolio slider
let currentSlide = 0
let portfolioImages = document.getElementsByClassName('portfolio-image')

if (document.querySelector('.page-works')) {
    function portfolio() {
        const previousBtn = document.getElementById('previous')
        const nextBtn = document.getElementById('next')
        previousBtn.addEventListener('click', previousSlide)
        nextBtn.addEventListener('click', nextSlide)
    }
    portfolio()
}

function previousSlide() {
    portfolioImages[currentSlide].classList.remove('active')
    currentSlide -= 1
    if (currentSlide < 0) {
        currentSlide = portfolioImages.length - 1
    }
    portfolioImages[currentSlide].classList.add('active')
}

function nextSlide() {
    portfolioImages[currentSlide].classList.remove('active')
    currentSlide += 1
    if (currentSlide > portfolioImages.length - 1) {
        currentSlide = 0
    }
    portfolioImages[currentSlide].classList.toggle('active')
}