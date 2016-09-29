$(function(){
		$("#join .input input").on("focus",function(){
		$(this).css({borderColor:"#f00"})
	})
		var a = false;
		var b = false;
		var c = false;
		var d = false;
		var e = false;
	$("#email").on("blur",function(){
		$(this).css({borderColor:"#aaa"})
		if(/(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/.test($("#email").val())){
				$("#checkEmail").html("");
				a = true;
			}else{
				$("#checkEmail").html("请输入正确的手机号");
			}
	})

	$("#userName").on("blur",function(){
				$(this).css({borderColor:"#aaa"})
				var str = $("#userName").val().replace(/\s/g,"");
				$("#userName").val(str);
				if(str.length >= 18 || str.length < 6){
					$("#checkUserName").html("长度错误");
				}else{
					if(/\W/.test($("#userName").val())){
						$("#checkUserName").html("不能包含特殊字符");
					}else if(/^\d+$/.test($("#userName").val())){
						$("#checkUserName").html("不能是纯数字");
					}else{
						$("#checkUserName").html("");
						b = true;
					}
				}
	})


	$("#password").on("blur",function(){
		$(this).css({borderColor:"#aaa"})
			if($("#password").val().length >= 18 || $("#password").val().length <= 6){
					$("#checkPassword").html("长度错误") ;
				}else {
					c = true;
					if(/\d+/.test($("#password").val()) && /[a-z]+/.test($("#password").val()) && /[A-Z]+/.test($("#password").val())){
						$("#checkPassword").html("强")  ;
					}else if(/^\d+$/.test($("#password").val()) || /^[a-z]$/.test($("#password").val()) || /^[A-Z]$/.test($("#password").value)){
						$("#checkPassword").html("弱")  ;
					}else{
						$("#checkPassword").html("一般") ;
					}
				}
	})

	$("#confirmPassword").on("blur",function(){
		$(this).css({borderColor:"#aaa"})
		if($("#confirmPassword").val() == $("#password").val() && $("#confirmPassword").val() != ""){
					$("#twiceCheck").html("验证通过");
					d = true;
				}else{
					$("#twiceCheck").html("两次输入不一致");
				}
	})


	$("#makecode").on("click",function(){
		$(this).html(makeCode(4));
	})

	$("#code").on("blur",function(){
		$(this).css({borderColor:"#aaa"});
		if($(this).val() == $("#makecode").html()){
			e = true;
		}else{
			$("#makecode").html("再试一次");
		}
	})


$("#join .input .join").on("click",function(){
	if(a && b && c && d && e){
		alert("您已经成功注册");
	}else{
		alert("信息不正确请仔细检查一下")
	}
})












	function makeCode(n){
			var arr = [];
			for(var i = 0; i < n; i++){
				var num = parseInt(Math.random() * 100);
				if(num >= 0 && num <= 9){
					arr.push(num);
				}else if(num >= 10 && num <= 35){
					arr.push(String.fromCharCode(num + 87));
				}else if(num >= 65 && num <= 90){
					arr.push(String.fromCharCode(num));
				}else{
					i--;
				}
			}
			return arr.join("");
		}



})