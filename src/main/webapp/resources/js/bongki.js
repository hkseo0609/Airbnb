var chobongki=chobongki || {};
chobongki.common=(()=>{
   var init = (ctx)=>{
      chobongki.session.init(ctx);
     chobongki.index.init();
   };
   return {init:init}
})();


chobongki.index=(()=>{
   
   var $wrapper,$navbar,$container,ctx,img,js,css,temp;
   var init=function(){
        js=$$('j');
        ctx=$$('x');
        img=$$('i');
        onCreate();
       
     };
    var onCreate=function(){
       
       
       
          $('#email').html(compUI.input('email','text').addClass('cho_input').css({'background-color':'white','placeholder':'이메일'}).attr('placeholder','이메일 주소'));
          $('#pass').html(compUI.input('pass','password').addClass('cho_input').css({'background-color':'white' ,'placeholder':'비밀번호'}).attr('placeholder','비밀번호'));
          $('#facebookDi').html(compUI.btn('facebookBtn').addClass('cho_button').css({'background-color':'#3B5998'}).text('페이스북 계정으로 로그인'));
          $('#joinDiv').html(compUI.btn('join').addClass('cho_button').attr({'data-toggle':'modal', 'data-target':"#myModal222"}).css({'background-color':'#ffb380'}).text('회원가입'));
          $('#loginDiv').html(compUI.btn('login').addClass('cho_button').css({'background-color':'#ff5a5f'}).text('로그인'));  
          $('#joinaddBtn1').html(compUI.input('addemail','text').addClass('cho_input').css({'background-color':'white'}).attr('placeholder','이메일 주소'));
          $('#joinaddBtn2').html(compUI.input('addfirstname','text').addClass('cho_input').css({'background-color':'white'}).attr('placeholder','이름'));
          $('#joinaddBtn3').html(compUI.input('addlastname','text').addClass('cho_input').css({'background-color':'white'}).attr('placeholder','성'));
          $('#joinaddBtn4').html(compUI.input('addpass','text').addClass('cho_input').css({'background-color':'white'}).attr('placeholder','비밀번호'));
          $('#addlogin').html(compUI.btn('addlogin').addClass('cho_button').css({'background-color':'#ff5a5f'}).text('로그인'));
          $('#addjoin').html(compUI.btn('addjoin').addClass('cho_button').css({'background-color':'#ffb380'}).text('회원가입'));
           
          $('#addlogin').attr({'data-toggle':'modal', 'data-target':"#myModal111"}).click(()=>{
             
             alert('로그인ㄱㄱ');
            app.common.init(ctx);
            
            });
            $('#addjoin').attr({'data-toggle':'modal', 'data-target':"#myModal111"}).click(()=>{

               alert('가입완료');
                 app.common.init();
               
            });
          $('#joinDiv').attr({'data-toggle':'modal', 'data-target':"#myModal222"}).click(()=>{
           
             chobongki.index.init(); 
          });
          $('#facebookDiv').click(()=>{
             alert('페이스북버튼');
             
          });
         
          $('#loginDiv').click(()=>{
             alert('로그인');
             
             $('body').html(cho.join());
             chobongki.index.init(); 
          });
             
        
    }; 
          
   
          
          
    
    return {init:init };
})();

chobongki.join=(()=>{
      
      var $wrapper,$navbar,$container,ctx,img,js,css,temp;
      var init=function(){
           js=$$('j');
           ctx=$$('x');
           img=$$('i');
           onCreate();
          
        };
       var onCreate=function(){
          $('#email').html(compUI.input('email','text').addClass('cho_input').css({'background-color':'white','placeholder':'이메일'}).attr('placeholder','이메일 주소'));
             $('#pass').html(compUI.input('pass','password').addClass('cho_input').css({'background-color':'white' ,'placeholder':'비밀번호'}).attr('placeholder','비밀번호'));
             $('#facebookDiv').html(compUI.btn('facebookBtn').addClass('cho_button').css({'background-color':'#3B5998'}).text('페이스북 계정으로 로그인'));
             $('#joinDiv').html(compUI.btn('join').addClass('cho_button').attr({'data-toggle':'modal', 'data-target':"#myModal222"}).css({'background-color':'#ffb380'}).text('회원가입'));
             $('#loginDiv').html(compUI.btn('login').addClass('cho_button').css({'background-color':'#ff5a5f'}).text('로그인'));   
       };
       
       
       return {init:init}
       })();

       
chobongki.profile=(()=>{
   var init=function(ctx){
	   ctx=$$('x');
      $('<div/>',{'id':'container'}).appendTo('body');
       $('#container').html(cho.profile());
       $('#menu5').click(()=>{
            alert('프로필수정')
              $('<div/>',{'id':'container'}).appendTo('body');
               
            chobongki.profile.init();
         });
       $('#menu5-1').click(()=>{
            alert('프로필수정')
            //chobongki.profile.init();
         });
         $('#profileShow')
               .append(compUI.btn('profileShow')
               .addClass('cho_btn')
               .text('프로필보기'));
         $('#profileShow').click(()=>{
            alert('프로필로')
            $('#container').html(cho.profile2());
             $('#menu5-1').click(()=>{
                  alert('프로필수정')
                  chobongki.profile.init();
               });
         });
         $('#updateBtn')
            .append(compUI.btn('update')
                  .addClass('cho_button1')
                  .text('수정하기'));
         $('#update').click(()=>{
                     alert('수정하기');
                     chobongki.profile.init();
                  });
         compUI.btn('menu')
               .addClass('cho_button1')
               .text('프로필수정')
               .css({'background-color':'white','color':'black'})   
               .appendTo('#profileBtn')
               .click(function(){
                  alert('프로필보기');
               });
         compUI.btn('menu2')
         .addClass('cho_button1')
         .text('사진과 비디오').css({'background-color':'white','color':'black'})   
         .appendTo('#profileBtn2')
         .click(function(){
            alert('사진과 비디오');
         });
         compUI.btn('menu3')
         .addClass('cho_button1')
         .text('인증 현황').css({'background-color':'white','color':'black'})   
         .appendTo('#profileBtn3')
         .click(function(){
            alert('인증 현황');
         });
         compUI.btn('menu4')
         .addClass('cho_button1')
         .text('후기').css({'background-color':'white','color':'black'})   
         .appendTo('#profileBtn4')
         .click(function(){
            alert('후기');
         });
         compUI.btn('menu5')
         .addClass('cho_button1')
         .text('추천글').css({'background-color':'white','color':'black'})   
         .appendTo('#profileBtn5')
         .click(function(){
            alert('추천글');
         });
         
               
         $('#deleteBtn').after(compUI.btn('delete').addClass('cho_button1').text('탈퇴'));
         $('#delete').click(()=>{
            alert('탈퇴');
            chobongki.common.init();
         });
         compUI.btn('profileShow')
         .addClass('cho_btn')
         .text('예약보기').appendTo('#profileShow2').click(()=>{
            alert('예약보기');  
           //$('body').html(cho.profileNav());
            jw.resvBoard.list();
         })();
   };
   return { init:init };
})();


// -----------템플릿---------------//
var cho={
      login :()=>{
         return 
         },
         join :()=>{ 
           return '<div style="margin-left: 40%"><div style="width: 30px; display: inline-block;">'
             +'            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:2em;width:2em;display:block;fill:#FF5A5F;" data-reactid="25">'
             +'               <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" data-reactid="26"></path>'
             +'            </svg>'
             +'<br/>'
          +' <div style="margin-left: 40%" id="logincenter"> '
          +' <form  class="cho_form" action="" method="post"> '
          +'   <div id="container_cho"> '
          +'<div style="text-align:center">'
          +'<label style="margin: 0 auto;">페이스북 또는 구글로 회원 가입하세요. </label> '
          +'</div>'
          +'<hr/>'
          +'<div id="joinaddBtn1">' // 회원가입
          +'</div>'
          +'<div id="joinaddBtn2">' // 회원가입
          +'</div>'
          +'<div id="joinaddBtn3">' // 회원가입
          +'</div>'
          +'<div id="joinaddBtn4">' // 회원가입
          +'</div>'
          +'<br/>'
          +'<label style="margin: 0 auto;">생년월일</label> '
          +'<abbr title="회원 가입을 하시려면 만 18세 이상이어야합니다.생일은 다른 회원에게는 공개되지 않습니다">?</abbr>'
          +'<br/>'
          +'<br/>'
          +'<div style="" >'
          +'<select class="cho_select" id="month" name="color">'
          +'<option value="1">1월</option>'
          +'<option value="2">2월</option>'
          +'<option value="3">3월</option>'
          +'<option value="4">4월</option>'
          +'<option value="5">5월</option>'
          +'<option value="6">6월</option>'
          +'<option value="7">7월</option>'
          +'<option value="8">8월</option>'
          +'<option value="9">9월</option>'
          +'<option value="10">10월</option>'
          +'<option value="11">11월</option>'
          +'<option value="12">12월</option>'
          +'  </select> &nbsp&nbsp'
          +'<select class="cho_select" id="day" name="color">'
          +'<option value="1">1일</option>'
          +'<option value="2">2일</option>'
          +'<option value="3">3일</option>'
          +'<option value="4">4일</option>'
          +'<option value="5">5일</option>'
          +'<option value="6">6일</option>'
          +'<option value="7">7일</option>'
          +'<option value="8">8일</option>'
          +'<option value="9">9일</option>'
          +'<option value="10">10일</option>'
          +'<option value="11">11일</option> '
          +'<option value="11">12일</option> '
          +'<option value="11">13일</option> '
          +'<option value="11">14일</option> '
          +'<option value="11">15일</option> '
          +'<option value="11">16일</option> '
          +'<option value="11">17일</option> '
          +'<option value="11">18일</option> '
          +'<option value="11">19일</option> '
          +'<option value="11">20일</option> '
          +'<option value="11">21일</option> '
          +'<option value="11">22일</option> '
          +'<option value="11">23일</option> '
          +'<option value="11">24일</option> '
          +'<option value="11">25일</option> '
          +'<option value="11">26일</option> '
          +'<option value="27">27일</option> '
          +'<option value="28">28일</option> '
          +'<option value="29">29일</option> '
          +'<option value="30">30일</option> '
          +'<option value="31">31일</option> '
          +'  </select >&nbsp&nbsp&nbsp&nbsp'
          +'<select class="cho_select" id="year" name="color">'
          +'<option value="1">1970년</option>'
          +'<option value="2">1971년</option>'
          +'<option value="3">1972년</option>'
          +'<option value="4">1973년</option>'
          +'<option value="5">1974년</option>'
          +'<option value="6">1975년</option>'
          +'<option value="7">1976년</option>'
          +'<option value="8">1977년</option>'
          +'<option value="9">1978년</option>'
          +'<option value="10">1979년</option>'
          +'<option value="11">1980년</option> '
          +'<option value="11">1981년</option> '
          +'<option value="11">1982년</option> '
          +'<option value="11">1983년</option> '
          +'<option value="11">1984년</option> '
          +'<option value="11">1985년</option> '
          +'<option value="11">1986년</option> '
          +'<option value="11">1987년</option> '
          +'<option value="11">1988년</option> '
          +'<option value="11">1989년</option> '
          +'<option value="11">1990년</option> '
          +'<option value="11">1991년</option> '
          +'<option value="11">1992년</option> '
          +'<option value="11">1993년</option> '
          +'<option value="11">1994년</option> '
          +'<option value="11">1995년</option> '
          +'<option value="27">1996년</option> '
          +'<option value="28">1997년</option> '
          +'<option value="29">1998년</option> '
          +'<option value="30">1999년</option> '
          +'<option value="31">2000년</option> '
          +'  </select>'
          +'</div>'
          +'<br/>'
          +' <input type="checkbox" name="" value="" > 에이비앤비와 에어비앤비 파트너의 마케팅 및 정책 관련 소식을 수신하고 싶습니다.'
          +'<br/>'
          +'<br/>'
          +'<p style="color:gray; "><h5>회원 가입 또는 계속하기를 클릭하면 에어비앤비의 서비스 약관,결제 서비스약관,개인정보 보호정책,차별 금지 정책에 동의하는것입니다.</h5></p> '
          +'<div id="addjoin">'
          +'</div>'
          +'<hr/>'
          +'<label style="color:black">이미 에어비앤비 계정이 있나요? </labal> '
          +'<div id="addlogin">'
          +'</div>'
          +'   </labal></div> '
           +' </form> '
          +' </div></div>';
            return 
               },
      profile :()=>{return '<ul class="cho_ul">'
               +'<li class="cho_li"><div class="cho_menu" id="menu1">알림판</div></li>'
               +'<li class="cho_li"><div class="cho_menu" id="menu2">메세지</div></li>'
               +'<li class="cho_li"><div class="cho_menu" id="menu3">숙소 목록</div></li>'
               +'<li class="cho_li"><div class="cho_menu" id="menu4">여행 목록</div></li>'
               +'<li class="cho_li"><div class="cho_menu" id="menu5">프로필 수정</div></li>'
               +'<li class="cho_li"><div class="cho_menu" id="menu6">계정관리</div></li>'
               +'<li class="cho_li"><div class="cho_menu" id="menu7">여행크레딧</div></li>'
            +'</ul>'
         +'<div class="row00">'
            +'<div id="profileBtn"><h4 class="cho_h4"/></div><br />'
            +'<div id="profileBtn2"><h4 class="cho_h4"/></div><br />'
            +'<div id="profileBtn3"><h4 class="cho_h4"/></div><br />'
            +'<div id="profileBtn4"><h4 class="cho_h4"/></div><br />'
            +'<div id="profileShow2"><h4 class="cho_h4"/></div><br />'
            +'<div id="profileShow"></div>'
         +'</div>'
         +'<div class="row11">'
         +'<h4 class="cho_h4">&nbsp&nbsp&nbsp&nbsp필수사항</h4>'
         +'</div>'
         +'<div class="row22">'
            +'<div class="row33" >'
            +'이름 (예:길동)&nbsp&nbsp&nbsp&nbsp<input class="cho_input_text" id="lastname" type="text" placeholder="이름"/><br/><br/>'
            +'성 (예:홍)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input class="cho_input_text" id="firstname" type="text" placeholder="성"/><br />'
            +'<div class="cho_textbox">공개 프로필에는 성을 제외한 이름만 표시됩니다. 예약 요청 시 때 호스트는 회원님의 성과 이름을 모두 확인할 수 있습니다.</div>'
            +'이메일&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input class="cho_input_text" id="email" type="text" placeholder="cho1036216@gmail.com"/><br />'
            +'<div class="cho_textbox">이메일 주소는 다른 에어비앤비 회원에게 공개되지 않습니다.</div>'
            +'거주지주소&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input  class="cho_input_text" id="addres" type="text" placeholder="서울시 양천구 ....(자세히입력하세요)"/><br />'
            +'</div>'
               +'<div style="margin-left: 10.6%">'
                     +'생년월일&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<select class="cho_select" id="month" name="color">'
                     +'<option value="1">1월</option>'
                     +'<option value="2">2월</option>'
                     +'<option value="3">3월</option>'
                     +'<option value="4">4월</option>'
                     +'<option value="5">5월</option>'
                     +'<option value="6">6월</option>'
                     +'<option value="7">7월</option>'
                     +'<option value="8">8월</option>'
                     +'<option value="9">9월</option>'
                     +'<option value="10">10월</option>'
                     +'<option value="11">11월</option>'
                     +'<option value="12">12월</option>'
                       +'</select>'
                     +'<select  class="cho_select" id="day" name="color">'
                     +'<option value="1">1일</option>'
                     +'<option value="2">2일</option>'
                     +'<option value="3">3일</option>'
                     +'<option value="4">4일</option>'
                     +'<option value="5">5일</option>'
                     +'<option value="6">6일</option>'
                     +'<option value="7">7일</option>'
                     +'<option value="8">8일</option>'
                     +'<option value="9">9일</option>'
                     +'<option value="10">10일</option>'
                     +'<option value="11">11일</option> '
                     +'<option value="12">12일</option> '
                     +'<option value="13">13일</option> '
                     +'<option value="14">14일</option> '
                     +'<option value="15">15일</option> '
                     +'<option value="16">16일</option> '
                     +'<option value="17">17일</option> '
                     +'<option value="18">18일</option> '
                     +'<option value="19">19일</option> '
                     +'<option value="20">20일</option> '
                     +'<option value="21">21일</option> '
                     +'<option value="22">22일</option> '
                     +'<option value="23">23일</option> '
                     +'<option value="24">24일</option> '
                     +'<option value="25">25일</option> '
                     +'<option value="26">26일</option> '
                     +'<option value="27">27일</option> '
                     +'<option value="28">28일</option> '
                     +'<option value="29">29일</option> '
                     +'<option value="30">30일</option> '
                     +'<option value="31">31일</option> '
                     +'&nbsp;&nbsp;&nbsp'
                       +'</select>'
                     +'<select  class="cho_select" id="year" name="color">'
                     +'<option value="1">1970년</option>'
                     +'<option value="2">1971년</option>'
                     +'<option value="3">1972년</option>'
                     +'<option value="4">1973년</option>'
                     +'<option value="5">1974년</option>'
                     +'<option value="6">1975년</option>'
                     +'<option value="7">1976년</option>'
                     +'<option value="8">1977년</option>'
                     +'<option value="9">1978년</option>'
                     +'<option value="10">1979년</option>'
                     +'<option value="11">1980년</option> '
                     +'<option value="11">1981년</option> '
                     +'<option value="11">1982년</option> '
                     +'<option value="11">1983년</option> '
                     +'<option value="11">1984년</option> '
                     +'<option value="11">1985년</option> '
                     +'<option value="11">1986년</option> '
                     +'<option value="11">1987년</option> '
                     +'<option value="11">1988년</option> '
                     +'<option value="11">1989년</option> '
                     +'<option value="11">1990년</option> '
                     +'<option value="11">1991년</option> '
                     +'<option value="11">1992년</option> '
                     +'<option value="11">1993년</option> '
                     +'<option value="11">1994년</option> '
                     +'<option value="11">1995년</option> '
                     +'<option value="27">1996년</option> '
                     +'<option value="28">1997년</option> '
                     +'<option value="29">1998년</option> '
                     +'<option value="30">1999년</option> '
                     +'<option value="31">2000년</option> '
                       +'</select>'
                     +'<div class="cho_textbox">이 정보는 통계 목적으로 사용되며 다른 회원들에게 절대 공개되지 않습니다.</div>  '
                     +'전화번호&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input class="cho_input_text" id="phone" type="text" placeholder="010-1234-5678"/>'
                     +'<div class="cho_textbox">예약이 완료될 경우에만 공유됩니다. 번호가 공유되면 개인적으로 연락할 수 있습니다</div><br />'
                     +'자기소개 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
                     +'<textarea class="" id="myprofile"></textarea><br /><br />'
                     +'<div class="aaa">'
                     +'<span id="update"><input class="cho_btn2" type="button" value="수정하기" /></span>'
                     +'<span id="delete"><input class="cho_btn2" type="button" value="탈퇴" /></span></div><br><br><br>'
                     +'</div>'
         +'</div></div>'

                     
                  },
      
      profile2:()=>{ 
         return '<ul class="cho_ul">'
                  +'<li class="cho_li"><div class="cho_menu" id="menu1">알림판</div></li>'
                  +'<li class="cho_li"><div class="cho_menu" id="menu2">메세지</div></li>'
                  +'<li class="cho_li"><div class="cho_menu" id="menu3">숙소 목록</div></li>'
                  +'<li class="cho_li"><div class="cho_menu" id="menu4">여행 목록</div></li>'
                  +'<li class="cho_li"><div class="cho_menu" id="menu5-1">프로필 수정</div></li>'
                  +'<li class="cho_li"><div class="cho_menu" id="menu6">계정관리</div></li>'
                  +'<li class="cho_li"><div class="cho_menu" id="menu7">여행크레딧</div></li>'
               +'</ul>'
            +'<div class="porfile5">'
               +'<p id="menu5-2"><h4 class="cho_h4"/>프로필 수정</p><br />'
               +'<p><h4 class="cho_h4"/>사진과 비디오</p><br />'
               +'<p><h4 class="cho_h4"/>인증 현황</p><br />'
               +'<p><h4 class="cho_h4"/>후기</p><br />'
               +'<p><h4 class="cho_h4"/>추천글</p><br />'
            +'   '
            +'</div>'
            +''
            +'<div class="profile2">'
            +' <span style="margin-left: 7%; margin-top:2% ; font-size: xx-large; font-weight:bold;" >안녕하세요 <span id="profileName" style="margin-left: 7%; margin-top:2% ; font-size: xx-large; font-weight:bold;" ></span>입니다</span>'
           +' <div style="margin-left: 12%; margin-top: 2%; font-size: large ;font-weight: bold;">가입날짜<div id="regdate" style="margin-left: 7%;margin-top: 2%;font-size: medium;font-weight: bold;"></div></div>  '
            +'<div id="#cho_img">'
            +'<img src="resources/img/defaultimg.jpg" alt="" />'
            +'</div>'
            +'</div>'
      },
      profileNav:()=>{return '<ul class="cho_ul">'
          +'<li class="cho_li"><div class="cho_menu" id="menu1">알림판</div></li>'
          +'<li class="cho_li"><div class="cho_menu" id="menu2">메세지</div></li>'
          +'<li class="cho_li"><div class="cho_menu" id="menu3">숙소 목록</div></li>'
          +'<li class="cho_li"><div class="cho_menu" id="menu4">여행 목록</div></li>'
          +'<li class="cho_li"><div class="cho_menu" id="menu5">프로필 수정</div></li>'
          +'<li class="cho_li"><div class="cho_menu" id="menu6">계정관리</div></li>'
          +'<li class="cho_li"><div class="cho_menu" id="menu7">여행크레딧</div></li>'
       +'</ul>';}
               
               
            
}
// -----------컴프---------------//

var compUI={
      btn : (x,y)=>{return $('<button/>',{id : x, type : y});},
      br : x=>{return $('<br/>')},
      div : x=>{return $('<div/>',{id:x});},  // 돔방식 리턴 받을때 append, after..
      div11 : ()=>{return '';},   // 스트링방식 리턴 받을때 html.
      image : (x,y)=>{return $('<img/>',{id : x, src : y});},
      input : (x,y)=>{return $('<input/>',{id : x, type : y});},
      h1 : x=>{return $('<h1/>',{id:x});},
      h2 : x=>{return $('<h2/>',{id:x});},
      h3 : x=>{return $('<h3/>',{id:x});},
      span : x=>{return $('<span/>',{id:x});},
      iTxt : x=>{return $('<input/>',{id:x ,type :'text'});},
      aBtn : x=>{return $('<a/>',{href:'#' , role :'button' , id:x });},
      }
// -----------세션---------------//

chobongki.session=
{
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
var $$= function(x){return chobongki.session.getPath(x);};
/*   ////=====페이스북 api====///
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.10&appId=1697133987026933";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1726756034297526',
      xfbml      : true,
      version    : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });
  function checkLoginState () { 
       FB . getLoginStatus ( function ( response ) { 
         statusChangeCallback ( response ); }); 
  }
  FB.login(function(response) {
          if (response.status === 'connected') {
            // Logged into your app and Facebook.
          } else {
            // The person is not logged into this app or we are unable to tell. 
          }
        });*/