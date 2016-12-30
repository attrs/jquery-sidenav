/*!
* jquery-sidenav
* https://github.com/attrs/jquery-sidenav
*
* Copyright attrs and others
* Released under the MIT license
* https://github.com/attrs/jquery-sidenav/blob/master/LICENSE
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("sidenav", ["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["sidenav"] = factory(require("jQuery"));
	else
		root["sidenav"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
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
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sidenav.js.map