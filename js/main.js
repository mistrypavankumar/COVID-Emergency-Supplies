
(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	
	
		var siteSticky = function() {
			$(".js-sticky-header").sticky({topSpacing:0});
		};
		siteSticky();
	
		var siteDropdown = function() {
	
			$('nav .dropdown').hover(function(){
				var $this = $(this);
				$this.addClass('show');
				$this.find('> a').attr('aria-expanded', true);
				$this.find('.dropdown-menu').addClass('show');
			}, function(){
				var $this = $(this);
					$this.removeClass('show');
					$this.find('> a').attr('aria-expanded', false);
					$this.find('.dropdown-menu').removeClass('show');
			});
	
	
			$('#dropdown04').on('show.bs.dropdown', function () {
			  console.log('show');
			});
	
		  $('.navbar .dropdown > a').click(function(){
			location.href = this.href;
		  });
		}; 
		siteDropdown();
	});
    

})(jQuery);