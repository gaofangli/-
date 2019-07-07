var qq_6= document.getElementById("qq_6");
var qq_7= document.getElementById("qq_7");

qq_6.onmousemove = function () {   
   qq_7.style.display="block"; 
   qq_7.style.background="#000";
   qq_6.style.background="#000";
}
qq_6.onmouseout = function () {   
    qq_7.style.display="none"; 
    qq_7.style.background="#242424";
    qq_6.style.background="#242424";
 }

 var qq_10= document.getElementById("qq_10");
var qq_12= document.getElementById("qq_12");

qq_10.onmousemove = function () {   
   qq_12.style.display="block"; 
   qq_12.style.background="#000";
   qq_10.style.background="#000";
  
}
qq_10.onmouseout = function () {   
    qq_12.style.display="none"; 
    qq_12.style.background="#242424";
    qq_10.style.background="#242424";
 }

 var qq_13= document.getElementById("qq_13");
 var qq_14= document.getElementById("qq_14");
 
 qq_13.onmousemove = function () {   
    qq_14.style.display="block"; 
    qq_14.style.background="#000";
    qq_13.style.background="#000";
   
 }
 qq_13.onmouseout = function () {   
     qq_14.style.display="none"; 
     qq_14.style.background="#242424";
     qq_13.style.background="#242424";
  }


  var ww_7= document.getElementById("ww_7");
 var ww_8= document.getElementById("ww_8");
 var qq_2= document.getElementsByClassName("qq_2")[0];
 
 ww_7.onmousemove = function () {   
    ww_8.style.display="block"; 
    ww_7.style.background="#000";
    ww_8.style.background="#000";
   
 }
 ww_8.onmouseout = function () {   
     ww_8.style.display="none"; 
     ww_8.style.background="#242424";
     ww_7.style.background="#242424";
  }
  qq_2.onmouseout = function () {   
   ww_8.style.display="none"; 
   ww_8.style.background="#242424";
   ww_7.style.background="#242424";
}
  

  var wx= document.getElementsByClassName("wx")[0];
  var hh_5= document.getElementsByClassName("hh_5")[0];
  
  wx.onmousemove = function () {   
   hh_5.style.display="block"; 
  }
 window.onmouseout = function () {   
   hh_5.style.display="none"; 

   }
   
var shang = document.getElementById("shang");

var html = "";
window.onscroll = function () {
   var a = document.documentElement.scrollTop;
   if (a > 3000) {
           shang.style.height = "50px";
           shang.style.transition = "0.5s";
       } else {
           shang.style.height = "0px";
           shang.style.transition = "0.5s";
       }
}
document.getElementById("shang").onclick=function(){
    document.documentElement.scrollTop=0;
}

