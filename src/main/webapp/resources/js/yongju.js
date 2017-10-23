var yongju=yongju || {};
yongju.common=(()=>{
	var init=(ctx)=>{
		onCreate();
		yongju.session.init(ctx);
		yongju.index.init();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{};
	return {init:init};
})();

yongju.index=(()=>{
	var ctx,img,js;
	var init=()=>{
		js=$$('j');
		img=$$('i');
		ctx=$$('x');
		
		onCreate();
	};
	var onCreate=()=>{
        setContentView();
	};
	var setContentView=()=>{
        $('<div/>')
        .appendTo('#content')
        .attr('id', 'yj-container')
        .css({'width':'100%','height':'100%'});
        $('<div/>')
        .appendTo('#yj-container')
        .attr('id','yj-content')
        .css({'width':'65%','float': 'left','margin-top':'4%','margin-left':'1.1%'});
        /*google map*/
        $('<div></div>')
        .appendTo('#yj-container')
        .attr('id','gmap')
        .css({'width':'35%','float': 'right','top':'0','background-color': 'pink','height':'100%'}).text('지도입니다');
        var json1 = {hostel:img+'/hostelpic1.png',money:'₩306,502',spac:'Dwyanes luxury house </br>',content:'침대 3개 욕실 2개 </br>',
        		star:'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'};
        var json2 = {hostel:img+'/hostelpic2.png',money:'₩64,097',spac:'★ Myeong Dong Portable Wifi #1 </br>',content:'침대 1개 욕실 1개 </br>',
        		star:'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        			+'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'};
        var json3 = {hostel:img+'/hostelpic3.png',money:'₩75,751',spac:'[HongDae] 1min from Hongik Unv. S </br>',content:'침대 1개 욕실 1개 </br>',
 				star:'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'};
        var json4 = {hostel:img+'/hostelpic3.png',money:'₩114,210',spac:'별이 보이는 복층 커플룸 "Cosmos" </br>',content:'침대 1개, 욕실 2개 </br>',
 				star:'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        		   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'};
        var json5 = {hostel:img+'/hostelpic1.png',money:'₩72,255',spac:'5minLotteworld,Lakeview,Jamsil </br>',content:'침대 2개, 욕실 2개 </br>',
 				star:'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        		   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'};
        var json6 = {hostel:img+'/hostelpic1.png',money:'₩69,924',spac:'[강남역5분거리] New Apartment! </br>',content:'침대 1개, 욕실 2개 </br>',
 				star:'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
 				   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        		   +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
        		   +'<span class="glyphicon glyphicon-star-empty" style="color: #006666"></span>'};
        var arr = [json1,json2,json3,json4,json5,json6];
        var row='';
        $.each(arr, (i, j) => {
        	row +='<div style="float:left;width:300px;height:280px;margin-right:20px">' 
        		  +'<a style="text-decoration:none;">'
            	  +'<img src="./resources/img/hostelpic1.png" style="width:321.58px;height:214.38px">'
                  +'<span >'+j.money+'</span>'
                  +'<span >'+j.spac+'</span>'
                  +'<span >'+j.content+'</span>'
                  +'<span >'+j.star+'</span>'
                  +'</a>'
                  +'</div>';
        });
        $('#yj-content').append(row);
	};
	return {init:init};
})();

yongju.session={
		init : (x)=>{
			sessionStorage.setItem('x',x);
			sessionStorage.setItem('j',x+'/resources/js');
			sessionStorage.setItem('c',x+'/resources/css');
			sessionStorage.setItem('i',x+'/resources/img');
		},
		getPath : (x)=>{
			return sessionStorage.getItem(x);
		}
};
var $$= function(x){return yongju.session.getPath(x);};