function trackingGa(mode,action,type,mo){
    if(!mo){
        if(mode=="pv"){
            ga('send', 'pageview',"/"+action);
            (typeof(_ja) == 'function') && _ja(action);
        }else if(mode=="click"){
            ga('send', 'event', 'button', 'click', action);
            (typeof(_ja) == 'function') && _ja(action);
        }
    }
}

function trackingOnex(mode,action,type,mo){
    if(!mo){
        if(mode=="pv"){
            (typeof(_ja) == 'function') && _ja(action);
        }else if(mode=="click"){
            (typeof(_ja) == 'function') && _ja(action);
        }
    }
}

var urlstr1=window.location.pathname;
var urlstrtmp=urlstr1.split("/");
var urlstr="https://"+window.location.host;


var wxurl = location.href.split('#')[0];
var FOLDER=window.document.location.pathname.substring(1,window.document.location.pathname.substr(1).indexOf('/')+1);

function GetUrlPath() {
    var url = document.location.toString();
    if (url.indexOf("/") != -1) {
        url = url.substring(0, url.lastIndexOf("/"));
    }
    return url;

}

if(FOLDER=="/")FOLDER="";
else FOLDER=FOLDER+"/";

var SERVER_URI="https://"+window.location.host+"/"+FOLDER;


var API_URL="https://"+window.location.host+"/";


var _width=0;
var _height=0;
var global_shareFlag=0;



var isDebug=false;
function debugLog(des){
    if(isDebug){
        alert(des);
    }
}


for(var i=0;i<urlstrtmp.length-1;i++){
    urlstr+=urlstrtmp[i]+"/";
}


var reg2=/\-?[0-9]+\.?[0-9]*/g;
var isLock=true;
var isBlur=false;
var touchEvents = {
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",
    initTouchEvents: function () {
        if (IsPC()) {
            this.touchstart = "mousedown";
            this.touchmove = "mousemove";
            this.touchend = "mouseup";
        }
    }
};


function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) { setTimeout(callback, 1000 / 60); };


var sceneBgR=640/1008;



var vx = navigator.userAgent.toLowerCase();
var mvx = parseInt(vx.match(/applewebkit\/([\d.]+)/)[1]);
//  var mvx1 = mvx.match(/([\d.]+)/);


var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();
var isUnlock=false;
var iseatlock=true;
var isScreenLock=false;
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}


function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
//setCookie("name","hayden","s20");

function setCookie(name,value,time)
{
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getsec(str)
{

    var str1=str.substring(1,str.length)*1;
    var str2=str.substring(0,1);
    if (str2=="s")
    {
        return str1*1000;
    }
    else if (str2=="h")
    {
        return str1*60*60*1000;
    }
    else if (str2=="d")
    {
        return str1*24*60*60*1000;
    }
}


var shareData = {
    title:"",
    desc:"",
    link: "",
    imgUrl: SERVER_URI+"images/sharepic.jpg"
};

var shareData1 = {
    title:"",
    desc:"",
    link: "",
    imgUrl: SERVER_URI+"images/sharepic.jpg"
};

$(function(){
    var  config={
        "appId": '',
        "timestamp":new Date().getTime(),
        "nonceStr": '41684',
        "signature": ''
    }
});

//weixin_______

wx.ready(function () { wxevent(); });
wx.error(function (res) {
    //location.reload(true);
    alert(JSON.stringify(res));
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});

function wxconfig(config, apilist) {
    if (!apilist) apilist = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo','chooseImage','previewImage','uploadImage','downloadImage','startRecord','stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice',"addCard","chooseCard","openCard","hideMenuItems","hideOptionMenu","hideAllNonBaseMenuItem"];
    if (config && config.appId && config.timestamp && config.nonceStr && config.signature) {
        wx.config({
            debug: false,
            appId: config.appId,
            timestamp: config.timestamp,
            nonceStr: config.nonceStr,
            signature: config.signature,
            jsApiList: apilist
        });
    }
    else {
        $.ajax({
            type: "GET",
            url: "https://crossborder.shiseido.com.cn/kokoro/accesstoken_api_onex/wx.php?id=signPackage",
            async: true,
            dataType: "json",
            data:{"url":encodeURIComponent(wxurl)},
            success: function (data) {
                if (data) {
                    var obj=eval(data);

                    if (obj.appId && obj.timestamp && obj.nonceStr && obj.signature) {
                        wx.config({
                            debug: false,
                            appId: obj.appId,
                            timestamp: obj.timestamp,
                            nonceStr: obj.nonceStr,
                            signature: obj.signature,
                            jsApiList: apilist
                        });
                    }

                    else {
                        //alert(data.error);
                        //location.reload(true);
                    }
                }

            },
            error: function (xhr, msg, exc) {
                //alert("生成微信签名失败，请重试！");
            }
        });
    }
}

function wxevent(data) {
    //if (!data)
    data = shareData;
    // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareAppMessage({
        title: shareData1.title,
        desc: shareData1.desc,
        link: shareData1.link,
        imgUrl: shareData1.imgUrl,
        trigger: function (res) {
            //alert(shareData.title);

        },
        success: function (res) {
            //alert('已分享');
           // ga('send', 'event', 'button', 'click', 'share2success');

            shareData.fun();

            //tracking("click","ShareFriend","ShareFriendOk",1);
        },
        cancel: function (res) {

        },
        fail: function (res) {
            //alert(JSON.stringify(res));
        }
    });
    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareTimeline({
        title: shareData.title,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        trigger: function (res) {
            //alert('用户点击分享到朋友圈');

        },
        success: function (res) {
            //alert('已分享');

            //ga('send', 'event', 'button', 'click', 'share2success');

            shareData.fun();

            //tracking("click","ShareTimeline","ShareTimelineOk",1);
        },
        cancel: function (res) {
            //alert('已取消');

        },
        fail: function (res) {
            //alert(JSON.stringify(res));
        }
    });
    // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareQQ({
        title: shareData.title,
        desc: shareData.desc,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        trigger: function (res) {
            //alert('用户点击分享到QQ');

        },
        complete: function (res) {
            //alert(JSON.stringify(res));
        },
        success: function (res) {
            //alert('已分享');

        },
        cancel: function (res) {
            //alert('已取消');
        },
        fail: function (res) {
            //alert(JSON.stringify(res));
        }
    });

    // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareWeibo({
        title: shareData.title,
        desc: shareData.desc,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        trigger: function (res) {
            //alert('用户点击分享到微博');

        },
        complete: function (res) {
            //alert(JSON.stringify(res));
        },
        success: function (res) {
            //alert('已分享');

        },
        cancel: function (res) {
            //alert('已取消');
        },
        fail: function (res) {
            //alert(JSON.stringify(res));
        }
    });

    wx.onMenuShareQZone({
        title: shareData.title,
        desc: shareData.desc,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        success: function () {
            // 用户确认分享后执行的回调函数

        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
}