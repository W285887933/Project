$(function(){
	ajax("get","../data/data.json","",function(data){
		  // 每日劲爆品 推荐品 我买特色的数据存放
		var obj1 = JSON.parse(data);
		var arr6 = obj1.goods;
		var arr4 = obj1.detail;
		var arr50 = obj1.footer;
		for(var i = 0; i < arr50.length; i++){
 		var div =  $('<div></div>').attr({id:"ft" + i}).css({width:"144px",height:"164px",marginRight:"70px",float:"left"});
 		if(i == 0){
 			div.css({marginLeft:"71px"})
 		}
 		div.appendTo($("#footer #main"));
 		if(i == 4 || i == 5){
 			div.css({width:"83px",height:"125px",marginTop:"10px"});
 			if(i == 4){
 				div.css({marginLeft:"-25px"})
 			}
 		}

 	}

 	addtext(arr50[0].new,$("#footer  #main #ft0"));
 	addtext(arr50[1].pay,$("#footer  #main #ft1"));
 	addtext(arr50[2].mation,$("#footer  #main #ft2"));
 	addtext(arr50[3].tips,$("#footer  #main #ft3"));
 	for(var i = 0; i < arr50[4].app.length; i++){
 		if(i == 0){
 			var h3 = $('<h3></h3>').html(arr50[4].app[i].title).css({color:"red",fontSize:"16px",height:"38px",fontWeight:"normal"});
 			h3.appendTo($("#footer #main #ft4")); 
 		}else{
 			var img = $('<img>').attr({src:arr50[4].app[i].src,title:arr50[4].app[i].title});
 			img.appendTo($("#footer #main #ft4"))
 		}
 	}
 		for(var i = 0; i < arr50[5].cheat.length; i++){
 		if(i == 0){
 			var h3 = $('<h3></h3>').html(arr50[5].cheat[i].title).css({color:"red",fontSize:"16px",height:"38px",fontWeight:"normal"});
 			h3.appendTo($("#footer #main #ft5")); 
 		}else{
 			var img = $('<img>').attr({src:arr50[5].cheat[i].src,title:arr50[5].cheat[i].title});
 			img.appendTo($("#footer #main #ft5"))
 		}
 	}

 	var view_pic = $('<div></div>').attr({id:"view_pic"}).css({width:"350px",height:"350px",border:"1px solid #ddd",position:"relative",float:"left"}).appendTo($("#view #main"));
 	var img_s = $('<img>').attr({id:"img_s",src:arr6[0].everday[5].src}).css({width:"350px",height:"350px"}).appendTo($("#view_pic"))
 	var a = $('<a></a>').attr({id:"view_big"}).css({display:"inline-block",width:"16px",height:"16px",background:"url(../images/index.png) no-repeat -69px -24px",position:"absolute",bottom:"1px",right:"1px",zIndex:"1"}).appendTo($("#view_pic"));
 	var glass = $('<div></div>').attr({id:"glass"}).css({width:"180px",height:"180px",position:"absolute",background:"#8cb91e",top:"20px",left:"20px",opacity:"0.4",border:"1px solid #418700"}).appendTo($("#view_pic"));
 	var big_pic = $('<div></div>').attr({id:"big_pic"}).css({width:"350px",height:"350px",bodrder:"1px solid #ddd",position:"absolute",left:"380px",top:"1px",display:"none"}).appendTo($("#view_pic"))
 	var goods_infor = $('<div></div>').attr({id:"goods_infor"}).css({width:"622px",height:"352px",marginLeft:"28px",float:"left"}).appendTo($("#view #main"))
 	var p_line = $('<div></div>').attr({id:"scrip"}).css({width:"622px",height:"87px",borderBottom:"1px dashed #ddd"}).appendTo($("#goods_infor"));
 	var h3_1 = $('<h3></h3>').html(arr6[0].everday[5].title).css({fontSize:"18px",fontWeight:"bold"}).appendTo($("#scrip"));
 	var p_line2 = $('<p></p>').html("此商品为特惠商品，部分卡券不可使用，详见券面说明。").css({fontSize:"12px",marginTop:"26px"}).appendTo($("#scrip"));
 	var price_div = $('<div></div>').attr({id:"price_div"}).css({width:"622px",height:"115px"}).appendTo($("#goods_infor"));
 	var p_price = $('<p><span></span><em></em></p>').attr({id:"p_price"}).css({height:"51px",lineHeight:"51px"}).appendTo($("#price_div"));
 	$("#p_price span").html("组合价");
 	$("#p_price em").html( "￥" + arr6[0].everday[5].price).css({color:"#f00",marginLeft:"30px"});
 	$('<div id = "mount"><span>数量:</span><div class = "num"><input type="text" value = "1"><span class = "add"></span><span class = "reduce"></span></div><button class = "putcar"></button><span class = "code"><div><img src = "../images/code.png"></div></span><span class = "coloect"><em></em>收藏宝贝</span></div>').css({height:"64px",lineHeight:"64px"}).appendTo($("#price_div"));
 	$("#mount").children().css({float:"left"});
 	$("#mount .num").css({width:"81px",height:"49px",position:"relative",marginLeft:"30px"});
 	$("#mount .num input").css({float:"left",width:"49px",height:"47px",border:"1px soild #eee",borderRight:"none",background:"#dedede",textAlign:"center",color:"#9e9e9e",marginLeft:"5px"})
 	$("#mount .num span").css({width:"31px",height:"25px",background:"url(../images/detail_btn.png)",position:"absolute",cursor:"pointer"});
 	$("#mount .num .add").css({right:"0",top:"0",backgroundPosition:"-16px -158px"});
 	$("#mount .num .add").hover(function() {
 		$(this).css({backgroundPosition:"-16px -186px"})
 	}, function() {
 		$(this).css({backgroundPosition:"-16px -158px"})
 	});
 	$("#mount .num .add").on("click",function(){
 		$("#mount .num input").val(Number($("#mount .num input").val()) + 1)
 	})
 	$("#mount .num .reduce").css({right:"0",top:"25px",backgroundPosition:"-50px -158px"});
 	$("#mount .num .reduce").hover(function() {
 		$(this).css({backgroundPosition:"-50px -186px"})
 	}, function() {
 		$(this).css({backgroundPosition:"-50px -158px"})
 	});
 	$("#mount .num .reduce").on("click",function(){
 		if($("#mount .num input").val() > 1){
 			$("#mount .num input").val(Number($("#mount .num input").val()) -1)
 		}
 	});
 	$("#mount .putcar").css({dispaly:"inline-block",width:"157px",height:"52px",marginLeft:"10px",background:"url(../images/detail_btn.png) no-repeat -15px -217px",border:"none",cursor:"pointer"}).attr({index:arr6[0].everday[5]._index});
 	$("#mount .putcar").on("click",function(){
				//alert($(this).attr("index"))
				var index = null;
				index = $(this).attr("index");
				var first = $.cookie("goodsindex") == null?true : false;
				var same = false;
				if(first){
					$.cookie("goodsindex",'[{index:' + index + ',num:1}]');
					
					$.cookie("first","false");
				}else{
					var str = $.cookie("goodsindex");
					var arr = eval(str);
					//alert(document.cookie)
					for(var i in arr){
						if(arr[i].index == index){
							arr[i].num = arr[i].num + 1;
							var strNum = JSON.stringify(arr);
							$.cookie("goodsindex",strNum);
							same = true;
						}
					}
						if(!same){
						var obj = {index:index,num:1};
						arr.push(obj);
						var strNot = JSON.stringify(arr);
						$.cookie("goodsindex",strNot);
						
					}
				}
				goodsNum();
				cachegoods();
		
 	
 	})
 	$("#mount .code").css({cursor:"pointer",width:"90px",height:"45px",marginLeft:"10px",background:"url(../images/vma.png) no-repeat 0 -187px",position:"relative"})
 	$("#mount .code").on("click",function(){
 		if($(this).children().css("display") == "none"){
 			$(this).children().css({display:"block"});
 		}else{
 			$(this).children().css({display:"none"});
 		}
 	})
 	$("#mount .code div").css({position:"absolute",width:"150px",height:"170px",top:"50px",right:"0px",display:"none"});
 	$("#mount .coloect").css({marginLeft:"10px"});
 	$("#mount .coloect em").css({display:"inline-block",width:"12px",height:"10px",background:"url(../images/detail_btn.png) no-repeat -220px -38px",margin:"0 3px"})
 	$('<div id = "view_more"><span class = "left"></span><span class = "right"></span><ul id = "view_ul"><li><img src="http://pic2.womai.com/upload/601/603/606/66102/66104/10107647/10107647_1_pic500_7254.jpg" alt="" /></li></ul></div>').appendTo($("#view #main")).css({width:"352px",height:"60px",float:"left",position:"relative",marginTop:"10px"});
 	$("#view_more #view_ul li img").css({width:"50px",height:"50px"});
 	$("#view_more .left").css({position:"absolute",left:"0",width:"13px",height:"55px",background:"url(../images/detail_btn.png) no-repeat 0 -165px"});
	$("#view_more .right").css({position:"absolute",right:"0",width:"13px",height:"55px",background:"url(../images/detail_btn.png) no-repeat 0 0px"})
	$("#view_more #view_ul").css({position:"absolute",left:"15px"});
	$("#view_more #view_ul li").css({border:"1px solid #8cb91e"});
	$('<div><p class = "groop_1">组合套餐明细：</p><div class = "descrip"><img src="http://pic1.womai.com/upload/601/603/606/201600/201604/202998/551955/551955_1_pic60_6463.jpg"/><p>【自营】UFC牌100%纯椰子水 1000g（泰国进口 盒）/× 2</p><span class = "line"></span></div></div>').attr({id:"group"}).css({width:"613px",height:"135px"}).appendTo($("#goods_infor"))
	$("#group .groop_1").css({height:"30px",width:"618px",background:"#b5ce83",textIndent:"10px",lineHeight:"30px"})
	$("#group .descrip").css({width:"600px",height:"105px",border:"9px solid #b5ce83",borderTop:"none"})
	$("#group .descrip img").css({float:"left",marginTop:"7px",marginLeft:"5px",width:"60px",height:"60px",border:"1px solid #aaa"});
	$("#group .descrip p").css({float:"left",width:"205px",marginLeft:"5px",height:"55px",borderRight:"1px dashed #aaa",paddingTop:"16px"});

	 	function addtext(arr,node){
	 		for(var i = 0; i <arr.length; i++){
		 		if(i == 0){
		 			var h3 = $('<h3></h3>').html(arr[i].title).css({fontWeight:"16px",height:"38px",lineHeight:"38px",fontWeight:"bold"});
		 			h3.hover(function() {
		 				$(this).css({color:"#8cb91e",textDecoration:"underline"});
		 			}, function() {
		 				$(this).css({color:"#606060",textDecoration:"none"});
		 			});
		 			h3.appendTo(node);
		 		}else{
		 			var p = $('<p></p>').html(arr[i].title).css({height:"24px",lineHeight:"24px",fontSize:"12px",color:"#98989"});
		 			p.hover(function() {
		 				$(this).css({color:"#8cb91e",textDecoration:"underline"});
		 			}, function() {
		 				$(this).css({color:"#606060",textDecoration:"none"});
		 			});
		 			p.appendTo(node)
		 		}
	 		}
	 	} 

	 	cachegoods();
		function cachegoods(){
			var cache = $.cookie("goodsindex");
			//alert(document.cookie);
			if(cache){
				var cache_obj = eval(cache);
				$("#rightcar #goodsarea .paymoney .amount em").html(cache_obj.length).css({color:"#f00",margin:"0 5px"});
				for(var i = 0; i < cache_obj.length; i++){
					for(var k = 0; k < arr6[0].everday.length; k ++){
						if(cache_obj[i].index == arr6[0].everday[k]._index){
							var img = $('<img>').attr({src:arr6[0].everday[k].src,title:arr6[0].everday[k].title}).css({width:"60px",height:"60px",float:"left"});
							var p = $('<p></p>').html(arr6[0].everday[k].title).css({height:"30px",lineHeight:"30px",fontSize:"12px",color:"#000",float:"left",width:"212px",overflow:"hidden"});
							var span = $('<span></span>').html(arr6[0].everday[k].price + "X" + cache_obj[i].num).css({float:"left",marginLeft:"5px",color:"#f00"});
							var button = $("<button></button>").html("删除").css({float:"right",marginRight:"10px"}).attr({index:arr6[0].everday[k]._index});
							var div = $('<div></div>');
							$("#rightcar #goodsarea .paymoney .money i").html(mount).css({color:"#f00",margin:"0 5px"});
							img.appendTo(div);
							p.appendTo(div);
							span.appendTo(div);
							button.appendTo(div);
								div.delegate('button', 'click', function(event) {
							$(this).parent().remove();
			
								var cache = $.cookie("goodsindex");
								var cache_obj = eval(cache);
							//$(this).parent().remove();
								for(var j = 0; j < cache_obj.length; j++){
									if($(this).attr("index") == cache_obj[j].index){
										$("#logo #main #car span  i").html(($("#logo #main #car span  i").html()) - cache_obj[j].num);
										$("#rightcar .blackcar .shoopcar1 .number").html(($("#rightcar .blackcar .shoopcar1 .number").html()) - cache_obj[j].num);
										$("#ul_nav .shoopcar a i").html($("#ul_nav .shoopcar a i").html() - cache_obj[j].num);
										if($("#logo #main #car span  i").html() <= 0){
											$("#logo #main #car span  i").html("0")
										}
										if($("#rightcar .blackcar .shoopcar1 .number").html() <= 0){
											$("#rightcar .blackcar .shoopcar1 .number").html("0")
										}
										if($("#ul_nav .shoopcar a i").html() <= 0){
											$("#ul_nav .shoopcar a i").html("0")
										}
										var newcache = cache_obj.splice(j,1);
										var newStr = JSON.stringify(newcache);
										$.cookie("goodsindex",newStr);
									}
								}
				
						});
							div.appendTo($("#rightcar #goodsarea #buygoods")).css({height:"60px",width:"100%",marginTop:"10px"});
							div.clone(true,true).css({height:"60px",width:"100%",marginTop:"10px"}).appendTo($("#logo #main #car #car_d"))
							//div.appendTo($("#logo #main #car #car_d")).css({height:"60px",width:"100%",marginTop:"10px"});
							var mount = 0;
							mount += (cache_obj[i].num * parseInt(arr6[0].everday[k].price));
						}
					}	
				}
			}
		}
			goodsNum();
			function goodsNum(){
				var car_num = 0;
				var car_str = $.cookie("goodsindex");
				if(car_str){
					var car_obj = eval(car_str);
					for(var i in car_obj){
						car_num = Number(car_obj[i].num) + car_num;
					}
					$("#logo #main #car span  i").html(car_num);
					$("#rightcar .blackcar .shoopcar1 .number").html(car_num);
					$("#ul_nav .shoopcar a i").html(car_num);
				}
			}

	});
	var tag = null;
		var i = 0;
	function loop(){
		$("#loop_pic .loop_ul").find('li').each(function(index, el) {
		$(this).hover(function() {
			clearInterval(tag);
			$(this).css({background:"url(../images/expert_tit.png) no-repeat -810px 0px"})
			$("#loop_pic .loop_img").find('li').css({display:"none"})
			$("#loop_pic .loop_img").find('li').eq($(this).index()).css({display:"block"})
			i = $(this).index();
		}, function() {
			tag = setInterval(play,1000);
		function play(){
			i++;
			show();
		}
			$(this).css({background:"url(../images/expert_tit.png) no-repeat -720px 0px"})
			$("#loop_pic .loop_img").find('li').eq($(this).index()).css({display:"none"})
			$("#loop_pic .loop_img").find('li').eq($(this).index()).css({display:"block"})
		});	
	});	
	}
	



	
	show()
		function show(){
			$("#loop_pic .loop_ul").find('li').css({background:"url(../images/expert_tit.png) no-repeat -720px 0px"});
			$("#loop_pic .loop_ul").find('li').eq(i).css({background:"url(../images/expert_tit.png) no-repeat -810px 0px"});
			$("#loop_pic .loop_img").find('li').css({display:"none"})
			$("#loop_pic .loop_img").find('li').eq(i).css({display:"block"});
		
				if(i == 7){
					i = 0;
				}
		}
	loop();	
		tag = setInterval(play,1000);
		function play(){
			i++;
			show();
		}







})