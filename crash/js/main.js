$(function(){
		// 幫 a.abgne_gotoheader 加上 click 事件
		$('#gotop').click(function(){
			// 讓捲軸用動畫的方式移動到 0 的位置
			// 感謝網友 sam 修正 Opera 問題
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: 0
			}, 500);

			return false;
			
		});
		$(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
	});
$('#work,#game,#me').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;

});

function getData(pageName){
		//XMLHttpRequest 物件專門用來和伺服器做連線
		var req=new XMLHttpRequest();
		req.open("get","http://127.0.0.1/"+pageName);
		req.onload=function(){//load事件，偵測連線的狀態結束
			//連線完成
			var content=document.getElementById("content");
			content.innerHTML=this.responseText;
		}
		req.send();//送出連線
	}

//圖片文字標籤動畫 ------------------------------------------------------------------

$(function(){
	// 把每一個 abgne-yahoo-slide 取出做處理
	$('.imgt').each(function(){
		// 取得說明描述的高度
		var $this = $(this), 
			$desc = $this.find('.desc'),
			_descHeight = $desc.outerHeight(true),
			_speed = 350;
 
		// 設定 $desc 的高度為 0 並顯示
		$desc.css({
			height: 0,
			display: 'block'
		});
 
		// 當滑鼠移到區塊上時
		$this.hover(function(){
			// 改變 $desc 的高度為原本高度
			$desc.stop().animate({
				height: _descHeight
			}, _speed);
		}, function(){
			// 改變 $desc 的高度為 0
			$desc.stop().animate({
				height: 0
			}, _speed);
		});
	});
});

//header 固定 ------------------------------------------------------------------
	
/*$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於100時，關閉區塊 
    if($this_Top >100){
　　　$('#header').stop().animate({top:"-1px"});
　　　}
    if($this_Top <0){
　　　$('#header').stop().animate({top:"-65px"});
　　　}
　　}).scroll();
　});
});*/