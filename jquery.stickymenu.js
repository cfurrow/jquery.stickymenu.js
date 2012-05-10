!function($){
  if(typeof $ === "undefined" || $ === null){
    return;
  }

  $.fn.stickyMenu = function(options){
		if(this.length == 0){
			return this;
		}
    var additionalOffset = options.additionalOffset;
    var $window = $(window);
    var $menu = this;
    var offset = $menu.offset();  
    $window.scroll(function(){
      if($window.scrollTop() > offset.top + $menu.height() + additionalOffset && !$menu.hasClass('fixed')){
        $menu.addClass('fixed');
      }
      else if($window.scrollTop() + additionalOffset < offset.top && $menu.hasClass('fixed')){
        $menu.removeClass('fixed');
      }
    });
  };
}(window.jQuery)
