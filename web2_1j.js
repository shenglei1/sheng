window.onload=function(){
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}

	var imgsAll=document.getElementById("imgsAll");
	var img1_1=document.getElementById("img1_1");
	var img_small=document.getElementById("img_small");
	var slider=document.getElementById("slider");
	var img1_2=document.getElementById("img1_2");
	var img_big=document.getElementById("img_big");
	img1_1.onmouseover=function(){
		slider.style.display='block';
		img1_2.style.display='block';
	}
	img1_1.onmouseout=function(){
		slider.style.display='none';
		img1_2.style.display='none';
	}
	img1_1.onmousemove=function(ev){
		var ev=ev || event;

		var oL=ev.clientX-img1_1.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-img1_1.offsetTop-slider.offsetHeight/2;

		var oMaxw=img1_1.offsetwidth-slider.offsetWidth;
		var oMaxh=img1_1.offsetHeight-slider.offsetHeight;

		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;

		slider.style.left=oL+'px';
		slider.style.top=oT+'px';

		var oBmaxw=img1_2.offsetWidth-img_big.offsetWidth;
		var oBmaxh=img1_2.offsetHeight-img_big.offsetHeight;

		img_big.style.left=( oL/oMaxw ) * oBmaxw + 'px';
		img_big.style.top=( oT/oMaxh ) * oBmaxh + 'px';
	}
	var img_ss1=document.getElementById("img_ss1");
	var img_ss2=document.getElementById("img_ss2");
	var img_small=document.getElementById("img_small");
	img_ss1.onmouseover=function(){
		img_ss1.style.border="1px solid orange";
		img_small.src="img/pp0.jpeg";
		img_ss2.style.border="";
		img_big.src="img/pp0.jpeg";
	}
	img_ss2.onmouseover=function(){
		img_ss2.style.border="1px solid orange";
		img_small.src="img/pp1.jpeg";
		img_ss1.style.border="";
		img_big.src="img/pp1.jpeg";
	}

	var duigou1=document.getElementById("duigou1");
	var duigou2=document.getElementById("duigou2");
	var xu_yellow=document.getElementById("xu_yellow");
	duigou1.onmousedown=function(){
		duigou1.style.border="1px solid #fe0d4a"; 
		duigou1.style.background="url('img/duigou.png') no-repeat right bottom";
		duigou1.style.textAlign="center";
		duigou1.style.cursor="pointer";
		xu_yellow.innerHTML='"150ml"';
		xu_yellow.style.color="orange";
		duigou2.style.border='none';
		duigou2.style.background="";
	}
	duigou2.onmousedown=function(){
		duigou2.style.border="1px solid #fe0d4a";
		duigou2.style.background="url('img/duigou.png') no-repeat right bottom";
		duigou2.style.textAlign="center";
		duigou2.style.cursor="pointer";
		xu_yellow.innerHTML='"200ml"';
		xu_yellow.style.color="orange";
		duigou1.style.border='none';
		duigou1.style.background="";
	}


	var dec=document.getElementById("dec");
	var add=document.getElementById("add");
	var shu=document.getElementById("shu");
	
	dec.onmouseover=function(){
		var shu1=shu.value;
		if(shu1<=1){
			this.style.cursor="not-allowed";
		}
	}
	dec.onclick=function(){
		var value1=parseInt(shu.value);
		shu.value=value1-1;
		
		if(shu.value<=1){
			this.style.cursor="not-allowed";
		}
	}
	add.onmouseover=function(){
		var shu1=shu.value;
		if(shu1>=5){
			this.style.cursor="not-allowed";
		}
	}
	add.onclick=function(){
		var value1=parseInt(shu.value);
		shu.value=value1+1;
			if(shu.value==5){
				add.style.cursor="not-allowed";
			}		
	}
	
	var bt2=document.getElementById("bt2");
	var yijiag=document.getElementById("yijiag");
	var X=document.getElementById("x");
	var bt111=document.getElementById("bt111");
	var bt222=document.getElementById("bt222");
	var top6_All=document.getElementsByClassName("top6_All")[0];
	bt2.onclick=function(){
		yijiag.style.display="block";
		top6_All.style.opacity="0.4";
		yijiag.style.opacity="1";
	}

	x.onclick=function(){
		yijiag.style.display="none";
		top6_All.style.opacity="1";
	}
	bt111.onclick=function(){
		yijiag.style.display="none";
		top6_All.style.opacity="1";
	}
	bt222.onclick=function(){
		yijiag.style.display="none";
		top6_All.style.opacity="1";
	}
}