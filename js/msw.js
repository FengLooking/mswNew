$(function(){
	//宽度自适应
	widthAuto();

	//左侧导航
	leftNavigator();

	//首页顶部
	homePageTop();

	//首页图片轮播部分
	homePageBanner();
})

$(window).resize(function(){
	//宽度自适应
	widthAuto();
});

//宽度自适应
function widthAuto(){
	var width = $(window).width();
	if(width<1400)
	{
		$("html").width("1400");
		$(".container").width(1400-248);
		$(".detail_left").width((1400-798)/2);
		$(".detail_right").width((1400-798)/2);
	}else{
		$("html").width("100%");
		$(".container").width(width-248);
		$(".detail_left").width((width-798)/2);
		$(".detail_right").width((width-798)/2);
	}
}

//左侧导航
function leftNavigator(){
	$("#nav li").click(function(){
		$("#nav li").removeClass("nav_on").
		eq($(this).index()).addClass("nav_on");
	});
}

//店铺指南
function popShopGuide(){
	$(".spgd").click(function(){
		$(".guide_mask").css("display","block");
	});
	$(".guide_mask").click(function(){
		$(".guide_mask").css("display","none");
	});
}

//首页顶部
function homePageTop(){
	$(".toplogo").hover(function(){
		$(".toplogo p").eq($(this).index()-1).css("display","block");
	},function(){
		$(".toplogo p").css("display","none");
	});
}

//首页图片轮播部分
function homePageBanner(){
	var index = 1;
	$("#homeright_btn").click(function(){
		index++;
		if(index==$("#home_banner li").length){
			index = 0;
		}
		if(index<0){
			index=$("#home_banner li").length-1;
		}
		$("#home_banner li").css("display","none").
		eq(index-1).css("display","block");
	});

	$("#homeleft_btn").click(function(){
		index++;
		if(index==$("#home_banner li").length){
			index = 0;
		}
		if(index<0){
			index=$("#home_banner li").length-1;
		}
		$("#home_banner li").css("display","none").
		eq(index-1).css("display","block");
	});

	num=index;

	var num = 0;
	var timer=null;
	function move(){
		num++;
		if(num==$("#home_banner li").length)
		{
			num=0;
		}
		if(num<0)
		{
			num=$("#home_banner li").length-1;
		}
		$("#home_banner li").css("display","none").
		eq(num).css("display","block");
	}
	function play(){
		timer = setInterval(move,1000);
	}
	play();
}

//产品系列部分图片列表的间距调整
function seriesList(){
	var $uls = $(".ssl");
	var uls = $uls.get();
	var lis0 = uls[0].getElementsByTagName("li");
	productSeriesListInstance(lis0);
	var lis1 = uls[1].getElementsByTagName("li");
	productSeriesListInstance(lis1);
	var lis2 = uls[2].getElementsByTagName("li");
	productSeriesListInstance(lis2);
	var lis3 = uls[3].getElementsByTagName("li");
	productSeriesListInstance(lis3);
	var lis4 = uls[4].getElementsByTagName("li");
	productSeriesListInstance(lis4);
	var lis5 = uls[5].getElementsByTagName("li");
	productSeriesListInstance(lis5);
	var lis6 = uls[6].getElementsByTagName("li");
	productSeriesListInstance(lis6);
	var lis7 = uls[7].getElementsByTagName("li");
	productSeriesListInstance(lis7);
	var lis8 = uls[8].getElementsByTagName("li");
	productSeriesListInstance(lis8);
	var lis9 = uls[9].getElementsByTagName("li");
	productSeriesListInstance(lis9);

	//列表切换
	var index = 0;
	$("#serieslist_button li").click(function(){
		prePage();
		index = $(this).index();
		$("#serieslist_button li").removeClass("pdtsllt_on").
		eq(index).addClass("pdtsllt_on");

		$(".series_list").css("display","none").
		eq(index).css("display","block");
	});

	function prePage(){
		$(".slltbtn").removeClass("slltbtn_on").eq(0).addClass("slltbtn_on");
		switch(index){
			case 0:
				uls[0].style.display="block";
				uls[1].style.display="none";
				break;
			case 1:
				uls[2].style.display="block";
				uls[3].style.display="none";
				break;
			case 2:
				uls[4].style.display="block";
				uls[5].style.display="none";
				break;
			case 3:
				uls[6].style.display="block";
				uls[7].style.display="none";
				break;
			case 4:
				uls[8].style.display="block";
				uls[9].style.display="none";
				break;
			default:
			    alert("出错了");
		}
	}

	function nextPage(){
		$(".slltbtn").removeClass("slltbtn_on").eq(1).addClass("slltbtn_on");
		switch(index){
			case 0:
				uls[0].style.display="none";
				uls[1].style.display="block";
				break;
			case 1:
				uls[2].style.display="none";
				uls[3].style.display="block";
				break;
			case 2:
				uls[4].style.display="none";
				uls[5].style.display="block";
				break;
			case 3:
				uls[6].style.display="none";
				uls[7].style.display="block";
				break;
			case 4:
				uls[8].style.display="none";
				uls[9].style.display="block";
				break;
			default:
			    alert("出错了");
		}
	}

	$("#shouye").click(function(){
		prePage();
	});

	$("#weiye").click(function(){
		nextPage();
	});

	$("#nextPage").click(function(){
		nextPage();
	});

	$("#prvPage").click(function(){
		prePage();
	});

	$(".slltbtn").click(function(){
		var btnIndex = parseInt($(this).attr("index"));
		if(btnIndex==1){
			prePage();
		}else if(btnIndex==2){
			nextPage();
		}
	});

}
function productSeriesListInstance(lis){
	for(var i=0; i<lis.length; i++)
	{
		if(i<3){
			lis[i].style.marginTop="0px";
		}else{
			lis[i].style.marginTop="28px";
		}
		if(i%3==0){
			lis[i].style.marginLeft="0px";
		}else{
			lis[i].style.marginLeft="68px";
		}
	}
}

//产品详情页面
function productDetailPage(){
	//返回列表
	$("#backto_list button").click(function(){
		window.open("productseries.html","_self");
	});

	var num = 0;
	//下一篇
	$("#next button").click(function(){
		num++;
		if(num==$(".dtl_ctt").length){
			num=0;
		}
		if(num<0){
			num=$(".dtl_ctt").length-1;
		}
		$(".dtl_ctt").css("display","none").eq(num).css("display","block");
	});

	//上一篇
	$("#prev button").click(function(){
		num--;
		if(num==$(".dtl_ctt").length){
			num=0;
		}
		if(num<0){
			num=$(".dtl_ctt").length-1;
		}
		$(".dtl_ctt").css("display","none").eq(num).css("display","block");
	});
}

//资讯详情页面
function newsPage(){
	$("#back_newslist button").click(function(){
		window.open("news.html","_self");
	});
}