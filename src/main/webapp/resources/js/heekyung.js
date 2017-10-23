//바뀐 거
var hee=hee || {};

hee.common = (function(){
	var init = function(ctx){
		hee.session.init(ctx);
	};
	var onCreate=function(){
		setContextView();
	};
	var setContextView=function(){
		
	};
	return {
		init : init
	};
})();

hee.session = {
	init : function(ctx){
		sessionStorage.setItem('x',ctx);
		sessionStorage.setItem('j',ctx+'/resources/js');
		sessionStorage.setItem('i',ctx+'/resources/img');
		sessionStorage.setItem('c',ctx+'/resources/css');
	},
	getPath : function(x){
		return sessionStorage.getItem(x);
	}
};

var $$ = function(x){return hee.session.getPath(x);};


/*******************************
 * 예약페이지
 *******************************/
hee.rev = (function(){
	var $container, ctx, js, img;
	var init=function(){
		//hee.session.init(ctx);
		js=$$('j');
		ctx=$$('x');
		img=$$('i');
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		setContextView();
		var $menubar=$('#menubar');
		var $transBtn=$('#transBtn');
		var $searchBtn=$('#searchBtn');
		var $revBtn=$('#revBtn');
		var $formCm=$('#formCm');
		var $review=$('#review');
		var $container=$('#container')
		
		var menu = $('#menu').offset();
		$(window).scroll(function(){
			if($(document).scrollTop()>550){
				$('#menu').addClass('menufix').css({'width': '100%', 'margin-left':'0'});
				$('#menubar').css({'margin-left':'18%'});
			}else{
				$('#menu').removeClass('menufix').css({'width': '38%','margin-left':'18%'});
				$('#menubar').css({'margin-left':'0'});
			}
		});
		var rev = $('#revBar').offset();
		$(window).scroll(function(){
			if($(document).scrollTop()>550){
				$('#revBar').addClass('revfix').css({'margin-top': '0px'});
			}else{
				$('#revBar').removeClass('revfix').css({'margin-top': '-100px'});
			}
		});
		
		$.getScript(temp,()=>{
			var arr = ['개요','후기','호스트','위치'];
			$.each(arr, function(i,j){
				var x='#moveDiv'+i;
				var y='m'+i;
				compUI.aBtn(x,y)
					.text(j)
					.css({'font-size': '15px','margin-right':'15px', 'color':'black'})
					.appendTo($menubar);
			});
			
			compUI.iBtn('trans')
				.val('이 설명을 한국어로 번역하기')
				.css({'width': '100%', 'height':'40px', 'border': '1px solid', 'text-align': 'center', 'vertical-align': 'middle', 'border-color': '#c4c4c4', 
					'background': 'white', 'font-size': '14px', 'border-radius': '4px', 'cursor': 'pointer', 'font-weight': 'bold', 'line-height': '1.43','outline-style': 'none'})
				.appendTo($transBtn)
				.click(e=>{
					alert('구현되지 않는 기능입니다.');
				});
			compUI.iBtn('search')
				.val('Go')
				.addClass('btn btn-danger')
				.css({'width':'50px','outline-style': 'none'})
				.appendTo($searchBtn)
				.click(e=>{
					alert('후기 검색');
				});
			
			compUI.iBtn('reservation')
			.val('예약 완료')
			.addClass('btn btn-danger','btn-large btn-block')
			.css({'width':'93%', 'height':'50px', 'font-color':'white', 'margin-top':'20px', 'font-size':'22px','font-weight':'bold','outline-style': 'none'})
			.attr('data-toggle','modal')
			.attr('data-target','#myModal')
			.appendTo($revBtn)
			.click(e=>{
				alert('예약 완료');
				$formCm.html(compUI.iBtn('formBtn')
					.val('예약 확인')
					.attr('data-dismiss','modal')
					.addClass('btn btn-danger btn-large btn-block')
					.css({'font-size': '22px', 'font-weight':'bold','outline-style': 'none'})
					.click(e=>{
						alert('예약 확인 완료!');
						

					})
				)
			});
			
			var rvBoard=[
	            { a:'서희경', b:'2017-10-18', c:'What a great experience! If you want a beautiful view and somewhat private quiet setting......  what tove the boat.'},
	            { a:'이지원', b:'2017-10-18', c:'this is your place. Justin was there working to get the boats ready for the potential arrival of Irma and we as love love the boat.'},
	            { a:'이주연', b:'2017-10-18', c:'on a boat.... this is your place. Justin was there working to get the boats ready for the potential arrival '},
	            { a:'김하윤', b:'2017-10-18', c:'Justin was there working to get the boats f Irma and we hadthe storm head our way. He was great to deal with'}
	         ];
			var forTb;
			$.each(rvBoard, function(i,j){
				forTb += '<tr>'
					+'	<td style="font-size: 17px; background: #EAEAEA">'+j.a+'</td>'
					+'</tr>'
					+'<tr>'
					+'	<td style="font-size: 17px;">'+j.b+'</td>'
					+'</tr>'
					+'<tr>'
					+'	<td style="font-size: 17px;">'+j.c+'</td>'
					+'</tr>';
			});
			$('#tbody').html(forTb);
			
			// start Date 설정시 end Date의 min Date 지정
			$( "#startDt" ).datepicker({
	            dateFormat: "yy-mm-dd",
	            dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
	            monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
	            monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
	            defaultDate: "+1w",
	            numberOfMonths: 1,
	            changeMonth: true,
	            showMonthAfterYear: true ,
	            changeYear: true,
	            onClose: function( selectedDate ) {
	                $( "#endDt" ).datepicker( "option", "minDate", selectedDate );
	            }
	        });
			// end Date 설정시 start Date max Date 지정
			$("#endDt").datepicker({
	            dateFormat: "yy-mm-dd",
	            dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
	            monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
	            monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
	            defaultDate: "+1w",
	            numberOfMonths: 1,
	            changeMonth: true,
	            showMonthAfterYear: true ,
	            changeYear: true,
	            onClose: function( selectedDate ) {
	                $( "#startDt" ).datepicker( "option", "maxDate", selectedDate );
	            }
	        });
			// start Date 설정시 end Date 가 start Date보다 작을 경우 end Date를 start Date와 같게 설정
			$("#startDt").datepicker({
	            dateFormat: "yy-mm-dd",
	            defaultDate: "+1w",
	            numberOfMonths: 1,
	            changeMonth: true,
	            showMonthAfterYear: true ,
	            changeYear: true,
	            onClose: function( selectedDate ) {
	                if ($( "#endDt" ).val() < selectedDate)
	                {
	                    $( "#endDt" ).val(selectedDate);
	                }
	            }
	        });
			// end Date 설정시 end Date 가 start Date 보다 작을 경우 start Date를  end Date와 같게 설정
			$( "#endDt" ).datepicker({
		            dateFormat: "yy-mm-dd",
		            defaultDate: "+1w",
		            numberOfMonths: 1,
		            changeMonth: true,
		            showMonthAfterYear: true ,
		            changeYear: true,
		            onClose: function( selectedDate ) {
		                if ($("#startDt" ).val() > selectedDate)
		                {
		                    $("#startDt" ).val(selectedDate);
		                }
		            }
		        });
			
			compUI.btn('upRevA')
			.addClass('glyphicon glyphicon-upload')
			.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
			.appendTo('#revUpA')
			.click(e=>{	
				var state = $('#revNumA').text()*1;
				state++;
				if(state>=6){
					alert('최대 인원은 5명 입니다.');
					state = 5;
				}
				$('#revNumA').text(state);
			});
			compUI.btn('downRevA')
				.addClass('glyphicon glyphicon-download')
				.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
				.appendTo('#revDownA')
				.click(e=>{
					var state = $('#revNumA').text()*1;
					state--;
					if(state<0){
						alert('더 이상 줄일 수 없습니다.');
						state = 0;
					}
					$('#revNumA').text(state);
			});
			compUI.btn('upRevY')
			.addClass('glyphicon glyphicon-upload')
			.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
			.appendTo('#revUpY')
			.click(e=>{	
				var state = $('#revNumY').text()*1;
				state++;
				if(state>=6){
					alert('최대 인원은 5명 입니다.');
					state = 5;
				}
				$('#revNumY').text(state);
			});
			compUI.btn('downRevY')
				.addClass('glyphicon glyphicon-download')
				.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
				.appendTo('#revDownY')
				.click(e=>{
					var state = $('#revNumY').text()*1;
					state--;
					if(state<0){
						alert('더 이상 줄일 수 없습니다.');
						state = 0;
					}
					$('#revNumY').text(state);
			});
			compUI.btn('upRevB')
			.addClass('glyphicon glyphicon-upload')
			.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
			.appendTo('#revUpB')
			.click(e=>{	
				var state = $('#revNumB').text()*1;
				state++;
				if(state>=6){
					alert('최대 인원은 5명 입니다.');
					state = 5;
				}
				$('#revNumB').text(state);
			});
			compUI.btn('downRevB')
				.addClass('glyphicon glyphicon-download')
				.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
				.appendTo('#revDownB')
				.click(e=>{
					var state = $('#revNumB').text()*1;
					state--;
					if(state<0){
						alert('더 이상 줄일 수 없습니다.');
						state = 0;
					}
					$('#revNumB').text(state);
			});
		
		  
		});
		
		
		
	};
	var setContextView=function(){
	
			$('#content').html(reservation.layout());
			alert('수정13331'+ctx);
	};
	return {init:init};
})();
/*******************************
 * 숙소 등록
 *******************************/

hee.register = (function(){
	var js, temp, ctx;
	var init=function(){
		
		js=$$('j');
		ctx=$$('x');
	    temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		
		$.getScript(temp, ()=>{
			$proDiv=$('#proDiv');
			$registerCont=$('#registerCont');
			$nextBtnDiv=$('#nextBtnDiv');
			$title=$('#title');
			$progressBar=$('#progressBar');
			//$proDiv.append(regForm.progress1());
			$registerCont.append(regForm.address());
		
			compUI.btn('nextBtn','nextBtn')
				.text('다음')
				.addClass('btn btn-danger')
				.css({'width': '30%', 'height': '40px', 'font-size': '17px', 'font-weight': 'bold', 'float': 'right'})
				.appendTo($nextBtnDiv)
				.click(e=>{
					
					$registerCont.empty();
					$registerCont.append(regForm.info());
					$title.html('숙소 상세정보를 설정하세요.');
					$progressBar.css({'width': '50%', 'background-color': '#00A699'});
					compUI.btn('upBtnA')
						.addClass('glyphicon glyphicon-upload')
						.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
						.appendTo('#upSpanA')
						.click(e=>{	
							var state = $('#numberA').text()*1;
							state++;
							if(state>=6){
								alert('최대 인원은 5명 입니다.');
								state = 5;
							}
							$('#numberA').text(state);
						});
					compUI.btn('dwonBtnA')
						.addClass('glyphicon glyphicon-download')
						.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
						.appendTo('#dwonSpanA')
						.click(e=>{
							var state = $('#numberA').text()*1;
							state--;
							if(state<0){
								alert('더 이상 줄일 수 없습니다.');
								state = 0;
							}
							$('#numberA').text(state);
						});
					compUI.btn('upBtnY')
						.addClass('glyphicon glyphicon-upload')
						.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
						.appendTo('#upSpanY')
						.click(e=>{	
							var state = $('#numberY').text()*1;
							state++;
							if(state>=6){
								alert('최대 인원은 5명 입니다.');
								state = 5;
							}
							$('#numberY').text(state);
						});
					compUI.btn('dwonBtnY')
						.addClass('glyphicon glyphicon-download')
						.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
						.appendTo('#dwonSpanY')
						.click(e=>{
							var state = $('#numberY').text()*1;
							state--;
							if(state<0){
								alert('더 이상 줄일 수 없습니다.');
								state = 0;
							}
							$('#numberY').text(state);
						});
					compUI.btn('upBtnB')
						.addClass('glyphicon glyphicon-upload')
						.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
						.appendTo('#upSpanB')
						.click(e=>{	
							var state = $('#numberB').text()*1;
							state++;
							if(state>=6){
								alert('최대 인원은 5명 입니다.');
								state = 5;
							}
							$('#numberB').text(state);
						});
					compUI.btn('dwonBtnB')
						.addClass('glyphicon glyphicon-download')
						.css({'vertical-align': 'middle', 'border': '0', 'background': 'white', 'font-size': '25px', 'color': '#00A699','outline-style': 'none'})
						.appendTo('#dwonSpanB')
						.click(e=>{
							var state = $('#numberB').text()*1;
							state--;
							if(state<0){
								alert('더 이상 줄일 수 없습니다.');
								state = 0;
							}
							$('#numberB').text(state)
						});
					
					($nextBtnDiv).html(compUI.btn('nextBtn2','nextBtn2')
							.text('다음')
							.addClass('btn btn-danger')
							.css({'width': '30%', 'height': '40px', 'font-size': '17px', 'font-weight': 'bold', 'float': 'right'})
							.click(e=>{
								$registerCont.empty();
								$registerCont.append(regForm.detail());
								$title.html('숙소 옵션을 설정하세요.');
								$progressBar.css({'width': '75%', 'background-color': '#00A699'});
								($nextBtnDiv).html(compUI.btn('nextBtn2','nextBtn2')
										.text('다음')
										.addClass('btn btn-danger')
										.css({'width': '30%', 'height': '40px', 'font-size': '17px', 'font-weight': 'bold', 'float': 'right'})
										.click(e=>{
											$registerCont.empty();
											$nextBtnDiv.remove();
											$title.remove();
											$registerCont.append(regForm.endForm());
											$progressBar.css({'width': '100%', 'background-color': '#00A699'});
											compUI.btn('confirmBtn')
												.text('확 인')
												.addClass('btn btn-danger')
												.css({'width': '100%', 'height': '50px', 'font-size': '20px', 'font-weight': 'bold'})
												.appendTo('#endBtn')
												.click(e=>{
													alert('메인 페이지로!!!! 수정수정');
													
													app.common.init(ctx);
												});
										})
								);
							})
					);
				});
		});
	};
	var setContentView=function(){
		
		$('#content').html(regForm.layout());
		
	};
	return{init:init}
})();


/*******************************
 * 레이아웃 (예약내역, 숙소등록, 후기)
 *******************************/
var reservation={
		layout:()=>{
			return '<body style="position: relative;">'
			+'<div id="container" style="width: 100%">'
			+'<div id="moveDiv0"></div>'
			+'	<div id="imgbox" style="margin: auto; width: 100%; height:550px;'
			+'	background-image:url(https://a0.muscache.com/im/pictures/53992414/64510035_original.jpg);'
			+'	background-size: cover; background-position: left center;"> '
			+'	</div>'
			+'	<div id="menu" style="padding-top:15px; width: 38%; height:50px; margin-left:18%; background: white; border-bottom: 1px solid #D5D5D5; z-index:800">'
			+'		<div id="menubar" style="height:30px; width: 100%;">'
			+'		</div>'
			+'	</div>'
			+'	<div id="wrapper" style="margin-left:18%; width: 38%; display: inline-block;">'
			+'		<div style="width:100%; display: inline-block;">'
			+'			<div id="summary">'
			+'				<div id="title" style="padding-top:10px;">'
			+'					<div><span id="name" style="font-size: 36px; font-weight:bold;">the hanbit hostel testing</span></div>'
			+'					<div id="info" style="padding-top:4px;">'
			+'						<span style="font-size: 17px;">서희경의 개인실</span>'
			+'						<span style="font-size: 17px;">·</span>'
			+'						<span style="font-size: 17px;">hee</span>'
			+'						<span style="font-size: 17px;">별점</span>'
			+'						<span style="font-size: 17px;">후기 00개</span>'
			+'					</div>'
			+'					<div style="padding-top:20px;">'
			+'						<span class="glyphicon glyphicon-user" aria-hidden="true"></span>'
			+'						<span style="font-size: 17px;">인원 00명</span>'
			+'						<span class="glyphicon glyphicon-home" aria-hidden="true" style="padding-left:10px;"></span>'
			+'						<span style="font-size: 17px;">침실 00개</span>'
			+'						<span class="glyphicon glyphicon-bed" aria-hidden="true" style="padding-left:10px;"></span>'
			+'						<span style="font-size: 17px;">침대 00개</span>'
			+'						<span class="glyphicon glyphicon-tint" aria-hidden="true" style="padding-left:10px;"></span>'
			+'						<span style="font-size: 17px;">욕실 00개</span>'
			+'					</div>'
			+'				</div>'
			+'			</div>'
			+'			<div id="revDetail" style="padding-top:30px;">'
			+'			<div id="transBtn"></div>'
			+'				<div style="padding-top:20px;"><span style="font-size: 17px; font-weight:bold;">숙소</span></div>'
			+'				<div style="padding-top:10px; padding-bottom: 30px; border-bottom: 1px solid #D5D5D5;">'
			+'					<span id="detail_cont" style="padding-top:10px; font-size: 17px;">'
			+'						Room with private bathroom in an old country house, located on a sunny slope overlooking '
			+'						the Idro lake (on the border between Lombardia and Trentino-Alto Adige regions). '
			+'						The house is renewed, finished with pine wood, and with ceramic wood stoves. '
			+'						The room and the bathroom are located in an independent part of the house accessible through '
			+'						a small hallway. There is a spacious kitchen for our guests to use (shared with us). '
			+'						We also have a nice veranda and a very suggestive living room finished with antique wood and sculptures.'
			+'					</span>'
			+'				</div>'
			+'				<div style="padding-top:20px;"><span style="font-size: 17px; font-weight:bold;">편의시설</span></div>'
			+'					<div style="padding-top:10px; padding-bottom: 30px; border-bottom: 1px solid #D5D5D5; width:100%;">'
			+'						<div style="width:48%; display: inline-block;">'
			+'							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M23.5 4H22V2.5C22 1.12 20.884 0 19.503 0H4.497A2.502 2.502 0 0 0 2 2.495V4H.5a.5.5 0 1 0 0 1H2v15.501C2 21.331 2.67 22 3.5 22H5v.5c0 .83.67 1.5 1.5 1.5h14c.831 0 1.5-.666 1.5-1.503V5h1.5a.5.5 0 0 0 0-1zM3 2.495C3 1.675 3.674 1 4.497 1h15.006C20.33 1 21 1.67 21 2.5V4h-2v-.505A.5.5 0 0 1 19.5 3a.5.5 0 0 0 0-1A1.5 1.5 0 0 0 18 3.495V15H3V2.495zM3 16h15v2H3v-2zm.5 5a.498.498 0 0 1-.5-.499V19h15v1.505c0 .27-.226.495-.5.495h-14zM21 22.497c0 .284-.22.503-.5.503h-14a.498.498 0 0 1-.5-.5V22h11.5c.826 0 1.5-.673 1.5-1.495V5h2v17.497z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">편의시설</span>'
			+'							</div>'
			+'							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M21.5 6h-9.066L15.916.777a.5.5 0 1 0-.832-.554L11.232 6H8.768L4.916.223a.5.5 0 0 0-.832.554L7.566 6H2.5A2.504 2.504 0 0 0 0 8.5v13C0 22.885 1.118 24 2.5 24h19c1.376 0 2.5-1.121 2.5-2.5v-13C24 7.116 22.882 6 21.5 6zM23 21.5c0 .826-.675 1.5-1.5 1.5h-19c-.83 0-1.5-.668-1.5-1.5v-13C1 7.674 1.675 7 2.5 7h19c.83 0 1.5.668 1.5 1.5v13zM16.508 9H5.492A2.493 2.493 0 0 0 3 11.492v7.016A2.497 2.497 0 0 0 5.492 21h11.016A2.493 2.493 0 0 0 19 18.508v-7.016A2.497 2.497 0 0 0 16.508 9zM18 18.508c0 .823-.669 1.492-1.492 1.492H5.492C4.672 20 4 19.327 4 18.508v-7.016C4 10.67 4.669 10 5.492 10h11.016c.82 0 1.492.673 1.492 1.492v7.016zM22 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">TV</span>'
			+'							</div>'
			+'							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M5 3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM3.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM12 6c-4.413 0-8 3.585-8 8 0 4.413 3.585 8 8 8 4.413 0 8-3.585 8-8 0-4.413-3.585-8-8-8zm0 15c-3.77 0-6.84-2.992-6.986-6.725.354-.226.843-.567.853-.574 1.64-1.051 3.308-1.062 5.847.71 2.88 2.008 4.986 1.994 6.959.73l.252-.172C18.451 18.373 15.531 21 12 21zm6.133-6.701c-1.64 1.051-3.308 1.062-5.847-.71-2.88-2.008-4.986-1.994-6.959-.73l-.252.172C5.549 9.627 8.469 7 12 7c3.77 0 6.84 2.992 6.986 6.725-.354.226-.843.567-.853.574zM21.5 0H2.501A2.505 2.505 0 0 0 0 2.5v19C0 22.875 1.121 24 2.5 24h19c1.376 0 2.5-1.121 2.5-2.5v-19C24 1.125 22.879 0 21.5 0zM23 21.5c0 .826-.676 1.5-1.5 1.5h-19c-.826 0-1.5-.676-1.5-1.5v-19C1 1.675 1.676 1 2.5 1h19c.826 0 1.5.676 1.5 1.5v19z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">세탁기</span>'
			+'							</div>'
			+'							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M16 13.54V3.991A3.998 3.998 0 0 0 12 0C9.794 0 8 1.788 8 3.992v9.547A5.98 5.98 0 0 0 6 18a6 6 0 1 0 12 0 5.98 5.98 0 0 0-2-4.46zM12 23a5 5 0 0 1-3.182-8.857.5.5 0 0 0 .182-.386V3.992A2.998 2.998 0 0 1 12 1c1.656 0 3 1.341 3 2.992v9.765a.5.5 0 0 0 .182.386A5 5 0 0 1 12 23zm2-8.453V4.005a1.999 1.999 0 1 0-4 0v10.542A3.991 3.991 0 0 0 8 18a4 4 0 0 0 8 0 3.991 3.991 0 0 0-2-3.453zM12 21a3 3 0 0 1-1.285-5.712.5.5 0 0 0 .285-.451V4.005a.999.999 0 1 1 2 0v10.832a.5.5 0 0 0 .285.451A3 3 0 0 1 12 21z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">냉난방</span>'
			+'							</div>'
			+'						</div>'
			+'						'
			+' 						<div style="width:48%; display: inline-block; ">'
			+' 							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.918-5.775a.5.5 0 1 1-.836.55C15.892 12.964 14.012 12 12 12s-3.892.964-5.082 2.775a.5.5 0 0 1-.836-.55C7.462 12.126 9.66 11 12 11c2.34 0 4.538 1.126 5.918 3.225zm2.982-3.03a.5.5 0 1 1-.79.61C18.45 9.662 14.886 8 12 8c-2.832 0-6.256 1.619-8.118 3.823a.5.5 0 0 1-.764-.646C5.168 8.751 8.871 7 12 7c3.19 0 7.047 1.798 8.9 4.194zm2.945-2.333a.5.5 0 0 1-.707-.017C20.198 5.765 16.434 4 12 4S3.8 5.766.862 8.845a.5.5 0 0 1-.724-.69C3.258 4.885 7.278 3 12 3s8.742 1.886 11.863 5.155a.5.5 0 0 1-.017.707z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">무선 인터넷</span>'
			+'							</div>'
			+'							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm.5-17H8v11.5a.5.5 0 0 0 1 0V13h3.5c1.93 0 3.5-1.569 3.5-3.5C16 7.57 14.43 6 12.5 6zm0 6H9V7h3.5C13.878 7 15 8.122 15 9.5c0 1.379-1.123 2.5-2.5 2.5z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">건물 내 무료 주차</span>'
			+'							</div>'
			+'							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M18.84 15.347c.098.108-1.435-1.521-1.677-1.826a13.401 13.401 0 0 1-1.175-1.53c-.097-.145-.69-1.066-.857-1.304-.831-1.186-1.651-1.684-3.125-1.686V9h-.012c-1.474.003-2.294.501-3.125 1.687-.167.238-.76 1.16-.857 1.304a13.18 13.18 0 0 1-1.156 1.507c-.261.328-1.794 1.957-1.696 1.85-.485.53-.867.984-1.186 1.422-.599.826-.936 1.552-.961 2.226-.198 2.31 1.727 4.027 4.22 4.004.879 0 1.426-.198 2.21-.682l.217-.134c.788-.486 1.327-.668 2.34-.666 1.013-.002 1.552.18 2.34.666l.216.134c.785.484 1.332.682 2.215.682 2.489.023 4.414-1.695 4.215-4.028-.024-.65-.361-1.376-.96-2.202-.319-.438-.7-.892-1.186-1.423zM16.776 22c-.673 0-1.054-.138-1.695-.533l-.216-.134c-.932-.575-1.644-.816-2.857-.815h-.016c-1.213 0-1.925.24-2.857.815l-.216.134c-.64.395-1.022.533-1.69.533-1.948.018-3.364-1.245-3.218-2.943.017-.455.28-1.02.773-1.7.292-.403.652-.83 1.114-1.335-.132.145 1.45-1.536 1.722-1.88.438-.488.821-.995 1.223-1.594.107-.16.691-1.068.845-1.287C10.345 10.323 10.876 10 12 10c1.124 0 1.655.322 2.312 1.26.154.219.738 1.127.845 1.287.402.6.785 1.106 1.242 1.617.253.32 1.835 2.002 1.703 1.857.462.505.822.932 1.114 1.336.493.68.756 1.244.772 1.675.147 1.722-1.27 2.985-3.212 2.967zM8 8c1.7 0 3-1.82 3-4 0-2.18-1.3-4-3-4S5 1.82 5 4c0 2.18 1.3 4 3 4zm0-7c1.061 0 2 1.314 2 3s-.939 3-2 3-2-1.314-2-3 .939-3 2-3zM6 11c0-2.18-1.3-4-3-4s-3 1.82-3 4c0 2.18 1.3 4 3 4s3-1.82 3-4zm-3 3c-1.061 0-2-1.314-2-3s.939-3 2-3 2 1.314 2 3-.939 3-2 3zm18-7c-1.7 0-3 1.82-3 4 0 2.18 1.3 4 3 4s3-1.82 3-4c0-2.18-1.3-4-3-4zm0 7c-1.061 0-2-1.314-2-3s.939-3 2-3 2 1.314 2 3-.939 3-2 3zm-5-6c1.7 0 3-1.82 3-4 0-2.18-1.3-4-3-4s-3 1.82-3 4c0 2.18 1.3 4 3 4zm0-7c1.061 0 2 1.314 2 3s-.939 3-2 3-2-1.314-2-3 .939-3 2-3z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">애완동물 입실 가능</span>'
			+'							</div>'
			+'							<div style="padding-top:15px;">'
			+'								<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1.2em; width: 1.2em; fill: currentcolor;">'
			+'									<path d="M10.5 0a.5.5 0 0 0-.5.5v7.003A.498.498 0 0 1 9.51 8H8V.5a.5.5 0 1 0-1 0V8H5.49A.499.499 0 0 1 5 7.503V.5a.5.5 0 1 0-1 0v7.003C4 8.327 4.672 9 5.49 9H7v5c0 .03.012.057.017.086A1.49 1.49 0 0 0 6 15.498v7.004C6 23.33 6.672 24 7.5 24c.831 0 1.5-.67 1.5-1.498v-7.004c0-.658-.427-1.21-1.017-1.412.005-.029.017-.055.017-.086V9h1.51A1.5 1.5 0 0 0 11 7.503V.5a.5.5 0 0 0-.5-.5zM8 15.498v7.004a.496.496 0 0 1-.5.498.499.499 0 0 1-.5-.498v-7.004c0-.277.221-.498.5-.498.277 0 .5.223.5.498zM19.5 0h-2.003C16.097 0 15 1.071 15 2.5v7c0 1.428 1.096 2.5 2.497 2.5H19v2.092a1.489 1.489 0 0 0-.5-.092c-.831 0-1.5.67-1.5 1.498v7.004c0 .828.672 1.498 1.5 1.498.831 0 1.5-.67 1.5-1.498V0h-.5zm-2.003 11C16.643 11 16 10.37 16 9.5v-7c0-.87.645-1.5 1.497-1.5H19v10h-1.503zM19 22.502a.496.496 0 0 1-.5.498.499.499 0 0 1-.5-.498v-7.004c0-.277.221-.498.5-.498.277 0 .5.223.5.498v7.004z" fill-rule="evenodd"></path>'
			+'								</svg>'
			+'								<span style="font-size: 17px; padding-left:10px;">부엌</span>'
			+'							</div>'
			+' 						</div>'
			+'					</div>'
			+'				<div style="padding-top:20px;"><span style="font-size: 17px; font-weight:bold;">침대/침구</span></div>'
			+'					<div style="padding-top:10px; padding-bottom: 30px; border-bottom: 1px solid #D5D5D5; width:100%;">'
			+'						<div style="width: 50px; height: 50px; background-image:url(./resources/img/bedroom.JPG);"></div>'
			+'						<div style="padding-top:5px;">'
			+'							<span style="font-size: 17px;">1번 침실</span><br />'
			+'							<span id="bednum" style="font-size: 17px;">퀸 베드 1개</span>'
			+'						</div>'
			+'					</div>'
			+'				<div style="padding-top:20px;"><span style="font-size: 17px; font-weight:bold;">예약취소</span></div>'
			+'					<div style="padding-top:10px; padding-bottom: 30px; border-bottom: 1px solid #D5D5D5; width:100%;">'
			+'						<div style="padding-top:10px;"><span id="refund" style="font-size: 17px;">엄격 환불 정책</span></div>'
			+'						<div style="padding-top:10px;"><span id="refund_de" style="font-size: 17px;">체크인 30일 전까지 예약을 취소하면 전액 환불받을 수 있습니다. 30일이 남지 않은 시점에서 취소하면 1박 요금의 50%와 수수료 전액을 환불받을 수 있습니다.</span></div>'
			+'					<div id="moveDiv1"></div>'
			+'					</div>'
			+'			</div>'
			+'			<div id="review" style="padding-top:40px;">'
			+'				<div style="width:100%; padding-bottom: 20px;">'
			+'					<div style="width:150px; display: inline-block;">'
			+'						<span style="font-size: 28px; font-weight:bold;">후기 134개</span>'
			+'					</div>'
			+'					<div style="width:100px; display: inline-block;">'
			+'						<span style="font-size: 20px;">별점</span>'
			+'					</div>'
			+'					<div style="width:300px; display: inline-block; float:right;">'
			+'						<div id="searchBtn" style="width:50px; display: inline-block; float:right;">	'
			+'						</div>'
			+'						<div style="width:200px; display: inline-block; float:right; padding-right: 10px;">'
			+'							<input id="msg" type="text" class="form-control" style="width:100%" name="searchWord" placeholder="후기 검색" >'
			+'							<input type="hidden" name="action" value="search"/>'
			+'							<input type="hidden" name="pageName" value="list" />'
			+'							<input type="hidden" name="pageNumber" value="1" />'
			+'						</div>'
			+'					</div>'
			+'				</div>'
			+'				<div style="width:100%; padding-bottom: 30px; border-bottom: 1px solid #D5D5D5;">'
			+'					<table class="table">'
			+'						<tbody id="tbody">'
			+'					    </tbody>'
			+'				  	</table>'
			+'					<nav aria-label="Page navigation" style="width:350px; margin:0 auto;">'
			+'					  <ul class="pagination">'
			+'					  	<li><a onclick="" style="color:#D9534F;"><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span></a></li>'
			+'					    <li>'
			+'					      <a onclick="" style="color:#D9534F;" aria-label="Previous">'
			+'					        <span aria-hidden="true">&laquo;</span>'
			+'					      </a>'
			+'					   </li>'
			+'						     <li><a href="#" style="color:#D9534F;">1</a></li>'
			+'						     <li><a href="#" onclick="" style="color:#D9534F;">2</a></li>'
			+'						     <li><a href="#" onclick="" style="color:#D9534F;">3</a></li>'
			+'						     <li><a href="#" onclick="" style="color:#D9534F;">4</a></li>'
			+'						     <li><a href="#" onclick="" style="color:#D9534F;">5</a></li>'
			+'					    <li>'
			+'					      <a onclick="" style="color:#D9534F;" aria-label="Next">'
			+'					        <span aria-hidden="true">&raquo;</span>'
			+'					      </a>'
			+'					    </li>'
			+'					    <li><a onclick="" style="color:#D9534F;"><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span></a></li>'
			+'					  </ul>'
			+'					</nav>'
			+'					<div id="moveDiv2"></div>'
			+'				</div>'
			+'			</div>'
			+'			<div id="host_info" style="padding-top:40px; padding-bottom: 30px; border-bottom: 1px solid #D5D5D5;">'
			+'				<span style="font-size: 28px; font-weight:bold;">호스트:</span>'
			+'				<span id="host_id" style="font-size: 28px; font-weight:bold;">아이디</span>'
			+'				<span style="font-size: 28px; font-weight:bold;">님</span>'
			+'				<div id="host_info" style="padding-top:10px;">'
			+'					<span id="host_addr" style="font-size: 17px;">호스트 주소</span>'
			+'					<span style="font-size: 17px;">/ 회원가입 :</span>'
			+'					<span id="host_date" style="font-size: 17px;">호스트 회원가입 날짜</span>'
			+'				</div>'
			+'				<div style="padding-top:10px;">'
			+'					<img src="https://a0.muscache.com/airbnb/static/badges/verified_badge-6ee370f5ca86a52ed6198fac858ac1f4.png" width="32" height="32" class="_j86mc1" alt="인증됨" >'
			+'					<span style="font-size: 17px;">인증됨</span>'
			+'				</div>'
			+'				<div id="moveDiv3"></div>'
			+'			</div>'
			+'		</div>'
			+'		<div id="location" style="margin: 0 auto; width: 100%; padding-top:40px; padding-bottom: 20px;">'
			+'			<span style="font-size: 28px; font-weight:bold;">지역정보</span>'
			+'			<div style="padding-top:10px;">'
			+'				<span id="house_addr" style="font-size: 17px;">숙소 상세 주소</span>'
			+'			</div>'
			+'			<div style="margin-top:10px; height: 500px; background-color: #FFD9EC">'
			+'				<span style="font-size: 17px;">지도 구현</span>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
			+'	'
			+'	<div id="revBar" style="width:27%; height:430px; display: inline-block; float:right; margin-right:17%; margin-top:-100px; padding-left:3%; z-index:900">'
			+'		<div style="width:100%; height:50px; background-color: #414141; padding-top: 10px; padding-left: 20px; opacity:0.9;">'
			+'			<span id="rate" style="color:white; font-size: 25px; font-weight:bold;">000,000</span>'
			+'			<span style="color:white; font-size: 25px; font-weight:bold;">원</span>'
			+'			<span style="color:white; font-size: 17px;">/박</span>'
			+'		</div>'
			+'		<div style="width:100%; height:430px; border: 1px solid; border-color: #c4c4c4; background: white; padding-top: 20px; padding-left: 20px;">'
			+'			<div class="form-group">'
			+'			    <div style="width: 100%">'
			+'			       <div style="width: 45%; display: inline-block;">'
			+'			            <div class="form-group">'
			+'			            	<span style="font-size: 20px;">체크인</span>'
			+'							<span class="glyphicon glyphicon-calendar"></span>'
			+'			                <div id="datepicker1" style="width: 100%; padding-top:10px;">'
			+'			                    <input type="text" id="startDt" class="form-control" name="checkin" style="height:40px; font-size:15px;" required="required"/>'
			+'			                </div>'
			+'			            </div>'
			+'			        </div>'
			+'			        <div style="width: 45%; display: inline-block;">'
			+'			            <div class="form-group">'
			+'			            	<span style="font-size: 20px;">체크아웃</span>'
			+'			                <span class="glyphicon glyphicon-calendar"></span>'
			+'			                <div id="datepicker2" style="padding-top:10px;">'
			+'			                    <span><input type="text" class="form-control" id="endDt" name="checkout" style="height:40px; font-size:15px;" required="required"/></span>'
			+'			                </div>' 
			+'			            </div>'
			+'			        </div>'
			+'			    </div>'
			+'			</div>'
			+'			<div>'
			+'				<div style="border-bottom: 1px solid #D5D5D5; vertical-align: middle; width:93%; height:35px;">'
			+'					<span style="font-size:20px;">인원</span>'
			+'					<span class="glyphicon glyphicon-user" style="font-size:15px;"></span>'
			+'				</div>'
			+'				<div style="margin-top:6%;">'
			+'					<div style="display: inline-block;">'
			+'			   			<span style="font-size:18px">성인</span>'
			+'					</div>'
			+'					<div style="display: inline-block; float:right; padding-right:6%;">'
			+'		        		<span id="revUpA"></span>'
			+'		        		<span id="revNumA" style="font-size:18px;">0</span>'
			+'		        		<span id="revDownA"></span>'
			+'					</div>'
			+'				</div>'
			+'				<div style="margin-top:5%;">'
			+'					<div style="display: inline-block;">'
			+'			   			<span style="font-size:18px">청소년</span>'
			+'					</div>'
			+'					<div style="display: inline-block; float:right; padding-right:6%;">'
			+'			       		<span id="revUpY"></span>'
			+'			       		<span id="revNumY" style="font-size:18px;">0</span>'
			+'			       		<span id="revDownY"></span>'
			+'					</div>'
			+'				</div>'
			+'				<div style="margin-top:5%">'
			+'					<div style="display: inline-block;">'
			+'			   			<span style="font-size:18px">유아</span>'
			+'					</div>'
			+'					<div style="display: inline-block; float:right; padding-right:6%;">'
			+'		        		<span id="revUpB"></span>'
			+'		        		<span id="revNumB" style="font-size:18px;">0</span>'
			+'		        		<span id="revDownB"></span>'
			+'					</div>'
			+'				</div>'
			+'			</div>'
			+'			<div id="revBtn" style="margin-top:8%">'
			+'			</div>'
			+'		</div>'
			+'	</div>'
			+'</div>'//
			+'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >'
			+'	  <div class="modal-dialog">'
			+'	    <div class="modal-content">'
			+'	      <div class="modal-header">'
			+'			<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>'
			+'			<div class="modal-title" id="myModalLabel" style="width: 50%;">'
			+'				<div style="width: 30px; display: inline-block;">'
			+'				<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:2em;width:2em;display:block;fill:#FF5A5F;" data-reactid="25">'
			+'					<path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" data-reactid="26"></path>'
			+'				</svg>'
			+'				</div>'
			+'				<div style="display:inline-block;">'
			+'					<span style="font-size: 20px; font-weight:bold;">예약 정보 확인</span>'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	    <div class="modal-body" style="margin: 0 auto; width: 80%;">'
			+'	      	<div style="margin: auto; width: 100%; height:300px;'
			+'			background-image:url(https://a0.muscache.com/im/pictures/666eeff6-12f5-4a94-a2d7-fc727c95e5cf.jpg);'
			+'			background-size: cover;">'
			+'	      	</div>'
			+'	      	<div style="padding-top: 5px; width: 100%; height: 40px;">'
			+'	      		<span id="formRevName" style="float:right; font-size: 25px; font-weight:bold;">the hanbit hostel testing</span>'
			+'	      		<br />'
			+'	      	</div>'
			+'	      	<div style="width: 100%">'
			+'	      		<span style="float:right; font-size: 17px; font-weight:bold;">호스트 이름</span>'
			+'	      	</div>'
			+'	      	<div style="margin-top:30px; padding-top:10px; height: 40px; border-bottom: 1px solid #D5D5D5; font-size: 17px;">'
			+'	      		<span>예약 날짜 :</span>'
			+'	      		<span id="formStartDt" style="margin-left:10px;">2017.00.00</span>'
			+'	      		<span>~</span>'
			+'	      		<span id="formEndDt">2017.00.00</span>'
			+'	      	</div>'
			+'	      	<div style="padding-top:10px; height: 90px; font-size: 17px; border-bottom: 1px solid #D5D5D5;">'
			+'	     	 	<span>성인 : </span><span id="formA" style="margin-left:10px;">00</span>'
			+'	     	 	<br />'
			+'	     	 	<span>청소년 :</span><span id="formY" style="margin-left:10px;">00</span>'
			+'	     	 	<br />'
			+'	     	 	<span>유아 :</span><span id="formC" style="margin-left:10px;">00</span>'
			+'	      	</div>'
			+'	      	<div style="padding-top:10px; height: 40px; font-size: 17px;">'
			+'	      		<span>총 금액 :</span>'
			+'	      		<span style="margin-left:10px;">000,000</span>'
			+'	      		<span>원</span>'
			+'	      	</div>'
			+'	    </div>'
			+'	    <div id="formCm" class="modal-footer">'
			+'	    </div>'
			+'	  </div>'
			+'	</div>'
			+'</div>';
		},
};
var regForm={
		layout : ()=>{
			return '<div id="container"  style="height: 100%;">'
			+'	<div id="proDiv"> '
			+'		<div class="progress"  style="height: 17px; background-color: #E7E7E7; margin-bottom:0;">'
			+'			<div id="progressBar" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 25%; background-color: #00A699;">'
			+'			    <span class="sr-only"></span>'
			+'			</div>'
			+'		</div>'
			+'	</div> '
			+'	<div> '
			+'		<div id="register" style="width: 35%; height: 760px; margin:0 auto; background-color: white; padding-top: 4%;">'
			+'			<div style="width: 100%; padding-left:10%;">'
			+'				<div>'
			+'				<span id="title" style="font-size: 30px; font-weight: 700;">숙소의  위치를 알려주세요.</span>'
			+'				</div>'
			+'				<div style="padding-top: 4%;">'
			+'					<div id="registerCont">'
			+'					</div>'
			+'				</div>'
			+'				<div id="nextBtnDiv" style="background-color: white; padding-top: 10%;  padding-right: 5%;">'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
			+'</div>';
		},
		
		address : ()=>{
			return 			'	<div id="addressForm">'
			+'						<div style="padding-top: 2%; width: 100%">'
			+'							<div style="display: inline-block; width:41%; ">'
			+'								<span style="font-size: 20px;">시/도</span>'
			+'								<br />'
			+'								<input style="width:100%;height:50px;font-size:17px" type="text" id="address1" placeholder="예) 서울특별시" name="address1">'
			+'							</div>'
			+'							<div style="display: inline-block; width:46%; padding-left:5%;">'
			+'								<span style="font-size: 20px;">구/군</span>'
			+'								<br />'
			+'								<input style="width:100%;height:50px;font-size:17px; " type="text" id="address2" placeholder="예) 마포구" name="address2">'
			+'							</div>'
			+'						</div>'
			+'						<div style="padding-top: 4%;">'
			+'							<span style="font-size: 20px;">도로명 / 건물번호 / 아파트 이름 / 건물 이름</span>'
			+'							<input style="width:88%;height:50px;font-size:17px" type="text" id="address3" placeholder="예) 백범로 23" name="address3">'
			+'						</div>'
			+'						<div style="padding-top: 4%;">'
			+'							<span style="font-size: 20px;">아파트/건물명 및 동/호수(선택사항)</span>'
			+'							<input style="width:88%;height:50px;font-size:17px" type="text" id="address4" placeholder="예) 거구장 3층" name="address4">'
			+'						</div>'
			+'						<div style="padding-top: 4%;">'
			+'							<span style="font-size: 20px;">우편번호</span>'
			+'							<br />'
			+'							<input style="width:88%;height:50px;font-size:17px" type="text" id="address" placeholder="예) 06014" name="address5">'
			+'						</div>'
			+'						</div>';
		},
		
		info : ()=>{
			return '		<div id="infoForm">'
			+'			<div>'
			+'				<div>'
			+'					<span style="font-size: 20px;">숙소 유형</span>'
			+'				</div>'
			+'				<select id="house" style="width:41%;height:50px;font-size:15px">'
			+'					<option value="1">개인실</option>'
			+'				</select>'
			+'				<select id="house" style=" width:41%; margin-left:5%; height:50px; font-size:15px">'
			+'					<option value="1">침실 1개</option>'
			+'					<option value="2">침실 2개 </option>'
			+'					<option value="3">침실 3개 </option>'
			+'					<option value="4">침실 4개 </option>'
			+'					<option value="5">침실 5개 </option>'
			+'				</select>'
			+'			</div>	'
			+'			<div style="margin-top: 5%;">'
			+'				<div>'
			+'					<span style="font-size: 20px;">숙박 인원(명)</span>'
			+'				</div>'
			+'			   	<div class="number" style="margin-top: 10px;">'
			+'			   		<div style="width: 28%; display: inline-block;">'
			+'			   			<span id="upSpanA" style="font-size:18px">성인</span>'
			+'			         	<span id="numberA" style="font-size:18px;">0</span>'
			+'			         	<span id="dwonSpanA"></span>'
			+'		            </div>'
			+'		            <div style="width: 33%; display: inline-block;">'
			+'			   			<span id="upSpanY" style="font-size:18px">청소년</span>'
			+'			         	<span id="numberY" style="font-size:18px;">0</span>'
			+'			         	<span id="dwonSpanY"></span>'
			+'		            </div>'
			+'		            <div style="width: 30%; display: inline-block;">'
			+'			   			<span id="upSpanB" style="font-size:18px">유아</span>'
			+'			         	<span id="numberB" style="font-size:18px;">0</span>'
			+'			         	<span id="dwonSpanB"></span>'
			+'		            </div>'
			+'		         </div>'
			+'         	</div>'
			+'			<div style="margin-top: 5%;">'
			+'				<span style="font-size: 20px;">숙소 이름</span>'
			+'				<input style="width:88%; height:50px; font-size:15px" type="text" id="houseName">'
			+'			</div>'
			+'			<div style="margin-top: 5%;">'
			+'				<span style="font-size: 20px;">1박 (하룻밤) 이용 요금</span>'
			+'				<br />'
			+'				<span style="font-size: 15px; color: red;">※최대 200,000원을 넘길 수 없습니다.</span>'
			+'				<input style="width:88%; height:50px; font-size:15px" type="text" id="houseRate" placeholder="예) 89000">'
			+'			</div>'
			+'		</div>';
		},
		
		detail: ()=>{
			return '<div style="padding-top: 2%; width: 100%">'
			+'				<div style="display: inline-block; width:41%; ">'
			+'					<span style="font-size: 20px;">침대 개수</span>'
			+'					<br />'
			+'					<select id="house" style="width:100%; height:50px;font-size:17px; outline-style: none">'
			+'					<option value="1">1</option>'
			+'					<option value="2">2</option>'
			+'					<option value="3">3</option>'
			+'					<option value="3">4</option>'
			+'					<option value="3">5</option>'
			+'				</select>'
			+'				</div>'
			+'				<div style="display: inline-block; width:46%; padding-left:5%;">'
			+'					<span style="font-size: 20px;">욕실개수</span>'
			+'					<br />'
			+'					<select id="house" style="width:100%; height:50px;font-size:17px; outline-style: none">'
			+'					<option value="1">1</option>'
			+'					<option value="2">2</option>'
			+'					<option value="3">3</option>'
			+'					<option value="3">4</option>'
			+'					<option value="3">5</option>'
			+'				</select>'
			+'				</div>'
			+'			</div>'
			+'			<div style="padding-top: 10%;">'
			+'				<span style="font-size: 20px;">편의시설 / 중복선택 가능</span>'
			+'			</div>'
			+'			<div style="margin-top:5px; padding-top:10px; width:88%; font-size: 20px;">'
			+'				<div>'
			+'			 	    <span><input type="checkbox" name="subject" value="편의시설" checked="checked" />편의시설</span> '
			+'				    <span style="margin-left:25px;"><input type="checkbox" name="subject" value="티비" />티비</span> '
			+'					<span style="margin-left:25px;"><input type="checkbox" name="subject" value="와이파이"  />주차장</span>'
			+'					<span style="margin-left:25px;"><input type="checkbox" name="subject" value="주차장" />와이파이</span>'
			+'				</div>'
			+'				<div>'
			+'					<span><input type="checkbox" name="subject" value="애완동물" />애완동물</span>'
			+'					<span style="margin-left:25px;"><input type="checkbox" name="subject" value="부엌" />부엌</span>'
			+'					<span style="margin-left:25px;"><input type="checkbox" name="subject" value="세탁기" />세탁기</span>'
			+'					<span style="margin-left:25px;"><input type="checkbox" name="subject" value="냉난방" />냉난방</span>'
			+'				</div>'
			+'			</div>'
			+'			<div>'
			+'			 	<div style="padding-top: 10%;">'
			+'					<span style="font-size: 20px;">숙소 상세 설명</span>'
			+'				</div>'
			+'				<div>'
			+'					<textarea name="detail_cont" cols="57%" rows="7"/>'	
			+'				</div>'
			+'			</div>';

		},
		
		endForm: ()=>{
			return '<div style="width:100%; height: 650px;">'
			+'				<div style="padding-right: 30%; padding-left: 30%; padding-top: 15%">'
			+'					<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:10em;width:10em;display:block;fill:#FF5A5F;" data-reactid="25">'
			+'			            <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" data-reactid="26"></path>'
			+'			        </svg>'
			+'		        </div>'
			+'				<div style="padding-top: 10%">'
			+'					<span style="font-size: 28px; font-weight: 700;">이제 숙소 등록이 완료되었습니다!</span>'
			+'				</div>'
			+'				<div style="width:90%; margin: 0 auto; padding-top: 25px; padding-right:10%; text-align: center;">'
			+'					<span style="font-size: 20px; font-weight: 500; padding-top: 20%">이제 회원님의 지역에서 묵을 게스트들을 찾아 부수입을 올릴 수 있습니다.</span>'
			+'				</div>'
			+'				<div id="endBtn" style=" margin: 0 auto; padding-top: 30%; padding-right:10%">'
			+'				</div>'
			+'			</div>';
		}
		
};
