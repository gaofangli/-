var qqq=document.getElementsByClassName("qqq");
var tott=document.getElementsByClassName("tott");
for(var i=0;i<qq.length;i++){
    qqq[i].bb=i;
    qqq[i].onmouseover=function(){
        for(o=0;o<tot.length;o++){
            tott[o].style.display="none"  
                          }
        for(k=0;k<qq.length;k++){
        qqq[k].style.color="#424242";
        qqq[k].style.borderBottom="3px solid transparent";
        }
        this.style.borderBottom="3px solid #ff6700";
        this.style.color="#ff6700"; 
        tott[this.bb].style.display="block";
    }
}