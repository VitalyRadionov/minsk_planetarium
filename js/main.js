$(document).ready(function() {
  $('.app').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.ogv',
    ogv: 'video/video.webm',
    mov: 'video/video.mov',
    poster: 'img/cover-img.jpg'
  });

  $(".nav-link").click( function () { 
    $(".nav-link").removeClass('nav-link-color');
    $(this).addClass('nav-link-color');
    });
});