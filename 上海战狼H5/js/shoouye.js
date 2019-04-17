$(function(){
//	固定导航
	$(document).on('scroll',function(){
		var scr=$(document).scrollTop();
		var wh=$(document).innerWidth();
		if(wh>767){
			if(scr>700){
				$('.gudingdaohang').show();
			}else{
				$('.gudingdaohang').hide();
			};
		}else{
			$('.gudingdaohang').show();
		}
	})
	
	var matop=$(".section_three>div").height();
	$(".section_three>div").mouseenter(function(){
		$(this).stop().children("div").css("background","rgba(34,83,120,0.7)")
		$(this).stop().children("div").children("div").animate({top: 120},200);
	}).mouseleave(function(){
		$(this).stop().children("div").css("background","rgba(34,83,120,0.1)")
		$(this).stop().children("div").children("div").animate({top: matop},200);
	})
	
	
	
	var matop2=$(".section_five>div>div").height();
	$(".section_five>div>div").mouseenter(function(){
		$(this).stop().children("div").css("background","rgba(34,83,120,0.7)")
		$(this).stop().children("div").children("div").animate({top: 120},200);
	}).mouseleave(function(){
		$(this).stop().children("div").css("background","rgba(34,83,120,0.1)")
		$(this).stop().children("div").children("div").animate({top: matop2},200);
	})
	
	var width=$(".section_qi>ul>li").width();
	$(".section_zhuce>div").eq(2).children("font").click(function(){
		$(".section_qi>ul").animate({left: -width},500);
		
	})
	$(".section_denglu>div").eq(2).children("font").click(function(){
		$(".section_qi>ul").animate({left:0},500);
		
	})
	
	
	
	
	
	
})