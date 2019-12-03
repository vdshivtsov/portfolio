$( document ).ready(function() {
 
        $( ".catalog__button" ).click(function( event ) {
 
		    if ( $( this ).hasClass( "catalog__button_list" ) ) {
	 			$( this ).removeClass( "catalog__button_list" ).addClass( "catalog__button_block" );
	 			$ ( this ).text( "Block view" );
	 			$ ( ".catalog__goods").addClass("catalog__goods_list");
	 			$ ( ".catalog__card").addClass("catalog__card_list");
	 			$ ( ".catalog__cell").addClass("catalog__cell_list");
	 			


	    	} else if ( $( this ).hasClass( "catalog__button_block" ) ) {
	 			$( this ).removeClass( "catalog__button_block" ).addClass( "catalog__button_list" );
	 			$ ( this ).text( "List view" );
	 			$ ( ".catalog__goods").removeClass("catalog__goods_list");
	 			$ ( ".catalog__card").removeClass("catalog__card_list");
	 			$ ( ".catalog__cell").removeClass("catalog__cell_list");
	    	}

 
    });
 
});