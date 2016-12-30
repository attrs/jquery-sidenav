var $ = require('jquery');
var lasturl;

module.exports = $.fn.sidenav = function(action, value) {
  var arg = arguments;
  
  if( arg.length === 1 ) lasturl = action;
  
  return this.each(function() {
    var nav = sidenavigation(this).init();
    
    if( arg.length === 1 ) {
      nav.select(action);
    } else if( !action || action === 'init' ) {
      nav.select(lasturl);
    } else if( action === 'open' ) {
      nav.open(value);
    } else if( action === 'close' ) {
      nav.close(value);
    } else if( action === 'select' ) {
      nav.select(value);
    } else if( action ) {
      console.warn('unsupported action: ' + action);
    }
  });
};

var sidenavigation = module.exports = function(current) {
  return {
    init: function(url) {
      var self = this;
      $(current).find('.accordion-toggle').each(function() {
        if( this.__init__ ) return;
        this.__init__ = true;
        
        $(this).on('click', function() {
          if( $(this).hasClass('menu-open') ) self.close(this);
          else self.open(this);
          
          return false;
        });
      });
      
      return this;
    },
    open: function(target) {
      if( !$(target).hasClass('accordion-toggle') ) return console.warn('target has not "accordion-toggle" class', target);
      
      var self = this;
      $(current).find('.accordion-toggle').each(function() {
        if( this !== target && $(this).hasClass('menu-open') ) {
          self.close(this);
        }
      });
      
      $(target).next('ul').slideDown('fast', 'swing', function() {
        $(target).addClass('menu-open');
      });
      
      return this;
    },
    close: function(target) {
      $(target).next('ul').slideUp('fast', 'swing', function() {
         $(target).removeClass('menu-open');
      });
      
      return this;
    },
    select: function(url) {
      if( !url ) return;
      
      var tobeselected, targetli, length, coselect, colen;
      $(current).find('.sidenav a[href]').each(function() {
        //if( tobeselected ) return;
        var href = this.getAttribute('href');
        if( !href ) return;
        
        if( href.indexOf(url) === 0 && (!length || length >= href.length) ) {
          length = href.length;
          tobeselected = this;
        }
        
        if( href && url.indexOf(href) === 0 && (!colen || colen < href.length) ) {
          colen = href.length;
          coselect = this;
        }
      });
      
      if( !tobeselected && coselect ) tobeselected = coselect;
      if( !tobeselected ) {
        return;
      }
      
      targetli = tobeselected.parentNode;
      
      $(current).find('.sidenav li').each(function() {
        if( this !== targetli ) $(this).removeClass('active');
      });
      $(targetli).addClass('active');
      
      var accordion = $(tobeselected).parent().parent().prev('.accordion-toggle').get(0);
      if( accordion ) this.open(accordion);
      
      return this;
    }
  };
}

