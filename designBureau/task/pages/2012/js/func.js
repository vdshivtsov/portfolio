function dl(array){
	var pause  = array;
	dlay = Math.floor(Math.random() * pause.length);
	return pause[dlay];
}
function rnd(){
	var randly = [500, 700, 900, 1100];
	
	
	$('.logo_cont .logo_itm.anim').each(function(){
		$(this).fadeTo(dl(randly), 1);
	});
	
}


function aside() {
	var aside = $('#mini');
	var press_h = $('#press').height();
	var aside_img = $('#mini .img_on_mini');
	aside.height(press_h+159);
	aside_img.height(press_h+159-134);
}

$(function() {
	
	aside();
	$(window).resize(function(){
		aside();
	});
	$('.logo_cont .logo_itm.anim').hide();
	
	$('body').queryLoader2({
        barColor: '#d42835',
        backgroundColor: '#f7ede2',
        percentage: true,
        barHeight: 1,
        completeAnimation: 'grow',
        minimumTime: 100,
		onComplete: function(){ rnd(); }
    });
	
	
	
});