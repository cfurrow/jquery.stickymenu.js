(function($){
  if(typeof $ === "undefined" || $ === null){
    return;
  }

  $.fn.stickyMenu = function(options){
    if(!options){ options = {}; }
    if(this.length === 0){
      return this;
    }
    var DEFAULTS = {
      additionalOffset:0
    };
    $.extend(options,DEFAULTS);
    var additionalOffset = options.additionalOffset;
    var $window = $(window);
    var originalWidth = this.width();
    this.wrap("<div class='sticky-wrapper'></div>");
    var $original = this;
    var $menu = $(".sticky-wrapper");
    var offset = $menu.offset();

    $window.scroll(function(){
      if($window.scrollTop() > offset.top + $menu.height() + additionalOffset && !$menu.hasClass('stuck')){
        $menu.addClass('stuck');
        $original.width(originalWidth);
      }
      else if($window.scrollTop() + additionalOffset < offset.top && $menu.hasClass('stuck')){
        $menu.removeClass('stuck');
        $original.width("auto");
      }
    });
  };
})(window.jQuery);
