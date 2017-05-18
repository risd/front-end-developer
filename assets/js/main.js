const titleWords = $('.title-word');
const seal = $('.seal');
const help = $('.help');
// titleWords.draggable();
// seal.draggable();
// $('*').draggable();




// console.log('%c Save us from ourselves!', 'font-family:Gotham, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-feature-settings: "salt" 3; font-weight:bold; marign-bottom:1em; color: rgb(0,255,0); font-size:120px; letter-spacing:-10px;');

$(document).ready(function(){
	// makeAPile($('.title-word'));
	// makeAPile($('.seal'));
});

function makeAPile(theThingstoPile){
	theThingstoPile.each(function(){
		var positionLeft = randomX(0,60);
		var positionTop = randomY(0,75);
		var positionZ = randomX(1,10);
		var rotationDegree = randomX(-90,90);
		$(this).css({
	    	left: positionLeft + '%',
	    	top: positionTop + '%',
	    	zIndex: positionZ,
	    	transform: 'rotate(' + rotationDegree + 'deg)'
	    });
	})
}

function addHelp(){
	$('.background').append('<p class="help">' + 'Help!' + '</p>') ;
}

function randomX(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}

function randomY(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}



 function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide(e) {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
          addHelp();
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));
    // window.addEventListener('scroll', debounce(addHelp));