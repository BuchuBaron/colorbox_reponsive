(function ($, Drupal) {
  Drupal.behaviors.colorboxResponsiveBehavior = {
    attach: function (context, settings) {
      $(context).find('img').once('colorboxResponsiveBehavior').each(function () {
        var link = $('<a></a>').addClass('colorbox').attr('rel', 'colorbox-gallery').prop('href', $(this).attr('src'));
        $(this).wrap(link);
      });
    }
  };
  // Configure colorbox call back to resize with custom dimensions.
  $.colorbox.settings.onLoad = function() {
    colorboxResize();
  }

  // Customize colorbox dimensions.
  var colorboxResize = function(resize) {
    var width = "90%";
    var height = "90%";

    if ($(window).width() > 960) {
      width = "860";
    }
    if ($(window).height() > 700) {
      height = "630";
    }

    $.colorbox.settings.height = height;
    $.colorbox.settings.width = width;

    if (resize) {
      // Window resized while lightbox open.
      $.colorbox.resize({
        'height': height,
        'width': width
      });
    }
  }

  // In case of window being resized.
  $(window).resize(function() {
    colorboxResize(true);
  });

})(jQuery, Drupal);
