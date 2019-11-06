$('.portfolio__button').click(function() {
		if($(this).attr('isOn')==='true') {
		 	return false;
		 } else if($(this).hasClass('portfolio__button__all')) {
		 	$('.portfolio__button').attr('isOn', 'false');
		 	$(this).attr('isOn', true);
		 	$($('div').has('.portfolio__item')).show(400);
		 	return true;
		 } else if($(this).hasClass('portfolio__button__wd')) {
		 	$('.portfolio__button').attr('isOn', 'false');
		 	$(this).attr('isOn', true);
		 	$($('div').has('.portfolio__item')).hide(400);
		 	$($('div').has('.portfolio__item__wd')).show(400);
		 	return true;
		 } else if($(this).hasClass('portfolio__button__ux')) {
		 	$('.portfolio__button').attr('isOn', 'false');
		 	$(this).attr('isOn', true);
		 	$($('div').has('.portfolio__item')).hide(400);
		 	$($('div').has('.portfolio__item__ux')).show(400);
		 	return true;
		 } else if($(this).hasClass('portfolio__button__moc')) {
		 	$('.portfolio__button').attr('isOn', 'false');
		 	$(this).attr('isOn', true);
		 	$($('div').has('.portfolio__item')).hide(400);
		 	$($('div').has('.portfolio__item__moc')).show(400);
		 	return true;
		 }
		});