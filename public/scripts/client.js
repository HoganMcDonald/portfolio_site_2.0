$(document).ready( () => {

  // represents when nav element is faded in. used to check if it has already.
  let faded = false;
  const fadeTime = 2000 // time from window load at which fade will occur

  // fades in nav at interval
  let fadeInScroll = setTimeout( () => {
    faded = true;
    if (window.orientation === undefined) {
      $('nav').addClass('show');
    }
  }, fadeTime) // end fade at interval

  // scroll event
  $(window).on('scroll', () => {

    // cancel interval for fade in
    clearTimeout(fadeInScroll);
    $('nav').addClass('show'); // fades in nav when scrolled

    // local variable created on scroll event that stores current pixel
    // count from the top of body.
    const bScroll = $('body').scrollTop();
    // console.log(bScroll); // test position

    // nav bar scroll events
    if (bScroll > $('nav').height() + 10) {
      // when absolute positioned nav leaves page + 10px, makes fixed with background
      $('nav').addClass('navVis');
    } else if (bScroll <= $('nav').height()) {
      // when scrolled to top of page, makes absolute again
      $('nav').removeClass('navVis');
    }

  }); // end on scroll

  // when nav element is clicked, scrolls to anchor and closes nav
  function scrollToAnchor(id, num){
    $('.page-container').removeClass('menuOpen');
    $('#menuIcon').removeClass('menuOpen');
    $('li').removeClass('selected');
    $('nav').removeClass('sideNaveOpen');
    $('#' + num).addClass('selected');
    var dest = $("#" + id);
    if (window.orientation === undefined) {
      $('html, body').animate( {scrollTop: dest.offset().top - 90}, 400 );
    } else {
      $('html, body').animate( {scrollTop: dest.offset().top - 30}, 'slow' );
    }
  } // end scroll to anchors

  // on click for nav element
  $('li').on('click', function() {
    switch ($(this).attr('id')) {
      case '1':
        console.log(1);
        scrollToAnchor('home', 1);
        break;
      case '2':
        console.log(2);
        scrollToAnchor('projects', 2);
        break;
      case '3':
        console.log(3);
        scrollToAnchor('reading', 3);
        break;
      case '4':
        console.log(4);
        scrollToAnchor('links', 4);
        break;
      default:
        console.log('other');
        scrollToAnchor('home', 1);
    }
  }); // click nav element

  // toggle side nav
  $('#menuIcon').on('click', () => {
    $('.page-container').toggleClass('menuOpen');
    $('#menuIcon').toggleClass('menuOpen');
    $('nav').toggleClass('sideNaveOpen');
  }); // end toggle side nav

}); // end document ready
