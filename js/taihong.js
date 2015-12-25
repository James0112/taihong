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

	
	/* 点击小标题后自动关闭 菜单栏 
	 ----------------------------------- */
	function isBlock(){
		if( $(".btn").css("display")=='block')
		{
			// $("#menu").slideUp("slow");
			hideMenu();
		}
	} 

	// -------------------------- 点击小标题滑动到对应区域
	
	/* -------------------- .nav-menu */ 
	$('#0').click(function(){
		$("html,body").animate({scrollTop: $("#00").offset().top}, 1000);
		isBlock();
	});
	$('#1').click(function(){
		$("html,body").animate({scrollTop: $("#11").offset().top}, 1000);
		isBlock();
	});
	$('#2').click(function(){
		$("html,body").animate({scrollTop: $("#22").offset().top}, 1000);
		isBlock();
	});
	$('#3').click(function(){
		$("html,body").animate({scrollTop: $("#33").offset().top}, 1000);
		isBlock();
	});
	$('#4').click(function(){
		$("html,body").animate({scrollTop: $("#44").offset().top}, 1000);
		isBlock();
	});

	/* -------------------- .nav-bar */ 
	$('#5').click(function(){
		$("html,body").animate({scrollTop: $("#00").offset().top}, 1000);
	});
	$('#6').click(function(){
		$("html,body").animate({scrollTop: $("#11").offset().top}, 1000);
	});
	$('#7').click(function(){
		$("html,body").animate({scrollTop: $("#22").offset().top}, 1000);
	});
	$('#8').click(function(){
		$("html,body").animate({scrollTop: $("#33").offset().top}, 1000);
	});
	$('#9').click(function(){
		$("html,body").animate({scrollTop: $("#44").offset().top}, 1000);
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
});