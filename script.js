
var lastScrollTop = 0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  var banner = $('.navbar');
  setTimeout(function(){
    if (st > lastScrollTop){
      banner.addClass('stick');
    } else {
      banner.removeClass('stick');
    }
    lastScrollTop = st;
  }, 200);
});
//Navbar Responsiveness and working

const toggler = document.querySelector('.toggle-button');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const bars = document.querySelectorAll('.bar')
const body = document.querySelectorAll('.body');
const navSlide = () =>{
    toggler.addEventListener('click',()=>{
        nav.classList.toggle('active');
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5 ease forwards ${index/8 + 0.5}s`;
            }
            console.log(index/5 + 2);   
        })
        bars.forEach((bar) =>{
          bar.classList.toggle('active');
        })
        body.forEach((bodies) =>{
          bodies.classList.toggle('active');      
        })
    
    })
    
}

navLinks.forEach((navLink)=>{
    navLink.addEventListener('click',()=>{
      nav.classList.toggle('active');
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5 ease forwards ${index/8 + 0.5}s`;
            }
            console.log(index/5 + 2);   
        })
        bars.forEach((bar) =>{
          bar.classList.toggle('active');
        })
        body.forEach((bodies) =>{
          bodies.classList.toggle('active');
        })
    })
})


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach(tabContents =>{
            tabContents.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })

        tab.classList.add('active');
        target.classList.add('active');
    })
})

var runningText = document.querySelector('.text-change');

var typewriter = new Typewriter(runningText, {
    loop: true
});

typewriter.typeString('Full Stack Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Competative Programmer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Photographer')
    .pauseFor(2500)
    .start();

    
   
    var responsiveSlider = function() {

      var slider = document.getElementById("slider");
      var sliderWidth = slider.offsetWidth;
      var slideList = document.getElementById("slideWrap");
      var count = 1;
      var items = slideList.querySelectorAll("li").length;
      var prev = document.getElementById("prev");
      var next = document.getElementById("next");
      
      window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
      });
      
      var prevSlide = function() {
        if(count > 1) {
          count = count - 2;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = 1) {
          count = items - 1;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
      };
      
      var nextSlide = function() {
        if(count < items) {
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = items) {
          slideList.style.left = "0px";
          count = 1;
        }
      };
      
      next.addEventListener("click",nextSlide);
      
      prev.addEventListener("click",prevSlide);
      
      setInterval(function() {
        nextSlide()
      }, 5000);
      
      };
      
    
      responsiveSlider();  
      
navSlide();