(function ($) {

	var modalWrapper = $(".modaljs-wrapper");
	var modalContent = $(".modaljs-content");
	var modalBg = $(".modaljs-bg");

	$.fn.modaljs = function() {

		modalWrapper.hide();

        this.on('click',function(e){
        	e.preventDefault();

        	var curX = e.pageX;
        	var curY = e.pageY;

        	modalBg.css({
        		"left":curX - ($(this).offset().left)/5,
        		"top":curY - ($(this).offset().top)/5
        	});

        	modalWrapper.show();

        	rippleIt();

        	return this;
        }); //When user click the trigger button

        $(".modaljs-close").on('click',function(e){
        	closeModal();

        	return this;
        }); //When user close the modal window

     	function rippleIt(){
     		//Using css3 animation
     		//modalContent.toggleClass('open close').find(modalBg).toggleClass("openjs closejs");
			
			//modalWrapper.append("<div class='modaljs-bg'></div>").     	

     		modalContent.velocity("fadeIn");

     		modalBg.velocity({
	 		 	scaleX: 100,
	 		 	scaleY: 100,
	 		 	opacity: 1,
	 		 	borderRadius: 0,
     		});
     	}//Ripple effect 

     	function fadeIt(){
     		modalContent.velocity("fadeIn");
     		modalBg.velocity("fadeIn");
     		//modalContentShow.velocity('fadeIn');
     	}//Fade effect 


        function closeModal(){
        	 modalBg.velocity("reverse");

        	 modalContent.velocity("fadeOut",function(){
        	 	modalWrapper.hide();
        	 });
        }//close Modal

    };

}( jQuery ));