/*
 *
 * jQuery Tabset
 * Created by Anthony Colangelo (http://acolangelo.com)
 * 
 * © 2012 Anthony Colangelo
 *
*/
(function($){
	$.tabset = function(options){
		options = $.extend({
			header: '.tabset > h3',
			content: '.tabset > div',
			activeIndex: 0,
			activeClass: 'tabset-active',
			before: function(){},
			after: function(){}
		}, options);

		var headers = $(options.header);
		var contents = $(options.content);

		if ( headers.is('a') ) { var clickables = headers; }
		else { var clickables = headers.find('a'); }

		function setActive(index) {
			options.before();

			headers.removeClass(options.activeClass).eq(index).addClass(options.activeClass);
			contents.removeClass(options.activeClass).hide();
			contents.eq(index).show().addClass(options.activeClass);

			options.after();
		}

		setActive(options.activeIndex);

		clickables.on('click',function(){
			setActive(headers.index($(this).closest(options.header)));
			return false;
		});
	}
})(jQuery);