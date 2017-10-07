$(function(){
	    document.documentElement.style.fontSize=innerWidth/16+"px";
	    //轮播图
	    var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			autoplayDisableOnInteraction : false,//滑动后继续轮播
			autoplay: 3000,//可选选项，自动滑动
			paginationElement : 'li',
		})
	    //购物车
	    $(".footer1 li").click(function(){
	    	   $(this).children().children().addClass("ys").parent().parent().siblings().children().children().removeClass("ys");
	    })
	    //分类
	    $(".zfl p").click(function(){
	    	 $(this).addClass("zflys").siblings().removeClass("zflys");
	    	 var h=$(".smheiht").height();
	    	 var index=$(this).index();
	    	 var z=-h*index;
	    	 $(".feileibiao").stop().animate({"margin-top":z+"px"},200);
	    })
        //点击img
        $("img").click(function(){
            $("#tsk").show().delay(2000).hide(1);
        })
	    
})
