import $ from 'jquery';

$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
		$('.search').hide();
	});

});
