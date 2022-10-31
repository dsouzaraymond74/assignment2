//Navbar-------------------------------------- 
var prevScrollpos = window.pageYOffset;
window.onscroll= function() {
  var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "-82px";
    } else {
      document.getElementById("navbar").style.top = "-180px";
    }
    prevScrollpos = currentScrollPos;
  }// above code dealing with auto hide


  //swiper slider
const mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    speed: 300,
   mousewheel: true,
   coverflowEffect: {
    rotate: 30,
    slideShadows: true
  },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',

    },
  })


  // cars / home_tabs
  const content = document.querySelectorAll('.country');
const tab = document.querySelectorAll('.link');
const slider = document.querySelector('.countries_slider');

function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });
  tab.forEach(item => {
    item.classList.remove('active');
  });
}

function showTabContent(i = 0) {
  content[i].style.display = 'grid';
  tab[i].classList.add('active');
}
hideTabContent();
showTabContent();

slider.addEventListener("click", (e) => {
  const target = e.target
  if (target) {
     tab.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
  }
});

//popup_enquiry
$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});

//submission
$(function(){
  $('.formBtn').click(function(){
    $('#contactForm').fadeToggle();
  })
})

