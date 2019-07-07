var wzzz=document.getElementById("wzzz");
var biao=document.getElementById("biao");
wzzz.onmouseover=function(){
    biao.style.background="red";
    biao.style.color="#fff";
    wzzz.style.color="red";
    wzzz.style.color="red";
    biao.style.transition = "0.5s"; 
    wzzz.style.transition = "0.5s"; 
}
biao.onmouseover=function(){
    biao.style.background="red";
    biao.style.color="#fff";
    wzzz.style.color="red";
    biao.style.transition = "0.5s"; 
    wzzz.style.transition = "0.5s"; 
}
document.onmouseout=function(){
    // wzzz.style.background="red";
   wzzz.style.color="#424242";
   biao.style.background="#b0b0b0";
   biao.style.transition = "0.5s"; 
   wzzz.style.transition = "0.5s"; 
}
//------------------------------------------
var dingbu = document.getElementById("dingbu");
var html = "";
window.onscroll = function () {
   var a = document.documentElement.scrollTop;
   if (a > 3000) {
           // box.style.display="block";
           dingbu.style.height = "90px";
           dingbu.style.transition = "0.5s";
       } else {
           dingbu.style.height = "0px";
           dingbu.style.transition = "0.5s";
       }
}
document.getElementById("dingbu").onclick=function(){
    document.documentElement.scrollTop=0;
}
//----------------------------------------------------
var dingbu=document.getElementById("dingbu");
var ts = document.getElementById("ts");
var zzf = document.getElementById("zzf");
dingbu.onmouseover=function(){
    ts.style.color="red";
    zzf.style.color="red";
}
dingbu.onmouseout=function(){
    ts.style.color="#9a9a9a";
    zzf.style.color="#9a9a9a";
}
