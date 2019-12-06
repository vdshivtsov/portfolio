$(document).ready(function () {
	var aClick = function(ourLink) { //функция обработки щелчка по li-ссылке
		alert("Произошел щелчок по ссылке: " + ourLink);
	}

	$('ul > li').each(function() {	//рекурсивно проходим по каждому li в ul 
		if ( $(this).children().html() !== undefined ) { //если нет вложенных элементов (потомков)
			$(this).prepend("<span>[+] </span>");  //перед выбранным элеменом добавляем значок +
		}
	});
	
	$('ul > li').click(function (event) { //при клике по li
	    if ($(this).children().html() === undefined) { //если нет вложенных элементов (то есть это ссылка), то вызываем aClick()
	    	aClick($(this).text());
	    }
	    $(this).children("ul").slideToggle();	//если в выбранном элементе содержится ul - показать его с анимацией
	    if( $(this).children('span').text() === '[+] ' ) { //если при щелчке по выпадающему списку стоял +
	    	$(this).children('span').text('[-] ');		   //то поменять его на минус
	    } else {
	    	$(this).children('span').text('[+] ');         //если был минус, то вернуть плюс (при сворачивании)
	    }
	    event.stopPropagation();				//останавить "всплытие" вызова события к родительским элементам 
    });
});