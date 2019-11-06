$(document).ready( function(){
	$('.portfolio__button').click(function() {



			if($(this).attr('isOn')==='true') {
			 	return false;
			 } else {

			 		var myRow = $('div.row').has('.portfolio__item');

			 		if($(this).hasClass('portfolio__button__all')) {
				 	$('.portfolio__button').attr('isOn', 'false');
				 	$(this).attr('isOn', true);
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
});

