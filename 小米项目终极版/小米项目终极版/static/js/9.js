var qqqq=document.getElementsByClassName("qqqq");
var tottt=document.getElementsByClassName("tottt");
for(var i=0;i<qq.length;i++){
    qqqq[i].bb=i;
    qqqq[i].onmouseover=function(){
        for(o=0;o<tottt.length;o++){
            tottt[o].style.display="none"  
                          }
        for(k=0;k<qqqq.length;k++){
        qqqq[k].style.color="#424242";
        qqqq[k].style.borderBottom="3px solid transparent";
        }
        this.style.borderBottom="3px solid #ff6700";
        this.style.color="#ff6700"; 
        tottt[this.bb].style.display="block";
    }
}