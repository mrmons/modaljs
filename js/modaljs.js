(function ($) {

	var modalWrapper = $(".modaljs-wrapper");
	var modalContent = $(".modaljs-content");
	//var modalContentShow = modalContent.show();

	var modalBg = $(".modaljs-bg");

	$.fn.modaljs = function() {

		modalWrapper.hide();

        this.on('click',function(e){
        	//e.preventDefault();

        	var curX = e.pageX;
        	var curY = e.pageY;

        	modalBg.css({
        		"left":curX - ($(this).offset().left)/5,
        		"top":curY - ($(this).offset().top)/5
        	});

        	modalWrapper.show();

        	rippleIt();

        	return this;
        });

        $(".modaljs-close").on('click',function(e){
        	closeModal();
        	return this;
        });

     	function rippleIt(){
     		//Using css3 animation
     		//modalContent.toggleClass('open close').find(modalBg).toggleClass("openjs closejs");
     		modalContent.velocity("fadeIn");

     		modalBg.velocity({
	 		 	scaleX: 100,
	 		 	scaleY: 100,
	 		 	opacity: 1,
	 		 	borderRadius: 0,
	 		// 	//width: $( window ).height(),
	 		// 	//height:$( window ).height()
     		});
     		//$(this).append("<div class='hello'></div");
     		//modalContentShow.velocity('fadeIn');
     	}

     	function fadeIt(){
     		//modalContentShow.velocity('fadeIn');
     	}


        function closeModal(){
        	 modalBg.velocity("reverse");
        	 modalContent.velocity("fadeOut",function(){
        	 	modalWrapper.hide();
        	 });

        	// modalContent.velocity('fadeOut',function(){
        	// 	$(this).hide();
        	// });
        }//closeModal

    };

}( jQuery ));