



let container = document.querySelector('.container');
let card = document.querySelector('.card')
let checkout = document.querySelector('.checkout')
let sniker = document.querySelector('.sniker')
let sizes = document.querySelector('.sizes')
let title = document.querySelector('.title')
let heading = document.querySelector('.heading')
//animate in
container.addEventListener('mousemove',(e)=>{
    console.log(e.pageX,e.pageY)
    let axisX = ((window.innerWidth/2) - e.pageX) /10
    let axisY = ((window.innerHeight/2) - e.pageY) /10
    card.style.transform = `rotateX(${axisY}deg) rotateY(${axisX}deg)`;
    card.style.padding = `1rem`

    checkout.style.transform = `perspective(500px)  translateZ(150px)`
    sniker.style.transform = `perspective(500px) translateZ(150px) rotateZ(-45deg)`
    sizes.style.transform = `perspective(500px)  translateZ(150px)`
    title.style.transform = `perspective(500px)  translateZ(150px)`
    heading.style.transform = `perspective(500px)  translateZ(150px)`
})
//animate out
container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `rotateX(0deg) rotateY(0deg) `
    card.style.transition = ` all 0.5s ease`
    checkout.style.transform = `translateZ(0px)`
    sniker.style.transform = `translateZ(0px)`
    sizes.style.transform = `translateZ(0px)`
    title.style.transform = `translateZ(0px)`
    heading.style.transform = `translateZ(0px)`
})
//mouse in
container.addEventListener('mouseenter',(e)=>{
    setTimeout(()=>{
        card.style.transition = `none`,100
      }  )
  
})