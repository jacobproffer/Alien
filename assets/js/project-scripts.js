console.log('Priority one');
console.log('Insure return of organism for analysis');
console.log('All other considerations secondary.');
console.log('Crew expendable.');

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('.gallery').flickity({
  // options
  contain: true,
  wrapAround: true,
  pageDots: false,
  setGallerySize: false,
  arrowShape: {
    x0: 30,
    x1: 60, y1: 30,
    x2: 60, y2: 15,
    x3: 45
  }
  // prevNextButtons: false
});
