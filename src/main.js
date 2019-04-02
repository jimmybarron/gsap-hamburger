const topLine = document.querySelector('.topLine')
const middleLine = document.querySelector('.middleLine')
const bottomLine = document.querySelector('.bottomLine')
const hammy = document.querySelector('.hammy')
const title = document.querySelector('.title')
const menuItem = document.querySelector('.menuItem')

const lineArr = [topLine, middleLine, bottomLine]

// New timeline
const tl = new TimelineMax({})

//Play timeline on mouse enter event
// hammy.addEventListener('mouseenter', () => {
//     console.log('mouse enter triggered')
//     tl.staggerTo(lineArr, .2, {
//         repeat: 1,
//         rotation: 45,
//         transformOrigin: '50% 50%',
//         yoyo: true,
//     }, .05)
// })

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
        dropShadow: 'rgb(0, 0, 0) 0px 0px 10px 10px',
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

