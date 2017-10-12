$(document).ready(function() {

  // $('.navbar').hide();

  // Toggle CSS classes on scroll to hide/show background-color on navbar.
  $(window).scroll(function() {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 1);
    // $('.navbar').show($(this).scrollTop > 1);
  });


  // Toggle CSS classes on scroll to hide/show section with icons.
  // $(window).scroll(function() {
  //   $('.additional h2').toggleClass('scrolled', $(this).scrollTop() > 150);
  //   $('#ico .icon').toggleClass('scrolled', $(this).scrollTop() > 150);
  // });


  // Hide/Show on scroll section with icons.
  $(window).scroll(function() {
    var windowScrollTop = $(this).scrollTop();

    if (windowScrollTop < 100) {
      $('.additional h2').css({'display': 'none'});
      $('#ico .icon').css({'display': 'none'});
        } else {
          $('.additional h2').css({'display': 'block'});
          $('#ico .icon').css({'display': 'block'});
    }
  });


  // Hide projects button after DOM load.
  $('.top-projects .btn-info').hide();

  function showButton() {
    $(this).closest('.top-projects').find('.btn-info').css({'display': 'block'});
    $(this).closest('.top-projects').find('.btn-info').css({'margin-top': '-275px'});
  }

  function hideButton() {
    $(this).closest('.top-projects').find('.btn-info').css({'display': 'none'});
  }

  $('.top-projects').on('mouseenter', showButton);
  $('.top-projects').on('mouseleave', hideButton);


  // JQuery adds qoutes from quotes.html using the random generator.
  // $(function() {
  //   $('generateRandomWord').load('quotes.html', function() {
  //     jQuery('.item').addClass('active');
  //   });
  // });



});
