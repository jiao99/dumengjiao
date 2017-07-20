
 //初始化 Swiper对象
    var mySwiper=new Swiper('.swiper-container',{
        //添加小圆点
        pagination:'.swiper-pagination',

        //点击小圆点切换
        paginationClickable:true,

        //左右按钮
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',

        //循环
        loop:true,

        //自动轮播
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
    });
//纵向导航
	$(".banner ul li").mouseover(function(){
		$(this).find("ol").stop().show();
	})
	$(".banner ul li").mouseout(function(){
		$(this).find("ol").stop().hide();
	})
//左右切换
$(".btn1").click(function(){
	$(".ul1").show();
	$(".ul2").hide();
})
$(".btn2").click(function(){
	$(".ul2").show();
	$(".ul1").hide();
})
