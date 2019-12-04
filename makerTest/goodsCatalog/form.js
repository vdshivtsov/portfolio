$( document ).ready(function() {
 
    $( "button" ).click(function( event ) {

    	var message = ''; //выводимое после валидации полей сообщение
    	var formIsValid = true;
    	var myForm = $ ( 'form' );

    	for (var i = 0; myForm.children("input").eq(i).val() !== undefined; i++) {

    		if (myForm.children("input").eq(i).is("input[type='text']")) {
    			var text = myForm.children("input").eq(i);

    			// проверка поля text на валидность
        		if ( text.attr('required') === 'required' ) { // если поле обязательно для заполнения, то выполняем условие
	         		var inputValue = text.val(); //записываем заполненное в поле значение в переменную
	         		if (inputValue === '') { //так как поле обязательное и пустое то валидация не проходит
	         			message += 'input field ' + i + ' is NOT valid\n';
	         			formIsValid = false;
	         		} else { //если что-то заполнено, то все ок
	         			message += 'input field ' + i + ' is VALID\n';
	         		}
        		} else { //если поле не обязательное, то проверку не проводим, по условиям задачи все валидно
        			message += 'input field ' + i +  ' is VALID\n';
        		}
    		}

    		if (myForm.children("input").eq(i).is("input[type='tel']")) {
    			var tel = myForm.children("input").eq(i);
		    		// проверка поля tel на валидность
		        if ( tel.attr('required') === 'required' ) {
		         	var inputValue = tel.val();
		         	var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/; //регулярное выражение номера телефона

					if ( re.test ( inputValue ) ) {
		         		message += 'input field ' + i + ' is VALID\n';
		         	} else {
		         		message += 'input field ' + i + ' is NOT valid\n';
		         		formIsValid = false;
		         	}
		        } else {
		        	message += 'input field ' + i + ' is VALID\n';
		        }
		    }

		    if (myForm.children("input").eq(i).is("input[type='email']")) {
    			var email = myForm.children("input").eq(i);

    			// проверка поля email на валидность
		        if ( email.attr('required') === 'required' ) {
		         	var inputValue = email.val();
		         	var re = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/; //регулярное выражение электронной почты

					if ( re.test ( inputValue ) ) {
		         		message += 'input field ' + i + ' is VALID\n';
		         	} else {
		         		message += 'input field ' + i + ' is NOT valid\n';
		         		formIsValid = false;
		         	}
		        } else {
		        	message += 'input field ' + i + ' is VALID\n';
		        }

    		}

    	}

    	if (formIsValid) {
    		message += 'form is VALID\n';
    	} else {
    		message += 'form is NOT valid\n';
    	}

    	alert ( message );

    });
 
});