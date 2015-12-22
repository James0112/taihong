$(document).ready(function(){

	// -------------------------- 点击toggle显示菜单栏 (小屏幕事件)

	/* menu-bar => show & hide
	 ----------------------------------- */
	 function showMenu () {
		$("#menu").css("position","relative");
		$("#menu").css("left","0px");
		$("#menu").css("transition-property","all");
		$("#menu").css("transition-duration","0.4s");
		$("#menu").css("transition-timing-function","cubic-bezier(0.7, 0, 0.3, 1)");
		$("#menu").css("transition-delay","0.1s");
	 };

	 function hideMenu () {
		$("#menu").css("position","relative");
		$("#menu").css("left","-205px");
		$("#menu").css("transition-property","all");
		$("#menu").css("transition-duration","0.4s");
		$("#menu").css("transition-timing-function","cubic-bezier(0.7, 0, 0.3, 1)");
		$("#menu").css("transition-delay","0.1s");
	 };

	$('.toggle').click(function(){
		if( $("#menu").css("left")=='-205px')
		{
			showMenu();
		}
		else
		{
			hideMenu();
		}
	});

	
	// 点击小标题后自动关闭 菜单栏
	function isBlock(){
		if( $(".btn").css("display")=='block')
		{
			// $("#menu").slideUp("slow");
			hideMenu();
		}
	} 

	/* menu-bar (type_test) => show & hide
	 ----------------------------------- */
	/*$('.toggle').click(function(){

		if( $("#nav-menu").css("display")=='none' )
		{
			$("#nav-menu").slideDown(300); 
		}
		else
		{
			$("#nav-menu").slideUp(300); 
		};
	}); */
	
	/* 菜单栏、导航栏共用小标题 
	 ----------------------------------- */
	//  ===> 修复屏幕从 490xp --> 728px 导航栏标题不显示问题
	/* $('.logo').click(function(){

		if( $(".nav").css("display")=='none' )
		{
			$(".nav").toggle(); 
			$(".logo").css("cursor","default");
		}
		else
		{
			$(".logo").css("cursor","default");
		}
	}); */


	// -------------------------- 点击小标题滑动到对应区域
	
	/* -------------------- .nav-menu */ 
	$('#1').click(function(){
		$("html,body").animate({scrollTop: $("li#about").offset().top}, 1000);
		isBlock();
	});
	$('#2').click(function(){
		$("html,body").animate({scrollTop: $("li#newpro").offset().top}, 1000);
		isBlock();
	});
	$('#3').click(function(){
		$("html,body").animate({scrollTop: $("li#allpro").offset().top}, 1000);
		isBlock();
	});
	$('#4').click(function(){
		$("html,body").animate({scrollTop: $("li#factory").offset().top}, 1000);
		isBlock();
	});
	$('#5').click(function(){
		$("html,body").animate({scrollTop: $("li#manage").offset().top}, 1000);
		isBlock();
	});
	$('#6').click(function(){
		$("html,body").animate({scrollTop: $("li#contact").offset().top}, 1000);
		isBlock();
	});

	/* -------------------- .nav-bar */ 
	$('#7').click(function(){
		$("html,body").animate({scrollTop: $("li#about").offset().top}, 1000);
		isBlock();
	});
	$('#8').click(function(){
		$("html,body").animate({scrollTop: $("li#newpro").offset().top}, 1000);
		isBlock();
	});
	$('#9').click(function(){
		$("html,body").animate({scrollTop: $("li#allpro").offset().top}, 1000);
		isBlock();
	});
	$('#10').click(function(){
		$("html,body").animate({scrollTop: $("li#factory").offset().top}, 1000);
		isBlock();
	});
	$('#11').click(function(){
		$("html,body").animate({scrollTop: $("li#manage").offset().top}, 1000);
		isBlock();
	});
	$('#12').click(function(){
		$("html,body").animate({scrollTop: $("li#contact").offset().top}, 1000);
		isBlock();
	});


	// -------------------------- 点击导航小标题时激活永久变色
	
	var sel=document.getElementById('nav').getElementsByTagName('a');
	var i=0;

	for (i=0; i<sel.length; i++){
		sel[i].onclick=function()
		{
			for (i=0; i<sel.length; i++){
				sel[i].className="";
			}
			this.className="selected";
		}
	}

	var act=document.getElementById('menu').getElementsByTagName('a');

	for (i=0; i<act.length; i++){
		act[i].onclick=function()
		{
			for (i=0; i<act.length; i++){
				act[i].className="";
			}
			this.className="actived";
		}
	}


	// -------------------------- 水平滑动事件	
	/*
	$(".imageRotation").each(function(){
		var imageRotation = this,	// 取得 图片切换容器
			imageBox = $(imageRotation).children(".imageBox")[0],
			// 取得图片容器
			icoBox = $(imageRotation).children(".icoBox")[0],
			// 取得图标容器
			icoArr = $(icoBox).children(),	//取得所有图标, 并保存为数组

			imageWidth = $(imageBox).width(),	//图片宽度
			imageNum = $(imageBox).children().size(),	//图片数量
			imageRellWidth = imageWidth*imageNum,	//图片容器宽度
			activeID = parseInt($($(icoBox).children(".active")[0]).attr("id")),	// 当前图片ID

			nextID = 0,		//下张图片ID
			timer = null,		// setInterval() 函数ID
			intervalTime = 4000,		// 间隔时间
			speed = 500;		//执行速度

		// 设置图片容器宽度
		$(imageBox).css({
			'width' : imageRellWidth + 'px'
		});

		// 图片轮换函数
		var rotate=function(clickID){
			// 如果点击图标,则切换到对应的id, 否则自动切换下一张图片的id
			if(clickID){ 
				nextID = clickID; 
			}else{ 
				nextID = activeID<=1 ? activeID+1 : 0; 
			}
			
			// 取消前一图标点亮状态, 激活当前图标点亮状态
			$(icoArr[activeID]).removeClass("active");
			$(icoArr[nextID]).addClass("active");

			// 根据id得出图片容器需要滑动的距离
			$(imageBox).animate({
				left:"-"+(nextID)*imageWidth+"px"
			} , speed);
			
			activeID = nextID;
		}

		// 触发计时器
		timer = setInterval(rotate,intervalTime);
		
		// 当鼠标放在图片上时,停止滑动; 松开后继续滑动;
		$(imageBox).hover(
			function(){ clearInterval(timer); },
			function(){ timer=setInterval(rotate,intervalTime); }
		);	
		
		// 当点击图标时, 切换对应id的图片
		$(icoArr).click(function(){
			clearInterval(timer);
			var clickID = parseInt($(this).attr("id"));
			rotate(clickID);
			timer = setInterval(rotate,intervalTime);
		});

	}); */



	//显示更多图片
	// var delay1=document.getElementById('delay1');
	// var delay2=document.getElementById('delay2');
	// var img = document.getElementById('imageBox').getElementsByTagName('img');
	// var timer = null;

	// img[0].onmouseover=img[1].onmouseover=img[2].onmouseover=delay1.onmouseover=delay2.onmouseover=function()
	// {
	// 	delay1.style.display='block';
	// 	delay2.style.display='block';
	// 	clearTimeout(timer);
	// }

	// img[0].onmouseout=img[1].onmouseout=img[2].onmouseout=delay1.onmouseout=delay2.onmouseout=function()
	// {
	// 	timer = setTimeout(function(){
	// 		delay1.style.display='none';
	// 		delay2.style.display='none';
	// 	}, 500);
	// }

	// var oDiv=document.getElementById('roll');
	// var oUl=oDiv.getElementsByTagName('ul')[0];
	// var aLi=oUl.getElementsByTagName('li');
	// var aBtn=oDiv.getElementsByTagName('a');

	// oUl.innerHTML+=oUl.innerHTML;

	// oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';

	// var iSpeed=-5;

	// var timer=null;

	// timer = setInterval(function (){
	// 	oUl.style.left=oUl.offsetLeft+iSpeed+'px';

	// 	if(oUl.offsetLeft<-2880)
	// 	{
	// 		oUl.style.left = '0px';
	// 	}
	// }, 30);

	// oUl.onmouseover=function()
	// {
	// 	clearInterval(timer);
	// }
	// oUl.onmouseout=function()
	// {
	// 	timer = setInterval(function (){
	// 		oUl.style.left=oUl.offsetLeft+iSpeed+'px';
	// 		if(oUl.offsetLeft<-2880)
	// 		{
	// 			oUl.style.left = '0px';
	// 		}
	// 	}, 30);
	// }
});