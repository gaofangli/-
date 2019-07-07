var qqqqqq=document.getElementsByClassName("qqqqqq");
var totttoo=document.getElementsByClassName("totttoo");
for(var i=0;i<qq.length;i++){
    qqqqqq[i].bb=i;
    qqqqqq[i].onmouseover=function(){
        for(o=0;o<totttoo.length;o++){
            totttoo[o].style.display="none"  
                          }
        for(k=0;k<qqqqqq.length;k++){
        qqqqqq[k].style.color="#424242";
        qqqqqq[k].style.borderBottom="3px solid transparent";
        }
        this.style.borderBottom="3px solid #ff6700";
        this.style.color="#ff6700"; 
        totttoo[this.bb].style.display="block";
    }
}