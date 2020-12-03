$(document).ready(main);

function main() {
  // Sticky navigation

  const handleStickyNav = direction =>
    void $('nav')[`${direction === 'down' ? 'add' : 'remove'}Class`]('sticky');

  $('.js--section-features').waypoint(handleStickyNav, {
    offset: '10%',
  });

  // Buttons
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.js--section-plans').offset().top,
      },
      1000
    );
  });

  $('.js--scroll-to-features').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.js--section-features').offset().top,
      },
      1000
    );
  });

  // Animations on scroll

  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    { offset: '50%' }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '50%' }
  );
  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '50%' }
  );
  $('.js--wp-4').waypoint(
    function (direction) {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    { offset: '50%' }
  );

  // Mobile navigation

  $('.js--mobile-nav-icon').click(function () {
    $('.main-nav').slideToggle(300);
    $('.js--mobile-nav-icon-close').removeClass('hidden');
    $('.js--mobile-nav-icon').css('display', 'none');
  });

  $('.js--mobile-nav-icon-close').click(function () {
    $('.main-nav').slideToggle(300);
    $('.js--mobile-nav-icon-close').addClass('hidden');
    $('.js--mobile-nav-icon').css('display', 'block');
  });
}
