/*! * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(c){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(arguments.length>1&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});


/*

Medinic - Medical, Health, Pharmacy HTML Template
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in

*/



jQuery(document).ready(function($) {

		/*************************
       			Right sidebar
		*************************/
		style_switcher = $('.iq-colorbox'),
		panelWidth = style_switcher.outerWidth(true);
		$('.iq-colorbox .color-full').on("click", function(){
			var $this = $(this);
			if ($(".iq-colorbox.color-fix").length>0) {
				style_switcher.animate({"right" : "0px"});
				$(".iq-colorbox.color-fix").removeClass("color-fix");
				$(".iq-colorbox").addClass("opened");
			} else {
				$(".iq-colorbox.opened").removeClass("opened");
				$(".iq-colorbox").addClass("color-fix");
				style_switcher.animate({"right" : '-' + panelWidth});
			}
			return false;
		});
		
		/*************************
       		 style change 
		*************************/
		var link = $('link[data-style="styles"]'),
		link_no_cookie = $('link[data-style="styles-no-cookie"]'); 

 		/*************************
       		 Color Changer
		*************************/
		$('.iq-colorbox .iq-colorselect li').on('click',function(){
			if (link.length>0) {
				var $this = $(this),
					tp_stylesheet = $this.data('style');
				$(".iq-colorbox .iq-colorselect .iq-colormark").removeClass("iq-colormark");
				$this.addClass("iq-colormark");
				link.attr('href', 'css/color/' + tp_stylesheet + '.css');
				if ($(".swicher-title-page-dark").length>0) {
					
				} else {
					if ($("#logo_white").length>0) {
						document.getElementById("logo_white").src="images/color-customizer/white/" + tp_stylesheet + ".png";
					}

					if ($("#logo_dark").length>0) {
						document.getElementById("logo_dark").src="images/color-customizer/dark/" + tp_stylesheet + ".png";
					}

					if ($("#footer_logo").length>0) {
						document.getElementById("footer_logo").src="images/color-customizer/logo/" + tp_stylesheet + ".png";
					}

				};

				$.cookie('tp_stylesheet', tp_stylesheet, 30);
				updatechart($( $(this) ).index( '.iq-colorbox .iq-colorselect li' ));
			} 
		});
});
