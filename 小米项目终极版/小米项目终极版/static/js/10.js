var qqqqq=document.getElementsByClassName("qqqqq");
var tottto=document.getElementsByClassName("tottto");
for(var i=0;i<qq.length;i++){
    qqqqq[i].bb=i;
    qqqqq[i].onmouseover=function(){
        for(o=0;o<tottt.length;o++){
            tottto[o].style.display="none"  
                          }
        for(k=0;k<qqqqq.length;k++){
        qqqqq[k].style.color="#424242";
        qqqqq[k].style.borderBottom="3px solid transparent";
        }
        this.style.borderBottom="3px solid #ff6700";
        this.style.color="#ff6700"; 
        tottto[this.bb].style.display="block";
    }
}