import $ from 'jquery';



$(function(){

    // 준비하기
    let liWidth= $('#view>ul>li>img').width();
    $('#view>ul>li:last').prependTo('#view>ul');     
    $('#view>ul').css('margin-left','-'+liWidth+'px');
    let str;
    
    
    
    // 타이머 작동
    timer()
    
    // 타이머에 들어가는 함수
    function ani(){
            $('#view>ul').animate({marginLeft:"+="+liWidth+"px"},function(){
                    $('#view>ul>li:last').prependTo('#view>ul');
                    $('#view>ul').css('marginLeft','-'+liWidth+'px');
            })
    }
    
    // 타이머를 작동시키는 함수
    
    function timer(){
            str = setInterval(ani, 2000)
    }
    
    
    // 타이머를 중단시키는 함수
    function stop(){
            clearInterval(str)
    }
    
    
    // 타이머 이벤트 작동
    
    
    $('#view>ul>li').each(function(){
            $(this).on('mouseenter',function(){
                    stop();
            })
    })
    
    
    $('#view>ul>li').each(function(){        
            $(this).on('mouseleave',function(){
                    timer();
            })
    })
    
    
    
// ㅡㅡㅡㅡㅡㅡㅡarticle1 움직이기ㅡㅡㅡㅡㅡㅡㅡㅡ


    // 준비하기
    let liWidth2= $('#show>ul>li').width();
    $('#show>ul>li:last').prependTo('#show>ul');     
    $('#show>ul').css('margin-left','-'+liWidth2+'px');
    let str2;
    
    
    
    // 타이머 작동
    timer2()
    
    // 타이머에 들어가는 함수
    function ani2(){
            $('#show>ul').animate({marginLeft:"+="+liWidth2+"px"},function(){
                    $('#show>ul>li:last').prependTo('#show>ul');
                    $('#show>ul').css('marginLeft','-'+liWidth2+'px');
            })
    }
    

    // 타이머를 작동시키는 함수
    
    function timer2(){
            str2 = setInterval(ani2, 2000)
    }
    
    
    // 타이머를 중단시키는 함수
    function stop2(){
            clearInterval(str2)
    }
    
    
    // 타이머 이벤트 작동
    
    
    $('#show>ul>li').each(function(){
            $(this).on('mouseenter',function(){
                    stop2();
            })
    })
    
    
    $('#show>ul>li').each(function(){        
            $(this).on('mouseleave',function(){
                    timer2();
            })
    })

    })
    


// 공통
// reset : 포트폴리오
//     $(window).on('resize',function(e){
//         window.location.reload();
//         })
        