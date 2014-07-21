/**
 * @file
 * A JavaScript file for the theme.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($) {
  Drupal.behaviors.showhidetext = {
    attach: function (context, settings) {
      $(".listing-text").addClass('is-hidden');
      $(".listing .views-row").hover(
        function() {
          $(this).find(".listing-text").addClass('is-shown');
        }, function() {
          $(this).find(".listing-text").addClass('is-hidden').removeClass('is-shown');
        }
      );
    }
  }
})(jQuery);
