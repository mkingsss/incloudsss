function s(){
$('body').t2s();
$.cookie('langchange', 's', { expires: 7, path: '/' });	
$('#langcn').show();
$('#langtw').hide();
console.log("设置为简体");
}
function t(){
$('body').s2t();
$.cookie('langchange', 't', { expires: 7, path: '/' });	
$('#langtw').show();
$('#langcn').hide();
console.log("设置为繁体");
}
function show_hot_title(hot_title_num){
            $(".more_hot_title1").click(function() {
 	         $(".hot_title ul li").hide(); 
			 var show_hot_title=0;
           
		    while(show_hot_title < hot_title_num){
            var num_hot_title=$(".hot_title ul li").length;
			var id_hot_title=Math.floor(Math.random()*num_hot_title);

			var showDiv=$(".hot_title ul li").eq(id_hot_title);

			if(showDiv.css("display")=="none"){
              showDiv.css("display","inline-block");
              show_hot_title++;

			}

		}
            });	
}


function hot_title(){
	$(".more_hot_title").show();
	if ($('body').width() < 500){
		  $(".hot_title ul li").hide();
		  		for (var i = 0; i < 30; i++) {
			  $(".hot_title ul li").eq(i).css("display","inline-block");
                 }
			 var hot_title_num="30";
          	 show_hot_title(hot_title_num);
			 }else if($('body').width() >= 500 & $('body').width() < 1024)
			 {
			$(".hot_title ul li").hide(); 
		  	for (var i = 0; i < 60; i++) {
			 $(".hot_title ul li").eq(i).css("display","inline-block");  
             } 
			 var hot_title_num="60";
          	show_hot_title(hot_title_num); 
			 }else{
			$(".hot_title ul li").hide(); 
			for (var i = 0; i < 120; i++) {
			 $(".hot_title ul li").eq(i).css("display","inline-block");  
             }
			 
			 }
            $(".more_hot_title2").click(function() {
            $(".hot_title ul li").css("display","inline-block");
			$(".more_hot_title").hide();
            });	

			
           
}



$(document).ready(function(){ 
hot_title();


$(".search_ico").click(function(){
$(".body_mask").height($("body").height());
$(".search_ico_mask").show();
$(".workshop").fadeIn();
	});
$(".search_ico_mask").click(function(){
$(".workshop").css("display","");
$(".search_ico_mask").hide();

	});


$(".index").click(function(){
window.location.href = "/"; 
	});
$(function() {
$("img.lazyload").lazyload({
	placeholder: lazyloadimg,
	effect: "fadeIn",
	threshold : 400,
	skip_invisible : false,
});
      });


var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
$(".lang").click(function(){
$(".zh_lang_s, .zh_lang_t").toggle();
});
$(".zh_lang_s").click(function(){
$(".zh_lang").hide();
s()
});
$(".zh_lang_t").click(function(){
$(".zh_lang").hide();
t()
});
if ($.cookie('langchange')==null || $.cookie('langchange')=="" || $.cookie('langchange')== undefined){
	if(lang == "zh-tw"){t();}else{s();}
}else{
	if($.cookie('langchange') == "t"){t();}else{s();}
}	  

if ($.cookie("msgbox")==null || $.cookie("msgbox")=="" || $.cookie("msgbox")== undefined){
	$(".msgbox").show();
	var clipboard = new ClipboardJS('.copy'); 
   clipboard.on('success', function(e) {
       $('.copy').text('复制成功');
	   $('.copy').css('background','#27a5d5');
	   $('.copy').css('border','1px solid #ff4baa');
   });

   clipboard.on('error', function(e) {
       $('.copy').text('复制失败,请手动复制');
   });
	$(".msgbox span,.close").click(function(){
    $(".msgbox").hide();
	});
	$.cookie("msgbox", "show", { expires: 1, path: "/" });	
	}

	//当滚动条的位置处于距顶部800像素以下时，跳转链接出现，否则消失
	$(function () {
		$(window).scroll(function(){
		if ($(window).scrollTop()>800){
		$("#back-to-top").fadeIn(500);
		}
		else
		{
		$("#back-to-top").fadeOut(500);
		}
		});
		//当点击跳转链接后，回到页面顶部位置
		$(".goTop").click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
		});
		}); 
function footer() {
    
    if (($(document.body).height()+80) < $(window).height()){
		$(".footer").css("position","absolute")
	}else{
		$(".footer").css("position","relative")
	}
};

footer();
window.onresize = function (){
footer();
hot_title();

}

setTimeout(function(){
		
		footer();
		},100);
setTimeout(function(){
		
		footer();
		},3100);

  

}); 