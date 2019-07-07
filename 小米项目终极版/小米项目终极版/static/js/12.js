
var im2=document.getElementById("im2");
var dw1=document.getElementById("dw1");
var sp1=document.getElementById("sp1");
var tmm=document.getElementById("tmm");
var xx=document.getElementById("xx");
im2.onmousemove=function(){
	dw1.style. background="red";
	dw1.style. border="2px solid red";
	dw1.style.transition = "0.5s";  
}
im2.onmouseout=function(){
	dw1.style. background="none";
	dw1.style. border="2px solid #fff";
	dw1.style.transition = "0.5s";  
}
dw1.onmousemove=function(){
	dw1.style. background="red";
	dw1.style. border="2px solid red";
	dw1.style.transition = "0.5s";  
}
dw1.onmouseout=function(){
	dw1.style. background="none";
	dw1.style. border="2px solid #fff";
	dw1.style.transition = "0.5s";  
}

im2.onclick=function(){
	sp1.style. top="92px";
	sp1.style.transition = "0.5s"; 
	tmm.style.display="block"
}
tmm.onclick=function(){
	sp1.style. top="-820px";
	sp1.style.transition = "0.5s"; 
	tmm.style.display="none"
}
xx.onmousemove=function(){
	xx.style.background="red";
	xx.style.color="#fff";
}
xx.onmouseout=function(){
	xx.style.background="#f5f5f5";
	xx.style.color="#757575";
}
xx.onclick=function(){
	sp1.style. top="-820px";
	sp1.style.transition = "0.5s"; 
	tmm.style.display="none"
}

