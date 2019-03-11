	window.onload =function () {




		function firstWay(){
	var container =document.getElementById('lunboContainer');
	var list =document.getElementById('lunboList');
	var buttons =document.getElementById('lunboContainer').getElementsByTagName('li');
	var prev =document.getElementById('prev');
	var next =document.getElementById('next');
	var index =1;
	var len=6;
	var interval =3000;
	var animated =false;
	var timer;



	function animate (offset) {
		if (offset==0) {return;}
		var newLeft = parseInt(list.style.left) +offset ;
		animated = true;
                var time = 250;
                var inteval = 10;
                var speed = offset/(time/inteval);
		function go () {
		 if ( (speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft))
		 {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
         else{
			list.style.left=newLeft +'px';
			if(newLeft >-650) { list.style.left=-3900 +'px'};
			if(newLeft < -3900) {list.style.left=-650 +'px'};
			animated =false;
			}
		}
		go();

	}


	next.onclick = function  () {
		if (animated) {return;}//正在动的时候点击无效 jq里边可以指定某个元素的某个状态
		list.style.left=animate(-650) ;
		index++;
		if(index>6){index=1};
		showButton();
	}
	prev.onclick =function () {
		if (animated) {return;}
		list.style.left=animate(+650) ;
		index--;
		if(index<1){index=6};
		showButton();
	}

	function showButton(){
		for (var i = 0; i < buttons.length; i++) {
			if(buttons[i].className ='on')
				buttons[i].className ='';
		}
		buttons[index -1].className='on';
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick=function  () {
			if(this.className=='on'){return;}
			var myindex =parseInt(this.getAttribute('index'));
			var offset =-650 *(myindex -index);

			animate(offset);
			index=myindex;
			showButton();
		}
	}

	function play () {
		timer =setTimeout(function () {
			next.onclick();
			play();
		},interval)//只调用一次？
	}
	function stop() {
		clearTimeout(timer);
	}

	container.onmouseout =play;
	container.onmouseover = stop;//不能用hover 且不要加括号

	play();

}

firstWay();


//sideNews标题的改变
$("#media").hover(function() {
	/* Act on the event */
	$("#zonghe").hide();
	$("#meiti").show();
	$("#media").addClass('Move');
	$("#news").removeClass('Move');
});

$("#news").hover(function() {
	/* Act on the event */
	$("#meiti").hide();
	$("#zonghe").show();
	$("#news").addClass('Move');
	$("#media").removeClass('Move');
	
});


//媒体标题边框的添加
$('#media').hover(function() {
	$('#media').css('border-right','1px solid #685479');
},function() {
	$('#media').css('border-right','none');
});
$('#meiti').hover(function() {
	$('#media').css('border-right','1px solid #685479');
},function() {
	$('#media').css('border-right','none');
});


//新闻标题边框的添加
$('#news').hover(function() {
	$('#news').css('border-left','1px solid #685479');
},function() {
	$('#news').css('border-left','none');
});
$('#zonghe').hover(function() {
	$('#news').css('border-left','1px solid #685479');
},function() {
	$('#news').css('border-left','none');
});


$("#sudi").hover(function() {
	/* Act on the event */
	$("#videoLunboList2").hide();
	$("#videoLunboList1").show();
	$("#sudi").addClass('Move2');
	$("#paike").removeClass('Move2');
});

$("#paike").hover(function() {
	/* Act on the event */
	$("#videoLunboList1").hide();
	$("#videoLunboList2").show();
	$("#paike").addClass('Move2');
	$("#sudi").removeClass('Move2');
});


}


//jq实现轮播
$(function () {
	var container =$('#videoLunboContainer');
	var list =$('#videoLunboList1');
	var prev =$('#prev2');
	var next =$('#next2');
	var timer;

	function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }

                list.animate({'left': offset}, 350, function () {
                    if(left > -420){
                        list.css('left', -420 * 3);
                    }
                    if(left < (-420 * 3)) {
                        list.css('left', -420);
                    }
                });
            }

    	next.click(function(){
		if (list.is(':animated')) { return;}
		animate(-420);
	});

    	prev.click(function () {
		if (list.is(':animated')) {return;}
		animate(+420);
	});

    function play () {
		timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, 6000)
	}

	function stop() {
		clearInterval(timer);
	}

	container.hover(stop,play);
	prev.hover(stop,play);
	next.hover(stop,play);

	play();


})


$(function () {
	var container =$('#videoLunboContainer');
	var list =$('#videoLunboList2');
	var prev =$('#prev2');
	var next =$('#next2');
	var timer;

	function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }

                list.animate({'left': offset}, 350, function () {
                    if(left > -420){
                        list.css('left', -420 * 3);
                    }
                    if(left < (-420 * 3)) {
                        list.css('left', -420);
                    }
                });
            }

    	next.click(function(){
		if (list.is(':animated')) { return;}
		animate(-420);
	});

    	prev.click(function () {
		if (list.is(':animated')) {return;}
		animate(+420);
	});

    function play () {
		timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, 6000);
	}

	function stop() {
		clearInterval(timer);
	}

	container.hover(stop,play);
	prev.hover(stop,play);
	next.hover(stop,play);

	play();

	
	$('#more').click(function () {

		var height =parseInt($('#nextContent').css('height'));
		if(height>3000) {
			$('#more').css('display', 'none');
		}
		var newHeight =height +1000;
		$('#nextContent').css('height', newHeight);
	});
	

})