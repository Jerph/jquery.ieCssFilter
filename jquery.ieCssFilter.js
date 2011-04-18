/*!
 * jQuery IE CSS Filter plugin
 *
 * Copyright 2011, Jeff Fendley
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function ($) {
    // Removes CSS 'filter' value in IE 8 and lower if opacity is not needed (does not account for other uses of 'filter').
    jQuery.fn.removeIeCssFilters = function () {
        if ($.browser.msie && $.browser.version < 9) {
            return this.each(function () {
                $$ = $(this);
                if (!$$.is(':visible') || $$.css('opacity') == 1) {
                    this.style.removeAttribute("filter");
                }
            });
        }
        return this;
    };
})(jQuery);