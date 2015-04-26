(function ($) {

	var modalContent = $(".modaljs-content");
	var modalContentShow = modalContent.show();

	var modalBg = $(".modaljs-bg");





	$.fn.modaljs = function() {

		modalContent.hide();

        this.on('click',function(e){
        	e.preventDefault();

        	var curX = e.pageX;
        	var curY = e.pageY;

        	modalBg.css({
        		"left":curX - ($(this).offset().left)/5,
        		"top":curY - ($(this).offset().top)/5
        	});

        	modalContent.show();
        	//modalContentShow.velocity('fadeIn');

        	rippleIt();
        	return this;
        });

        $(".modaljs-close").on('click',function(e){
        	closeModal();
        	return this;
        });

     	function rippleIt(){
     		modalBg.velocity({
     			//width: $( window ).height(),
     			//height:$( window ).height()
     		});
     		//$(this).append("<div class='hello'></div");
     		//modalContentShow.velocity('fadeIn');
     	}

     	function fadeIt(){
     		modalContentShow.velocity('fadeIn');
     	}


        function closeModal(){
        	modalContent.velocity('fadeOut',function(){
        		$(this).hide();
        	});
        }//closeModal

    };

}( jQuery ));