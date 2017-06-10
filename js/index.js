    //判断访问终端
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
        console.log("移动端");
        //当设备为移动设备时，跳转到手机端页面
        location.href = 'mobile_en.html';
    }
    else {
        console.log("PC端");
    }

    //Menu下拉菜单
    var bigContainer1 = document.getElementsByClassName("bigContainer1");
    var menuList1 = bigContainer1[0].getElementsByClassName("mainLevel");

    for (var i = 0; i < menuList1.length; i++) {
        //console.log(menuList1[i]);
        var spanButton = menuList1[i].getElementsByTagName("span");
        if (spanButton[0]) {
            spanButton[0].onclick = function () {
                var openTarget = this.parentNode.getElementsByTagName("div");
                if (openTarget.length > 0) {
                    var checkPoint = openTarget[0].style.display;

                    //Kill all
                    for (var j = 0; j < menuList1.length; j++) {
                        var target = this.parentNode.parentNode.children[j].children[1];
                        if (target) {
                            target.style.display = "none";
                        }
                    }
                    if (checkPoint == "block") {
                        openTarget[0].style.display = "none";
                    }
                    else {
                        openTarget[0].style.display = "block"
                    }
                }
            }
        }
    }

    //Feature menu
    var bigContainer3 = document.getElementsByClassName("bigContainer3")[0];
    var featureList = bigContainer3.getElementsByTagName("li");

    //onclick时选中
    for (var k = 0; k < featureList.length; k++) {
        featureList[k].onclick = function () {
            for (var i = 0; i < featureList.length; i++) {
                //console.log(i);
                this.parentNode.children[i].className = "notSelect";
            }
            this.className = "selected";
            for (var j = 0; j < featureList.length; j++) {
                featureList[j].children[0].style.display = "none";
                if (featureList[j].className == "selected") {
                    featureList[j].children[0].style.display = "block";
                }
            }

            var rentBook = document.getElementsByClassName("rentBook");
            var mangoShop = document.getElementsByClassName("mangoShop");
            var tradeCentre = document.getElementsByClassName("tradeCentre");
            var onlineEducation = document.getElementsByClassName("onlineEducation");
            var Logo = document.getElementsByClassName("logo")[0];
            //kill all
            for (var k = 0; k < rentBook.length; k++) {
                rentBook[k].style.display = "none";
            }
            for (var k = 0; k < mangoShop.length; k++) {
                mangoShop[k].style.display = "none";
            }
            for (var k = 0; k < tradeCentre.length; k++) {
                tradeCentre[k].style.display = "none";
            }
            for (var k = 0; k < onlineEducation.length; k++) {
                onlineEducation[k].style.display = "none";
            }
            //格式化LOGO
            Logo.src = "images/logo.png";
            Logo.parentNode.parentNode.parentNode.style.backgroundColor = "#ff5960";
            //隐藏LOGO中抱书的小芒果
            //console.log(Logo.parentNode.parentNode.children[1]);
            Logo.parentNode.parentNode.children[1].style.display = "none";
            Logo.parentNode.parentNode.onmouseover = null;
            Logo.parentNode.parentNode.onmouseout = null;


            //选择显示页面
            if (this == featureList[0]) {
                //alert("rentBook");
                for (var k = 0; k < rentBook.length; k++) {
                    rentBook[k].style.display = "block";
                }


            }

            else if (this == featureList[1]) {
                //alert("Mango Basket");

                for (var k = 0; k < mangoShop.length; k++) {
                    mangoShop[k].style.display = "block";
                }
                Logo.src = "images/logo-basket.png";
                Logo.parentNode.parentNode.parentNode.style.backgroundColor = "#5BAEE3";

                //显示LOGO中抱书的小芒果
                Logo.parentNode.parentNode.onmouseover = function () {
                    //console.log( Logo.parentNode.parentNode.children[1].className);
                    var littleMango = Logo.parentNode.parentNode.children[1];
                    littleMango.style.left = 0;
                    littleMango.style.display = "block";

                    //让抱书小芒果弹出
                    animate(littleMango, -40);

                }
                //隐藏
                Logo.parentNode.parentNode.onmouseout = function () {
                    var littleMango = Logo.parentNode.parentNode.children[1];
                    littleMango.style.display = "none";

                }
            }

            else if (this == featureList[2]) {
                //alert("Trade Centre");
                for (var k = 0; k < tradeCentre.length; k++) {
                    tradeCentre[k].style.display = "block";
                }

            }
            else {
                //alert("Online Education")
                for (var k = 0; k < onlineEducation.length; k++) {
                    onlineEducation[k].style.display = "block";
                }
            }
            return false;
        }
    }

    //加入三角
    for (k = 0; k < featureList.length; k++) {
        featureList[k].children[0].style.display = "none";
        if (featureList[k].className == "selected") {
            featureList[k].children[0].style.display = "block";
        }
    }

    //文本框获取焦点
    //书籍搜索文本框
    //1.获取事件源和相关元素
    var cusBook = [false];
    var inputBook = document.getElementById("inputBook");
    //2.绑定事件
    inputBook.onfocus = function () {
        getFocus(this, "Enter title, author or ISBN...", cusBook);
    }
    inputBook.onblur = function () {
        lostFocus(this, "Enter title, author or ISBN...", cusBook);
    }

    //文具搜索文本框
    //1.获取事件源和相关元素
    var cusSta = [false];
    var inputSta = document.getElementsByClassName("inputSta");

    //2.绑定事件
    for (var l = 0; l < inputSta.length; l++) {
        inputSta[l].onfocus = function () {
            getFocus(this, "Enter stationery name", cusSta);
        }
        inputSta[l].onblur = function () {
            lostFocus(this, "Enter stationery name", cusSta);
        }
    }


    //获取焦点事件
    function getFocus(inputBook, inputTxt, cusBook) {
        //判断，如果input里面的内容是inputTxt，那么把值赋值为“”；
        if (inputBook.value === inputTxt && cusBook[0] == false) {
            inputBook.value = "";
        }
    }

    //失去焦点事件(焦点：插入条光标)
    function lostFocus(inputBook, inputTxt, cusBook) {
        if (inputBook.value === inputTxt) {
            cusBook[0] = true;
        }
        else {
            //失去焦点后判断，如果input内容为空，那么把内容赋值为inputTxt。
            if (inputBook.value === "") {
                //3.书写事件驱动程序
                inputBook.value = inputTxt;
                cusBook[0] = false;
            }
        }
    }

    //adv2广告显示事件
    //1.获取事件源和相关元素
    var picButtonArr = document.getElementsByClassName("picButton")[0].firstElementChild.children;
    var picBoxArr = document.getElementsByClassName("picBox")[0].children;
    //2.操作控制图片的圆点
    advBoxFun(picButtonArr, picBoxArr);

    //facebook广告显示事件
    var picButtonFacebookArr = document.getElementsByClassName("facebookPicButton")[0].firstElementChild.children;
    var picBoxFacebookArr = document.getElementsByClassName("facebookPicBox")[0].children;
    //2.操作控制picBoxFacebookArr图片的圆点
    advBoxFun(picButtonFacebookArr, picBoxFacebookArr);


    /*adv1 点击左右滚动产品展示代码*/
//1.获取事件源及相关元素。
    var cont = document.getElementsByClassName("Cont")[0];
    var List1 = document.getElementById("List1");
    var picArr = List1.getElementsByClassName("pic");
    var imgWidth = picArr[0].offsetWidth;
    var bnt1 = document.getElementsByClassName("img1")[0];
    var bnt2 = document.getElementsByClassName("img2")[0];
//2.复制图片列表
    var picNeDiv = [];
//求出picArr的原长度
    var picOrgLength = picArr.length;
    for (var i = 0; i < (picOrgLength); i++) {
        picNeDiv[i] = List1.children[i].cloneNode(true);
        List1.appendChild(picNeDiv[i]);

    }
//图片自动滚动
//2.添加定时器
    var key = 0;
    var timer = setInterval(autoPlay, 3000);

    function autoPlay() {
        //通过控制key的自增来模拟图片的索引值，然后移动ul
        key++;
        if (key > picOrgLength) {
            //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
            List1.style.left = 0;
            key = 1;
        }
        animate(List1, -key * imgWidth);
    }

//3.添加左右按钮位于Cont上时，停止图片滚动
    cont.onmouseover = function () {
        clearInterval(timer);
    }
    cont.onmouseout = function () {
        timer = setInterval(autoPlay, 3000);
    }

//当鼠标点击《时，向前移动一格
    bnt1.onclick = function () {
        key--;
        if (key < 0) {
            //图片已经滑动到第一张
            List1.style.left = -(picOrgLength) * imgWidth + "px";
            key = picOrgLength - 1;

        }
        animate(List1, -key * imgWidth);
    }
//当鼠标点击》时，向后移动一格

    bnt2.onclick = function () {
        autoPlay();
    }

//adv2 点击圆点产品展示代码
//adv2全部隐藏图片li
    var picBoxArr = document.getElementsByClassName("picBox")[0].children;
    for (var n = 1; n < picBoxArr.length; n++) {
        picBoxArr[n].style.display = "none";
    }
//facebook全部隐藏图片li
    var facebookPicBoxArr = document.getElementsByClassName("facebookPicBox")[0].children;
    for (var n = 1; n < facebookPicBoxArr.length; n++) {
        facebookPicBoxArr[n].style.display = "none";
    }

//广告轮播图function
    function advBoxFun(picButtonArr, picBoxArr) {

        for (i = 0; i < picButtonArr.length; i++) {
            picButtonArr[i].firstElementChild.onclick = function () {
                var picHideArr = this.parentNode.parentNode.children;
                var position = 0;
                //kill all
                for (var i = 0; i < picHideArr.length; i++) {
                    picButtonArr[i].className = "";
                    if (this.parentNode == picHideArr[i]) {
                        position = i;
                    }
                    picBoxArr[i].style.display = "none";
                }
                //实现变换
                this.parentNode.className = "selected";
                picBoxArr[position].style.display = "block";
                return false;
            }
        }
    }

//for facebook
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//图片移动function
    function animate(obj, target) {
        clearInterval(obj.timer)

        var speed = obj.offsetLeft < target ? 15 : -15;

        obj.timer = setInterval(function () {
            var result = target - obj.offsetLeft;

            obj.style.left = obj.offsetLeft + speed + "px";
            //console.log(speed);
            if (Math.abs(result) <= 10) {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }

        }, 30);
    }