
var im2222=document.getElementById("im2222");
var dw1111=document.getElementById("dw1111");
var sp1111=document.getElementById("sp1111");
var tmm=document.getElementById("tmm");
var xxxxx=document.getElementById("xxxxx");
im2222.onmousemove=function(){
	dw1111.style. background="red";
	dw1111.style. border="2px solid red";
	dw1111.style.transition = "0.5s";  
}
im2222.onmouseout=function(){
	dw1111.style. background="none";
	dw1111.style. border="2px solid #fff";
	dw1111.style.transition = "0.5s";  
}
dw1111.onmousemove=function(){
	dw1111.style. background="red";
	dw1111.style. border="2px solid red";
	dw1111.style.transition = "0.5s";  
}
dw1111.onmouseout=function(){
	dw1111.style. background="none";
	dw1111.style. border="2px solid #fff";
	dw1111.style.transition = "0.5s";  
}

im2222.onclick=function(){
	sp1111.style. top="92px";
	sp1111.style.transition = "0.5s"; 
	tmm.style.display="block"
}
tmm.onclick=function(){
	sp111.style. top="-820px";
	sp111.style.transition = "0.5s"; 
	tmm.style.display="none"
}
xxxxx.onmousemove=function(){
	xxxxx.style.background="red";
	xxxxx.style.color="#fff";
}
xxxxx.onmouseout=function(){
	xxxxx.style.background="#f5f5f5";
	xxxxx.style.color="#757575";
}
xxxxx.onclick=function(){
	sp1111.style. top="-820px";
	sp1111.style.transition = "0.5s"; 
	tmm.style.display="none"
}

