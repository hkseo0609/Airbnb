/* project */
var jw=jw || {}; /*name space*/
jw.common = (function(){
	var init = function(ctx){
		alert('이지원님의 관리자 입니다');
		jw.session.init(ctx);
		//jw.resvBoard.list();
		jw.index.init();
		//jw.help.init();
	};
	
	return {init : init};
})();

/*******************************
 * admin index
 *******************************/
jw.index = (function(){
	var js, ctx, temp;
	var init = function(){
		ctx = $$('x');
		js=$$('j');
		temp=js+'/template.js';
		setContentView();
	};
	
	var setContentView = function(){
		$('body').html(admIndex.frame());
		$.getScript(temp, ()=>{
			compUI.span('stat_btn_gostat').appendTo($('#idx_li_stat')).text('통계')
			.click(()=>{
				jw.stats.init();
			});
			compUI.span('stat_btn_goaccm').appendTo($('#idx_li_acc')).text('숙소')
			.click(()=>{
				jw.accom.init();
			});
			compUI.span('stat_btn_gobrd').appendTo($('#idx_li_brd')).text('도움말')
			.click(()=>{
				jw.board.list();
			});
			compUI.span('stat_btn_gohome').appendTo($('#navbar_R')).text('사용자화면 이동').addClass('jw_index_btngohome')
			.click(()=>{
				//main 이동
				$('body').empty();
				app.common.init(ctx);
			});
		});
		
		//default : 통계
		jw.stats.init();
	};
	
	return {init : init};
})();

/*******************************
 * main 도움말 popup
 *******************************/
jw.help = (function(){
	var js, temp;
	var init = function() {
		js=$$('j');
		temp=js+'/template.js';
		onCreate();
	};
	
	var onCreate = function(){
		setContentView();
	};
	
	var setContentView = function(){
		$('body').html(helpUI.frame());
		
		$.getScript(temp, ()=>{
			//상단 도움말 닫기 버튼
			compUI.btn('hp_btnClose').appendTo($('#hp_btndiv')).addClass('glyphicon glyphicon-remove jw_help_btnClose').css({'float':'right', 'cursor':'pointer'});
		
			//search bar
			compUI.input('help_search', 'text').appendTo($('#hp_search_grp')).addClass('form-control').attr('placeholder','질문을 입력하거나 키워드로 검색하세요').css({'width':'270px'});
			compUI.span('help_btngrp').appendTo($('#hp_search_grp')).addClass('input-group-btn');
			compUI.btn('help_btn_search').appendTo($('#help_btngrp')).addClass('btn btn-default search_btn');
			compUI.spanX().addClass('glyphicon glyphicon-search').appendTo($('#help_btn_search'));
		
			//search results
			var data=[
				{ seq:'1', title:'title1'},
				{ seq:'2', title:'title2'},
				{ seq:'3', title:'title3'},
				{ seq:'4', title:'title4'},
				{ seq:'5', title:'title5'}
			];
			
			$.each(data, (i,j)=>{
				compUI.li('hp_result_li_'+i).appendTo($('#hp_result_li')).addClass('jw_help_li');
				compUI.spanX().appendTo($('#hp_result_li_'+i)).text(j.title).css({'font-size':'15px', 'color':'#484848', 'font-weight':'300', 'line-height':'18px', 'height':'100%', 'width':'100%'});
				
			});
		});
	};
	
	return { init : init };
})();

/*******************************
 * UI
 * 도움말 UI
 *******************************/
var helpUI = {
	frame : ()=>{
		return '<div class="jw_help_frame">'
			+ '		<div class="jw_help_header">'
			+ '			<div style="display:inline-block;"><span>에어비앤비 도움말</span></div>'
			+ '			<div id="hp_btndiv" style="float:right;"></div>'
			+ '		</div>'
			+ '		<div class="jw_help_content">'
			+ '			<div id="hp_search_grp" class="input-group custom-search-form jw_help_search"></div>'
			+ '			<div style="position:relative">'
			+ '				<ul id="hp_result_ul" class="jw_help_ul">'
			+ '					<div><span class="jw_help_subTitle">추천 도움말<sapn></div>'
			+ '					<div id="hp_result_li"></div>'
			+ '				</ul>'
			+ '			</div>'		
			+ '		</div>'
			+ '</div>';
	}
}

/*******************************
 * 통계
 *******************************/
jw.stats = (function(){
	var js, temp;
	var init = function(){
		js=$$('j');
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate = function(){
		setContentView();
	};
	
	var setContentView = function(){
		$('#content').html(statsUI.frame());
		$.getScript(temp, ()=>{
			//refresh 버튼
			for(var i=1;i<6;i++){
				compUI.span('stat_refbtn_'+i).appendTo($('#stat_dvbtn_'+i)).addClass('glyphicon glyphicon-refresh').css({'cursor':'pointer'})
				.click(()=>{
					alert('refresh');
				});
			}
		});
		
	}; 
	
	
	return { init : init };
})();


/*******************************
 * 숙소
 *******************************/
jw.accom = (function(){
	var js, temp, img;
	var init = function(){
		js=$$('j');
		img = $$('i');
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate = function(){
		setContentView();
	};
	var setContentView = function(){
		$('#content').html(accomUI.frame());
		$.getScript(temp, ()=>{
			compUI.spanX().appendTo($('#acc_titleH')).text('숙소관리').css({'font-weight':'bold', 'font-size':'20px'});
			
			//accom search bar
			compUI.input('acc_search', 'text').appendTo($('#acc_input_grp')).addClass('form-control').attr('placeholder','Search...');
			compUI.span('acc_btngrp').appendTo($('#acc_input_grp')).addClass('input-group-btn');
			compUI.btn('acc_btn_search').appendTo($('#acc_btngrp')).addClass('btn btn-default search_btn');
			compUI.spanX().addClass('glyphicon glyphicon-search').appendTo($('#acc_btn_search'));
			
			//accom list
			var data=[
				{ hseq:'1', hname:'home1', name:'host1', himg:'testimg.jpg'},
				{ hseq:'2', hname:'home2', name:'host2', himg:'testimg.jpg'},
				{ hseq:'3', hname:'home3', name:'host3', himg:'testimg.jpg'},
				{ hseq:'4', hname:'home4', name:'host4', himg:'testimg.jpg'},
				{ hseq:'5', hname:'home5', name:'host5', himg:'testimg.jpg'},
				{ hseq:'6', hname:'home6', name:'host6', himg:'testimg.jpg'}
			];
			
			$.each(data, (i,j)=>{
				compUI.div("dvwrap_"+i).appendTo($('#acc_list')).css({'float':'left', 'height':'250px', 'width':'25%', 'margin-top':'5px'});
				//image
				compUI.div("dvimg_"+i).appendTo($('#dvwrap_'+i)).css({'float':'left', 'height':'83%', 'width':'100%', 'margin-top':'5px'});
				compUI.image('img_'+j.hseq, img+'/'+j.himg).appendTo($('#dvimg_'+i)).css({'height':'100%', 'margin':'auto', 'display':'block', 'border':'1px solid #D5D5D5'});
				//content
				compUI.div("dvbtom_"+i).appendTo($('#dvwrap_'+i)).css({'float':'left', 'height':'15%', 'width':'100%', 'margin-top':'5px'});
				compUI.div("dv_L"+i).appendTo($('#dvbtom_'+i)).css({'float':'left'});
				compUI.spanX().appendTo($('#dv_L'+i)).text(j.hname+" | "+j.name).css({'margin-left':'5px', 'font-weight':'bold'});
				compUI.div("dv_R"+i).appendTo($('#dvbtom_'+i)).css({'float':'right'});
				compUI.span('acc_btn_del_'+i).appendTo($('#dv_R'+i)).html('삭제').attr('displsy','inline').addClass('label label-default').css({'margin-right':'5px', 'font-size':'90%', 'cursor':'pointer'})
				.click(()=>{
					alert('삭제');
				})
			});
			
			$('#acc_pagebar').append(boardUI.pagebar());
		});
	}; 
	
	return { init : init };
})();

/*******************************
 * 게시판
 *******************************/
jw.board = (function(){
	var js, temp;
	var init = function(){
		js=$$('j');
		temp=js+'/template.js';
	};
	
	var list = function(){
		init();
		$('#content').html(boardUI.frame());
		$.getScript(temp, ()=>{
			//search bar
			compUI.input('brd_search', 'text').appendTo($('#brd_input_grp')).addClass('form-control').attr('placeholder','Search...');
			compUI.span('brd_btngrp').appendTo($('#brd_input_grp')).addClass('input-group-btn');
			compUI.btn('brd_btn_search').appendTo($('#brd_btngrp')).addClass('btn btn-default search_btn');
			compUI.spanX().addClass('glyphicon glyphicon-search').appendTo($('#brd_btn_search'));
			
			//board button_grp 
			compUI.span('brd_btn_write').appendTo($('#brd_btn_grp')).attr('displsy','inline').html('글쓰기').addClass('label label-danger').css({'font-size':'90%', 'cursor':'pointer'})
			.click(()=>{
				detail();
			});
			
			//board_list
			$('#brd_list').html(boardUI.tbl());
			var data=[
				{ seq:'1', cate_name1:'test1', cate_name2:'test2', cate_name3:'test3', title:'title1', regdate:'2017-09-10'},
				{ seq:'2', cate_name1:'test1', cate_name2:'test2', cate_name3:'test3', title:'title2', regdate:'2017-09-10'},
				{ seq:'3', cate_name1:'test1', cate_name2:'test2', cate_name3:'test3', title:'title3', regdate:'2017-09-10'},
				{ seq:'4', cate_name1:'test1', cate_name2:'test2', cate_name3:'test3', title:'title4', regdate:'2017-09-10'},
				{ seq:'5', cate_name1:'test1', cate_name2:'test2', cate_name3:'test3', title:'title5', regdate:'2017-09-10'}
			];
			
			var tr="";
			$.each(data, (i,j)=>{
				tr += '<tr style="height:25px; text-align:center;">'
					+ '<td>'+j.seq+'</td>'
					+ '<td>'+j.cate_name1+'</td>'
					+ '<td>'+j.cate_name2+'</td>'
					+ '<td>'+j.cate_name3+'</td>'
					+ '<td><a onclick="">'+j.title+'</a></td>'
					+ '<td>'+j.regdate+'</td>'
					+ '<td id="tbl_btnarea'+j.seq+'"></td>'
					+ '</tr>'
			});
			$('#brd_tbody').html(tr);	
			
			//수정&삭제 버튼
			$.each(data, (i,j)=>{
				compUI.span('brd_btn_modify_'+i).appendTo($('#tbl_btnarea'+j.seq)).attr('displsy','inline').html('수정').addClass('label label-warning').css({'cursor':'pointer'})
				.click(()=>{
					alert('수정');
				});
				compUI.span('brd_btn_del_'+i).appendTo($('#tbl_btnarea'+j.seq)).attr('displsy','inline').html('삭제').addClass('label label-default').css({'margin-left':'3px', 'cursor':'pointer'})
				.click(()=>{
					alert('삭제');
				});
			});
			
			//pagebar
			$('#brd_pagebar').append(boardUI.pagebar());
		});
	}; 
	
	var detail = function(){
		init();
		$('#content').html(boardUI.detail());
		$.getScript(temp, ()=>{
			//board header title
			compUI.span('brdD_titleH').appendTo($('#brdD_titleH')).text('글쓰기').css({'font-weight':'bold', 'font-size':'20px', 'padding':'0 5 0 0'});
			//board button_grp 
			compUI.span('brdD_btn_golist').appendTo($('#brdD_btn_grp')).attr('displsy','inline').html('목록으로').addClass('label label-default').css({'font-size':'90%', 'cursor':'pointer'})
			.click(()=>{
				jw.board.list();
			});
			compUI.span('brdD_btn_ok').appendTo($('#brdD_btn_grp')).attr('displsy','inline').html('완료').addClass('label label-danger').css({'font-size':'90%', 'margin-left':'3px', 'cursor':'pointer'})
			.click(()=>{
				alert('완료');
			});
			
			//comboBox
			var lvl1 = [{val:'lvl1_1', text:'공지분류1'},{val:'lvl1_2', text:'공지분류1'},{val:'lvl1_3', text:'공지분류1'}];
			var lvl2 = [{val:'lvl2_1', text:'공지분류2'},{val:'lvl2_2', text:'공지분류2'},{val:'lvl2_3', text:'공지분류2'}];
			var lvl3 = [{val:'lvl3_1', text:'공지분류2'},{val:'lvl3_2', text:'공지분류3'},{val:'lvl3_3', text:'공지분류3'}];
			
			compUI.select('brdD_combo_lvl1').appendTo($('#brdD_gubun')).css({'height':'30px', 'width':'88px', 'margin-right':'5px'});
			$.each(lvl1, (i,j)=>{
				compUI.option(j.val, j.text).appendTo($('#brdD_combo_lvl1'));
			});
			compUI.select('brdD_combo_lvl2').appendTo($('#brdD_gubun')).css({'height':'30px', 'width':'88px', 'margin-right':'5px'});
			$.each(lvl2, (i,j)=>{
				compUI.option(j.val, j.text).appendTo($('#brdD_combo_lvl2'));
			});
			compUI.select('brdD_combo_lvl3').appendTo($('#brdD_gubun')).css({'height':'30px', 'width':'88px', 'margin-right':'5px'});
			$.each(lvl3, (i,j)=>{
				compUI.option(j.val, j.text).appendTo($('#brdD_combo_lvl3'));
			});
			
			//input title
			compUI.input('brdD_ipt_title', 'text').appendTo($('#brdD_title')).css({'height':'30px', 'width':'100%'});
		});
		
		//위지웍 에디터 적용
		$(document).ready(()=>{ 
			$('#summernote').summernote({
				 height: 400,          // 기본 높이값
			     minHeight: null,      // 최소 높이값(null은 제한 없음)
			     maxHeight: 400,       // 최대 높이값(null은 제한 없음)
			     focus: true,          // 페이지가 열릴때 포커스를 지정함
			     lang: 'ko-KR'         // 한국어 지정(기본값은 en-US)
			}); 
		});
	};
	
	return { 
		init : init,
		list : list,
		detail : detail
	};
})();

/*******************************
 * 예약내역 list
 *******************************/
jw.resvBoard = (function(){
   var js, temp;
   var init = function(){
      js=$$('j');
      temp=js+'/template.js';
   };
   
   var list = function(){
      init();
      $('body').html(resvbrdUI.frame());
      $.getScript(temp, ()=>{
         //board_list
         $('#resv_list').html(resvbrdUI.tbl());
         var data=[
            { seq:'1', resdName:'test1', hostName:'test2', chkInout:'2013-10-10 ~ 2013-11-01'},
            { seq:'2', resdName:'test1', hostName:'test2', chkInout:'2014-07-15 ~ 2014-07-20'},
            { seq:'3', resdName:'test1', hostName:'test2', chkInout:'2017-05-31 ~ 2017-06-15'}
         ];
         
         var tr="";
         $.each(data, (i,j)=>{
            tr += '<tr style="height:25px; text-align:center;">'
               + '<td>'+j.seq+'</td>'
               + '<td>'+j.resdName+'</td>'
               + '<td>'+j.hostName+'</td>'
               + '<td>'+j.chkInout+'</td>'
               + '<td id="tbl_btnarea'+j.seq+'"></td>'
               + '</tr>'
         });
         $('#resv_tbody').html(tr);   
         
         //수정 버튼
         $.each(data, (i,j)=>{
            compUI.span('brd_btn_res_'+i).appendTo($('#tbl_btnarea'+j.seq)).attr('displsy','inline').html('후기작성').addClass('label label-warning').css({'cursor':'pointer'})
            .click(()=>{
				alert('후기작성');
			});
         });
         
         //pagebar
         $('#resv_pagebar').append(boardUI.pagebar());
      });
   }; 

   return { list : list };
})();

/*******************************
 * session
 * session :login 후 필요한 정보 담음
 *******************************/
jw.session=
	{
		//set
		init : function(ctx){
					sessionStorage.setItem('x', ctx);	//접근경로를 로그인 할때만 준다(보안)
					sessionStorage.setItem('j', ctx+'/resources/js');
					sessionStorage.setItem('i', ctx+'/resources/img');
					sessionStorage.setItem('c', ctx+'/resources/css');
			   },
		//get
		getPath : function(x){
			return sessionStorage.getItem(x);
		}
	};

//함수
var $$ = function(x){return jw.session.getPath(x);};

/*******************************
 * UI
 * index UI
 *******************************/
var admIndex = {
	frame : ()=>{
		return '<div id="container">'
				+ '<div id="header" class="jw_index_header">'
				+ '		<div style="float:left" class="jw_main-nav-logobox">'
                + '			<div class="jw_main-nav-logobox2">'
                + '				<div class="jw_main-nav-logobox3">'
                + '  				<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="display: block;fill: currentColor;height: 1em;width: 1em;">'
                + '   				<path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>'
                + '					</svg>'
                + '				</div>'
                + '			</div>'
                + '		</div>'
				+ '		<div id="navbar_L" style="float:left;">'
				+ '			<nav>'
				+ '  			<ul class="jw_navbar-ul">'
				+ '    				<li id="idx_li_stat"></li>'
				+ '   				<li id="idx_li_acc"></li>'
				+ '    				<li id="idx_li_brd"></li>'
				+ '  			</ul>'
				+ '			</nav>'
				+ '		</div>'             
				+ '		<div id="navbar_R" style="float:right"></div>'
				+ '</div>'
				+ '<div class="jw_main-nav-blank"></div>'
				+ '<div id="content">content</div>'
				+ '</div>';
	}
}

/*******************************
 * 통계 UI
 *******************************/
var statsUI = {
	frame : ()=>{
		return '<div style="width:80%; margin:auto;">'
				+ '		<div style="display:inline-block; width:100%;">'
				+ '		<div style="float:left; width:55%">'
				+ '			<div>'
				+ '				<div class="jw_stat_title">'
				+ '					<div style="float:left"><span class="jw_header_title">> 목표대비 실적 현황<span></div>'
				+ '					<div id="stat_dvbtn_1" style="float:right"></div>'
				+ '				</div>'
				+ '				<div id="stat_Ltop_chart" class="jw_div_border" style="height:150px;">그래프</div>'
				+ '			</div>'
				+ '			<div>'
				+ '				<div class="jw_stat_title">'
				+ '					<div style="float:left"><span class="jw_header_title">> 매출실적<span></div>'
				+ '					<div id="stat_dvbtn_2" style="float:right"></div>'
				+ '				</div>'
				+ '				<div id="stat_div_column" class="jw_div_border" style="height:220px;">그래프</div>'
				+ '			</div>'
				+ '			<div>'
				+ '				<div class="jw_stat_title">'
				+ '					<div style="float:left"><span class="jw_header_title">> 사용자 가입 추이<span></div>'
				+ '					<div id="stat_dvbtn_3" style="float:right"></div>'
				+ '				</div>'
				+ '				<div id="stat_div_line" class="jw_div_border" style="height:170px;">그래프</div>'				
				+ '			</div>'
				+ '		</div>'
				+ '		<div style="float:right; width:44%">'
				+ '			<div>'
				+ '				<div class="jw_stat_title">'
				+ '					<div style="float:left"><span class="jw_header_title">> 도시별 호스트 분포<span></div>'
				+ '					<div id="stat_dvbtn_4" style="float:right"></div>'
				+ '				</div>'
				+ '				<div id="stat_Rtop_chart" class="jw_div_border" style="height:311px;">그래프</div>'
				+ '			</div>'
				+ '			<div>'
				+ '				<div class="jw_stat_title">'
				+ '					<div style="float:left"><span class="jw_header_title">> 도시별 추천 숙소TOP5<span></div>'
				+ '					<div id="stat_dvbtn_5" style="float:right"></div>'
				+ '				</div>'
				+ '				<div id="stat_Lbot_grid" class="jw_div_border" style="height:260px;">리스트</div>'
				+ '			</div>'
				+ '		</div>'
				+ '		</div>'
				+ '</div>';
	}
}

/*******************************
 * 숙소 UI
 *******************************/
var accomUI = {
	frame : ()=>{
		return '<div style="width:80%; margin:auto">'
				+ '		<div style="width:100%; display:inline-block;">'
				+ '			<div id="acc_titleH" style="float:left; height:34px; padding-top:5px"></div>'
				+ '			<div id="acc_input_grp" class="input-group custom-search-form" style="float:right; width:40%;"></div>'
				+ '		</div>'
				+ '		<div id="acc_list" style="width:100%; display:inline-block;"></div>'
				+ '		<div id="acc_pagebar"></div>'
				+ '</div>';	
	},
	
	item : x =>{
		return '<div style="float:left; margin-right:5px; height:178px; width:178px">A'
				+ '</div>'
	}
}

/*******************************
 * 게시판 UI
 *******************************/
var boardUI = {
	frame : ()=>{
		return '<div style="width:70%; margin: auto">'
				+ '		<div style="display:inline-block; margin: 0 auto;">'
				+ '			<div id="brd_input_grp" class="input-group custom-search-form" style="float:left; width:50%"></div>'
				+ '			<div id="brd_btn_grp" style="float:right; height:34px; padding-top:15px"></div>'
				+ '		</div>'
				+ '		<div id="brd_list"></div>'
				+ '		<div id="brd_pagebar"></div>'
				+ '</div>';
	},
	
	tbl : ()=>{
		var theadD =[
	            {width: '5%', txt:'No'},
	            {width: '12%', txt:'공지분류1'},
	            {width: '12%', txt:'공지분류2'},
	            {width: '12%', txt:'공지분류3'},
	            {width: '30%', txt:'제목'},
	            {width: '15%', txt:'작성일'},
	            {width: '10%', txt:' '}
            ];
		
		var tbl = '<table id="brd_tbl" class="table table-bordered" style="margin-top:10px">'
	         		+ '<thead><tr class="hanbit-table tr" >';
        
		            $.each(theadD, (i,j)=>{
		               tbl+='<th style="width:'+j.width+'; text-align:center;">'+j.txt+'</th>'
		            });
         
			        tbl += '</tr></thead><tbody id="brd_tbody">';
			        tbl += '</tbody></table>';
         
         return tbl;
	},
	
	pagebar : ()=>{
		return '<div><nav aria-label="Page navigation" style="width:314px; margin:auto;">'
			+ '      <ul id="page_form" class="pagination">'
			+ '         <li><a onclick="" href="#" style="color:#D9534F;"><span class="glyphicon glyphicon-fast-backward" aria-hidden="true"></span></a></li>'
			+ '         <li><a onclick="" href="#" style="color:#D9534F;" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
			+ '         <li><a href="#" style="color:#D9534F;">1</a></li>'
			+ '         <li><a onclick="" style="color:#D9534F;">2</a></li>'
			+ '         <li><a onclick="" style="color:#D9534F;">3</a></li>'
			+ '         <li><a onclick="" style="color:#D9534F;">4</a></li>'
			+ '         <li><a onclick="" style="color:#D9534F;">5</a></li>'
			+ '         <li><a onclick="" href="#" style="color:#D9534F;" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
			+ '         <li><a onclick="" href="#" style="color:#D9534F;"><span class="glyphicon glyphicon-fast-forward" aria-hidden="true"></span></a></li>'
			+ '     </ul>'
			+ ' </nav></div>'; 
	},
	
	detail : ()=>{
		return '<div style="width:80%; margin:auto">'
				+ '		<div style="width:100%; display:inline-block;">'
				+ '			<div id="brdD_titleH" style="float:left; width:50%"></div>'
				+ '			<div id="brdD_btn_grp" style="float:right; height:28px; padding-top:5px"></div>'
				+ '		</div>'
				+ '		<div style="width:100%; display:inline-block; margin-top:10px;">'
				+ '			<div id="brdD_gubun" style="float:left; width:280px;"></div>'
				+ '			<div id="brdD_title" style="float:left; width:78%;"></div>'
				+ '		</div>'
				+ '		<div id="brd_content" style="width:100%; margin-top:5px; margin-right:5px"><div id="summernote"></div></div>'
				+ '</div>';
	}
}

/*******************************
 * 예약내역 list UI (board)
 *******************************/
var resvbrdUI = {
   frame : ()=>{
      return '<div id="content" style="width:80%; margin:auto">'
            + '      <div id="resv_list"></div>'
            + '      <div id="resv_pagebar"></div>'
            + '</div>';
   },
   
   tbl : ()=>{
      var theadD =[
               {width: '5%', txt:'No'},
               {width: '18%', txt:'숙소이름'},
               {width: '10%', txt:'호스트명'},
               {width: '20%', txt:'체크인/체크아웃'},
               {width: '10%', txt:' '}
            ];
      
      var tbl = '<table id="resv_tbl" class="table table-bordered" style="width:100%; margin-top:10px">'
                  + '<thead><tr class="hanbit-table tr" >';
        
                  $.each(theadD, (i,j)=>{
                     tbl+='<th style="width:'+j.width+'; text-align:center;">'+j.txt+'</th>'
                  });
         
                 tbl += '</tr></thead><tbody id="resv_tbody">';
                 tbl += '</tbody></table>';
         
      return tbl;
   }
}