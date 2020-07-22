$(document).ready(function () {

  // toggle mobile menu
  $('[data-toggle="toggle-nav"]').on('click', function () {
      $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
      return false;
  });

});