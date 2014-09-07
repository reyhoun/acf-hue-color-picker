(function($){
	
	function initialize_field( $el ) {
		
	}
	
	if( typeof acf.add_action !== 'undefined' ) {
	
		$(function() {
			$( "#hue-slider-range-max" ).slider({
				range: "max",
				min: 0,
				max: 359,
				value: 180,
				slide: function( event, ui ) {
					var hslColor = '';
					hslColor = 'hsl(' + ui.value + ', 80%, 50%)';
					$('#amount-hue').css("background-color",hslColor)
					$('#amount-hue').val( ui.value );
				}
			});

			$('#amount-hue').on('change',function () {
				$( "#hue-slider-range-max" ).slider( "value", $( "#amount-hue" ).val());
				$('#amount-hue').css("background-color",'hsl(' + $( "#hue-slider-range-max" ).slider( "value" ) + ',100%,50%)')
			})

			$( "#hue-slider-range-max" ).slider( "value", $( "#amount-hue" ).val());
			$('#amount-hue').css("background-color",'hsl(' + $( "#amount-hue" ).val() + ',100%,50%)')
		});
		
		acf.add_action('ready append', function( $el ){
			
			// search $el for fields of type 'Hue Color Picker'
			acf.get_fields({ type : 'Hue Color Picker'}, $el).each(function(){
				
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

})(jQuery);