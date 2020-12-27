const rellax = require('rellax')
const imgBack = document.querySelector('.img--back')
const onView = document.querySelector('.onView')
const downloadImg = document.querySelectorAll('.downloadApp__downloadImg')


var rellaxx = new rellax('.rellax', {
    round: true
});


window.addEventListener('scroll', e => {
      if (isInViewport(onView)) {
        imgBack.style.transform = 'translateY(-50%) rotate(0deg)'
      } else {
        imgBack.style.transform = 'translateY(-50%) rotate(15deg)'
      }

  })

// scroll.on('call', func => {
//     // Using modularJS
//     if (func === 'imgBack'){
//         imgBack.style.transform = 'translateY(-50%) rotate(0deg)'
//     } else if (func === 'popUpDownload'){
//         downloadImg.forEach(el => el.style.animationPlayState = 'running')
//     }
// });

document.querySelector('.activeFAQ').style.paddingBottom = `${document.querySelector('.activeFAQ').children[1].children[0].offsetHeight + 120}px`
document.querySelectorAll('.faq__card').forEach(el => {
    el.style.paddingBottom = `${el.children[0].children[0].offsetHeight + 20}px`
})
document.querySelector('.faq__content').addEventListener('click', (e) => {
    if (e.target.closest('.faq__card')){
        Array.from(document.querySelector('.faq__content').children).forEach(el=>{
            el.classList.remove('activeFAQ')
            el.style.paddingBottom = `0`
        })
        e.target.closest('.faq__card').classList.add('activeFAQ')
        document.querySelectorAll('.faq__card').forEach(el => {
            el.style.paddingBottom = `${el.children[0].children[0].offsetHeight + 20}px`
        })
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
let navList = document.querySelector('.nav__ul');

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



///Initiation Variables
var icon_1 = document.getElementById("b1");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";  // can be "menu" or "arrow"
var topLineY_1;
var middleLineY_1;
var bottomLineY_1;
var topLeftY_1;
var topRightY_1;
var bottomLeftY_1;
var bottomRightY_1;
var topLeftX_1;
var topRightX_1;
var bottomLeftX_1;
var bottomRightX_1;

///Animation Variables
var segmentDuration_1 = 15;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;
var currentFrame_1 = 1;

///Menu Disappear 
function menuDisappearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= menuDisappearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> { 
            //top line
            topLineY_1 = AJS.easeInBack( 37, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
            //bottom line
            bottomLineY_1 = AJS.easeInBack( 63, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
            //recursion
            menuDisappearAnimation_1();
        });
    } else {
        middleLine_1.style.opacity = "0";
        currentFrame_1 = 1;
        menuDisappearComplete_1 = true;
        openMenuAnimation_1();
    }
}

///Cross Appear
function arrowAppearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= arrowAppearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> { 
            //top line
            topLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            topLeftY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomRightY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
            //bottom line
            bottomLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomLeftY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            topRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            topRightY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
            //recursion
            arrowAppearAnimation_1();
        });
    } else {
        currentFrame_1 = 1;
        arrowAppearComplete_1 = true;
        openMenuAnimation_1();
    }
}

///Combined Open Menu Animation
function openMenuAnimation_1() {
    if ( !menuDisappearComplete_1 ) { 
        menuDisappearAnimation_1();
    } else if ( !arrowAppearComplete_1) {
        arrowAppearAnimation_1();
    }
}

///Cross Disappear
function arrowDisappearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= arrowDisappearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> {
            //top line
            topLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topLeftY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomRightY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
            //bottom line
            bottomLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomLeftY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topRightY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
            //recursion
            arrowDisappearAnimation_1();
        });
    } else {
        middleLine_1.style.opacity = "1";
        currentFrame_1 = 1;
        arrowDisappearComplete_1 = true;
        closeMenuAnimation_1();
    }
}

///Menu Appear
function menuAppearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= menuAppearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> {
            //top line
            topLineY_1 = AJS.easeOutBack( 50, 37, menuDisappearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
            //bottom line
            bottomLineY_1 = AJS.easeOutBack( 50, 63, menuDisappearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
            //recursion
            menuAppearAnimation_1();
        });
    } else {
        currentFrame_1 = 1;
        menuAppearComplete_1 = true;
        closeMenuAnimation_1();
    }
}

///Close Menu Animation
function closeMenuAnimation_1() {
    if ( !arrowDisappearComplete_1 ) {
        arrowDisappearAnimation_1();
    } else if ( !menuAppearComplete_1 ) {
        menuAppearAnimation_1();
    }
}

///Events
icon_1.addEventListener( "click", ()=> { 
  if ( state_1 === "menu" ) {
      openMenuAnimation_1();
      responsiveMenuIn()
    state_1 = "arrow";
    arrowDisappearComplete_1 = false;
        menuAppearComplete_1 = false;
  } else if ( state_1 === "arrow" ) {
      closeMenuAnimation_1();
      responsiveMenuOut()
    state_1 = "menu";
    menuDisappearComplete_1 = false;
        arrowAppearComplete_1 = false;
  }
});


// document.querySelector('.box').addEventListener('click', (e) => {
//     closeMenuAnimation_1()
// })

function responsiveMenuIn() {
    navList.style.transform = 'translate(-50%,-50%)'
}
function responsiveMenuOut() {
    navList.style.transform = 'translate(100%,-50%)'
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          };
        });
      }
    }
  });
