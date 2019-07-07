var duihao= document.getElementById("duihao");
var icon_select= document.getElementsByClassName("icon_select")[0];
console.log("icon_select");
icon_select.onclick=function(){
   duihao.style.display="block";
}

duihao.onclick=function(){
    duihao.style.display="none";
 }