window.onload=function(){
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}


	// var cover=document.getElementsByClassName('cover')[0];
	// window.onscroll=function(){
	// 	var st=document.documentElement.scrollTop || document.body.scrollTop;
	// 	if(st>180){
	// 		cover.style.position='fixed';
	// 	}else{
	// 		cover.style.position='static';
	// 	}
	// }
	var top5_rig_2=document.getElementsByClassName("top5_rig_2")[0];
	var top5_rig_121=document.getElementById("top5_rig_121");
	var top5_rig_111=document.getElementById("top5_rig_111");
	var top5_rig_1111=document.getElementById("top5_rig_1111");
	top5_rig_2.onmouseover=function(){		
		var timer2=setInterval(function(){
			var now=parseInt(getStyle(top5_rig_2,'left'));
			top5_rig_2.style.left=now-90+'px';
			if(parseInt(getStyle(top5_rig_2,"left"))<=-90){
				clearInterval(timer2);
			}
		},300);
	}
	top5_rig_121.onmouseover=function(){		
		var timer1=setInterval(function(){
			var now=parseInt(getStyle(top5_rig_121,'left'));
			top5_rig_121.style.left=now-90+'px';
			if(parseInt(getStyle(top5_rig_121,"left"))<=-90){
				clearInterval(timer1);
			}
		},300);
	}
	top5_rig_111.onmouseover=function(){
		
		
		var timer1=setInterval(function(){
			var now=parseInt(getStyle(top5_rig_111,'left'));
			top5_rig_111.style.left=now-90+'px';
			if(parseInt(getStyle(top5_rig_111,"left"))<=-90){
				clearInterval(timer1);
			}
		},300);
	}
	top5_rig_1111.onmouseover=function(){
		
		
		var timer1=setInterval(function(){
			var now=parseInt(getStyle(top5_rig_1111,'left'));
			top5_rig_1111.style.left=now-90+'px';
			if(parseInt(getStyle(top5_rig_1111,"left"))<=-90){
				clearInterval(timer1);
			}
		},300);
	}
	top5_rig_2.onmouseout=function(){
		
		
		var timer22=setInterval(function(){
			var now22=parseInt(getStyle(top5_rig_2,"left"));
			top5_rig_2.style.left=now22+90+"px";
			if(parseInt(getStyle(top5_rig_2,"left"))>=0){
				clearInterval(timer22);
			}
		},300);
	}
	top5_rig_111.onmouseout=function(){
		
		
		var timer22=setInterval(function(){
			var now22=parseInt(getStyle(top5_rig_111,"left"));
			top5_rig_111.style.left=now22+90+"px";
			if(parseInt(getStyle(top5_rig_111,"left"))>=0){
				clearInterval(timer22);
			}
		},300);
	}
	top5_rig_121.onmouseout=function(){
		
		var timer22=setInterval(function(){
			var now22=parseInt(getStyle(top5_rig_121,"left"));
			top5_rig_121.style.left=now22+90+"px";
			if(parseInt(getStyle(top5_rig_121,"left"))>=0){
				clearInterval(timer22);
			}
		},300);
	}
	top5_rig_1111.onmouseout=function(){
		
		
		var timer22=setInterval(function(){
			var now22=parseInt(getStyle(top5_rig_1111,"left"));
			top5_rig_1111.style.left=now22+90+"px";
			if(parseInt(getStyle(top5_rig_1111,"left"))>=0){
				clearInterval(timer22);
			}
		},300);
	}

	var con_mid_top=document.getElementById('con_mid_top');
	var navChilist=document.getElementById('nav').children;
	var con_mid_top_all=document.getElementById('con_mid_top_all');
	var con_box_left=document.getElementById('con_box_left');
	var con_box_right=document.getElementById('con_box_right');
	var index1=1;
	var timer;
	var isMoving=false;

	function functionAll1(obj,obj1,callback){
		clearInterval(obj,timer);
		obj.timer=setInterval(function(){
			var isStop=true;
			for(var attr in obj1){
				var now=0;
				if(attr=='opacity'){
					now=parseInt(getStyle(obj,attr)*100);
				}else{
					now=parseInt(getStyle(obj,attr));
				}
				var speed=(obj1[attr]-now)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				var cur=now+speed;
				if(attr=='opacity'){
					obj.style[attr]=cur/100;
				}else{
					obj.style[attr]=cur+'px';
				}
				if(obj1[attr]!=cur){
					isStop=false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		},30)}

	con_mid_top.onmouseover=function(){
		clearInterval(timer);
	}

	con_mid_top.onmouseout=function(){
		timer=setInterval(next,3000);
	}

	con_box_right.onclick=next;
	con_box_left.onclick=prev;
	for(var i=0;i<navChilist.length;i++){
		navChilist[i].index=i;
		navChilist.onclick=function(){
			index1=this.index+1;
			navChilistmove();
			functionAll1(con_mid_top_all,{left:-800*index1});
		}
	}

	function next(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index1++;
		navChilistmove();
		functionAll1(con_mid_top_all,{left:-800*index1},function(){
			if(index1==7){
				con_mid_top_all.style.left-'-800px';
				index1=1;
			}
			isMoving=false;
		});
	}

	function prev(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index1--;
		navChilistmove();
		functionAll1(con_mid_top_all,{left:-800*index1},function(){
			if(index1==0){
				con_mid_top_all.style.left='-4800px';
				index1=6;
			}
			isMoving=false;
		});
	}
	function navChilistmove(){
		for(var i=0;i<navChilist.length;i++){
			navChilist[i].className="";
		}
		if(index1>6){
			navChilist[0].className="active";
		}else if(index1<=0){
			navChilist[5].className="active";
		}else{
			navChilist[index1-1].className="active";
		}
	}
	timer=setInterval(next,3000);
	var con_rig_top_b13=document.getElementById("con_rig_top_b13");
	var con_rig_top_b=document.getElementById("con_rig_top_b");
	var con_rig_top_b13_copy=document.getElementById("con_rig_top_b13_copy");
	con_rig_top_b13_copy.innerHTML=con_rig_top_b13.innerHTML;
	con_rig_top_b.scrollTop=0;
	var timermer=setInterval(rollStart,50);
	function rollStart(){
       if(con_rig_top_b.scrollTop>=con_rig_top_b13.scrollHeight){
       		con_rig_top_b.scrollTop=0;
       }else{
       	con_rig_top_b.scrollTop++;
       }
	}
	
	var form_se_opA=document.getElementById("form_se_opA");	
	
	var option_span=document.getElementById("option_span");
	form_se_opA.onclick=function(){
		var optionValue=form_se_opA.options[form_se_opA.selectedIndex].value;
		option_span.innerHTML="&yen;"+optionValue;	
	}
	
}
