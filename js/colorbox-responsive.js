(function ($, Drupal) {
  Drupal.behaviors.colorboxResponsiveBehavior = {
    attach: function (context, settings) {
      $(context).find('img.myCustomBehavior').once('colorboxResponsiveBehavior').each(function () {
        $(this).addClass('colorbox');
      });
    }
  };
})(jQuery, Drupal);
