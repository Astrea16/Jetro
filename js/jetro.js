$(document).ready(function(){
	$('.nav-toggle').on('click', function(){
		$('.main-ul').toggleClass('active');
	});

	$('.flexslider').flexslider({
    animation: "fade",
    controlNav: "thumbnails"
  });
  $('.flexslider_1').flexslider({
    animation: "fade",
  });

  $("#form_1").submit(function(e){
  	e.preventDefault();
  	var FormData;
  	FormData = $(this).serialize();
  	console.log(FormData);
  	$.ajax({
  		   type: "POST",
  		   url: "jetro.php",
  		   data: FormData,
  		   success: function() {
  		   	  alert("Your application is accepted! Thanks.");
            setTimeout(function(){
                $('.message').val('');
                $('input').not(':input[type=text], :input[type=email]').val('');
                $('button').not(':button[type=submit]').val('');
              }, 3000);
  		   }
  	  }); 
   /* $(':input', ':textarea', '#form_1')
    .not(':button, :submit')
    .val('');*/
  });
}); 