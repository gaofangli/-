
var im22=document.getElementById("im22");
var dw11=document.getElementById("dw11");
var sp11=document.getElementById("sp11");
var tmm=document.getElementById("tmm");
var xxx=document.getElementById("xxx");
im22.onmousemove=function(){
	dw11.style. background="red";
	dw11.style. border="2px solid red";
	dw11.style.transition = "0.5s";  
}
im22.onmouseout=function(){
	dw11.style. background="none";
	dw11.style. border="2px solid #fff";
	dw11.style.transition = "0.5s";  
}
dw11.onmousemove=function(){
	dw11.style. background="red";
	dw11.style. border="2px solid red";
	dw11.style.transition = "0.5s";  
}
dw11.onmouseout=function(){
	dw11.style. background="none";
	dw11.style. border="2px solid #fff";
	dw11.style.transition = "0.5s";  
}

im22.onclick=function(){
	sp11.style. top="92px";
	sp11.style.transition = "0.5s"; 
	tmm.style.display="block"
}
tmm.onclick=function(){
	sp11.style. top="-820px";
	sp11.style.transition = "0.5s"; 
	tmm.style.display="none"
}
xxx.onmousemove=function(){
	xxx.style.background="red";
	xxx.style.color="#fff";
}
xxx.onmouseout=function(){
	xxx.style.background="#f5f5f5";
	xxx.style.color="#757575";
}
xxx.onclick=function(){
	sp11.style. top="-820px";
	sp11.style.transition = "0.5s"; 
	tmm.style.display="none"
}

