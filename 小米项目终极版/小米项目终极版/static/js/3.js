//索引
var lis = document.querySelectorAll("#ul li")
var al = document.getElementById("al");
var ar = document.getElementById("ar");
var pages = document.querySelectorAll("#page p");
var mask=document.getElementById("mask");

var i = 0;
var timer=null;//自定义 清除
autoPlay();//调用
//点击换图
ar.onclick = function () {
    if (i >= 3) {
        i = -1;
    }
    i++
    for (var t = 0; t < lis.length; t++) {
        lis[t].style.opacity = 0;//页码的功能opacity=0;
    }
    lis[i].style.opacity = 1;
    pageCss();//调用
}

//点击换图
al.onclick = function () {
    if (i <= 0) {
        i = 4;
    }
    i--
    for (var t = 0; t < lis.length; t++) {
        lis[t].style.opacity = 0;
    }
    lis[i].style.opacity = 1;
    pageCss();//调用
}

//页码的功能
for (let k = 0; k < pages.length; k++) {
    pages[k].onmouseover = function () {
        for (var t = 0; t < lis.length; t++) {
            lis[t].style.opacity = 0;
        }
        lis[k].style.opacity = 1;
        i = k;
        pageCss()//调用
    }
}

//触摸定时器停止运动
mask.onmouseover = function () {
    clearInterval(timer);//清除上一级
}

//离开时定时器开始运动
mask.onmouseout = function () {
    autoPlay();//调用

}

//封装函数调用
function autoPlay() {
    timer=setInterval(function () {
        //先清除其他的opacity  0
        if (i >= 3) {
            i = -1;
        }
        i++
        for (var t = 0; t < lis.length; t++) {
            lis[t].style.opacity = 0;
        }
        lis[i].style.opacity = 1;
        pageCss()
        //js  样式瞬间时的
    }, 3000)
}

//封装函数调用跟随
    function pageCss() {
        for (var s = 0; s < pages.length; s++) {
            pages[s].style.background = "rgba(0,0,0,0.4)"; //透明色
        }
        pages[i === 4 ? 0 : i].style.background = "rgba(255, 255, 255, 1)";//透明色白色
    }