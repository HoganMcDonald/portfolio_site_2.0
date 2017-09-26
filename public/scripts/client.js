// video id
const id = 'd45dMdWUSsU';

const viewportwidth = window.innerWidth;
const viewportHeight = window.innerHeight;

if (viewportwidth >= 1024 && window.orientation === undefined) {
  // load ifram api async
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // declare player var scoped to window
  var player;

  //called by api. creates iframe from div on page
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: id,
      playerVars: {
        'controls': 0,
        'showinfo': 0,
        'rel': 0,
        'start': 19,
        'end': 54,
        'loop': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  } // end onYouTubeIframeAPIReady

  // called on ready - mutes playback
  function onPlayerReady(event) {
    event.target.playVideo();
    player.mute()
  } // end onPlayerReady

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      player.playVideo();
    }

  }

  // can be used to stop playback
  function stopVideo() {
    player.stopVideo();
  } // end stopVideo
}

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

    // reveal progress bars
    if (bScroll > $('#work').offset().top - viewportHeight / 2 - 100 && bScroll < $('#work').offset().top + $('#work').height() - viewportHeight / 2  )  {
      $('.progress-bar').css('opacity', 1);
    } else {
      $('.progress-bar').css('opacity', 0);
    }

    // highlight correct progress-bar unit
    let skillsTop = $('.skills').offset().top;
    let projectsTop = $('#work').offset().top;
    let experienceTop = $('.experience').offset().top;
    let experienceBottom = $('#contact').offset().top
    let current = bScroll + 80;

    if (current >= projectsTop && current < skillsTop) { // skills section
      $('.progress-circle').removeClass('active-progress');
      $('.progress-circle').eq(0).addClass('active-progress');
    } else if (current >= skillsTop && current < experienceTop) { // projects section
      $('.progress-circle').removeClass('active-progress');
      $('.progress-circle').eq(1).addClass('active-progress');
    } else if (current >= experienceTop && current < experienceBottom) { // experience section
      $('.progress-circle').removeClass('active-progress');
      $('.progress-circle').eq(2).addClass('active-progress');
    } else {
      $('.progress-circle').removeClass('active-progress');
    }

    // fade in praeco images
    if (current > $('.praeco').offset().top - 600) {
      $('.mockup0').each(function(i) {
        setTimeout(function() {
          $('.mockup0').eq(i).addClass('vis');
        }, 400 * (i + 1));
      }); // end each loop
    } // end fade in praeco images

    // fade in capture images
    if (current > $('.capture').offset().top - 600) {
      $('.mockup2').each(function(i) {
        setTimeout(function() {
          $('.mockup2').eq(i).addClass('vis');
        }, 400 * (i + 1));
      }); // end each loop
    } // end fade in capture images

    // fade in personal-site images
    if (current > $('.personal-site').offset().top - 600) {
      $('.mockup1').each(function(i) {
        setTimeout(function() {
          $('.mockup1').eq(i).addClass('vis');
        }, 400 * (i + 1));
      }); // end each loop
    } // end fade in personal-site images

    // paralax on aralax-background
    let para = $('.paralax-background');
    let paraTop = para.offset().top;
    let paraHeight = para.height();

    if (paraTop < bScroll + viewportHeight && paraTop + paraHeight > bScroll) {
      para.css('transform', 'translateY(' + ((paraTop - bScroll) / 17 - 75) + 'px)')
    }

  }); // end on scroll

  // when nav element is clicked, scrolls to anchor and closes nav
  function scrollToAnchor(id, num){
    $('body').removeClass('lock-scroll');
    $('.page-container').removeClass('menuOpen');
    $('#menuIcon').removeClass('menuOpen');
    if (num) {
      $('li').removeClass('selected');
      $('nav').removeClass('sideNaveOpen');
      $('#' + num).addClass('selected');
    }
    var dest = $("#" + id);
    if (window.orientation === undefined) {
      $('html, body').animate( {scrollTop: dest.offset().top - 68}, 400 );
    } else {
      $('html, body').animate( {scrollTop: dest.offset().top - 30}, 'slow' );
    }
  } // end scroll to anchors

  // on click for nav element
  $('li').on('click', function() {
    switch ($(this).attr('id')) {
      case '1':
        scrollToAnchor('home', 1);
        break;
      case '2':
        scrollToAnchor('work', 2);
        break;
      case '3':
        scrollToAnchor('play', 3);
        break;
      case '4':
        scrollToAnchor('links', 4);
        break;
      case '5':
        scrollToAnchor('contact', 5);
        break;
      default:
        scrollToAnchor('home', 1);
    }
  }); // click nav element

  // progress-circle click funciton
  $('.progress-circle').on('click', function() {
    switch ($(this).attr('id')) {
      case 'projects':
        scrollToAnchor('projects-progress');
        break;
      case 'skills':
        scrollToAnchor('skills-progress');
        break;
      case 'experience':
        scrollToAnchor('experience-progress');
        break;
      default:
        break;
    }
  }); // end progress-circle click

  // toggle side nav
  $('#menuIcon').on('click', () => {
    $('body').toggleClass('lock-scroll');
    $('.page-container').toggleClass('menuOpen');
    $('#menuIcon').toggleClass('menuOpen');
    $('nav').toggleClass('sideNaveOpen');
  }); // end toggle side nav

  // progress circle hover reveal
  $('.progress-circle')
    .mouseenter(function() {
      $(this).children().css('opacity', 1);
    })
    .mouseleave(function() {
      $(this).children().css('opacity', 0);
    });

}); // end document ready
