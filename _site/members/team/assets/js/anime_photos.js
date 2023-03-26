document.addEventListener('DOMContentLoaded', function() {
  var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
  var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  function loop() {
    elementsToShow.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
  }

  function isElementInViewport(el) {
    if (jQuery.isFunction(jQuery)) {
      el = jQuery(el)[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= windowHeight && rect.top <= windowHeight) ||
      (rect.top >= 0 && rect.bottom <= windowHeight)
    );
  }

  window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-50px';
    }
  });

  loop();
});


