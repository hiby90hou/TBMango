/**
 * Created by Chang on 2017/4/19.
 */
//获取目标元素
    var feature = document.getElementsByClassName("feature")[0];
    var rentTB = document.getElementsByClassName("rentTB")[0];
    var menu =document.getElementsByClassName("menu")[0];
    var contentArrName=["buySta","tradeCenter","onlineEdu"];
    var contentArr = new Array;
    var target = 0;var leader = 0;var timer = null;
    for(var i=0;i<contentArrName.length;i++){
        contentArr[i]=document.getElementsByClassName(contentArrName[i])[0].children[1];
    }

    var menuButton = document.getElementsByClassName("menuList")[0].children[0].lastElementChild || document.getElementsByClassName("menuList")[0].children[0].lastChild;
    var quickList =document.getElementsByClassName("quickList")[0];
    var liArr = quickList.children;
    var menuButtonClick = false;
    var logo = document.getElementsByClassName("logo")[0];
    menuButton.onclick = function (){
        for(var i=0;i<liArr.length;i++){
            //menu宽度适合屏幕
            liArr[i].style.width = client().width +"px";

            liArr[i].onclick = function(){
                for(var i=0;i<contentArr.length;i++){
                    //console.log(this.value);
                    if(this.value==i){

                        bodyInchingY(contentArr[i].offsetTop-menu.offsetHeight+1);
                    }
                }
            }
        }
        window.onresize = resize;

        if(menuButtonClick){
            quickList.style.display="none";
            menuButtonClick = false;
        }
        else{
            quickList.style.display="block";
            menuButtonClick = true;
        }
    }
logo.onclick = function(){
    bodyInchingY(0);
}
function bodyInchingY(target){
    leader = scroll().top;
    clearInterval(timer);
    //console.log("timer");
    timer = setInterval(function(){
        var step = (target-leader)/10;
        step = step>0? Math.ceil(step):Math.floor(step);
        leader=leader+step;
        window.scrollTo(0,leader);

        if(Math.abs(target-leader)<=Math.abs(step)){
            window.scrollTo(0,target);
            clearInterval(timer);
        }
    },25);
}
//scrollTop兼容版本
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
//4.用scroll事件模拟盒子距离最顶端的距离。
window.onscroll = function () {
    //每次屏幕滑动，把屏幕卷去的头部赋值给leader,模拟获取显示区域距离顶部的距离
    leader = scroll().top;
}
function client(){
    if(window.innerHeight !== undefined){
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    }else{
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}
//改变浏览器大小时触动
function resize() {
    for (var j = 0; j < liArr.length; j++) {
        liArr[j].style.width = client().width + "px";
    }
}