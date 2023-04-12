const fadeInDirective = {
    mounted: (el) => {
        el.classList.add('fade-in')
        document.addEventListener('scroll', () => {
            handleScroll(el)
        })
        handleScroll(el)
    },
    unmounted: () => {
        document.removeEventListener('scroll', () => {})
    },
}

const handleScroll = (el) => {
    if (isElemVisible(el)) {
        el.style.opacity = '1'
    }
}

const isElemVisible = (el) => {
    if(!el) { return }
    var rect = el.getBoundingClientRect()
    var elemTop = rect.top + 200 // 200 = buffer
    var elemBottom = rect.bottom
    return elemTop < window.innerHeight && elemBottom >= 0
}

export {fadeInDirective}