(function($){
	
	
	function initialize_field( $el ) {
		
		//$el.doStuff();
		
	}
	
	
	if( typeof acf.add_action !== 'undefined' ) {
	
		
		//=====================================================================================


$(function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 0,
      max: 359,
      value: 180,
      slide: function( event, ui ) {

        var hslColor = '';
        hslColor = 'hsl(' + ui.value + ',80%,50%)';
        $('#amount').css("background-color",hslColor)
        $( "#amount" ).val( ui.value );
        

      }
    });


    $('#amount').on('change',function () {

        $( "#slider-range-max" ).slider( "value", $( "#amount" ).val());
        $('#amount').css("background-color",'hsl(' + $( "#slider-range-max" ).slider( "value" ) + ',100%,50%)')
    })



    $( "#slider-range-max" ).slider( "value", $( "#amount" ).val());
    $('#amount').css("background-color",'hsl(' + $( "#amount" ).val() + ',100%,50%)')
  });





		//=====================================================================================


		
		acf.add_action('ready append', function( $el ){
			
			// search $el for fields of type 'hue'
			acf.get_fields({ type : 'hue'}, $el).each(function(){
				
				initialize_field( $(this) );
				
			});
			
		});
		
		
	} else {
		
		
		/*
		*  acf/setup_fields (ACF4)
		*
		*  This event is triggered when ACF adds any new elements to the DOM. 
		*
		*  @type	function
		*  @since	1.0.0
		*  @date	01/01/12
		*
		*  @param	event		e: an event object. This can be ignored
		*  @param	Element		postbox: An element which contains the new HTML
		*
		*  @return	n/a
		*/
		
		$(document).live('acf/setup_fields', function(e, postbox){
			
			$(postbox).find('.field[data-field_type="hue"]').each(function(){
				
				initialize_field( $(this) );
				
			});
		
		});
	
	
	}

  // $(document).foundation();



})(jQuery);
