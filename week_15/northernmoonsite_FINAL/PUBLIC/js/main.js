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

	function fixHash(currentProduct) {

		console.log("This is the function fixHash() speaking");

		console.log(currentProduct.attr("id"));

		window.location.hash = '#' + currentProduct.attr("id") ;


	}

	$("#products").each(function(e) {
		if (e != 0)
			$(this).hide();
	});

	$("#arrow-right").click(function(){
		if ($("#products article:visible").next().length != 0)
			$("#products article:visible").next().show().prev().hide();
		else {
			$("#products article:visible").hide();
			$("#products article:first").show();
		}
		fixHash($("#products article:visible img"));
		return false;
	});

	$("#arrow-left").click(function(){
		if ($("#products article:visible").prev().length != 0)
			$("#products article:visible").prev().show().next().hide();
		else {
			$("#products article:visible").hide();
			$("#products article:last").show();
		}
		fixHash($("#products article:visible img"));
		return false;
	});


});

	jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand')
    	     })
        })


