$(function(){
	$("#top").stop().animate({top:-500},1500,function(){
		$("#top").stop().animate({top:-400}, 800)
	});

	ajax("get","data/data.json","",function(data){
		var obj = JSON.parse(data);
		var arr = obj.top_bg;  //arr1中存放的是 顶部的两张图片
		var arr1 = obj.banner_bg; // arr1中存放的是 banner图
		var arr2 = obj.floor_mation; //arr2中存放的是 banner中菜单栏的数据
		var arr3 = obj.menu[0];   //侧拉菜单的全部物品数据
		var arr4 = obj.news[0];	//新闻消息  服务公告的信息
		var arr5 = obj.img_src; //充值 积分商城 周边服务栏的图片
 		var arr6 = obj.goods;  // 每日劲爆品 推荐品 我买特色的数据存放
 		var arr7 = obj.floor_data;   //// 楼层数据存放的数组
 		var arr10 = obj.floor_data;
 		var arr11 = arr10[1].floor_2[2].floor_2_right[0].left;
 		var arr12 = arr10[1].floor_2[2].floor_2_right[1].right;
 		var arr13 = arr10[2].floor_3[2].floor_3_right[0].left;
 		var arr14 = arr10[2].floor_3[2].floor_3_right[1].right;
 		//alert(arr7[0].floor_1.length) // 3
 		var arr8 = arr7[0].floor_1[2].floor_1_right[0].left;
 		var arr9 = arr7[0].floor_1[2].floor_1_right[1].right;
 		var arr15 = obj.bonttom_floor;//4楼底层数据
 		var arr16 = arr15[2].center1;
 		var arr17 = arr15[4].right;
 		var arr18 = obj.summary;
 		var arr19 = obj.footer;

 		

 		
		//顶部的img标签 一大一小 创建并插入相对应的节点(#top_big  #top_small)中
		$('<img>').attr({src:arr[0].bigSrc,alt:arr[0].title}).appendTo($('<a></a>').attr({href:arr[0].link,target:arr[0].target}).appendTo($('<div></div>').attr("id","top_big").appendTo($("#top"))));
		$('<img>').attr({src:arr[0].smallSrc,alt:arr[0].title}).appendTo($('<a></a>').attr({href:arr[0].link,target:arr[0].target}).appendTo($('<div></div>').attr("id","top_small").appendTo($("#top"))));
		//创建ul标签 用于存放banner图片  进行轮播图的制作
		var bUl = $('<ul></ul>').attr("id","banner_ul").css({zIndex:"1",position:"relative"});
		bUl.appendTo($("#banner"));
		//创建ol 标签 类似于选项卡与轮播图的img标签相对应  进行手动轮播
		var bol = $('<ol></ol>').attr("id","banner_ol").css({zIndex:"3",position: "absolute",top:"415px",left:"510px"});
		bol.appendTo($("#banner #main"));
		//两个左右按钮实现手动轮播
		var move_left = $('<div></div>').attr("id","move_left").css({position:"absolute",top:"194px",left:"210px",width:"28px",height:"62px",background:"url(images/btn.png) no-repeat 0 0",zIndex:"3",fontSize:"20px",color:"#fff",lineHeight:"62px",textAlign:"center",cursor:"pointer"}).html("&lt");
		var move_right = $('<div></div>').attr("id","move_right").css({position:"absolute",top:"194px",right:"200px",width:"28px",height:"62px",background:"url(images/btn.png) no-repeat 0 0",zIndex:"3",fontSize:"20px",color:"#fff",lineHeight:"62px",textAlign:"center",cursor:"pointer"}).html("&gt");
		move_left.appendTo($("#banner #main"));
		move_right.appendTo($("#banner #main"));
		//对数组arr1(轮播图的路径)进行循环 创建li 和 img a 标签
		for(var i = 0; i < arr1.length ; i++){
			var bimg = $('<img>').attr({src:arr1[i].src,alt:arr1[i].title}).css({height:"450px",width:"800px",margin:"0 auto"});
			var ba = $('<a></a>').attr({href:arr1[i].link,target:arr1[i].target});
			var bli = $('<li></li>').css({background:arr1[i].color,position:"absolute",display:"none"});
			
				var oli = $('<li></li>').css({width:"15px",height:"15px",background:"url('images/b_icon.png') no-repeat 0 0",float: "left",marginRight:"10px",cursor:"pointer"});
				oli.appendTo(bol);
			
		
			if(i == 0){
				bli.css({display:"block"})
				oli.css({background:"url('images/b_icon.png') no-repeat -16px 0"})
			}
			bimg.appendTo(ba.appendTo(bli.appendTo($("#banner_ul"))));

		}
		//对数组arr2进行循环 创建li a 标签  banner导航栏的建立
		var ful = $('<ul></ul>').attr("id","floor_ul").appendTo($("#banner_left"));
		for(var i = 0; i < arr2.length; i++){			
			var fla1 = $('<a></a>').html(arr2[i].kind).attr("href","#").css({color:"#fff",fontSize:"14px"});
			var fla2 = $('<a></a>').html(arr2[i].kind_1).attr("href","#").css({color:"#fff",fontSize:"14px"});
			var fspan = $('<span>').css({display:"inline-block",width:"16px",height:"13px"});
			var fli = $('<li></li>').attr("class","fl" + i).css({height:"39px",width:"210px",background:"#3ea600",lineHeight:"39px"});

			var fDiv = $('<div></div>').attr("id","fDiv" + i).css({position:"absolute",width:"787px",height:"449px",background:"#fff",zIndex:"5",border:"1px solid #3a9900",borderTop:"none",borderLeft:"none",display:"none"});
			fspan.appendTo(fli);
			fla1.appendTo(fli);
			fla2.appendTo(fli);
			fli.appendTo($("#floor_ul"));
			fDiv.appendTo($("#banner #banner_center"));
		}
		for(var i = 1;i <= 68; i++){
			var ul = $('<ul></ul>').attr({class:"ful_" + i}).css({height:"45px"});
			if( i == 1 || i == 10 || i == 12){
				ul.css({marginTop:"27px"});
			}
			if(i >= 1 && i <= 9){
				ul.appendTo($("#fDiv0"));
			}else if( i >= 10 && i <= 11){
				ul.appendTo($("#fDiv1"));
			}else if( i >= 12 && i <= 20){
				ul.appendTo($("#fDiv2"));
			}else if( i >= 21 && i <= 29){
				ul.appendTo($("#fDiv3"));
			}else if(i >= 30 && i <= 36){
				ul.appendTo($("#fDiv4"));
			}else if( i >= 37 && i <= 41){
				ul.appendTo($("#fDiv5"));
			}else if(i >= 42 && i <= 48){
				ul.appendTo($("#fDiv6"));
			}else if(i >= 49 && i <= 57){
				ul.appendTo($("#fDiv7"));
			}else if( i >= 58 && i <= 60){
				ul.appendTo($("#fDiv8"));
			}else if(i >= 61 && i <= 67){
				ul.appendTo($("#fDiv9"));
			}else{
				ul.appendTo($("#fDiv10"));
			}
		}
		addinfor(arr3.of1,$("#fDiv0 .ful_1")); //第一页
		addinfor(arr3.of2,$("#fDiv0 .ful_2"));
		addinfor(arr3.of3,$("#fDiv0 .ful_3"));
		addinfor(arr3.of4,$("#fDiv0 .ful_4"));
		addinfor(arr3.of5,$("#fDiv0 .ful_5"));
		addinfor(arr3.of6,$("#fDiv0 .ful_6"));
		addinfor(arr3.of7,$("#fDiv0 .ful_7"));
		addinfor(arr3.of8,$("#fDiv0 .ful_8"));
		addinfor(arr3.of9,$("#fDiv0 .ful_9"));

		addinfor(arr3.of10,$("#fDiv1 .ful_10"));//第二页
		addinfor(arr3.of11,$("#fDiv1 .ful_11"));

		addinfor(arr3.of12,$("#fDiv2 .ful_12"));//第三页
		addinfor(arr3.of13,$("#fDiv2 .ful_13"));
		addinfor(arr3.of14,$("#fDiv2 .ful_14"));
		addinfor(arr3.of15,$("#fDiv2 .ful_15"));
		addinfor(arr3.of16,$("#fDiv2 .ful_16"));
		addinfor(arr3.of17,$("#fDiv2 .ful_17"));
		addinfor(arr3.of18,$("#fDiv2 .ful_18"));
		addinfor(arr3.of19,$("#fDiv2 .ful_19"));
		addinfor(arr3.of20,$("#fDiv2 .ful_20"));	

		addinfor(arr3.of21,$("#fDiv3 .ful_21"));//第四页
		addinfor(arr3.of22,$("#fDiv3 .ful_22"));
		addinfor(arr3.of23,$("#fDiv3 .ful_24"));
		addinfor(arr3.of24,$("#fDiv3 .ful_24"));
		addinfor(arr3.of25,$("#fDiv3 .ful_25"));
		addinfor(arr3.of26,$("#fDiv3 .ful_26"));
		addinfor(arr3.of27,$("#fDiv3 .ful_27"));
		addinfor(arr3.of28,$("#fDiv3 .ful_28"));
		addinfor(arr3.of29,$("#fDiv3 .ful_29"));

		addinfor(arr3.of30,$("#fDiv4 .ful_30"));//第五页
		addinfor(arr3.of31,$("#fDiv4 .ful_31"));
		addinfor(arr3.of32,$("#fDiv4 .ful_32"));
		addinfor(arr3.of33,$("#fDiv4 .ful_33"));
		addinfor(arr3.of34,$("#fDiv4 .ful_34"));
		addinfor(arr3.of35,$("#fDiv4 .ful_35"));
		addinfor(arr3.of36,$("#fDiv4 .ful_36"));

		addinfor(arr3.of37,$("#fDiv5 .ful_37"));//第六页
		addinfor(arr3.of38,$("#fDiv5 .ful_38"));
		addinfor(arr3.of39,$("#fDiv5 .ful_39"));
		addinfor(arr3.of40,$("#fDiv5 .ful_40"));
		addinfor(arr3.of41,$("#fDiv5 .ful_41"));

		addinfor(arr3.of42,$("#fDiv6 .ful_42"));//第七页
		addinfor(arr3.of43,$("#fDiv6 .ful_43"));
		addinfor(arr3.of44,$("#fDiv6 .ful_44"));
		addinfor(arr3.of45,$("#fDiv6 .ful_45"));
		addinfor(arr3.of46,$("#fDiv6 .ful_46"));
		addinfor(arr3.of47,$("#fDiv6 .ful_47"));
		addinfor(arr3.of48,$("#fDiv6 .ful_48"));

		addinfor(arr3.of49,$("#fDiv7 .ful_49"));//第八页
		addinfor(arr3.of50,$("#fDiv7 .ful_50"));
		addinfor(arr3.of51,$("#fDiv7 .ful_51"));
		addinfor(arr3.of52,$("#fDiv7 .ful_52"));
		addinfor(arr3.of53,$("#fDiv7 .ful_53"));
		addinfor(arr3.of54,$("#fDiv7 .ful_54"));
		addinfor(arr3.of55,$("#fDiv7 .ful_55"));
		addinfor(arr3.of56,$("#fDiv7 .ful_56"));
		addinfor(arr3.of57,$("#fDiv2 .ful_57"));

		addinfor(arr3.of58,$("#fDiv8 .ful_58"));//第九页
		addinfor(arr3.of59,$("#fDiv8 .ful_59"));
		addinfor(arr3.of60,$("#fDiv8 .ful_60"));

		addinfor(arr3.of61,$("#fDiv9 .ful_61"));//第十页
		addinfor(arr3.of62,$("#fDiv9 .ful_62"));
		addinfor(arr3.of63,$("#fDiv9 .ful_63"));
		addinfor(arr3.of64,$("#fDiv9 .ful_64"));
		addinfor(arr3.of65,$("#fDiv9 .ful_65"));
		addinfor(arr3.of66,$("#fDiv9 .ful_66"));
		addinfor(arr3.of67,$("#fDiv9 .ful_67"));


		addinfor(arr3.of68,$("#fDiv10 .ful_68"));//第十一页
	

		function addinfor(arr,node){
				for(var i = 0; i < arr.length; i++){
			if(i == 0){
				var h4 = $('<li></li>').css({float:"left",width:"72px",height:"44px",marginLeft:"49px"});
				var a =$('<a></a>').html(arr[i].title).css({lineHeight:"44px",fontSize:"12px",fontWeight:"bold"}); 
				var q = $('<i></i>').html(arr[i].bg).css({marginLeft:"6px"});
					a.hover(function() {
						$(this).css("color","#3ea600");
					}, function() {
						$(this).css("color","#606060");
					});
				a.appendTo(h4);
				q.appendTo(h4);
				h4.appendTo(node);
			}else{
			var f0a = $('<a></a>').html(arr[i].title).attr({href:"#",_index:i}).css({padding:"0 14px 0 11px",borderLeft:"1px solid #dedede",color:"#606060",fontSize:"12px"}).css("color",arr[i].color);
			var f0li = $('<li></li>').css({float:"left",height:"44px",borderBottom:"1px solid #dedede",lineHeight:"44px"});
				f0a.hover(function() {
						$(this).css({color:"#3ea600"});
					}, function() {
						$(this).css("color","#606060");
						$(this).css("color",arr[$(this).attr("_index")].color);
					});
			f0a.appendTo(f0li.appendTo(node))
			}			 
		}
		}

	var p = $('<p></p>').attr("id","p_btn").css({height:"29px",width:"198px"});
	p.appendTo($("#banner_right"));//创建三个button按钮用于新闻的Tab切换
	for(var i = 0; i < 3; i++){//创建三个div用于存放相应的 信息文字
		var txt_div = $('<div></div>').attr({id:"txt_div" + i,_index:i}).css({width:"198px",height:"85px",borderBottom:"1px solid #ddd",position:"absolute",top:"31px",display:"none"});
		var a = $('<a></a>').attr("class","br_a" + i).attr("_index",i).css({display:"inline-block",width:"66px",height:"29px",lineHeight:"29px",textAlign:"center",borderBottom:"2px solid #f7f7f7",background:"#f7f7f7",float:"left"});
		var ul = $('<ul></ul>').attr("class","br_ul" + i);
		a.appendTo($("#p_btn"));
		txt_div.appendTo($("#banner_right"));
	
		for(var j = 0; j < 3; j++){	//创建三个 ul li 放文字		
			var ali = $('<a></a>').attr("class","new_b" + j).css({fontSize:"12px"});
			var li = $('<li></li>').css({listStyle:"square",listStylePosition:"inside",textIndent:"15px",height:"22px",lineHeight:"22px",color:"#606060",width:"150px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"});
			ali.appendTo(li);
			li.appendTo(ul);
			if(i == 0){
				txt_div.css("display","block");

				a.html(arr4.head[i].title).css({borderBottom:"2px solid #2d8800",background:"#fff"});
				ul.appendTo($("#banner_right #txt_div0"));
				if(j == 0){
					li.css({marginTop:"10px"});
					ali.html(arr4.news[0].title);
				}else if(j == 1){
					ali.html(arr4.news[1].title);
				}else{
					ali.html(arr4.news[2].title);
				}
			}else if( i == 1){
				a.html(arr4.head[i].title);
				ul.appendTo($("#banner_right #txt_div1"));
				if( j == 0){
					li.css({marginTop:"10px"});
					ali.html(arr4.news[3].title); //对应的li里面有相对应的新闻文字
				}else if(j == 1){
					ali.html(arr4.news[4].title);
				}else{
					ali.html(arr4.news[5].title);
				}
			}else{
				a.html(arr4.head[i].title);
				ul.appendTo($("#banner_right #txt_div2"));
				if(j == 0){
					li.css({marginTop:"10px"});
					ali.html(arr4.news[6].title);
				}else if(j == 1){
					ali.html(arr4.news[7].title);
				}else{
					ali.html(arr4.news[8].title);
				}
			}
		}				
	}
	var img_div = $('<p></p>').attr("id","img_div").css({width:"198px",height:"183px",marginTop:"85px"});
	img_div.appendTo($("#banner_right"))
	for(var i = 0; i < arr5.length; i++){//周边信息的图片 覆盖时会有透明度的效果
		var a = $('<a></a>').attr({href:arr5[i].link,target:arr5[i].target});
		var img = $('<img>').attr({src:arr5[i].src,title:arr5[i].title}).css({borderBottom:"1px dashed #ddd",borderRight:"1px dashed #ddd"});
		img.appendTo(a);
		a.appendTo($("#img_div"));
		img.hover(function() {
			$(this).fadeTo('slow/400/fast', 0.7, function() {
				
			});
		}, function() {
			$(this).fadeTo('slow/400/fast', 1, function() {
				
			});
		});
		if(i == arr5.length - 1){
			img.css({border:"none",width:"198px"}).appendTo(a);
			a.appendTo($("#banner_right"));
		}
	}

	
	for(var i = 0; i < arr6[0].everday.length; i++){///每日劲爆品推荐 简单的轮播图片 图片有中心放大的效果	
		if(i == 0){									//
			$('<img>').attr({src:arr6[0].everday[i].src,title:arr6[0].everday.title}).css({marginLeft:"24px"}).appendTo($('<h4></h4>').html(arr6[0].everday[i].title).attr("id","guide0" + i + "_h4").css({borderBottom:"2px solid #4bae00",lineHeight:"44px",fontSize:"19px",color:"#383838"}).appendTo($("#guide0 #main")));			
		}else if(i == 1){
			var img = $('<img>').attr({src:arr6[0].everday[i].src,title:arr6[0].everday[i].title});
		  	var a = $('<a></a>').attr({href:arr6[0].everday[i].link,target:"_blank"});
		  	var div = $('<div>').attr("id","guide_head" + i).css({float:"left",width:"242px",height:"320px",position:"relative"}).appendTo($("#guide0 #main"));
			$('<img>').attr({src:"http://static.womai.com/zhongliang/city/common/images/animation.png"}).css({width:"240px",height:"320px"}).appendTo($('<div></div>').css({position:"absolute",left:"-242px",display:"none",overflow:"hidden"}).appendTo(div));
			div.hover(function() {
				$(this).find("div").eq(0).css({display:"block"}).stop().animate({left:"242px"}, 300)
			}, function() {
				$(this).find("div").eq(0).css({display:"none"}).stop().animate({left:"-242px"},300)
			});
			var div_1 = $('<div></div>').attr("id","gidue0_ul").css({overflow:"hidden",float:"left",width:"968px",height:"320px",background:"#f1f7f4",position:"relative"}).appendTo($("#guide0 #main"));
			var  ul = $('<ul></ul>').attr("id","ul_11").css({width:"1934px",position:"absolute",zIndex:"2"}).appendTo($("#guide0 #main #gidue0_ul"));
			var bt1 = $('<div></div>').attr({class:"g_le"}).css({width:"23px",height:"38px",background:"url(images/lr.png) no-repeat -5px 0px",position:"absolute",left:"0",top:"145px",zIndex:"3",textAlign:"center",cursor:"pointer",display:"none"}).appendTo($("#gidue0_ul"))
			var bt2 = $('<div></div>').attr({class:"g_ri"}).css({width:"23px",height:"38px",background:"url(images/lr.png) no-repeat -37px 0px",position:"absolute",right:"0",top:"145px",zIndex:"3",textAlign:"center",cursor:"pointer",display:"none"}).appendTo($("#gidue0_ul"))
		  	img.appendTo(a);
		  	a.appendTo(div);
		}else{
			var img = $('<img>').attr({src:arr6[0].everday[i].src,title:arr6[0].everday[i].title}).css({width:"200px",height:"180px"});
			img.hover(function() {
				$(this).stop().animate({width:"220px",height:"200px"}, 500);
				$(this).parent().parent().find('a').eq(1).css({color:"#3ea600",borderBottom:"1px solid #3ea600",height:"15px"})
			}, function() {
				$(this).stop().animate({width:"200px",height:"180px"}, 500);
				$(this).parent().parent().find('a').eq(1).css({color:"#383838",borderBottom:"none",height:"16px"})
			});
			var a_img =  $('<a></a>').attr({href:arr6[0].everday[i].link,target:"_blank"}).css({width:"220px",height:"200px",display:"block"});
			var a_text = $('<a></a>').html(arr6[0].everday[i].title).attr({href:arr6[0].everday[i].link,target:"_blank"}).css({display:"inline-block",fontSize:"16px",lineHeight:"16px",color:"#383838",width:"auto",overflow:"hidden",height:"16px",marginTop:"17px"}).attr({href:arr6[0].everday[i].link,target:"_blank"});
/*+++此处有问题+++*/			a_text.hover(function() {   //此处存在一个未解决的问题  当a标签写上 width with-space overflow：hidden时 a:hover text-decoration:underline没有效果
				$(this).css({color:"#3ea600",borderBottom:"1px solid #3ea600",height:"15px"})
			}, function() {
				$(this).css({color:"#383838",borderBottom:"none",height:"16px"})
			});
			var p = $('<a></a>').html(arr6[0].everday[i].des).css({display:"block",fontSize:"12px",lineHeight:"32px",color:"#606060"});
			p.hover(function() {
				$(this).css({color:"#8cb91e",textDecoration:"underline"});
			}, function() {
				$(this).css({color:"#606060",textDecoration:"none"});
			});
			var em = $('<span>').html(arr6[0].everday[i].price).css({fontSize:"18px",color:"#de0801",fontWeight:"bold",marginLeft:"-108px"});
			var btn = $('<a></a>').html(arr6[0].everday[i].look).attr({/*href:arr6[0].everday[i].link,*/target:"_blank",index:arr6[0].everday[i]._index}).css({background:"#ff870f",color:"#fff",display:"inline-block",width:"80px",height:"26px",fontSize:"12px",lineHeight:"26px",textAlign:"center",float:"right",cursor:"pointer"});
			btn.hover(function() {
				$(this).css({textDecoration:"underline"})
			}, function() {
				$(this).css({textDecoration:"none"})
			});
			/*====================================================COOKIE缓存=======================================================*/
			btn.on("click",function(){

				var url = "index/detail.html";
				//var arrJump = $.cookie("goodsindex");
				//url =  url + "?goodsindex=" + JSON.stringify(arrJump);
				open(url,"goodsindex");
				//$(this).attr({href:url});
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
			});
			/*==============================================购物车功能================================================*/
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
		/*=================================================购物车缓存物品信息===================================================*/
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
						//alert(cache_obj[i].index)
						
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
						// img.appendTo($("#rightcar #goodsarea #buygoods"))
						div.appendTo($("#rightcar #goodsarea #buygoods")).css({height:"60px",width:"100%",marginTop:"10px"});
						div.clone(true,true).css({height:"60px",width:"100%",marginTop:"10px"}).appendTo($("#logo #main #car #car_d"))
						/*div.appendTo($("#rightcar #goodsarea #buygoods")).css({height:"60px",width:"100%",marginTop:"10px"});*/
						
						var mount = 0;
						mount += (cache_obj[i].num * parseInt(arr6[0].everday[k].price));
						
							/*button.on("click",function(){
								var cache = $.cookie("goodsindex");
								var cache_obj = eval(cache);
							//$(this).parent().remove();
								for(var j = 0; j < cache_obj.length; j++){
									if($(this).attr("index") == cache_obj[j].index){
										$("#logo #main #car span  i").html(($("#logo #main #car span  i").html()) - cache_obj[j].num);
										$("#rightcar .blackcar .shoopcar1 .number").html(($("#rightcar .blackcar .shoopcar1 .number").html()) - cache_obj[i].num);
										$("#ul_nav .shoopcar a i").html($("#ul_nav .shoopcar a i").html() - cache_obj[j].num);
										var newcache = cache_obj.splice(j,1);
										var newStr = JSON.stringify(newcache);
										$.cookie("goodsindex",newStr);
									}
								}
							})*/
					}
				}	
			}
		}
	}
					
				
	
	
			















			var li = $('<li></li>').css({float:"left",width:"214px",height:"320px",padding:"0 12px 0 12px",borderRight:"5px solid #ddd",textAlign:"center"});
			if(i == 5 || i == 9){
				li.css({borderRight:"none"})
			}
			img.appendTo(a_img);
			a_img.appendTo(li);
			a_text.appendTo(li)
			p.appendTo(li);
			em.appendTo(li);        
			btn.appendTo(li);
			li.appendTo($("#ul_11"));
		}
	}

 	for(var i = 0; i <arr6[1].feature.length; i++){  //我买特色 里面存放的全是图片 无任何特效和动画效果
 		if(i == 0){
			$('<img>').attr({src:arr6[1].feature[i].src,title:arr6[1].feature.title}).css({marginLeft:"24px"}).appendTo($('<h4></h4>').html(arr6[1].feature[i].title).attr("id","guide1" + i + "_h4").css({borderBottom:"2px solid #4bae00",lineHeight:"44px",fontSize:"19px",color:"#383838"}).appendTo($("#guide1 #main")));			
		}else if(i == 1){
			var img = $('<img>').attr({src:arr6[1].feature[i].src,title:arr6[1].feature[i].title});
		  	var a = $('<a></a>').attr({href:arr6[1].feature[i].link,target:"_blank"});
		  	var div = $('<div>').attr("id","" + i).css({float:"left",width:"240px",height:"420px",position:"relative"}).appendTo($("#guide1 #main"));
		  	img.appendTo(a);
		  	a.appendTo(div);
		}else if(i == 2 || i == 3 || i == 6 || i == 7){
			var img = $('<img>').attr({src:arr6[1].feature[i].src,title:arr6[1].feature[i].title});
		  	var a = $('<a></a>').attr({href:arr6[1].feature[i].link,target:"_blank"});
		  	var div = $('<div>').attr("id","_" + i).css({float:"left",width:"242px",height:"210px",position:"relative"}).appendTo($("#guide1 #main"));
		  	if(i == 2 || i == 6){
		  		div.css({borderRight:"1px solid #ddd"})
		  	}
		  	img.appendTo(a);
		  	a.appendTo(div);
		}else{
			var img = $('<img>').attr({src:arr6[1].feature[i].src,title:arr6[1].feature[i].title});
		  	var a = $('<a></a>').attr({href:arr6[1].feature[i].link,target:"_blank"});
		  	var div = $('<div>').attr("id","_" + i).css({float:"left",width:"485px",height:"210px",position:"relative"}).appendTo($("#guide1 #main"));
		  	img.appendTo(a);
		  	a.appendTo(div);
		}

 	}
 	
 	for(var i = 0; i < arr6[2].recommend.length; i++){ //我买推荐商品 简单的图片轮播 并且有图片左右移动的效果
 													//实现方法：img 标签小一点 180 *190 而外面的a标签大一点240 200并有相对定位 图片被覆盖时 img的left 值回发生改变
 		if(i == 0){			
 			$('<img>').attr({src:arr6[2].recommend[i].src,title:arr6[2].recommend.title}).css({marginLeft:"24px"}).appendTo($('<h4></h4>').html(arr6[2].recommend[i].title).attr("id","guide3" + i + "_h4").css({borderBottom:"2px solid #4bae00",lineHeight:"44px",fontSize:"19px",color:"#383838"}).appendTo($("#guide2 #main")));
 			var big_div = $('<div></div>').attr("id","big_div").css({width:"1210px",height:"321px",position:"relative",overflow:"hidden"}).appendTo($("#guide2 #main"))
 			var ul_reco = $('<ul></ul>').attr({id:"ul_recommend"}).appendTo($("#guide2 #main #big_div")).css({width:"2520px",height:"321px",position:"absolute"});
 			var bt1 = $('<div></div>').attr({class:"c_le"}).css({width:"23px",height:"38px",background:"url(images/lr.png) no-repeat -5px 0px",position:"absolute",left:"0",top:"145px",zIndex:"3",textAlign:"center",cursor:"pointer"}).appendTo($("#guide2 #main #big_div"))
			var bt2 = $('<div></div>').attr({class:"c_ri"}).css({width:"23px",height:"38px",background:"url(images/lr.png) no-repeat -37px 0px",position:"absolute",right:"0",top:"145px",zIndex:"3",textAlign:"center",cursor:"pointer"}).appendTo($("#guide2 #main #big_div")) 				
 		}else{
 			var img = $('<img></img>').attr({src:arr6[2].recommend[i].src,title:arr6[2].recommend.title}).css({height:"321px",width:"252px",position:"relative"});
 			var a = $('<a></a>').attr({href:arr6[2].recommend.link,target:"_blank"}).css({position:"relative"});
 			var li = $('<li></li>').css({float:"left",position:"relative",width:"242px",overflow:"hidden"});
 			img.appendTo(a);
 			a.appendTo(li);
 			li.appendTo($("#guide2 #main #ul_recommend")); 
 			if(i == 1){
 				li.css({width:"484px"})
 				img.css({width:"494px"})
 			}		
 		}

 	}
 	for(var i = 0;i < arr6[3].gap.length; i++){ //我买推荐商品和楼层之间的间隔  全是图片无任何动画和特效
 		var img = $('<img>').attr({src:arr6[3].gap[i].src,title:arr6[3].gap[i].title});
 		var a = $('<a></a>').attr({href:arr6[3].gap[i].link,target:"_blank"});
 		img.appendTo(a)
 		a.appendTo($("#guide3 #main"));

 	}

 	//以下是楼层的信息（商品的图片 描述 价格等一些信息）和框架  基本相同 包含小的轮播图片 和tab切换  
 	// 1楼
 	for(var i = 0; i < arr7[0].floor_1.length; i++){ 
 		var div = $('<div></div>');
 		if(i == 0){
 			div.attr("id","f1_head").css({overflow:"hidden",width:"100%",height:"52px",borderBottom:"1px solid #a1c0f6"}).appendTo($("#floor1 #main"))
 		}else if( i == 1){

 			div.attr("id","f1_left").css({width:"242px",height:"504px",float:"left",position:"relative",background:"#a1c0f6"}).appendTo($("#floor1 #main"))
 		}else{
 			div.attr("id","f1_right").css({width:"968px",height:"504px",float:"right",position:"relative"}).appendTo($("#floor1 #main"))
 		}
 	}
 	
 	for(var i = 0; i < arr7[0].floor_1[0].floor_1_head.length; i++){
 		if(i == 0){
 			var h4 = $("<h4></h4>").html(arr7[0].floor_1[0].floor_1_head[i].title).css({marginTop:"24px",fontSize:"20px",color:"#88a9e2",borderLeft:"3px solid #88a9e2",textIndent:"10px",overflow:"hidden"});
 			h4.appendTo($("#floor1 #main #f1_head"));
 		}else{
 			var span = $("<a></a>").html(arr7[0].floor_1[0].floor_1_head[i].title).css(
 				{fontSize:"16px",color:"#434343",display:"inline-block",borderBottom:"4px solid #fff",marginTop:"9px",textAlign:"center",width:"78px",height:"16px"}).attr("_index", (i-1));
 			span.appendTo($("#floor1 #main #f1_head h4"))
 			if(i == 1){
 				span.css({marginLeft:"178px"});
 			}else{
 				span.css({marginRight:"734px",float:"right"});
 			}
 		}
 	}
	for(var i = 0; i < arr7[0].floor_1[1].floor_1_left.length; i++){
 		if(i == 0){
 			var span = $("<span></span>").css({display:"inline-block",width:"66px",height:"60px",background:"url(images/floor_icon.png) no-repeat 0 0",float:"left",lineHeight:"50px",fontSize:"20px",textIndent:"5px"}).html(arr7[0].floor_1[1].floor_1_left[i].title)
 			var h4 = $("<h4></h4>").css({color:"#fff",height:"42px"});
 			span.appendTo(h4)
 			h4.appendTo($("#floor1 #f1_left"));
 			var ul = $("<ul></ul>").attr("id","f1_left_ul").css({width:"233px",height:"111px",marginTop:"18px",position:"relative",top:"-22px"}).appendTo($("#f1_left"));
 			var p = $("<p></p>").css({height:"1px",background:"#94b1e3",width:"190px",marginTop:"5px",marginLeft:"24px"}).appendTo($("#f1_left"))
 		}else if(i >= 1 && i <= 6){
 			var a = $('<a></a>').attr({href:arr7[0].floor_1[1].floor_1_left[i].link,target:"_blank"}).html(arr7[0].floor_1[1].floor_1_left[i].title).css({color:"#5e7090",fontSize:"12px"});
 			a.hover(function() {
 				$(this).css({textDecoration:"underline",color:"#000"})
 			}, function() {
 				$(this).css({textDecoration:"none",color:"#5e7090"})
 			});
 			var span_bg = $('<span></span>').css({display:"inline-block",width:"21px",height:"21px",background:"url(" +arr7[0].floor_1[1].floor_1_left[i].src +') no-repeat 0 0',marginRight:"5px"});
 			var li = $('<li></li>').css({width:"82px",float:"left",marginTop:"15px",marginLeft:"29px",lineHeight:"21px",height:"21px"});
 			span_bg.appendTo(li);
 			a.appendTo(li);
 			li.appendTo($("#floor1 #f1_left #f1_left_ul"));
 		}else if( i == 7){
 			var img_bg = $('<img>').attr({src:arr7[0].floor_1[1].floor_1_left[i].src}).css({display:"none",position:"absolute",left:"-242px",width:"232px",height:"328px"});			
 			var div = $('<div></div>').attr("id","f1_left_img").css({width:"242px",height:"328px"});
 			img_bg.appendTo(div)
 			div.appendTo($("#floor1 #f1_left"))
 			div.hover(function() {
 				$(this).find('img').eq(0).css({display:"block"}).stop().animate({left:"242px"}, 300)
 			}, function() {
 				$(this).find('img').eq(0).css({left:"-242px",display:"none"})
 			});
 		}else{
 			var img = $('<img>').attr({src:arr7[0].floor_1[1].floor_1_left[i].src}).css({width:"232px",height:"328px"});			 			
 			img.appendTo($("#floor1 #f1_left #f1_left_img"))
 		}		
 	}
 	for(var i = 0; i < arr7[0].floor_1[2].floor_1_right.length; i++){
 	var div_1 = $('<h6></h6>').attr("class","f1_right_left").css({width:"968px",height:"502px",position:"absolute",overflow:"hidden",display:"block"});


 	var div_2 = $('<h6></h6>').attr("class","f1_right_right").css({width:"968px",height:"502px",position:"absolute",display:"none"});

	 	if(i == 0){
	 		div_1.appendTo($("#floor1 #main #f1_right"))
	 	}else{
	 		div_2.appendTo($("#floor1 #main #f1_right"))
	 	}
 	}
 	var ul_img = $('<div></div>').attr("id","f1_c_div").css({width:"484px",height:"250px",position:"relative",overflow:"hidden",left:"241px"}) 
 	ul_img.appendTo($("#floor1 #main #f1_right .f1_right_left"))
 	var ul = $('<ul></ul>').attr("id","f1_c_ul").css({width:"1452px",position:"relative",left:"-0"}).appendTo($("#f1_c_div"));
 	var ol = $('<ol></ol>').attr("id","f1_c_ol").css({position:"absolute",left:"50%",top:"220px",zIndex:"2"}).appendTo($("#f1_c_div"));
	var btn_left = $('<div></div>').attr("class","bleft").css({width:"28px",height:"62px",background:"url(images/lr.png) no-repeat 0 0",position:"absolute",left:"0",top:"105px",display:"none"});
	var btn_right = $('<div></div>').attr("class","bright").css({width:"28px",height:"62px",background:"url(images/lr.png) no-repeat -37px 0",position:"absolute",right:"0px",top:"105px",display:"none"});
	btn_left.appendTo($("#f1_c_div"));
	btn_right.appendTo($("#f1_c_div"))
 	for(var i = 0; i < arr8.length; i++){ 		
 		if(i > 0 && i < 4){
 			var oli = $('<li></li>').css({width:"15px",height:"15px",background:"url(images/b_icon.png) no-repeat 0 0",marginRight:"10px",float:"left"});
 			if(i == 1){
 				oli.css({background:"url(images/b_icon.png) no-repeat -16px 0"})
 			}
 			oli.appendTo($("#floor1 #main #f1_right #f1_c_ol"))
 		}
 	
	if(i > 0 && i < 4 ){
 			var img_c = $('<img></img>').attr({src:arr8[i].src,title:arr8[i].title}).css({});
 			var a_c = $('<a></a>').attr({href:"#"});
 			var li = $('<li></li>').css({width:"482px",height:"250px",float:"left",position:"absolute",left:"482px"})
 			if(i == 1){
 				li.css({left:"0"})
 			}
 			img_c.appendTo(a_c);
 			a_c.appendTo(li);
 			li.appendTo($("#floor1 #main #f1_right #f1_c_ul"))

 		}else{
 		var img = $('<img></img>').attr({src:arr8[i].src,title:arr8[i].title,index:i}).css({width:"179px",height:"180px",position:"relative",marginLeft:"28px",marginTop:"22px"});
 		var a = $('<a></a>').attr({href:"#"}).css({textAlign:"center",width:"190px",position:"relative"});
 		var p =$('<p></p>').html(arr8[i].title).css({color:"#606060",fontSize:"12px",width:"225px",textAlign:"center",overflow:"hidden",height:"20px"});
 		p.hover(function() {
 			$(this).css({color:"#3ea600",textDecoration:"underline"})
 		}, function() {
 			$(this).css({color:"#606060",textDecoration:"none"})
 		});
 		var span = $('<span></span>').html("￥" + arr8[i].price).css({fontSize:"15px",color:"red",fontWeight:"bold",marginLeft:"10px"});
 		var div = $('<div></div>').css({width:"241px",height:"250px",float:"left",position:"absolute",borderRight:"1px solid #ccc",borderBottom:"1px solid #ccc"});
 		div.hover(function() {
 			$(this).find("p").css({color:"#3ea600",textDecoration:"underline"})
 			$(this).find("img").animate({marginLeft: "38px"}, 300);
 		}, function() {
 			$(this).find("p").css({color:"#606060",textDecoration:"none"});
 			$(this).find("img").animate({marginLeft: "28px"}, 300);
 		});
 		img.appendTo(a);
 		a.appendTo(div);
 		p.appendTo(div);
 		span.appendTo(div);
 		div.appendTo($("#floor1 #main #f1_right .f1_right_left"))
 		if(i == 0){
 			div.css({left:"0",top:"0px"})
 		}else if( i == 4){
 			div.css({left:"726px",top:"0px",borderLeft:"1px solid #ccc"})
 		}else if( i == 5){
 			div.css({left:"0px",top:"251px"})//修改 定位的坐标值
 		}else if(i == 6){
 			div.css({left:"242px",top:"251px"})
 		}else if ( i == 7){
 			div.css({left:"484px",top:"251px"})
 		}else if (i == 8){
 			div.css({left:"726px",top:"251px"})
 		}
 		}
 	}
 	imgchar(arr9,$("#floor1 #main #f1_right .f1_right_right"))
 	 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	 //2楼
 	for(var i = 0; i < arr10[1].floor_2.length; i++){
 		var div = $('<div></div>');
 		if(i == 0){
 			div.attr("id","f2_head").css({overflow:"hidden",width:"100%",height:"52px",borderBottom:"1px solid #a1c0f6"}).appendTo($("#floor2 #main"))
 		}else if( i == 1){

 			div.attr("id","f2_left").css({width:"242px",height:"504px",float:"left",position:"relative",background:"#bee77b"}).appendTo($("#floor2 #main"))
 		}else{
 			div.attr("id","f2_right").css({width:"968px",height:"504px",float:"right",position:"relative"}).appendTo($("#floor2 #main"))
 		}
 	}
 	for(var i = 0; i < arr10[1].floor_2[0].floor_1_head.length; i++){
 		if(i == 0){
 			var h4 = $("<h4></h4>").html(arr10[1].floor_2[0].floor_1_head[i].title).css({marginTop:"24px",fontSize:"20px",color:"#88a9e2",borderLeft:"3px solid #88a9e2",textIndent:"10px",overflow:"hidden"});
 			h4.appendTo($("#floor2 #main #f2_head"));
 		}else{
 			var span = $("<a></a>").html(arr10[1].floor_2[0].floor_1_head[i].title).css(
 				{fontSize:"16px",color:"#434343",display:"inline-block",borderBottom:"4px solid #fff",marginTop:"9px",textAlign:"center",width:"78px",height:"16px"}).attr("_index", (i-1));
 			span.appendTo($("#floor2 #main #f2_head h4"))
 			if(i == 1){
 				span.css({marginLeft:"178px"});
 			}else{
 				span.css({marginRight:"734px",float:"right"});
 			}
 		}
 	}
 	for(var i = 0; i < arr10[1].floor_2[1].floor_2_left.length; i++){
 		if(i == 0){
 			var span = $("<span></span>").css({display:"inline-block",width:"66px",height:"60px",background:"url(images/floor_icon.png) no-repeat 0 -130px",float:"left",lineHeight:"50px",fontSize:"20px",textIndent:"5px"}).html(arr10[1].floor_2[1].floor_2_left[i].title)
 			var h4 = $("<h4></h4>").css({color:"#fff",height:"42px"});
 			span.appendTo(h4)
 			h4.appendTo($("#floor2 #f2_left"));
 			var ul = $("<ul></ul>").attr("id","f2_left_ul").css({width:"233px",height:"111px",marginTop:"18px",position:"relative",top:"-22px"}).appendTo($("#f2_left"));
 			var p = $("<p></p>").css({height:"1px",background:"#afd571",width:"190px",marginTop:"4px",marginLeft:"24px"}).appendTo($("#f2_left"))
 		}else if(i >= 1 && i <= 6){
 			var a = $('<a></a>').attr({href:arr10[1].floor_2[1].floor_2_left[i].link,target:"_blank"}).html(arr10[1].floor_2[1].floor_2_left[i].title).css({color:"#698043",fontSize:"12px"});
 			a.hover(function() {
 				$(this).css({textDecoration:"underline",color:"#000"})
 			}, function() {
 				$(this).css({textDecoration:"none",color:"#698043"})
 			});
 			var span_bg = $('<span></span>').css({display:"inline-block",width:"21px",height:"21px",background:"url(" +arr10[1].floor_2[1].floor_2_left[i].src +') no-repeat 0 0',marginRight:"5px"});
 			var li = $('<li></li>').css({width:"82px",float:"left",marginTop:"15px",marginLeft:"29px",lineHeight:"21px",height:"21px"});
 			span_bg.appendTo(li);
 			a.appendTo(li);
 			li.appendTo($("#floor2 #f2_left #f2_left_ul"));
 		}else if( i == 7){
 			var img_bg = $('<img>').attr({src:arr10[1].floor_2[1].floor_2_left[i].src}).css({display:"none",position:"absolute",left:"-242px",width:"232px",height:"328px"});			
 			var div = $('<div></div>').attr("id","f2_left_img").css({width:"242px",height:"328px"});
 			img_bg.appendTo(div)
 			div.appendTo($("#floor2 #f2_left"))
 			div.hover(function() {
 				$(this).find('img').eq(0).css({display:"block"}).stop().animate({left:"242px"}, 300)
 			}, function() {
 				$(this).find('img').eq(0).css({left:"-242px",display:"none"})
 			});
 		}else{
 			var img = $('<img>').attr({src:arr10[1].floor_2[1].floor_2_left[i].src}).css({width:"232px",height:"328px"});			 			
 			img.appendTo($("#floor2 #f2_left #f2_left_img"))
 		}		
 	}
 	for(var i = 0; i < arr10[1].floor_2[2].floor_2_right.length; i++){
 	var div_1 = $('<h6></h6>').attr("class","f2_right_left").css({width:"968px",height:"502px",position:"absolute",overflow:"hidden",display:"block"});


 	var div_2 = $('<h6></h6>').attr("class","f2_right_right").css({width:"968px",height:"502px",position:"absolute",display:"none"});

	 	if(i == 0){
	 		div_1.appendTo($("#floor2 #main #f2_right"))
	 	}else{
	 		div_2.appendTo($("#floor2 #main #f2_right"))
	 	}
 	}
 	var ul_im = $('<div></div>').attr("id","f2_c_div").css({width:"484px",height:"250px",position:"relative",overflow:"hidden",left:"241px"}) 
 	ul_im.appendTo($("#floor2 #main #f2_right .f2_right_left"))
 	var ul1 = $('<ul></ul>').attr("id","f2_c_ul").css({width:"1452",position:"relative",left:"-0"}).appendTo($("#f2_c_div"));
 	var ol1 = $('<ol></ol>').attr("id","f2_c_ol").css({position:"absolute",left:"50%",top:"220px",zIndex:"2"}).appendTo($("#f2_c_div"));
	var btn_left1 = $('<div></div>').attr("class","bleft").css({width:"28px",height:"62px",background:"url(images/lr.png) no-repeat 0 0",position:"absolute",left:"0",top:"105px",display:"none"});
	var btn_right1 = $('<div></div>').attr("class","bright").css({width:"28px",height:"62px",background:"url(images/lr.png) no-repeat -37px 0",position:"absolute",right:"0px",top:"105px",display:"none"});
	btn_left1.appendTo($("#f2_c_div"));
	btn_right1.appendTo($("#f2_c_div"))
	for(var i = 0; i < arr11.length; i++){ 		
 		if(i > 0 && i < 4){
 			var oli = $('<li></li>').css({width:"15px",height:"15px",background:"url(images/b_icon.png) no-repeat 0 0",marginRight:"10px",float:"left"});
 			if(i == 1){
 				oli.css({background:"url(images/b_icon.png) no-repeat -16px 0"})
 			}
 			oli.appendTo($("#floor2 #main #f2_right #f2_c_ol"))
 		}
 	
	if(i > 0 && i < 4 ){
 			var img_c = $('<img></img>').attr({src:arr8[i].src,title:arr11[i].title}).css({});
 			var a_c = $('<a></a>').attr({href:"#"});
 			var li = $('<li></li>').css({width:"484px",height:"250px",float:"left",position:"absolute",left:"484px"});
 			if(i == 1){
 				li.css({left:"0"})
 			}
 			img_c.appendTo(a_c);
 			a_c.appendTo(li);
 			li.appendTo($("#floor2 #main #f2_right #f2_c_ul"))

 		}else{
 		var img = $('<img></img>').attr({src:arr11[i].src,title:arr11[i].title,index:i}).css({width:"179px",height:"180px",position:"relative",marginLeft:"28px",marginTop:"22px"});
 		var a = $('<a></a>').attr({href:"#"}).css({textAlign:"center",width:"190px",position:"relative"});
 		var p =$('<p></p>').html(arr11[i].title).css({color:"#606060",fontSize:"12px",width:"225px",textAlign:"center",overflow:"hidden",height:"20px"});
 		p.hover(function() {
 			$(this).css({color:"#3ea600",textDecoration:"underline"})
 		}, function() {
 			$(this).css({color:"#606060",textDecoration:"none"})
 		});
 		var span = $('<span></span>').html("￥" + arr11[i].price).css({fontSize:"15px",color:"red",fontWeight:"bold",marginLeft:"10px"});
 		var div = $('<div></div>').css({width:"241px",height:"250px",float:"left",position:"relative",borderRight:"1px solid #ccc",borderBottom:"1px solid #ccc",position:"absolute"});
 		div.hover(function() {
 			$(this).find("p").css({color:"#3ea600",textDecoration:"underline"})
 			$(this).find("img").stop().animate({marginLeft: "38px"}, 300);
 		}, function() {
 			$(this).find("p").css({color:"#606060",textDecoration:"none"});
 			$(this).find("img").stop().animate({marginLeft: "28px"}, 300);
 		});
 		img.appendTo(a);
 		a.appendTo(div);
 		p.appendTo(div);
 		span.appendTo(div);
 		div.appendTo($("#floor2 #main #f2_right .f2_right_left"))
 		if(i == 0){
 			div.css({left:"0",top:"0px"})
 		}else if( i == 4){
 			div.css({left:"726px",top:"0px",borderLeft:"1px solid #ccc"})
 		}else if( i == 5){
 			div.css({left:"0px",top:"251px"})//修改 定位的坐标值
 		}else if(i == 6){
 			div.css({left:"242px",top:"251px"})
 		}else if ( i == 7){
 			div.css({left:"484px",top:"251px"})
 		}else if (i == 8){
 			div.css({left:"726px",top:"251px"})
 		}
 		}
 	}
 	imgchar(arr12,$("#floor2 #main #f2_right .f2_right_right"))
 	/************************************************************************************************/
 	//3楼
 	for(var i = 0; i < arr10[2].floor_3.length; i++){
 		var div = $('<div></div>');
 		if(i == 0){
 			div.attr("id","f3_head").css({overflow:"hidden",width:"100%",height:"52px",borderBottom:"1px solid #a1c0f6"}).appendTo($("#floor3 #main"))
 		}else if( i == 1){

 			div.attr("id","f3_left").css({width:"242px",height:"504px",float:"left",position:"relative",background:"#99ddf6"}).appendTo($("#floor3 #main"))
 		}else{
 			div.attr("id","f3_right").css({width:"968px",height:"504px",float:"right",position:"relative"}).appendTo($("#floor3 #main"))
 		}
 	}
 	for(var i = 0; i < arr10[2].floor_3[0].floor_3_head.length; i++){
 		if(i == 0){
 			var h4 = $("<h4></h4>").html(arr10[2].floor_3[0].floor_3_head[i].title).css({marginTop:"24px",fontSize:"20px",color:"#88a9e2",borderLeft:"3px solid #88a9e2",textIndent:"10px",overflow:"hidden"});
 			h4.appendTo($("#floor3 #main #f3_head"));
 		}else{
 			var span = $("<a></a>").html(arr10[2].floor_3[0].floor_3_head[i].title).css(
 				{fontSize:"16px",color:"#434343",display:"inline-block",borderBottom:"4px solid #fff",marginTop:"9px",textAlign:"center",width:"78px",height:"16px"}).attr("_index", (i-1));
 			span.appendTo($("#floor3 #main #f3_head h4"))
 			if(i == 1){
 				span.css({marginLeft:"178px"});
 			}else{
 				span.css({marginRight:"734px",float:"right"});
 			}
 		}
 	}
 	for(var i = 0; i < arr10[2].floor_3[1].floor_3_left.length; i++){
 		if(i == 0){
 			var span = $("<span></span>").css({display:"inline-block",width:"66px",height:"60px",background:"url(images/floor_icon.png) no-repeat 0 -64px",float:"left",lineHeight:"50px",fontSize:"20px",textIndent:"5px"}).html(arr10[2].floor_3[1].floor_3_left[i].title)
 			var h4 = $("<h4></h4>").css({color:"#fff",height:"42px"});
 			span.appendTo(h4)
 			h4.appendTo($("#floor3 #f3_left"));
 			var ul = $("<ul></ul>").attr("id","f3_left_ul").css({width:"233px",height:"111px",marginTop:"18px",position:"relative",top:"-33px"}).appendTo($("#f3_left"));
 			var p = $("<p></p>").css({height:"1px",background:"#8dcce3",width:"190px",marginTop:"4px",marginLeft:"24px"}).appendTo($("#f3_left"))
 		}else if(i >= 1 && i <= 6){
 			var a = $('<a></a>').attr({href:arr10[2].floor_3[1].floor_3_left[i].link,target:"_blank"}).html(arr10[2].floor_3[1].floor_3_left[i].title).css({color:"#59818f",fontSize:"12px"});
 			a.hover(function() {
 				$(this).css({textDecoration:"underline",color:"#000"})
 			}, function() {
 				$(this).css({textDecoration:"none",color:"#59818f"})
 			});
 			var span_bg = $('<span></span>').css({display:"inline-block",width:"21px",height:"21px",background:"url(" +arr10[2].floor_3[1].floor_3_left[i].src +') no-repeat 0 0',marginRight:"5px"});
 			var li = $('<li></li>').css({width:"82px",float:"left",marginTop:"15px",marginLeft:"29px",lineHeight:"21px",height:"21px"});
 			span_bg.appendTo(li);
 			a.appendTo(li);
 			li.appendTo($("#floor3 #f3_left #f3_left_ul"));
 		}else if( i == 7){
 			var img_bg = $('<img>').attr({src:arr10[2].floor_3[1].floor_3_left[i].src}).css({display:"none",position:"absolute",left:"-242px",width:"232px",height:"328px"});			
 			var div = $('<div></div>').attr("id","f3_left_img").css({width:"242px",height:"328px"});
 			img_bg.appendTo(div)
 			div.appendTo($("#floor3 #f3_left"))
 			div.hover(function() {
 				$(this).find('img').eq(0).css({display:"block"}).stop().animate({left:"242px"}, 300)
 			}, function() {
 				$(this).find('img').eq(0).css({left:"-242px",display:"none"})
 			});
 		}else{
 			var img = $('<img>').attr({src:arr10[2].floor_3[1].floor_3_left[i].src}).css({width:"232px",height:"328px"});			 			
 			img.appendTo($("#floor3 #f3_left #f3_left_img"))
 		}		
 	}
 	for(var i = 0; i < arr10[2].floor_3[2].floor_3_right.length; i++){
 	var div_1 = $('<h6></h6>').attr("class","f3_right_left").css({width:"968px",height:"502px",position:"absolute",overflow:"hidden",display:"block"});


 	var div_2 = $('<h6></h6>').attr("class","f3_right_right").css({width:"968px",height:"502px",position:"absolute",display:"none"});

	 	if(i == 0){
	 		div_1.appendTo($("#floor3 #main #f3_right"))
	 	}else{
	 		div_2.appendTo($("#floor3 #main #f3_right"))
	 	}
 	}
 	var ul_im11 = $('<div></div>').attr("id","f3_c_div").css({width:"484px",height:"250px",position:"relative",overflow:"hidden",left:"241px"}) 
 	ul_im11.appendTo($("#floor3 #main #f3_right .f3_right_left"))
 	var ul11 = $('<ul></ul>').attr("id","f3_c_ul").css({width:"2420px",position:"absolute",left:"-484px"}).appendTo($("#f3_c_div"));
 	var ol11 = $('<ol></ol>').attr("id","f3_c_ol").css({position:"absolute",left:"50%",top:"220px",zIndex:"2"}).appendTo($("#f3_c_div"));
	for(var i = 0; i < arr13.length; i++){ 		
	if(i > 0 && i < 6 ){
 			var img_c = $('<img></img>').attr({src:arr13[i].src,title:arr13[i].title}).css({});
 			var a_c = $('<a></a>').attr({href:"#"});
 			var li = $('<li></li>').css({width:"484px",height:"250px",float:"left"})
 			img_c.appendTo(a_c);
 			a_c.appendTo(li);
 			li.appendTo($("#floor3 #main #f3_right #f3_c_ul"))

 		}else{
 		var img = $('<img></img>').attr({src:arr13[i].src,title:arr13[i].title,index:i}).css({width:"179px",height:"180px",position:"relative",marginLeft:"28px",marginTop:"22px"});
 		var a = $('<a></a>').attr({href:"#"}).css({textAlign:"center",width:"190px",position:"relative"});
 		var p =$('<p></p>').html(arr13[i].title).css({color:"#606060",fontSize:"12px",width:"225px",textAlign:"center",overflow:"hidden",height:"20px"});
 		p.hover(function() {
 			$(this).css({color:"#3ea600",textDecoration:"underline"})
 		}, function() {
 			$(this).css({color:"#606060",textDecoration:"none"})
 		});
 		var span = $('<span></span>').html("￥" + arr13[i].price).css({fontSize:"15px",color:"red",fontWeight:"bold",marginLeft:"10px"});
 		var div = $('<div></div>').css({width:"241px",height:"250px",float:"left",position:"relative",borderRight:"1px solid #ccc",borderBottom:"1px solid #ccc"});
 		div.hover(function() {
 			$(this).find("p").css({color:"#3ea600",textDecoration:"underline"})
 			$(this).find("img").stop().animate({marginLeft: "38px"}, 300);
 		}, function() {
 			$(this).find("p").css({color:"#606060",textDecoration:"none"});
 			$(this).find("img").stop().animate({marginLeft: "28px"}, 300);
 		});
 		img.appendTo(a);
 		a.appendTo(div);
 		p.appendTo(div);
 		span.appendTo(div);
 		div.appendTo($("#floor3 #main #f3_right .f3_right_left"))
 		if(i == 0){
 			div.css({left:"0",top:"-250px"})
 		}else if( i == 6){
 			div.css({left:"484px",top:"-250px"})
 		}else if( i == 7){
 			div.css({left:"-484px",top:"0px"})
 		}else if(i == 8){
 			div.css({left:"-484px",top:"0px"})
 		}else if ( i == 9){
 			div.css({left:"484px",top:"-252px"})
 		}else if (i == 10){
 			div.css({left:"484px",top:"-252px"})
 		}
 		}
 	}
 	imgchar(arr14,$("#floor3 #main #f3_right .f3_right_right"))
 	///////////////////////////////////////////////////////////////////////////////////////////////////////
 	/*===================================4楼底层=============================================================*/
 	for(var i = 0; i < arr15.length; i++){
 		var div = $('<div></div>');
 		if(i == 0){
 			div.attr("id","f4_head").css({overflow:"hidden",width:"100%",height:"52px",borderBottom:"1px solid #a1c0f6"}).appendTo($("#floor4 #main"))
 		}else if( i == 1){

 			div.attr("id","f4_left").css({width:"242px",height:"504px",float:"left",position:"relative",background:"#f6d7a1"}).appendTo($("#floor4 #main"))
 		}else if( i == 2){
 			div.attr("id","f4_center1").css({width:"484px",height:"504px",float:"left",position:"relative"}).appendTo($("#floor4 #main"))
 		}else if(i == 3){
 			div.attr("id","f4_center2").css({width:"242px",height:"504px",float:"left",position:"relative",background:"#9fe7d7"}).appendTo($("#floor4 #main"))
 		}else{
 			div.attr("id","f4_right").css({width:"242px",height:"504px",float:"right",position:"relative",zIndex:"2"}).appendTo($("#floor4 #main"))
 		}
 	}
 	for(var i = 0; i < arr15[0].head.length; i++){
 		if(i == 0){
 			var h4 = $("<h4></h4>").html(arr15[0].head[i].title).css({marginTop:"24px",fontSize:"20px",color:"#88a9e2",borderLeft:"3px solid #88a9e2",textIndent:"10px",overflow:"hidden"});
 			h4.appendTo($("#floor4 #main #f4_head"));
 		}else{
 			var span = $("<a></a>").html(arr15[0].head[i].title).css(
 				{fontSize:"16px",color:"#434343",display:"inline-block",borderBottom:"4px solid #fff",marginTop:"9px",textAlign:"center",width:"78px",height:"16px"}).attr("_index", (i-1));
 			span.appendTo($("#floor4 #main #f4_head h4"))
 			if(i == 1){
 				span.css({marginLeft:"90px"});
 			}else{
 				span.css({marginRight:"750px",float:"right"});
 			}
 		}
 	}
 		for(var i = 0; i < arr15[1].left.length; i++){
 		if(i == 0){
 			var span = $("<span></span>").css({display:"inline-block",width:"66px",height:"60px",background:"url(images/floor_icon.png) no-repeat 0 -196px",float:"left",lineHeight:"50px",fontSize:"20px",textIndent:"5px"}).html(arr15[1].left[i].title)
 			var h4 = $("<h4></h4>").css({color:"#fff",height:"42px"});
 			span.appendTo(h4)
 			h4.appendTo($("#floor4 #f4_left"));
 			var ul = $("<ul></ul>").attr("id","f4_left_ul").css({width:"233px",height:"111px",marginTop:"18px",position:"relative",top:"-33px"}).appendTo($("#f4_left"));
 			var p = $("<p></p>").css({height:"1px",background:"#e3c694",width:"190px",marginTop:"-13px",marginLeft:"24px"}).appendTo($("#f4_left"))
 		}else if(i >= 1 && i <= 6){
 			var a = $('<a></a>').attr({href:arr15[1].left[i].link,target:"_blank"}).html(arr15[1].left[i].title).css({color:"#89785b",fontSize:"12px"});
 			a.hover(function() {
 				$(this).css({textDecoration:"underline",color:"#000"})
 			}, function() {
 				$(this).css({textDecoration:"none",color:"#89785b"})
 			});
 			var span_bg = $('<span></span>').css({display:"inline-block",width:"21px",height:"21px",background:"url(" +arr15[1].left[i].src +') no-repeat 0 0',marginRight:"5px"});
 			var li = $('<li></li>').css({width:"82px",float:"left",marginTop:"15px",marginLeft:"29px",lineHeight:"21px",height:"21px"});
 			span_bg.appendTo(li);
 			a.appendTo(li);
 			li.appendTo($("#floor4 #f4_left #f4_left_ul"));
 		}else if( i == 7){
 			var img_bg = $('<img>').attr({src:arr15[1].left[i].src}).css({display:"none",position:"absolute",left:"-242px",width:"232px",height:"328px"});			
 			var div = $('<div></div>').attr("id","f4_left_img").css({width:"242px",height:"328px"});
 			img_bg.appendTo(div)
 			div.appendTo($("#floor4 #f4_left"))
 			div.hover(function() {
 				$(this).find('img').eq(0).css({display:"block"}).stop().animate({left:"242px"}, 300)
 			}, function() {
 				$(this).find('img').eq(0).css({left:"-242px",display:"none"})
 			});
 		}else{
 			var img = $('<img>').attr({src:arr15[1].left[i].src}).css({width:"232px",height:"328px"});			 			
 			img.appendTo($("#floor4 #f4_left #f4_left_img"))
 		}		
 	}
 	for(var i = 0; i < arr15[3].center2.length; i++){
 		if(i == 0){
 			var span = $("<span></span>").css({display:"inline-block",width:"66px",height:"60px",float:"left",lineHeight:"50px",fontSize:"20px",textIndent:"5px"}).html(arr15[3].center2[i].title)
 			var h4 = $("<h4></h4>").css({color:"#fff",height:"42px"});
 			span.appendTo(h4)
 			h4.appendTo($("#floor4 #f4_center2"));
 			var ul = $("<ul></ul>").attr("id","f4_left_ul").css({width:"233px",height:"111px",marginTop:"18px",position:"relative",top:"-33px"}).appendTo($("#f4_center2"));
 			var p = $("<p></p>").css({height:"1px",background:"#93d5c6",width:"190px",marginTop:"-13px",marginLeft:"24px"}).appendTo($("#f4_center2"))
 		}else if(i >= 1 && i <= 6){
 			var a = $('<a></a>').attr({href:arr15[3].center2[i].link,target:"_blank"}).html(arr15[3].center2[i].title).css({color:"#468f7f",fontSize:"12px"});
 			a.hover(function() {
 				$(this).css({textDecoration:"underline",color:"#000"})
 			}, function() {
 				$(this).css({textDecoration:"none",color:"#468f7f"})
 			});
 			var span_bg = $('<span></span>').css({display:"inline-block",width:"21px",height:"21px",background:"url(" +arr15[3].center2[i].src +') no-repeat 0 0',marginRight:"5px"});
 			var li = $('<li></li>').css({width:"82px",float:"left",marginTop:"15px",marginLeft:"29px",lineHeight:"21px",height:"21px"});
 			span_bg.appendTo(li);
 			a.appendTo(li);
 			li.appendTo($("#floor4 #f4_center2 #f4_left_ul"));find('selector')
 		}else if( i == 7){
 			var img_bg = $('<img>').attr({src:arr15[3].center2[i].src}).css({display:"none",position:"absolute",left:"-242px",width:"232px",height:"328px"});			
 			var div = $('<div></div>').attr("id","f4_left_img1").css({width:"242px",height:"328px"});
 			img_bg.appendTo(div)
 			div.appendTo($("#floor4 #f4_center2"))
 			div.hover(function() {
 				$(this).find('img').eq(0).css({display:"block"}).stop().animate({left:"242px"}, 300)
 			}, function() {
 				$(this).find('img').eq(0).css({left:"-242px",display:"none"})
 			});
 		}else{
 			var img = $('<img>').attr({src:arr15[3].center2[i].src}).css({width:"232px",height:"328px"});			 			
 			img.appendTo($("#floor4 #f4_center2 #f4_left_img1"))
 		}		
 	}
 	imgchar(arr17,$("#floor4 #main #f4_right"));
 	$("<div></div>").css({position:"absolute",width:"484px",height:"503px",display:"block"}).attr("id","f4_img1").attr("_index","0").appendTo($("#floor4 #main #f4_center1"));
 	$("<div></div>").css({position:"absolute",width:"484px",height:"503px",display:"none"}).attr("id","f4_img2","_index","1").appendTo($("#floor4 #main #f4_center1"));
 	$('<h6></h6>').attr("id","f4_loop_div").css({position:"relative",width:"484px",height:"251px",overflow:"hidden",top:"250px",zIndex:"2",borderBottom:"2px solid #eee"}).appendTo($("#f4_img1"));
 	for(var i = 0; i < arr16.length; i++){
 		if(i >= 0 &&  i  < 2){			
 			var img = $('<img>').attr({src:arr16[i].src,title:arr16[i].title}).css({width:"180px",height:"180px",marginLeft:"16px",marginTop:"22px"});
 		var dt = $('<dt></dt>').css({width:"240px",height:"190px"});
 		dt.hover(function() {
 			$(this).find('img').stop().animate({marginLeft:"30px"}, 300);
 			$(this).parent().find('dd').css({textDecoration:"underline",color:"#3ea600"});
 		}, function() {
 			$(this).find('img').stop().animate({marginLeft:"16px"}, 300);
 			$(this).parent().find("dd").css({textDecoration:"none",color:"#606060"});
 		});
 		var dd1 = $('<dd></dd>').html(arr16[i].title).css({color:"#606060",fontSize:"12px",lineHeight:"26px",width:"224px",height:"20px",overflow:"hidden",marginTop:"15px",marginLeft:"5px"});
 		var dd2 = $('<p></p>').html( "￥" + arr16[i].price).css({color:"red",fontSize:"16px",fontWeight:"bold",marginLeft:"-147px",marginTop:"5px"});
 		dd1.hover(function() {
 			$(this).css({textDecoration:"underline",color:"#3ea600"});
 		}, function() {
 			$(this).css({textDecoration:"none",color:"#606060"});
 		});
 		var dl = $('<dl></dl>').css({float:"left",width:"241px",height:"250px",borderRight:"1px solid #bbb",borderBottom:"1px solid #bbb",textAlign:"center",position:"absolute"});
 		if(i == 0){
 			dl.css({top:"0px"})
 		}else if(i == 1){
 			dl.css({top:"0px",left:"242px"})
 		}
 		img.appendTo(dt);
 		dt.appendTo(dl);
 		dd1.appendTo(dl);
 		dd2.appendTo(dl);
 		dl.appendTo($("#floor4 #main #f4_img1"));
 		}else if ( i >= 2 && i < 5 ){
 			if(i == 2){
 				var ol = $('<ol></ol>').css({position:"absolute",left:"210px",top:"208px",zIndex:"2"}).appendTo($("#f4_loop_div"));
 			}
 			if(i > 2 && i < 5){
 				var btn = $('<button></button>').css({width:"28px",height:"62px",border:"none",position:"absolute",zIndex:"3",display:"none"});
 				if( i == 3){
 					btn.attr("class","f4_left").css({background:'url("images/lr.png") no-repeat scroll 0px 0px',left:"0",top:"125px"});
 				}else if (i == 4){
 					btn.attr("class","f4_right").css({background:'url("images/lr.png") no-repeat scroll -36px 0px',right:"0",top:"125px"});
 				}
 				btn.appendTo($("#f4_loop_div"))
 			}
 			var li = $('<li></li>').css({width: "15px", height: "15px", background: 'url("images/b_icon.png") no-repeat 0px 0px',float:"left",marginRight:"10px"})
 			var img = $('<img>').attr({src:arr16[i].src,title:arr16[i].title}).css({width:"484px",height:"250px",position:"absolute",left:"484px",float:"left"});
 			if(i == 2){
 				img.css({left:"0"})
 			}
 			li.appendTo(ol);
 			img.appendTo($("#f4_loop_div"));
 			
 		}else{
 			var img = $('<img>').attr({src:arr16[i].src,title:arr16[i].title}).css({width:"180px",height:"180px",marginLeft:"16px",marginTop:"22px"});
 		var dt = $('<dt></dt>').css({width:"240px",height:"190px"});
 		dt.hover(function() {
 			$(this).find('img').stop().animate({marginLeft:"30px"}, 300);
 			$(this).parent().find('dd').css({textDecoration:"underline",color:"#3ea600"});
 		}, function() {
 			$(this).find('img').stop().animate({marginLeft:"16px"}, 300);
 			$(this).parent().find("dd").css({textDecoration:"none",color:"#606060"});
 		});
 		var dd1 = $('<dd></dd>').html(arr16[i].title).css({color:"#606060",fontSize:"12px",lineHeight:"26px",width:"224px",height:"20px",overflow:"hidden",marginTop:"15px",marginLeft:"5px"});
 		var dd2 = $('<p></p>').html( "￥" + arr16[i].price).css({color:"red",fontSize:"16px",fontWeight:"bold",marginLeft:"-147px",marginTop:"5px"});
 		dd1.hover(function() {
 			$(this).css({textDecoration:"underline",color:"#3ea600"});
 		}, function() {
 			$(this).css({textDecoration:"none",color:"#606060"});
 		});
 		var dl = $('<dl></dl>').css({float:"left",width:"241px",height:"250px",borderRight:"1px solid #bbb",borderBottom:"1px solid #bbb",textAlign:"center",position:"absolute"});
 		if(i == 5){
 			dl.css({top:"0px"})
 		}else if(i == 6){
 			dl.css({top:"0px",left:"242px"})
 		}else if(i == 7){
 			dl.css({top:"251px",left:"0px"})
 		}else if(i == 8){
 			dl.css({top:"251px",left:"242px"})
 		}
 		img.appendTo(dt);
 		dt.appendTo(dl);
 		dd1.appendTo(dl);
 		dd2.appendTo(dl);
 		dl.appendTo($("#floor4 #main #f4_img2"));
 		}
 	}
 	for(var i = 0; i < arr18.length; i++){
 		var div = $('<div></div>').css({width:"241px",height:"364px",borderBottom:"1px solid #eee",borderRight:"1px solid #eee",float:"left"}).attr("id","s_n" + i);
 		if(i == 0 || i == 5){
 			div.css({borderLeft:"1px solid #eee",width:"240px"});
 		} 	
 		div.appendTo($("#summary #main"))
 	}

 	addli(arr18[0].a,$("#s_n0"));
 	addli(arr18[1].b,$("#s_n1"));
 	addli(arr18[2].c,$("#s_n2"));
 	addli(arr18[3].d,$("#s_n3"));
 	addli(arr18[4].e,$("#s_n4"));
 	addli(arr18[5].f,$("#s_n5"));
 	addli(arr18[6].g,$("#s_n6"));
 	addli(arr18[7].h,$("#s_n7"));      
 	addli(arr18[8].i,$("#s_n8"));
 	addli(arr18[9].j,$("#s_n9"));
 	function addli(arr,id){
 		for( var j = 0; j < arr.length;j++){
 		if(j == 0){
 			var h3 = $('<h3></h3>').attr("class","s_h" + j).css({height:"82px",lineHeight:"82px",fontSize:"16px",fontWeight:"bold",textAlign:"center",padding:"0 18px"}).html(arr[j].title);
 			h3.appendTo(id)
 			h3.hover(function() {
 				$(this).css({color:"#8cb91e",textDecoration:"underline"})
 			}, function() {
 				$(this).css({color:"#606060",textDecoration:"none"})
 			});
 		}
 		else if( j == 1){
 		var img = $('<img>').attr({src:arr[j].src,title:arr[j].title}).css({width:"100px",height:"100px",margin:"0 auto",display:"block"})
 		var ul = $('<ul></ul>').css({width:"207px",height:"125px",marginTop:"25px",paddingLeft:"34px"});
 			img.appendTo(id)
 			ul.appendTo(id)
 			
 		}else{
 			var li = $('<li></li>').html(arr[j].title).css({width:"95px",height:"26px",marginRight:"8px",float:"left"});
 			li.hover(function() {
 				$(this).css({color:"#8cb91e",textDecoration:"underline"})
 			}, function() {
 				$(this).css({color:"#606060",textDecoration:"none"})
 			});
 			li.appendTo(ul); 
 		}
 	}
 	}

 	for(var i = 0; i < arr19.length; i++){
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

 	addtext(arr19[0].new,$("#footer  #main #ft0"));
 	addtext(arr19[1].pay,$("#footer  #main #ft1"));
 	addtext(arr19[2].mation,$("#footer  #main #ft2"));
 	addtext(arr19[3].tips,$("#footer  #main #ft3"));
 	for(var i = 0; i < arr19[4].app.length; i++){
 		if(i == 0){
 			var h3 = $('<h3></h3>').html(arr19[4].app[i].title).css({color:"red",fontSize:"16px",height:"38px",fontWeight:"normal"});
 			h3.appendTo($("#footer #main #ft4")); 
 		}else{
 			var img = $('<img>').attr({src:arr19[4].app[i].src,title:arr19[4].app[i].title});
 			img.appendTo($("#footer #main #ft4"))
 		}
 	}
 		for(var i = 0; i < arr19[5].cheat.length; i++){
 		if(i == 0){
 			var h3 = $('<h3></h3>').html(arr19[5].cheat[i].title).css({color:"red",fontSize:"16px",height:"38px",fontWeight:"normal"});
 			h3.appendTo($("#footer #main #ft5")); 
 		}else{
 			var img = $('<img>').attr({src:arr19[5].cheat[i].src,title:arr19[5].cheat[i].title});
 			img.appendTo($("#footer #main #ft5"))
 		}
 	}
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
 









});
	function imgchar(arra,node){
 		for(var i = 0; i < arra.length; i++){
 		var img = $('<img>').attr({src:arra[i].src,title:arra[i].title}).css({width:"180px",height:"180px",marginLeft:"16px",marginTop:"22px"});
 		var dt = $('<dt></dt>').css({width:"240px",height:"190px"});
 		dt.hover(function() {
 			$(this).find('img').stop().animate({marginLeft:"30px"}, 300);
 			$(this).parent().find('dd').css({textDecoration:"underline",color:"#3ea600"});
 		}, function() {
 			$(this).find('img').stop().animate({marginLeft:"16px"}, 300);
 			$(this).parent().find("dd").css({textDecoration:"none",color:"#606060"});
 		});
 		var dd1 = $('<dd></dd>').html(arra[i].title).css({color:"#606060",fontSize:"12px",lineHeight:"26px",width:"224px",height:"20px",overflow:"hidden",marginTop:"15px",marginLeft:"5px"});
 		var dd2 = $('<p></p>').html( "￥" + arra[i].price).css({color:"red",fontSize:"16px",fontWeight:"bold",marginLeft:"-147px",marginTop:"5px"});
 		dd1.hover(function() {
 			$(this).css({textDecoration:"underline",color:"#3ea600"});
 		}, function() {
 			$(this).css({textDecoration:"none",color:"#606060"});
 		});
 		var dl = $('<dl></dl>').css({float:"left",width:"241px",height:"250px",borderRight:"1px solid #bbb",borderBottom:"1px solid #bbb",textAlign:"center"})
 		img.appendTo(dt);
 		dt.appendTo(dl);
 		dd1.appendTo(dl);
 		dd2.appendTo(dl);
 		dl.appendTo(node);
 	}
 	}
		//创建的3个div在 #banner #main 中 分别是 菜单 侧拉菜单  和右侧的 服务菜单栏  后期还会有购物车添加过啦 
	var banner_left = $('<div></div>').attr("id","banner_left").css({position:"relative",width:"210px",height:"450px",background:"#3ea600",zIndex:"6",float:"left"});
	banner_left.appendTo($("#banner #main"));
	var banner_center = $('<div></div>').attr("id","banner_center").css({position:"relative",width:"787px",height:"449px",background:"#fff",zIndex:"4",float:"left",border:"1px solid #3a9900",borderTop:"none",borderLeft:"none",display:"none"});
	var banner_right = $('<div></div>').attr("id","banner_right").css({position:"relative",width:"198px",height:"448px",background:"#fff",zIndex:"2",float:"right",border:"1px solid #ddd"});
	banner_center.appendTo($("#banner #main"));
	banner_right.appendTo($("#banner #main"));

	
	$(window).on("scroll",function(){
		if($(document).scrollTop() > 1000 ){
			$("#anchor").css({display:"block"})
		}else{
			$("#anchor").css({display:"none"})
		}
		if($(document).scrollTop() > 780){
			$("#displaynav").css({display:"block"})
		}else{
			$("#displaynav").css({display:"none"})
		}		
	})

 $("#anchor ul").find('li').each(function(index, el) {
 	$(el).hover(function() {
 		$(this).css({background:"#3da700"});
 		$(this).children('a').children('span').css({display:"none"});
 		$(this).children('a').children('em').css({display:"block",color:"#fff"})
 	}, function() {
 		$(this).css({background:"#c5cdf8"});
 		$(this).children('a').children('span').css({display:"block"});
 		$(this).children('a').children('em').css({display:"none",color:"#fff"})
 	});
 });
 if($.cookie("alertdiv")){
 	$("#alertdiv").css({display:"none"});
 }else{
 	setTimeout(function(){
	 	$("#alertdiv").css({display:"block"}).stop().animate({top:"50%"}, 300,function(){
	 		$("#alertdiv").stop().animate({top:"17%"}, 500)
	 	});
	 	$("#alertdiv button").on("click",function(){
	 		$("#alertdiv").css({display:"none"});
	 	})
 	},2200);
 	$.cookie("alertdiv","1");
 }
 





});
window.onload = function(){ 
	 //所有的物品侧拉导航栏  鼠标滑动事件显示和隐藏侧边栏

	$("#banner #banner_left #floor_ul").find("li").each(function(index, el) {
		$(el).hover(function() {// 侧边栏拉出效果 通过li去寻找相对应的 div each加强版循环
			$(this).css({background:"#fff"});
			$(this).find("a").css({color:"#3a9900"});
			$(this).find("span").css({backgroundPosition:"-19px -3px"});
			$("#banner_center").css("display","block");
			$("#banner #main #banner_center").find("div").eq($(this).index()).css("display","block");			
		}, function() {
			$(this).css({background:"#3ea600"});
			$(this).find("a").css({color:"#fff"});
			$("#banner #main #banner_center").css("display","none");
			$(this).find("span").css({backgroundPosition:"-1px -3px"});
			$("#banner #main #banner_center").find("div").eq($(this).index()).css("display","none");
		});
		$("#banner #banner_center").find("div").each(function(index, el) {
			$(el).hover(function() {            //侧边栏中的div去寻找相对应的 li 标签 固定相应标签并且保持其样式
				$(el).css("display","block");
				$("#banner #main #banner_center").css("display","block");
				$("#banner #banner_left #floor_ul").find("li").eq($(this).index()).css("background","#fff");
				$("#banner #banner_left #floor_ul").find("li").eq($(this).index()).children("a").css({color:"#3ea600"});
				$("#banner #banner_left #floor_ul").find("li").eq($(this).index()).children("span").css({backgroundPosition:"-19px -3px"});
			}, function() {
				$(el).css("display","none");
				$("#banner #main #banner_center").css("display","none");
				$("#banner #banner_left #floor_ul").find("li").eq($(this).index()).css("background","#3ea600");
				$("#banner #banner_left #floor_ul").find("li").eq($(this).index()).children("a").css({color:"#fff"});
				$("#banner #banner_left #floor_ul").find("li").eq($(this).index()).children("span").css({backgroundPosition:"-1px -3px"});
			});		
		});
	});

	$("#banner_right #p_btn").find("a").each(function(index, el) {
		$(el).hover(function() {
			$("#banner_right #p_btn").find("a").css({borderBottom:"2px solid #fff"})
			$(this).css({borderBottom:"2px solid #2d8800",background:"#fff"});
			$("#banner_right").find('div').css("display","none")
			$("#banner_right").find('div').eq($(this).index()).css("display","block");
		}, function() {
			$("#banner_right #p_btn").find("a").css({borderBottom:"2px solid #fff",background:"#f7f7f7"})
			$(this).css({borderBottom:"2px solid #fff"});
			$("#banner_right #p_btn").find("a").eq($(this).attr("_index")).css({borderBottom:"2px solid #2d8800",background:"#fff"});
			$("#banner_right").find('div').css("display","none")
			$("#banner_right").find('div').eq($(this).attr("_index")).css("display","block");
		});		
	});

	$("#guide0 #gidue0_ul .g_le").on("click",function(){
						
		$("#gidue0_ul #ul_11").stop().animate({left:"-967px"}, 300,function(){
							
			$("#guide0 #gidue0_ul .g_le").on("click",function(){
				$("#gidue0_ul #ul_11").stop().animate({left:"0px"}, 300)
					})
			})
			
	});
	move0Left();
	move0LeftBack();
	move0Right();
	function move0Left(){
		$("#guide0 #gidue0_ul .g_le").on("click",function(){						
			$("#gidue0_ul #ul_11").stop().animate({left:"-967px"}, 300,function(){
				move0LeftBack();
			});		
		});		
	}
	function move0LeftBack(){
		$("#guide0 #gidue0_ul .g_le").on("click",function(){						
			$("#gidue0_ul #ul_11").stop().animate({left:"-0px"}, 300,function(){
				move0Left();
			});		
		});		
	}		
	function move0Right(){
		$("#guide0 #gidue0_ul .g_ri").on("click",function(){
			//alert($("#gidue0_ul #ul_11").css("left"))
		if($("#gidue0_ul #ul_11").css("left") == "0px"){
				$("#gidue0_ul #ul_11").stop().animate({left:"-967px"}, 300);
		}else if($("#gidue0_ul #ul_11").css("left") == "-967px"){
				$("#gidue0_ul #ul_11").stop().animate({left:"0px"}, 300);
		}						
					
		});		
	}
	$("#guide0 #main #gidue0_ul #ul_11").find('li').each(function(index, el) {
		$(el).hover(function() {
			$("#guide0 #gidue0_ul .g_le").css({display:"block"});
			$("#guide0 #gidue0_ul .g_le").hover(function() {
				$(this).css("display","block");
				$("#guide0 #gidue0_ul .g_ri").css("display","block");
			}, function() {
				$(this).css("display","none");
				$("#guide0 #gidue0_ul .g_ri").css({display:"none"});
			});
			$("#guide0 #gidue0_ul .g_ri").css({display:"block"});
			$("#guide0 #gidue0_ul .g_ri").hover(function() {
				$(this).css("display","block");
				$("#guide0 #gidue0_ul .g_le").css("display","block");
			}, function() {
				$(this).css("display","none");
				$("#guide0 #gidue0_ul .g_le").css({display:"none"});
			});
		}, function() {
			$("#guide0 #gidue0_ul .g_le").css({display:"none"});
			$("#guide0 #gidue0_ul .g_ri").css({display:"none"});
		});	
	});
///////////////////////////////////////////////////////////////////////////////////////
	move1Left();
	move1LeftBack();
	move1Right();
	function move1Left(){
		$("#guide2 #main .c_le").on("click",function(){

			$("#guide2 #main #ul_recommend").stop().animate({left:"-1210px"}, 300,function(){
				move1LeftBack();
			});		
		});		
	}
	function move1LeftBack(){
		$("#guide2 #main .c_le").on("click",function(){						
			$("#ul_recommend").stop().animate({left:"-0px"}, 300,function(){
				move1Left();
			});		
		});		
	}		
	function move1Right(){
		$("#guide2 #main .c_ri").on("click",function(){
			
		if($("#guide2 #main #ul_recommend").css("left") == "0px"){
				$("#guide2 #main #ul_recommend").stop().animate({left:"-1210px"}, 300);
		}else if($("#guide2 #main #ul_recommend").css("left") == "-1210px"){
				$("#guide2 #main #ul_recommend").stop().animate({left:"0px"}, 300);
		}						
					
		});		
	}
	$("#guide2 #main #ul_recommend").find('li').each(function(index, el) {
		$(el).hover(function() {
			$(this).children().stop().animate({left:"-10px"}, 300);
			$("#guide2 #main .c_le").css({display:"block"});
			$("#guide2 #main .c_le").hover(function() {
				$(this).css("display","block");
				$("#guide2 #main .c_ri").css("display","block");
			}, function() {
				$(this).css("display","none");
				$("#guide2 #main .c_le").css({display:"none"});
			});
			$("#guide2 #main .c_ri").css({display:"block"});
			$("#guide2 #main .c_ri").hover(function() {
				$(this).css("display","block");
				$("#guide2 #main .c_le").css("display","block");
			}, function() {
				$(this).css("display","none");
				$("#guide2 #main .c_le").css("display","none");
			});
		}, function() {
			$(this).children().stop().animate({left:"0px"}, 300);
			$("#guide2 #main .c_le").css({display:"none"});
			$("#guide2 #main .c_ri").css({display:"none"});
		});	
	});
			tabSWitch(1);
			tabSWitch(2);
			tabSWitch(3);//代码精简封装函数
	function tabSWitch(i){
		$("#f" + i + "_head h4").find("a").each(function(index, el) {
		$("#f" + i + "_head h4").find("a").eq(0).css({borderBottom:"4px solid #88a9e2"});
		$(el).hover(function() {
			
			$("#f" + i + "_head h4").find("a").css({borderBottom:"4px solid #fff"})
			$(this).css({borderBottom:"4px solid #88a9e2"});
			$("#f" + i + "_right").find('h6').css("display","none")
			$("#f" + i + "_right").find('h6').eq($(this).index()).css("display","block");
		}, function() {
			$("#f" + i + "_head h4").find("a").css({borderBottom:"4px solid #fff"})
			$(this).css({borderBottom:"3px solid #88a9e2"});
			$("#f" + i + "_right").find('h6').css("display","none")
			$("#f" + i + "_right").find('h6').eq($(this).attr("_index")).css("display","block");
		});		
	});
	}

		$("#f4_head h4").find("a").each(function(index, el) {
		$("#f4_head h4").find("a").eq(0).css({borderBottom:"4px solid #88a9e2"});
		$(el).hover(function() {
			$("#f4_head h4").find("a").css({borderBottom:"4px solid #fff"})
			$(this).css({borderBottom:"3px solid #88a9e2"});
			$("#floor4 #main #f4_center1").find('div').css("display","none")
			$("#floor4 #main #f4_center1").find('div').eq($(this).index()).css("display","block");
		}, function() {
			$("#f4_head h4").find("a").css({borderBottom:"4px solid #fff"})
			$(this).css({borderBottom:"3px solid #88a9e2"});
			$("#floor4 #main #f4_center1").find('div').css("display","none")
			$("#floor4 #main #f4_center1").find('div').eq($(this).index()).css("display","block");
			//alert($(this).attr("_index"))
			//alert($("#floor4 #main #f4_center1").find('div').eq($(this).index()).text)
		});		
	});
		

var tag = null;
	var i = 0;

	function show(){
		$("#banner_ul").find('li').css({display:"none"});
		$("#banner_ul").find('li').eq(i).css({display:"block"});
		$("#banner #main #banner_ol").find('li').css({background:"url('images/b_icon.png') no-repeat 0px 0"});
		$("#banner #main #banner_ol").find('li').eq(i).css({background:"url('images/b_icon.png') no-repeat -16px 0"});
			if(i == $("#banner_ul").find('li').size() - 1 ){
				i = -1;
			}
			$("#banner #main #move_left").click(function(event) {

				//clearInterval(tag)
				show();
				i = i - 1;
				/*if(i ==0){
					i = 8;
				}else*/ 

				if (i == 0){
					i =0;
				}else if( i < 0){
					 i == 7;
				}
			
				

	});
	}
	$("#banner #main #banner_ol").find('li').each(function(index, el) {
		$(el).on("click",function(){
			i = $(this).index();
			show();
		})		
	});	
	tag = setInterval(play,2500);
	function play(){
		i++;
		show();
	}



		loop($("#f1_c_ol").find("li"),$("#f1_c_div .bright"),$("#f1_c_div .bleft"),$("#f1_c_ul").find("li"),$("#f1_c_ul"));
		loop($("#f2_c_ol").find("li"),$("#f2_c_div .bright"),$("#f2_c_div .bleft"),$("#f2_c_ul").find("li"),$("#f2_c_ul"));
		loop($("#f4_loop_div ol li"),$("#f4_loop_div .f4_right"),$("#f4_loop_div .f4_left"),$("#f4_loop_div").find('img'),$("#f4_loop_div img"))
	function loop(btn,left,right,li,ul){
	var clearTime = null;
	var $index = 0; 
	var $qiandex = 0;
	btn.mouseover(function() {
		clearInterval(clearTime);
		$index = $(this).index(); //获取序列号
		scrollPlay();
		$qiandex = $index; //把当前的值赋给下一次的前一个序列号
	}).mouseout(function(){
		autoPlay();
	});
	right.click(function() {
		$index++;
		if ($index > 2) {
			$index = 0;
			$qiandex = 2;
		}
		scrollPlay()
		$qiandex = $index;
		clearInterval(clearTime);
		autoPlay();
	});
	left.click(function() {
		$index--;
		if ($index < 0) {
			$index = 2;
			$qiandex = 0;
		}
		scrollPlay()
		$qiandex = $index;
		clearInterval(clearTime);
		autoPlay();
	});
	
	
	autoPlay();
	
	function autoPlay() {
		clearTime = setInterval(function() {
			$index++;
			if ($index > 2) {
				$index = 0;
				$qiandex = 2;
			}
			scrollPlay();
			$qiandex = $index;
		}, 2000);
		
	}

	function scrollPlay() {
			btn.eq($index).css({background:"url('images/b_icon.png') no-repeat -16px 0"}).siblings().css({background:"url('images/b_icon.png') no-repeat 0px 0"});
		
		btn.eq($index).addClass("hover").siblings().removeClass("hover");
		if ($index == 0 && $qiandex == 2) {
			li.eq($qiandex).stop(true, true).animate({
				"left": "-484px"
			});
			li.eq($index).css("left", "484px").stop(true, true).animate({
				"left": "0"
			});
		} else if ($index == 2 && $qiandex == 0) {
			li.eq($qiandex).stop(true, true).animate({
				"left": "484px"
			});
			li.eq($index).css("left", "-484px").stop(true, true).animate({
				"left": "0"
			});
		} else if ($index > $qiandex) { //左移
			li.eq($qiandex).stop(true, true).animate({
				"left": "-484px"
			});
			li.eq($index).css("left", "484px").stop(true, true).animate({
				"left": "0"
			});
		} else if ($index < $qiandex) { //右移
			li.eq($qiandex).stop(true, true).animate({
				"left": "484px"
			});
			li.eq($index).css("left", "-484px").stop(true, true).animate({
				"left": "0"
			});
		}
	}
	
	ul.hover(function(){
		
		right.css({display:"block"}).stop().fadeIn(500);
		left.css({display:"block"}).stop().fadeIn(500);
		clearInterval(clearTime);
		right.hover(function() {
			right.css({display:"block"});
			left.css({display:"block"})
		}, function() {
			right.css({display:"none"});
			left.css({display:"none"});
		});
		left.hover(function() {
			right.css({display:"block"});
			left.css({display:"block"})
		}, function() {
			right.css({display:"none"});
			left.css({display:"none"})
		});
	},function(){
		autoPlay()
			left.css({display:"none"}).stop().fadeOut(500);
			right.css({display:"none"}).stop().fadeOut(500);
	});
}










	



}