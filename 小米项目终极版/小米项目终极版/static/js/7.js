var qq=document.getElementsByClassName("qq");
var tot=document.getElementsByClassName("tot");
for(var i=0;i<qq.length;i++){
    qq[i].bb=i;
    qq[i].onmouseover=function(){
        for(o=0;o<tot.length;o++){
            tot[o].style.display="none"  
                          }
        for(k=0;k<qq.length;k++){
        qq[k].style.color="#424242";
        qq[k].style.borderBottom="3px solid transparent";
        }
        this.style.borderBottom="3px solid #ff6700";
        this.style.color="#ff6700"; 
        tot[this.bb].style.display="block";
    }
}