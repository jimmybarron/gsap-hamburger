const topLine = document.querySelector('.topLine')
const middleLine = document.querySelector('.middleLine')
const bottomLine = document.querySelector('.bottomLine')
const hammy = document.querySelector('.hammy')
const title = document.querySelector('.title')
const menuItem = document.querySelector('.menuItem')
const bg2 = document.querySelector('.bg2')

const lineArr = [topLine, middleLine, bottomLine]

// New timeline
const bgtl = new TimelineMax({
    yoyo: true,
})


//timeline animation
bgtl
    .to(bg2, 0, {
        x: -200,
}, 'start')

    .to(bg2, 25, {
        x: 0,
        ease: Power1.easeInOut,
}, 'move')



const toggleMenu = new TimelineMax({
    paused: true,
    reversed: true,
})

toggleMenu

    .to(topLine, .1, {
        y: 50
    }, 'start')
    
    .to(topLine, .4, {
        rotation: 45,
        y: 50,
        transformOrigin: '50% 50%',
        ease: Power2.easeOut,
    }, 'after')

    .to(middleLine, .3, {
        scaleY: 25,
        transformOrigin: '50% 50%',
        fill: '#000000',
    }, 'after')

    .to(bottomLine, .1, {
        y: -50
    }, 'start')
 
    .to(bottomLine, .4, {
        y: -50,
        rotation: -45,
        transformOrigin: '50% 50%',
        ease: Power2.easeOut,
    }, 'after')

    .to(title, .3, {
        y: -50,
        opacity: 0,
        ease: Power2.easeInOut,
    }, 'start')

    .to(menuItem, .3, {
        y: -40,
        opacity: 1,
        ease: Power2.easeInOut,
    }, 'start')

hammy.addEventListener('click', () => {
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse()
})

