$( document ).ready(function() {
 
 // 	$( "li" ).each(function( index ) {
 // 	  var txt = '[+] ' + $(this).html();
	//   $(this).html(txt);
	// });

	var listItems = $('ul');
	var allListItems = listItems.find( 'li' );
	allListItems.eq(0).html('[+]' + allListItems.eq(0).html());

    // $( "" ).click(function( event ) {
 
    // });
 
});