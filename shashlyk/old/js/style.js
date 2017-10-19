jQuery(document).ready(function() {

	$('input, select').styler();

	$('.wslider .slider').slick({
  		centerMode: true,
  		centerPadding: '360px',
		slidesToShow:3,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		dots: false,
		draggable: false,
		responsive: [
		{
		  breakpoint: 1700,
		  settings: {
  			centerPadding: '260px'
		  }
		},
		{
		  breakpoint: 1500,
		  settings: {
  			centerPadding: '160px'
		  }
		},
		{
		  breakpoint: 1300,
		  settings: {
  			centerPadding: '100px'
		  }
		},
		{
		  breakpoint: 1200,
		  settings: {
  			centerPadding: '60px'
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow:2,
  			centerPadding: '60px'
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow:1,
  			centerPadding: '0px',
			arrows: false,
			dots: true
		  }
		}]
	});
	$('.dday .slider').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		dots: false,
		draggable: false,
		responsive: [
		{
		  breakpoint: 767,
		  settings: {
			arrows: false,
			dots: true
		  }
		}]
	});
	$('.tariffs .slider').slick({
		slidesToShow:3,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		dots: false,
		draggable: false,
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow:2,
			arrows: false,
			dots: true
		  }
		},
		{
		  breakpoint: 568,
		  settings: {
			slidesToShow:1,
			arrows: false,
			dots: true
		  }
		}]
	});
	$('.cat-slider .slider').slick({
		slidesToShow:4,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		dots: false,
		draggable: false,
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow:2,
			arrows: false,
			dots: true
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow:2,
			arrows: false,
			dots: true
		  }
		}]
	});
	$('.commend .slider').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		dots: false,
		draggable: false,
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			arrows: false,
			dots: true
		  }
		}	]
	});
	$('.wslider .sprev').click(function(){
		$(this).parents('.wslider').find('.slider').slick('slickPrev');
	});
	$('.wslider .snext').click(function(){
		$(this).parents('.wslider').find('.slider').slick('slickNext');
	});
	
	$('.adws .itm').click(function() {
	    $('.adws .itm').removeClass('active');
	    $(this).addClass('active');
	    $('.adws .btn').removeAttr('disabled');
	});

	$('.whom .well').hover(function() {
	    $('.whom .well').removeClass('active');
	    $(this).addClass('active');
	});

	$('.reasons .itm').click(function() {
		if (!$(this).hasClass("active")) {
			$('.reasons .itm.active').removeClass('active').find('.txt').fadeOut(200);
	    	$(this).addClass('active');
	    	$(this).find('.txt').fadeIn(200);
		} else {
			$(this).removeClass('active');
	  	  	$(this).find('.txt').fadeOut(200);
		}
	});
	$(document).click(function(e) {
		if ( $(e.target).closest('.reasons .itm.active').length === 0 ) {
	   		$('.reasons .itm .txt').fadeOut(200);
	    	$('.reasons .itm').removeClass('active');
	  	}
	});

	$(function() {
        $('#shopselector').change(function(){
            $('.cshop').hide();
            $('.cshop').removeClass("active");
            $('#' + $(this).val()).show();
        });
    });

    function screenClass() {
		if ($(window).innerWidth() > 992) {
			$(window).scroll(function(){
				if ($(this).scrollTop() > 304) {
					$('.topmenu').addClass('fixed');
					$('.topblock').addClass('fixed');
				} else {
					$('.topmenu').removeClass('fixed');
					$('.topblock').removeClass('fixed');
				};
			});
		} else { }
	};
	screenClass();
	$(window).bind('resize',function(){
		screenClass();
	});

/* jQuery Form Styler v1.7.8 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e($||require("jquery")):e(jQuery)}(function(e){"use strict";function t(t,s){this.element=t,this.options=e.extend({},l,s);var i=this.options.locale;void 0!==this.options.locales[i]&&e.extend(this.options,this.options.locales[i]),this.init()}function s(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&"OPTION"!=t.target.nodeName&&e("div.jq-selectbox.opened").length){var s=e("div.jq-selectbox.opened"),l=e("div.jq-selectbox__search input",s),o=e("div.jq-selectbox__dropdown",s),a=s.find("select").data("_"+i).options;a.onSelectClosed.call(s),l.length&&l.val("").keyup(),o.hide().find("li.sel").addClass("selected"),s.removeClass("focused opened dropup dropdown")}}var i="styler",l={idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Выбрать",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};t.prototype={init:function(){function t(){void 0!==i.attr("id")&&""!==i.attr("id")&&(this.id=i.attr("id")+l.idSuffix),this.title=i.attr("title"),this.classes=i.attr("class"),this.data=i.data()}var i=e(this.element),l=this.options,o=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),a=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(i.is(":checkbox")){var d=function(){var s=new t,l=e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(l).prependTo(l),l.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),l.click(function(e){e.preventDefault(),l.is(".disabled")||(i.is(":checked")?(i.prop("checked",!1),l.removeClass("checked")):(i.prop("checked",!0),l.addClass("checked")),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.is(":checked")?l.addClass("checked"):l.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&l.click()}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};d(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),d()})}else if(i.is(":radio")){var r=function(){var s=new t,l=e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(l).prependTo(l),l.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),e.fn.commonParents=function(){var t=this;return t.first().parents().filter(function(){return e(this).find(t).length===t.length})},e.fn.commonParent=function(){return e(this).commonParents().first()},l.click(function(t){if(t.preventDefault(),!l.is(".disabled")){var s=e('input[name="'+i.attr("name")+'"]');s.commonParent().find(s).prop("checked",!1).parent().removeClass("checked"),i.prop("checked",!0).parent().addClass("checked"),i.focus().change()}}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.parent().addClass("checked")}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};r(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),r()})}else if(i.is(":file")){i.css({position:"absolute",top:0,right:0,margin:0,padding:0,opacity:0,fontSize:"100px"});var n=function(){var s=new t,o=i.data("placeholder");void 0===o&&(o=l.filePlaceholder);var a=i.data("browse");void 0!==a&&""!==a||(a=l.fileBrowse);var d=e('<div class="jq-file"><div class="jq-file__name">'+o+'</div><div class="jq-file__browse">'+a+"</div></div>").css({display:"inline-block",position:"relative",overflow:"hidden"}).attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(d).appendTo(d),i.is(":disabled")&&d.addClass("disabled"),i.on("change.styler",function(){var t=i.val(),s=e("div.jq-file__name",d);if(i.is("[multiple]")){t="";var a=i[0].files.length;if(a>0){var r=i.data("number");void 0===r&&(r=l.fileNumber),r=r.replace("%s",a),t=r}}s.text(t.replace(/.+[\\\/]/,"")),""===t?(s.text(o),d.removeClass("changed")):d.addClass("changed")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}).on("click.styler",function(){d.removeClass("focused")})};n(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),n()})}else if(i.is('input[type="number"]')){var c=function(){var s=new t,l=e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'),i.is(":disabled")&&l.addClass("disabled");var o,a,d,r=null,n=null;void 0!==i.attr("min")&&(o=i.attr("min")),void 0!==i.attr("max")&&(a=i.attr("max")),d=void 0!==i.attr("step")&&e.isNumeric(i.attr("step"))?Number(i.attr("step")):Number(1);var c=function(t){var s,l=i.val();e.isNumeric(l)||(l=0,i.val("0")),t.is(".minus")?s=Number(l)-d:t.is(".plus")&&(s=Number(l)+d);var r=(d.toString().split(".")[1]||[]).length;if(r>0){for(var n="1";n.length<=r;)n+="0";s=Math.round(s*n)/n}e.isNumeric(o)&&e.isNumeric(a)?s>=o&&a>=s&&i.val(s):e.isNumeric(o)&&!e.isNumeric(a)?s>=o&&i.val(s):!e.isNumeric(o)&&e.isNumeric(a)?a>=s&&i.val(s):i.val(s)};l.is(".disabled")||(l.on("mousedown","div.jq-number__spin",function(){var t=e(this);c(t),r=setTimeout(function(){n=setInterval(function(){c(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(r),clearInterval(n)}).on("mouseup","div.jq-number__spin",function(){i.change()}),i.on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}))};c(),i.on("refresh",function(){i.off(".styler").closest(".jq-number").before(i).remove(),c()})}else if(i.is("select")){var f=function(){function d(t){t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(t){var s=null;"mousewheel"==t.type?s=-1*t.originalEvent.wheelDelta:"DOMMouseScroll"==t.type&&(s=40*t.originalEvent.detail),s&&(t.stopPropagation(),t.preventDefault(),e(this).scrollTop(s+e(this).scrollTop()))})}function r(){for(var e=0;e<f.length;e++){var t=f.eq(e),s="",i="",o="",a="",d="",r="",n="",c="",u="",p="disabled",v="selected sel disabled";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i=p),t.is(":selected:disabled")&&(i=v),void 0!==t.attr("id")&&""!==t.attr("id")&&(a=' id="'+t.attr("id")+l.idSuffix+'"'),void 0!==t.attr("title")&&""!==f.attr("title")&&(d=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(n=" "+t.attr("class"),u=' data-jqfs-class="'+t.attr("class")+'"');var m=t.data();for(var g in m)""!==m[g]&&(r+=" data-"+g+'="'+m[g]+'"');i+n!==""&&(o=' class="'+i+n+'"'),s="<li"+u+r+o+d+a+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(c=" "+t.parent().attr("class")),s="<li"+u+r+' class="'+i+n+" option"+c+'"'+d+a+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+c+'">'+t.parent().attr("label")+"</li>"+s)),h+=s}}function n(){var a=new t,n="",c=i.data("placeholder"),u=i.data("search"),p=i.data("search-limit"),v=i.data("search-not-found"),m=i.data("search-placeholder"),g=i.data("z-index"),b=i.data("smart-positioning");void 0===c&&(c=l.selectPlaceholder),void 0!==u&&""!==u||(u=l.selectSearch),void 0!==p&&""!==p||(p=l.selectSearchLimit),void 0!==v&&""!==v||(v=l.selectSearchNotFound),void 0===m&&(m=l.selectSearchPlaceholder),void 0!==g&&""!==g||(g=l.singleSelectzIndex),void 0!==b&&""!==b||(b=l.selectSmartPositioning);var y=e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({display:"inline-block",position:"relative",zIndex:g}).attr({id:a.id,title:a.title}).addClass(a.classes).data(a.data);i.css({margin:0,padding:0}).after(y).prependTo(y);var C=e("div.jq-selectbox__select",y),x=e("div.jq-selectbox__select-text",y),w=f.filter(":selected");r(),u&&(n='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+m+'"></div><div class="jq-selectbox__not-found">'+v+"</div>");var q=e('<div class="jq-selectbox__dropdown" style="position: absolute">'+n+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+h+"</ul></div>");y.append(q);var _=e("ul",q),j=e("li",q),k=e("input",q),S=e("div.jq-selectbox__not-found",q).hide();j.length<p&&k.parent().hide(),""===f.first().text()&&f.first().is(":selected")&&c!==!1?x.text(c).addClass("placeholder"):x.text(w.text());var T=0,N=0;if(j.css({display:"inline-block"}),j.each(function(){var t=e(this);t.innerWidth()>T&&(T=t.innerWidth(),N=t.width())}),j.css({display:""}),x.is(".placeholder")&&x.width()>T)x.width(x.width());else{var P=y.clone().appendTo("body").width("auto"),A=P.outerWidth();P.remove(),A==y.outerWidth()&&x.width(N)}T>y.width()&&q.width(T),""===f.first().text()&&""!==i.data("placeholder")&&j.first().hide(),i.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var D=y.outerHeight(!0),H=k.parent().outerHeight(!0)||0,I=_.css("max-height"),z=j.filter(".selected");if(z.length<1&&j.first().addClass("selected sel"),void 0===j.data("li-height")){var K=j.outerHeight();c!==!1&&(K=j.eq(1).outerHeight()),j.data("li-height",K)}var M=q.css("top");if("auto"==q.css("left")&&q.css({left:0}),"auto"==q.css("top")&&(q.css({top:D}),M=D),q.hide(),z.length&&(f.first().text()!=w.text()&&y.addClass("changed"),y.data("jqfs-class",z.data("jqfs-class")),y.addClass(z.data("jqfs-class"))),i.is(":disabled"))return y.addClass("disabled"),!1;C.click(function(){if(e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")),i.focus(),!o){var t=e(window),s=j.data("li-height"),a=y.offset().top,r=t.height()-D-(a-t.scrollTop()),n=i.data("visible-options");void 0!==n&&""!==n||(n=l.selectVisibleOptions);var c=5*s,h=s*n;n>0&&6>n&&(c=h),0===n&&(h="auto");var u=function(){q.height("auto").css({bottom:"auto",top:M});var e=function(){_.css("max-height",Math.floor((r-20-H)/s)*s)};e(),_.css("max-height",h),"none"!=I&&_.css("max-height",I),r<q.outerHeight()+20&&e()},p=function(){q.height("auto").css({top:"auto",bottom:M});var e=function(){_.css("max-height",Math.floor((a-t.scrollTop()-20-H)/s)*s)};e(),_.css("max-height",h),"none"!=I&&_.css("max-height",I),a-t.scrollTop()-20<q.outerHeight()+20&&e()};b===!0||1===b?r>c+H+20?(u(),y.removeClass("dropup").addClass("dropdown")):(p(),y.removeClass("dropdown").addClass("dropup")):b===!1||0===b?r>c+H+20&&(u(),y.removeClass("dropup").addClass("dropdown")):(q.height("auto").css({bottom:"auto",top:M}),_.css("max-height",h),"none"!=I&&_.css("max-height",I)),y.offset().left+q.outerWidth()>t.width()&&q.css({left:"auto",right:0}),e("div.jqselect").css({zIndex:g-1}).removeClass("opened"),y.css({zIndex:g}),q.is(":hidden")?(e("div.jq-selectbox__dropdown:visible").hide(),q.show(),y.addClass("opened focused"),l.onSelectOpened.call(y)):(q.hide(),y.removeClass("opened dropup dropdown"),e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(y)),k.length&&(k.val("").keyup(),S.hide(),k.keyup(function(){var t=e(this).val();j.each(function(){e(this).html().match(new RegExp(".*?"+t+".*?","i"))?e(this).show():e(this).hide()}),""===f.first().text()&&""!==i.data("placeholder")&&j.first().hide(),j.filter(":visible").length<1?S.show():S.hide()})),j.filter(".selected").length&&(""===i.val()?_.scrollTop(0):(_.innerHeight()/s%2!==0&&(s/=2),_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()/2+s))),d(_)}}),j.hover(function(){e(this).siblings().removeClass("selected")});var O=j.filter(".selected").text();j.filter(":not(.disabled):not(.optgroup)").click(function(){i.focus();var t=e(this),s=t.text();if(!t.is(".selected")){var o=t.index();o-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),f.prop("selected",!1).eq(o).prop("selected",!0),O=s,x.text(s),y.data("jqfs-class")&&y.removeClass(y.data("jqfs-class")),y.data("jqfs-class",t.data("jqfs-class")),y.addClass(t.data("jqfs-class")),i.change()}q.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y)}),q.mouseout(function(){e("li.sel",q).addClass("selected")}),i.on("change.styler",function(){x.text(f.filter(":selected").text()).removeClass("placeholder"),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),f.first().text()!=j.filter(".selected").text()?y.addClass("changed"):y.removeClass("changed")}).on("focus.styler",function(){y.addClass("focused"),e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){y.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=j.data("li-height");""===i.val()?x.text(c).addClass("placeholder"):x.text(f.filter(":selected").text()),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===i.val()?_.scrollTop(0):_.scrollTop(_.scrollTop()+j.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()+t),13==e.which&&(e.preventDefault(),q.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),C.click())}),s.registered||(e(document).on("click",s),s.registered=!0)}function c(){var s=new t,l=e('<div class="jq-select-multiple jqselect"></div>').css({display:"inline-block",position:"relative"}).attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.css({margin:0,padding:0}).after(l),r(),l.append("<ul>"+h+"</ul>");var o=e("ul",l).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),a=e("li",l).attr("unselectable","on"),n=i.attr("size"),c=o.outerHeight(),u=a.outerHeight();void 0!==n&&n>0?o.css({height:u*n}):o.css({height:4*u}),c>l.height()&&(o.css("overflowY","scroll"),d(o),a.filter(".selected").length&&o.scrollTop(o.scrollTop()+a.filter(".selected").position().top)),i.prependTo(l).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),i.is(":disabled")?(l.addClass("disabled"),f.each(function(){e(this).is(":selected")&&a.eq(e(this).index()).addClass("selected")})):(a.filter(":not(.disabled):not(.optgroup)").click(function(t){i.focus();var s=e(this);if(t.ctrlKey||t.metaKey||s.addClass("selected"),t.shiftKey||s.addClass("first"),t.ctrlKey||t.metaKey||t.shiftKey||s.siblings().removeClass("selected first"),(t.ctrlKey||t.metaKey)&&(s.is(".selected")?s.removeClass("selected first"):s.addClass("selected first"),s.siblings().removeClass("first")),t.shiftKey){var l=!1,o=!1;s.siblings().removeClass("selected").siblings(".first").addClass("selected"),s.prevAll().each(function(){e(this).is(".first")&&(l=!0)}),s.nextAll().each(function(){e(this).is(".first")&&(o=!0)}),l&&s.prevAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),o&&s.nextAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),1==a.filter(".selected").length&&s.addClass("first")}f.prop("selected",!1),a.filter(".selected").each(function(){var t=e(this),s=t.index();t.is(".option")&&(s-=t.prevAll(".optgroup").length),f.eq(s).prop("selected",!0)}),i.change()}),f.each(function(t){e(this).data("optionIndex",t)}),i.on("change.styler",function(){a.removeClass("selected");var t=[];f.filter(":selected").each(function(){t.push(e(this).data("optionIndex"))}),a.not(".optgroup").filter(function(s){return e.inArray(s,t)>-1}).addClass("selected")}).on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}),c>l.height()&&i.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected").position().top-u),40!=e.which&&39!=e.which&&34!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected:last").position().top-o.innerHeight()+2*u)}))}var f=e("option",i),h="";if(i.is("[multiple]")){if(a||o)return;c()}else n()};f(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),f()})}else i.is(":reset")&&i.on("click",function(){setTimeout(function(){i.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var t=e(this.element);t.is(":checkbox")||t.is(":radio")?(t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove(),t.closest("label").add('label[for="'+t.attr("id")+'"]').off(".styler")):t.is('input[type="number"]')?t.removeData("_"+i).off(".styler refresh").closest(".jq-number").before(t).remove():(t.is(":file")||t.is("select"))&&t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove()}},e.fn[i]=function(s){var l=arguments;if(void 0===s||"object"==typeof s)return this.each(function(){e.data(this,"_"+i)||e.data(this,"_"+i,new t(this,s))}).promise().done(function(){var t=e(this[0]).data("_"+i);t&&t.options.onFormStyled.call()}),this;if("string"==typeof s&&"_"!==s[0]&&"init"!==s){var o;return this.each(function(){var a=e.data(this,"_"+i);a instanceof t&&"function"==typeof a[s]&&(o=a[s].apply(a,Array.prototype.slice.call(l,1)))}),void 0!==o?o:this}},s.registered=!1});




!function(e){var s;e.fn.slinky=function(a){var t=e.extend({label:"Back",title:!1,speed:300,resize:!0,activeClass:"active",headerClass:"header",headingTag:"<h2>",backFirst:!1},a),i=e(this),n=i.children().first();i.addClass("slinky-menu");var l=function(e,s){var a=Math.round(parseInt(n.get(0).style.left))||0;n.css("left",a-100*e+"%"),"function"==typeof s&&setTimeout(s,t.speed)},r=function(e){i.height(e.outerHeight())},d=function(e){i.css("transition-duration",e+"ms"),n.css("transition-duration",e+"ms")};if(d(t.speed),e("a + ul",i).prev().addClass("next"),e("li > ul",i).prepend('<li class="'+t.headerClass+'">'),t.title===!0&&e("li > ul",i).each(function(){var s=e(this).parent().find("a").first().text(),a=e(t.headingTag).text(s);e("> ."+t.headerClass,this).append(a)}),t.title||t.label!==!0){var c=e("<a>").text(t.label).prop("href","#").addClass("back");t.backFirst?e("."+t.headerClass,i).prepend(c):e("."+t.headerClass,i).append(c)}else e("li > ul",i).each(function(){var s=e(this).parent().find("a").first().text(),a=e("<a>").text(s).prop("href","#").addClass("back");t.backFirst?e("> ."+t.headerClass,this).prepend(a):e("> ."+t.headerClass,this).append(a)});e("a",i).on("click",function(a){if(s+t.speed>Date.now())return!1;s=Date.now();var n=e(this);(/\B#/.test(this.href)||n.hasClass("next")||n.hasClass("back"))&&a.preventDefault(),n.hasClass("next")?(i.find("."+t.activeClass).removeClass(t.activeClass),n.next().show().addClass(t.activeClass),l(1),t.resize&&r(n.next())):n.hasClass("back")&&(l(-1,function(){i.find("."+t.activeClass).removeClass(t.activeClass),n.parent().parent().hide().parentsUntil(i,"ul").first().addClass(t.activeClass)}),t.resize&&r(n.parent().parent().parentsUntil(i,"ul")))}),this.jump=function(s,a){s=e(s);var n=i.find("."+t.activeClass);n=n.length>0?n.parentsUntil(i,"ul").length:0,i.find("ul").removeClass(t.activeClass).hide();var c=s.parentsUntil(i,"ul");c.show(),s.show().addClass(t.activeClass),a===!1&&d(0),l(c.length-n),t.resize&&r(s),a===!1&&d(t.speed)},this.home=function(s){s===!1&&d(0);var a=i.find("."+t.activeClass),n=a.parentsUntil(i,"li").length;n>0&&(l(-n,function(){a.removeClass(t.activeClass)}),t.resize&&r(e(a.parentsUntil(i,"li").get(n-1)).parent())),s===!1&&d(t.speed)},this.destroy=function(){e("."+t.headerClass,i).remove(),e("a",i).removeClass("next").off("click"),i.removeClass("slinky-menu").css("transition-duration",""),n.css("transition-duration","")};var h=i.find("."+t.activeClass);return h.length>0&&(h.removeClass(t.activeClass),this.jump(h,!1)),this}}(jQuery);