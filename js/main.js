$(function(){
	$('.page-header .header-nav > ul > li').has('ul').children('a').click(
		function(e){
			e.preventDefault();
			$(this).parents('li').siblings('li').children('ul').slideUp('fast');
			$(this).siblings('ul').slideToggle('fast');
		}
	);
});