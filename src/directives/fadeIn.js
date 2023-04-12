let element = '';

const fadeInDirective = {
    mounted: (el) => {
        element = el
        element.classList.add('fade-in')
        document.addEventListener('scroll', handleScroll)
        handleScroll()
    },
    unmounted: () => {
        document.removeEventListener('scroll', handleScroll)
    },
}

const handleScroll = () => {
    if (isElemVisible(element)) {
        element.style.opacity = '1'
    }
}

const isElemVisible = (element) => {
    if(!element) { return }
    var rect = element.getBoundingClientRect()
    var elemTop = rect.top + 200 // 200 = buffer
    var elemBottom = rect.bottom
    return elemTop < window.innerHeight && elemBottom >= 0
}

export {fadeInDirective}