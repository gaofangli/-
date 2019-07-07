var typefa=document.getElementsByClassName("typefa");
var im=document.getElementsByClassName("im");
var a = document.getElementById("dd");
var tm= document.getElementById("tm");
typefa[0].onclick = function () {
            a.style.top = "142px";
           a.style.transition = "1s";  
          tm.style.display = "block";          
}
im[0].onclick = function () {
                a.style.top = "-600px";
                a.style.transition = "0.5s";  
                tm.style.display = "none";             
    }
tm.onclick = function () {
        a.style.top = "-600px";
    a.style.transition = "0.5s";  
    tm.style.display = "none";             
}
    
var typef=document.getElementsByClassName("typef");
var code=document.getElementsByClassName("code");
var margin=document.getElementById("KK");
var tm=document.getElementById("tm");
var tmm=document.getElementById("InTheFrame");

typef[0].onmousemove = function () {   
    code[0].style.display="block"; 
}
code[0].onmousemove = function () {
    code[0].style.display="block";                 
}
margin.onmousemove = function () {
    code[0].style.display="block";   
                 }
tmm.onmouseout = function () {
    code[0].style.display="none";   
        }


var yuot=document.getElementsByClassName("yuot");
var gh=document.getElementsByClassName("gh");
var gwc=document.getElementsByClassName("gouwuche");
var gim=document.getElementsByClassName("gim");
yuot[0].onmousemove = function(){         
    //  gh[0].style.display = "block";
    gh[0].style.height = "120px";
    gh[0].style.transition = "0.5s";
    yuot[0].style.background="#fff";   
}
gh[0].onmousemove=function () {
     gh[0].style.display = "block";
    gh[0].style.height = "120px";
    gh[0].style.transition = "0.5s";  
    yuot[0].style.background="#fff"; 
    gim[0].style.color="#b0b0b0"; 
    gwc[0].style.color="red"; 
    gh[0].innerHTML= " 购物车中还没有商品，赶紧选购吧";   
}
window.onmouseout = function () {
    //gh[0].style.display = "none";
    gh[0].style.height = "0px";
    // gh[0].style.top = "-132px";
    gh[0].style.transition = "0.5s"; 
    yuot[0].style.background ="#424242";
    gwc[0].style.color="#b0b0b0"; 
    gim[0].style.color="#b0b0b0"; 
        }

var inp=document.getElementById("inp");
var body=document.getElementById("body");
var zuohe=document.getElementsByClassName("zuohe");
var yuohe=document.getElementsByClassName("yuohe");
inp.onclick=function(){
    zuohe[0].style.display="none";
    yuohe[0].style.display="none"; 
}
body.onmouseup=function(){
    zuohe[0].style.display="block";
    yuohe[0].style.display="block";
}

var aa=document.getElementById("aa");
var dd=document.getElementsByClassName("dd")[0];
dd.onmousemove=function(){
    dd.style.background="red";
    aa.style.color="#fff";
    dd.style.transition = "0.8s"; 
    aa.style.transition = "0.8s"; 
}
dd.onmouseout=function(){
    dd.style.background="#fff";
    aa.style.color="#887561";
    dd.style.transition = "0.8s"; 
    aa.style.transition = "0.8s"; 
}


