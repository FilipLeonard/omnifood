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
}
