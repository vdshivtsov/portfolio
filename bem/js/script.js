$(document).ready( function(){
	$('.portfolio__button').click(function() {
		if($(this).attr('isOn')==='true') {
		 	return false;
		 } else {

		 	 var myRow = $('div.row').has('.portfolio__item');

		 	 if($(this).hasClass('portfolio__button__view-all')) {
			 	$('.portfolio__button').attr('isOn', 'false');
			 	$(this).attr('isOn', true);
			 	$('.portfolio__button__all').attr('isOn', true);
			 	myRow.hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item').show(1000);
			 	myRow.show(1000);
			 	return true;
			 } else if($(this).hasClass('portfolio__button__all')) {
			 	$('.portfolio__button').attr('isOn', 'false');
			 	$(this).attr('isOn', true);
			 	$('.portfolio__button__view-all').attr('isOn', true);
			 	myRow.hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item').show(1000);
			 	myRow.show(1000);
			 	return true;
			 } else if($(this).hasClass('portfolio__button__wd')) {
			 	$('.portfolio__button').attr('isOn', 'false');
			 	$(this).attr('isOn', true);
			 	myRow.hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item').hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item__wd').show(1000);
				myRow.show(1000);
			 	return true;
			 } else if($(this).hasClass('portfolio__button__ux')) {
			 	$('.portfolio__button').attr('isOn', 'false');
			 	$(this).attr('isOn', true);
				myRow.hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item').hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item__ux').show(1000);
				myRow.show(1000);
			 	return true;
			 } else if($(this).hasClass('portfolio__button__moc')) {
			 	$('.portfolio__button').attr('isOn', 'false');
			 	$(this).attr('isOn', true);
				myRow.hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item').hide(1000);
			 	$('div.col-xl-4').has('.portfolio__item__moc').show(1000);
			 	myRow.show(1000);
			 	return true;
			 }
		   } 
		});

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }]
	});
});

