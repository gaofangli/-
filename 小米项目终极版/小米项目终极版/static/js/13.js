
var im222=document.getElementById("im222");
var dw111=document.getElementById("dw111");
var sp111=document.getElementById("sp111");
var tmm=document.getElementById("tmm");
var xxxx=document.getElementById("xxxx");
im222.onmousemove=function(){
	dw111.style. background="red";
	dw111.style. border="2px solid red";
	dw111.style.transition = "0.5s";  
}
im222.onmouseout=function(){
	dw111.style. background="none";
	dw111.style. border="2px solid #fff";
	dw111.style.transition = "0.5s";  
}
dw111.onmousemove=function(){
	dw111.style. background="red";
	dw111.style. border="2px solid red";
	dw111.style.transition = "0.5s";  
}
dw111.onmouseout=function(){
	dw111.style. background="none";
	dw111.style. border="2px solid #fff";
	dw111.style.transition = "0.5s";  
}

im222.onclick=function(){
	sp111.style. top="92px";
	sp111.style.transition = "0.5s"; 
	tmm.style.display="block"
}
tmm.onclick=function(){
	sp111.style. top="-820px";
	sp111.style.transition = "0.5s"; 
	tmm.style.display="none"
}
xxxx.onmousemove=function(){
	xxxx.style.background="red";
	xxxx.style.color="#fff";
}
xxxx.onmouseout=function(){
	xxxx.style.background="#f5f5f5";
	xxxx.style.color="#757575";
}
xxxx.onclick=function(){
	sp111.style. top="-820px";
	sp111.style.transition = "0.5s"; 
	tmm.style.display="none"
}
