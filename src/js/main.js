import LocomotiveScroll from 'locomotive-scroll';
const imgBack = document.querySelector('.img--back')
const downloadImg = document.querySelectorAll('.downloadApp__downloadImg')

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


document.getElementById('toHome').addEventListener('click', e => scroll.scrollTo(document.getElementById('home')))
document.getElementById('toFeatures').addEventListener('click', e => scroll.scrollTo(document.getElementById('features')) )
document.getElementById('toPricing').addEventListener('click', e => scroll.scrollTo(document.getElementById('pricing')) )
document.getElementById('toTesti').addEventListener('click', e => scroll.scrollTo(document.getElementById('testimonial')) )
document.getElementById('toFaq').addEventListener('click', e => scroll.scrollTo(document.getElementById('faq')) )

document.getElementById('toHomeFoo').addEventListener('click', e => scroll.scrollTo(document.getElementById('home')))
document.getElementById('toFeaturesFoo').addEventListener('click', e => scroll.scrollTo(document.getElementById('features')) )
document.getElementById('toPricingFoo').addEventListener('click', e => scroll.scrollTo(document.getElementById('pricing')) )
document.getElementById('toTestiFoo').addEventListener('click', e => scroll.scrollTo(document.getElementById('testimonial')) )
document.getElementById('toFaqFoo').addEventListener('click', e => scroll.scrollTo(document.getElementById('faq')) )


scroll.on('call', func => {
    // Using modularJS
    if (func === 'imgBack'){
        imgBack.style.transform = 'translateY(-50%) rotate(0deg)'
    } else if (func === 'popUpDownload'){
        downloadImg.forEach(el => el.style.animationPlayState = 'running')
    }
});


document.querySelector('.faq__content').addEventListener('click', (e) => {
    if (e.target.closest('.faq__card')){
        Array.from(document.querySelector('.faq__content').children).forEach(el=>{
            el.classList.remove('activeFAQ')
            el.style.paddingBottom = `0`
        })
        e.target.closest('.faq__card').classList.add('activeFAQ')
        document.querySelector('.activeFAQ').style.paddingBottom = `${document.querySelector('.activeFAQ').children[1].children[0].offsetHeight + 120}px`
    }
    console.log(document.querySelector('.activeFAQ').children[1].children[0].offsetHeight)
})

// EXPREMENTIAL
const card = document.querySelector('.plans__card--important')
const container = document.querySelector('.container')
//items
let price = document.getElementById('plans__card--price')
let title = document.getElementById('plans__card--mainText')
let button = document.getElementById('plans__card--button')
let features = document.getElementById('plans__card--features')
let shakeOnClick = document.querySelectorAll('.shakeOnClick');

shakeOnClick.forEach(el => {
    el.addEventListener('click', e => {
        el.classList.add('errorShake')
        setTimeout(() => {
            el.classList.remove('errorShake')
        }, 600);
    })
    
})

// mouse animation
container.addEventListener('mousemove', (e) => {
    let xAAxis = -(window.innerWidth / 2 - e.pageX) / 30;
    let yAAxis = -(window.innerHeight / 2 - e.screenY)/ 30;
    card.style.transform = `rotateY(${xAAxis}deg) rotateX(${yAAxis}deg)`
})

//animation in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = `none`
    price.style.transform = 'translateZ(100px)'
    title.style.transform = 'translateZ(50px)'
    features.style.transform = 'translateZ(50px)'
    button.style.transform = 'translateZ(50px)'
    
})



//animation out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = `all .5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    price.style.transform = 'none'
    title.style.transform = 'none'
    button.style.transform = 'none'
    features.style.transform = 'none'

})


