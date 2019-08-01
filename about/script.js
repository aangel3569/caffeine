 $(function() {
    $(".navbar-toggle").click(function() {
		if( $( "#navbar-collapse" ).hasClass( "show")){
      $( "#navbar-collapse" ).removeClass( "show");
      return false;
		}
		else{
			$( "#navbar-collapse" ).addClass( "show");
		}
    });
  });

 $(function() {
    $(".nav-item").click(function() {
		if( $( "#navbar-collapse" ).hasClass( "show")){
      $( "#navbar-collapse" ).removeClass( "show");
      return true;
		}
		else{
			$( "#navbar-collapse" ).addClass( "show");
		}
    });
  });

new WOW().init();