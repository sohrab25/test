(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	$('.active-mobile-menu').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */


/*-------------------------------
For qoute text owl active
---------------------------------*/  
  $(".active-testimonial").owlCarousel({
      autoPlay: true,
	  stopOnHover :true,
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  
/*-------------------------------
For home page section owl active
---------------------------------*/  
  $(".active-section-blog").owlCarousel({
      autoPlay: true,
	  stopOnHover :true,
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  
/*-------------------------------
For home page brand owl active
---------------------------------*/  
  $(".active-brand-owl").owlCarousel({
      autoPlay: true,
	  stopOnHover :false,
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 5,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,5],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
  
  /*-------------------------------
	about team owl active
---------------------------------*/  
  $(".active-team-owl").owlCarousel({
      autoPlay: true,
	  stopOnHover :false,
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

  
/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
 /* Sticky header*/
 $(window).scroll(function(){
	 if($(this).scrollTop()>100){
		 $('#sticky-header').addClass('sticky');
	 }else{ 
		$('#sticky-header').removeClass('sticky');
	 }
	 
 } );
 

	
 /*For treeview*/
    $("#cat-treeview ul").treeview({
        animated: "normal",
        persist: "location",
        collapsed: true,
        unique: true,
    });
 
 
	/*Scroll to top button start*/
 
	$(".to-top").on("click", function() {
		$('html,body').animate({scrollTop:0},1000);
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 100 ){
			$('.to-top').fadeIn(1000);
		}else{
			$('.to-top').fadeOut(1000);
		}
	})
	 

 /*Scroll to top button end*/
 
})(jQuery); 