!function(a){if(typeof a=="undefined"||a===null)return;a.fn.stickyMenu=function(b){if(this.length===0)return this;var c={additionalOffset:0};a.extend(b,c);var d=b.additionalOffset,e=a(window),f=this,g=f.offset();e.scroll(function(){e.scrollTop()>g.top+f.height()+d&&!f.hasClass("fixed")?f.addClass("fixed"):e.scrollTop()+d<g.top&&f.hasClass("fixed")&&f.removeClass("fixed")})}}(window.jQuery);