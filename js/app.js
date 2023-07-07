const line = document.querySelector('.line')
const labelTitle = document.querySelector('.label-title')
const logo = document.querySelector('.logo')
const socIcons = document.querySelector('.soc-icons')
const shadowDark = document.querySelector('.shadow-dark')
const btn = document.querySelector('.btn')
const blockVideo = document.querySelector('.block-video')
const bgRight = document.querySelector('.bg-right')
const bgLeft = document.querySelector('.bg-left')
const overlow = document.querySelector('.overflow')
const borderText = document.querySelector('.t-border')
const bgText = document.querySelector('.t-background')
const smokeRight = document.querySelector('.smoke-right')
const smokeMobileLeft = document.querySelector('.smoke-mobile-left')
const smokeMobiRight = document.querySelector('.smoke-mobile-right')
const smokeLeft = document.querySelector('.smoke-left')
const manOne = document.querySelector('.man-1')
const manTwo = document.querySelector('.man-2')
const manThree = document.querySelector('.man-3')
const manFour = document.querySelector('.man-4')
const manMobileTwo = document.querySelector('.man-mobile-2')
const manMobileFour = document.querySelector('.man-mobile-4')




const startTime = new Date().getTime()


const styleBlocks = function() {
    line.style.opacity = 1
    logo.style.opacity = 1
    socIcons.style.opacity = 1
    labelTitle.style.opacity = 1
    // shadowDark.style.opacity = 1
    blockVideo.style.opacity = 1
    bgRight.style.opacity = 1
    bgLeft.style.opacity = 1
    overlow.style.opacity = 1
    borderText.style.opacity = 1
    smokeRight.style.opacity = 1
    smokeLeft.style.opacity = 1
    manOne.style.opacity = 1
    manTwo.style.opacity = 1
    manThree.style.opacity = 1
    manFour.style.opacity = 1
    manMobileTwo.style.opacity = 1
    manMobileFour.style.opacity = 1
    bgText.style.opacity = 0.8
    
    

    window.requestAnimationFrame(styleBlocks)
}
styleBlocks()


const makeIdLitle = function() {
  let newWidth = calcMovement(710, 20)
    btn.style.width = `${newWidth}px`
    if (newWidth > 610) {
        window.requestAnimationFrame(makeIdLitle)
        
    }
}

const makeMediaLitle = function() {
  let newWidth = calcMovement(535, 30)
    btn.style.width = `${newWidth}px`
    if (newWidth > 425) {
        window.requestAnimationFrame(makeMediaLitle)
        
    }
}
if (window.matchMedia('(min-width: 1024px)').matches) {

    smokeLeft.style.left = -153 + 'px'
    smokeRight.style.right = -516 + 'px'

    bgLeft.style.left = 0
    bgRight.style.right = 0
  
    
}
if (window.matchMedia('(max-width: 1992px)').matches) {
  makeIdLitle()
  
}

if (window.matchMedia('(max-width: 1440px)').matches) {
  makeMediaLitle()
}

if (window.matchMedia('(max-width: 360px)').matches) {
  smokeMobileLeft.style.bottom = 0
  smokeMobiRight.style.right = 0
}

// const sizeBtn = function() {
//     let newSize = calcMovementSlow(90, 10)
//     btn.style.fontSize = `${newSize}px`
//     if (newSize > 74) {
//         window.requestAnimationFrame(sizeBtn)
//     }
// }
// sizeBtn()
// const moveIdRight = function() {
//     let newLeft = calcMovement(20, 10)
//     let newBottom = calcMovement(30, 10)
//     smileGrow2.style.left = `${newLeft}px`
//     smileGrow2.style.bottom = `${newBottom}px`

//     if (newLeft < 200) {
//         window.requestAnimationFrame(moveIdRight)
//     }
// }
// moveIdRight()

function calcMovement(startSize, rise) {
  const currTime = new Date().getTime()
  return startSize - (currTime - startTime)/50 + rise
}
// function calcMovementLeft(startSize, rise) {
//     const currTime = new Date().getTime()
//     return startSize + (currTime - startTime)/100 + rise
//   }
