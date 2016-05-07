$(document).ready(function () {


	console.log("This is the file main.js speaking.");


	$("section#portfolio article").hover(function () {

		overlayToggle($(this));

	});

	function overlayToggle(articleHovered) {

		console.log("This is the function overlayToggle() speaking.");

		articleHovered.children("div.overlay").stop().slideToggle();

	}

	cssFixes();

	function cssFixes() {

		var articleHeight = $("section#portfolio article:first-of-type").outerHeight();
		console.log(articleHeight);

		$("section#portfolio article div.overlay").outerHeight(articleHeight);


	}

	$(window).resize(function() {

		cssFixes();

	});


});


	jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand')
    	     })
        })

