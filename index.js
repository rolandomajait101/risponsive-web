const toggleBtnIcons = document.querySelector('.toggle-icon');
// select both the toggle btns as well the bars and the times
const toggleBtnBars = document.querySelector('.times');
const toggleBtntimes = document.querySelector('.bars');
// select the links-container and the nav links
const linksContainer = document.querySelector('.links-container');
// const navContainer = document.querySelector('.nav-links');
const navContainer = document.querySelector('.nav-link-wrapper');

// then select the social icons
const showIcons = document.querySelector('.social-icons');

// Now, Let's set our function 

function toggleIcons(){
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    if(linkContainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    }
    else if(linkContainerHeight === navContainerHeight){  
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    }
}
toggleBtnIcons.addEventListener('click', toggleIcons);
// links items
const links = document.querySelectorAll('.link');

links.forEach(function (linksItem){
    linksItem.addEventListener('click', function (item){
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    });
});

// Add functionality to animate rolling ball
// Add functionality to animate rolling ball

const mySelf = document.querySelector('.my-self');
const switchBtn = document.querySelector('.switch-btn');
const playBall = document.querySelector('.play');
const stopBall = document.querySelector('.pause');


playBall.addEventListener('click', () => myfunction('play'));
stopBall.addEventListener('click', () => myfunction('stop'));

const myfunction = (state) => {

    if(state === 'play'){
        mySelf.classList.add('animate');
        playBall.style.display = 'none';
        stopBall.style.display = 'block';
    }
    else if(state === 'stop'){
        mySelf.classList.remove('animate');
        playBall.style.display = 'block';
        stopBall.style.display = 'none';
    }
}

// back to top icon functionality
const scrollLink = document.querySelector('.scroll-link');
window.addEventListener('scroll', function (){
    const topLink = window.pageYOffset;
    if(topLink > 500){
        scrollLink.classList.add('show-link');
    }else{
        scrollLink.classList.remove('show-link');
    }
});


// auto type section
let typed = new typed('.auto-typed',{
    strings: ['Rolando,'],
    typeSpeed: 220,
    backSpeed: 220,
    loop: true,
});
//function
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

  $(document).ready(function(){
    var docWidth = $('c').width(),
        $wrap = $('#wrap'),
        $images = $('#wrap .hb'),
        slidesWidth = $wrap.width();
    
    $(window).on('resize', function(){
      docWidth = $('c').width();
      slidesWidth = $wrap.width();
    })
    
    $(document).mousemove(function(e) {
      var mouseX = e.pageX,
          offset = mouseX / docWidth * slidesWidth - mouseX / 2;
      
      $images.css({
        '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
                'transform': 'translate3d(' + -offset + 'px,0,0)'
      });
    });
  })