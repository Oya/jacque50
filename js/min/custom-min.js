$(function(){"use strict";$("#content-wrap, .cat-pages").niceScroll({cursorcolor:"#d7d7d7",cursorwidth:"6px",cursorborder:"none",cursorborderradius:"8px",horizrailenabled:!1,autohidemode:!1,zindex:1e4}),$("#content-wrap, .cat-pages").getNiceScroll().hide(0)}),$(function(){"use strict";$("a.page-scroll").bind("click",function(e){var s=$("#content-wrap"),t=$(".cat-pages"),a=$(this).attr("href"),i=$("#responsive-menu"),c=$("a.page-scroll");if($("#content-wrap, .cat-pages").getNiceScroll().hide(0).resize(),c.removeClass("nav-current"),$(this).addClass("nav-current"),i.addClass("responsive-menu"),clearTimeout(o),clearTimeout(l),clearTimeout(n),clearTimeout(r),clearTimeout(u),clearTimeout(p),clearTimeout(d),clearTimeout(f),clearTimeout(m),clearTimeout(v),clearTimeout(v),clearTimeout(h),clearTimeout(g),clearTimeout(y),clearTimeout(b),clearTimeout(T),clearTimeout(w),setTimeout(function(){i.css("opacity","1")},100),$(a).hasClass("cat-pages-active"))t.removeClass("cat-left-0").removeClass("cat-left-50").addClass("cat-left-25"),s.removeClass("content-wrap-left").removeClass("content-wrap-right").removeClass("cat-left-0").removeClass("cat-left-50").addClass("cat-left-25"),t.removeClass("cat-pages-active"),c.removeClass("nav-current"),setTimeout(function(){t.css("display","none")},1e3);else if(t.removeClass("cat-pages-active"),$(a).addClass("cat-pages-active"),$(this).hasClass("page-right")){if(s.hasClass("content-wrap-right")){t.css("z-index","2").removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50");var o=setTimeout(function(){t.css("display","none"),$(a).css({display:"block","z-index":"3"}),t.removeClass("cat-left-50").removeClass("cat-left-0").addClass("cat-left-25")},300),l=setTimeout(function(){$(a).removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50")},350),n=setTimeout(function(){$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()},1300)}else if(s.hasClass("content-wrap-left")){t.removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0");var r=setTimeout(function(){t.css("display","none"),$(a).css("display","block")},1e3),u=setTimeout(function(){$(a).removeClass("cat-left-50").removeClass("cat-left-0").addClass("cat-left-50")},1050),p=setTimeout(function(){$("#content-wrap, .cat-pages").delay(2100).getNiceScroll().show(0).resize()},2e3)}else{$(a).css("display","block");var d=setTimeout(function(){t.css("display","none"),$(a).css("display","block").removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50").addClass("cat-pages-responsive-0")},1),f=setTimeout(function(){$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()},1300)}s.removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0").removeClass("content-wrap-right").addClass("content-wrap-left")}else{if(s.hasClass("content-wrap-left")){t.removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0");var m=setTimeout(function(){t.css("display","none"),$(a).css("display","block"),t.removeClass("cat-left-50").removeClass("cat-left-0").addClass("cat-left-25")},300),v=setTimeout(function(){$(a).removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0")},350),C=setTimeout(function(){$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()},1300)}else if(s.hasClass("content-wrap-right")){t.removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50");var h=setTimeout(function(){t.css("display","none"),$(a).css("display","block")},1e3),g=setTimeout(function(){$(a).removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0")},1050),y=setTimeout(function(){$("#content-wrap, .cat-pages").delay(2100).getNiceScroll().show(0).resize()},2e3)}else{$(a).css("display","block");var b=setTimeout(function(){$(a).removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0").addClass("cat-pages-responsive-0")},1),T=setTimeout(function(){$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()},1300)}s.removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50").removeClass("content-wrap-left").addClass("content-wrap-right")}if("#contact"!==a)var w=setTimeout(function(){$("#contact").delay(1300).getNiceScroll().hide(0).resize()},1300);return!1})}),$(function(){"use strict";$("a#responsive-menu-list").bind("click",function(e){var s=$("#content-wrap"),t=$("#responsive-menu").find("ul");clearTimeout(a),t.hasClass("responsive-menu-disable")?t.removeClass("responsive-menu-disable").css("display","block"):t.addClass("responsive-menu-disable").css("display","none");var a=setTimeout(function(){s.css("display","none").css("visible","hidden")},1050);return!1})}),$(function(){"use strict";$("a.page-scroll-responsive").bind("click",function(e){var s=$("#content-wrap"),t=$(".cat-pages"),a=$(this).attr("href"),i=$("#responsive-menu"),c=i.find("ul"),o=$("#contact"),l=$("a.page-scroll");clearTimeout(n),clearTimeout(r),clearTimeout(u),clearTimeout(p),clearTimeout(d),$("#content-wrap, .cat-pages").getNiceScroll().hide(0),c.addClass("responsive-menu-disable").css("display","none");var n=setTimeout(function(){o.css("visibility","visible")},1e3);t.removeClass("cat-pages-responsive-0").addClass("cat-pages-responsive-100");var r=setTimeout(function(){t.css("display","none"),$(a).css("display","block")},1e3),u=setTimeout(function(){s.removeClass("content-wrap-left").removeClass("content-wrap-right"),$(a).removeClass("cat-pages-responsive-100").addClass("cat-pages-responsive-0")},1050),p=setTimeout(function(){$("#content-wrap, .cat-pages").delay(2e3).getNiceScroll().show(0).resize()},2100);if("#content-wrap"===a){i.css("opacity","0"),t.removeClass("cat-pages-active"),l.removeClass("nav-current");var d=setTimeout(function(){i.removeClass("responsive-menu")},1100)}return!1})}),$(function(){"use strict";$(".menu ul li ul").length&&$(".menu ul li ul").closest("li").addClass("sub-menu"),$(".menu ul li").hover(function(){$(this).find("ul").css("visibility","visible")},function(){$(this).find("ul").css("visibility","hidden")})}),$(function(){"use strict";$(".iconbox ul li").hover(function(){$(".iconbox ul li").not(this).css("opacity",".5")},function(){$(".iconbox ul li").css("opacity","1")})}),$(function(){"use strict";$(".dial").knob({width:"100",height:"100",thickness:.05,fgColor:"rgba(255, 255, 255, .6)",bgColor:"rgba(255, 255, 255, .4)",inputColor:"#fff",readOnly:!0,font:'28px "Poiret One"',fontWeight:"300",parse:function(e){return parseInt(e)},format:function(e){return e+"%"}})}),$(function(){"use strict";$(".timeline ul li").hover(function(){$(".timeline ul li").not(this).css("opacity",".5"),$("span",this).addClass("changed")},function(){$(".timeline ul li").css("opacity","1"),$("span",this).removeClass("changed")})}),$(function(){"use strict";$(".popup-ajax").magnificPopup({type:"ajax",mainClass:"mfp-fade",showCloseBtn:!1,overflowY:"scroll"}),$(document).on("click",".ajax-popup-dismiss",function(e){e.preventDefault(),$.magnificPopup.close()}),$(".popup-image").magnificPopup({type:"image",closeOnContentClick:!0,removalDelay:300,mainClass:"mfp-fade",image:{verticalFit:!0}}),$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})}),$(function(){"use strict";$(".portfolio-fliter ul a").click(function(){$(".portfolio-fliter ul .current").removeClass("current"),$(this).parent().addClass("current");var e=$(this).text().toLowerCase().replace(" ","-");return"all"==e?$(".portfolio-items ul li img.phidden").css("opacity","1").removeClass("phidden"):$(".portfolio-items ul li img").each(function(){$(this).hasClass(e)?$(this).css("opacity","1").removeClass("phidden"):$(this).css("opacity",".2").addClass("phidden")}),!1})}),$(function(){"use strict";$(".portfolio-items ul li").hover(function(){var e=$(this).find("img"),s=$(this).find(".portfolio-description");e.hasClass("phidden")||(e.css("opacity",".1"),s.css("opacity","1"),$("h3",s).css("opacity","1"),$("p",s).css("opacity","1"))},function(){var e=$(this).find("img"),s=$(this).find(".portfolio-description");e.hasClass("phidden")||(e.css("opacity","1"),s.css("opacity","0"),$("h3",s).css("opacity","0"),$("p",s).css("opacity","0"))})}),jQuery(document).ready(function($){"use strict";$("#quote-slideshow").bjqs({showcontrols:!1,centercontrols:!1})}),$(function(){"use strict";$(".blog ul li").hover(function(){$(".blog ul li").not(this).css("opacity",".5"),$(this).find("img").css("opacity",".6")},function(){$(".blog ul li").css("opacity","1"),$(this).find("img").css("opacity",".8")})}),$(function(){"use strict";var e=$("#confirme");$("li#contact-link a").bind("click",function(s){e.css("z-index","1"),$(this).parent().hasClass("page-right")?e.css("visibility","visible"):$("#content-wrap").css("left","25%")?e.css("visibility","visible"):setTimeout(function(){e.css("visibility","visible")},500)}),$("a.contact-button").bind("click",function(s){e.css("z-index","1"),setTimeout(function(){e.css("visibility","visible")},800)}),$('a[href="#contact"]').bind("click",function(s){e.css("z-index","1")})}),$(function(){"use strict";$("#contactform").validate({rules:{name:{required:!0,minlength:2},email:{required:!0,email:!0},subject:{required:!0},message:{required:!0}},messages:{name:{required:"Please Enter Your Name",minlength:"your name must consist of at least 2 characters"},email:{required:"Please Enter Your Email Address"},subject:{required:"Please Enter Your Message Subject"},message:{required:"Please Enter Your Message.",minlength:"Your Message Is Too Long!"}},submitHandler:function(e){$(e).ajaxSubmit({type:"POST",data:$(e).serialize(),url:"contact.php",success:function(){$("#contactform").clearForm(),$("#cf-success").css("display","block").css("opacity","1")},error:function(){$("#cf-error").css("display","block").css("opacity","1")}})}})});