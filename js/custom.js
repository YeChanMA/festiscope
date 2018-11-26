/* Author: Manzano, Reymart */
(function($){
	"use strict";
	var Festiscope = {};

	Festiscope.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	$(window).on("scroll", function(){
		
		Festiscope.HeaderFixd();
	});


})(jQuery);

            $(".allp").click(function(){
                $(".allp").addClass("active");
                $(".visayas").removeClass("active");
                $(".mindanao").removeClass("active");
                $(".luzon").removeClass("active");
                $(".allp01").show();
                console.log("all");
            });

            $(".luzon").click(function(){
                $(".allp").removeClass("active");
                $(".visayas").removeClass("active");
                $(".mindanao").removeClass("active");
                $(".luzon").addClass("active");
                $(".allp01").hide();
                $(".luzon01").show();
                $(".visayas01").hide();
                $(".mindanao01").hide();
                console.log("luzon");
            });

            $(".visayas").click(function(){
                $(".allp").removeClass("active");
                $(".visayas").addClass("active");
                $(".mindanao").removeClass("active");
                $(".luzon").removeClass("active");
                $(".allp01").hide();
                $(".luzon01").hide();
                $(".visayas01").show();
                $(".mindanao01").hide();
                console.log("visayas");
            });

            $(".mindanao").click(function(){
                $(".allp").removeClass("active");
                $(".visayas").removeClass("active");
                $(".mindanao").addClass("active");
                $(".luzon").removeClass("active");
                $(".allp01").hide();
                $(".luzon01").hide();
                $(".visayas01").hide();
                $(".mindanao01").show();
                console.log("mindanao");
            });


		
			function search() {
				var end_point = "https://www.eventbriteapi.com/v3/events/search/";
				var search_token = document.getElementById("search_field").value;
				var auth_token = "Y2AQWKBS2KM44XTD56CK";
				var $events = $("#events");

				$.ajax({url: end_point+"?q="+search_token+"&token="+auth_token, success: function(data) {
					if(data.events.length) {
						var content = "";

						for(var i = 0; i < data.events.length; i++) {
							var event = data.events[i];
                             console.dir(event);
                            content += "<div class='eventList'>";
							content += "<h2><a href='" + event.url + "'>" +event.name.text + "</a></h2>";
                            "<br/>";
                           ;
                            
						content += "</div>";
						}

						$events.html(content);

					} else {
						$events.html("No results found.");
					}
				}});
			}
	
	