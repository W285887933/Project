$(function(){


	$("#city1").html(remote_ip_info["city"]);  //调试时在北京能正常显示 //9.23   23:50一直提示 remote_ip_info undefind
	$(".city_a").on("click",function(){
		$("#top_nav #main .city_a").css({border:"1px solid #3a9900",borderBottom:"none",height:"33px",zIndex:"3",background:"#fff",position:"relative"})
		$("#top_nav #city_d").css({display:"block",zIndex:"2"});
			$("#top_nav #city_d .dele").on("click",function(){ //当前城市框中的 删除按钮 点击是当前窗口进行隐藏
		$("#top_nav #main .city_a").css({border:"1px solid #f5f5f5",borderBottom:"none",background:"#f5f5f5",height:"31px"})
		$("#top_nav #city_d").css({display:"none"});
	});
	});
	$("#city_d .city_s").html(remote_ip_info["city"]);

		$("#ul_nav .account").hover(function() {       //我的账户的下拉菜单 鼠标事件显示和隐藏
		$("#ul_nav .account").css({border:"1px solid #3a9900",borderBottom:"none",height:"32px",background:"#fff",zIndex:"3",position:"relative"});
		$("#ul_nav .account #account_d").css({zIndex:2,display:"block"});
		$("#ul_nav .shoopcar").css({borderBottom:"1px solid #3a9900"});
	}, function() {
		/*$("#ul_nav .account").css({border:"1px solid #f5f5f5",height:"30px",borderBottom:"none",background:"#f5f5f5",borderTop:"none"});*/
		$("#ul_nav .account").css({border:"1px solid #f5f5f5",borderBottom:"none",height:"30px",background:"#f5f5f5",marginTop:"1px",position:"relative",lineHeight:"26px"});
		$("#ul_nav .account #account_d").css({display:"none"});
		$("#ul_nav .shoopcar").css({borderBottom:"none"});
	});
	$("#ul_nav .serve").hover(function() {    //客户服务的 下拉栏 显示隐藏
		$("#ul_nav .serve").css({border:"1px solid #3a9900",borderBottom:"none",hieght:"32px",background:"#fff"});
		$("#ul_nav .serve #serve_d").css({display:"block",zIndex:"2"});
	}, function() {
		$("#ul_nav .serve").css({border:"1px solid #f5f5f5",borderBottom:"none",hieght:"32px"});
		$("#ul_nav .serve #serve_d").css({display:"none"});
	});
	$("#logo #car").hover(function() {    //我的购物车  
		$("#logo #car").css({border:"1px solid #3a9900",borderBottom:"none",zIndex:"3",background:"#fff",height:"47px"});
		$("#logo #car #car_d").css({display:"block",zIndex:"8"});
		$("#logo #car em").css({background: "url('images/index.png') no-repeat -1px -35px"});
	}, function() {
		$("#logo #car").css({border:"1px solid #fff",borderBottom:"none",background:"#fff",height:"45px"});
		$("#logo #car #car_d").css({display:"none"});
		$("#logo #car em").css({background: "url('images/index.png') no-repeat -1px -40px"});
	});

		var _height = $(window).height()
	$("#rightcar").css({height:_height + "px"})
	$(window).resize(function(event) {
		var _height = $(window).height()	
	$("#rightcar").css({height:_height + "px"})
	});
	$("#rightcar .shoopcar1").hover(function() {
		$(this).css({backgroundColor:"#3da700"});
		$(this).children('.car1').css({backgroundPosition:"-179px -34px"});
		$(this).children('em').css({background:"#000"})
	}, function() {
		$(this).css({backgroundColor:"#000"});
		$(this).children('.car1').css({backgroundPosition:"-179px 0px"});
		$(this).children('em').css({background:"#3da700"})
	});
	

	$("#rightcar .blackcar .downcar").find('span').each(function(index, el) {
		$(el).hover(function() {
			$(this).children('div').css({display:"block"})				
		}, function() {
			$(this).children('div').css({display:"none"})
		});
	});
	$("#rightcar .blackcar .downcar .backtop").hover(function() {
			$(this).children('div').css({display:"block"})				
		}, function() {
			$(this).children('div').css({display:"none"})
		});

	$("#rightcar .blackcar .shoopcar1").on("click",function(){
		$(this).css({background:"#3da700"})
		if($("#rightcar").css("right") == "-310px" ){
			$("#rightcar").stop().animate({right:0}, 1000,function(){
				$("#rightcar #goodsarea").stop().animate({left:0}, 500);

				$("#rightcar #goodsarea .dele").on("click",function(){
					$("#rightcar").stop().animate({right:-310}, 1000)
				})
			});
		}else if($("#rightcar").css("right") == "0px"){
			$("#rightcar").stop().animate({right:-310}, 1000,function(){
				$("#rightcar #goodsarea").stop().animate({left:310}, 500);
			});
		}
		
	})










})

