var videoPlayFlag = false;
$(function(){
    init();
})
function init(){
    swipe1();
    swiper2();
    swiper3()
    var timerObj = {
        $:function(id){
            return document.getElementById(id)
        },
        futureDate:Date.UTC(2019,10,25,12),
        obj:function(){
            return {
                sec: timerObj.$("secnumber"),
                mini: timerObj.$("minsnumber"),
                hour: timerObj.$("hournumber"),
                day: timerObj.$("daynumber"),
                month:timerObj.$("monthnumber"),
                year:timerObj.$('yearnumber')
            }
        }
      
    }
    fnTimeCountDown(timerObj.futureDate, timerObj.obj());
    $('#rule').click(function(){
        $('.rulepopup').fadeIn();
    })
    $('.rulebtn').click(function(){
        $('.rulepopup').fadeOut();
    })
   
}
function playvideo(videsrc){
    $('.videoplaypop').show();
    $('.videopopup').show();
    var width = window.innerWidth || wWidth,
        height = parseInt(parseInt(width* (9/16) ))
    // var player = new Txplayer({
    //     containerId: 'container',
    //     vid:videoid,
    //     width:'100%',
    //     height:height,
    //     autoplay: true
    // });
    // player.play();
    // $('.close').click(function(){
    //         $('.videoplaypop').hide()
    //         $('.videopopup').html('');
    //         player.pause();
    // })
    var video = document.createElement('video')
    video.src = videsrc;
    $('.videoplaypop').show()
    $('.videopopup').append(video).show();
    video.play();
    $('.close').click(function(){
        $('.videoplaypop').hide()
        $('.videopopup').html('');
        video.pause();
    })
}
function swipe1(){
    var viewSwiper = new Swiper('.slide1-view .swiper-container', {
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false,
        // },
        slidesPerView: '1',
        on:{
            slideChangeTransitionStart: function() {
                updateNavPosition()
            }
        }
    });

    $('.slide1-view .arrow-left,.slide1-preview .arrow-left').on('click', function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
            return
        }
        viewSwiper.slidePrev()
    });
    $('.slide1-view .arrow-right,.slide1-preview .arrow-right').on('click', function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.slideTo(0, 1000);
            return
        }
        viewSwiper.slideNext()
    });

    var previewSwiper = new Swiper('.slide1-preview .swiper-container', {
        visibilityFullFit: true,
        slidesPerView: '3.3',
        allowTouchMove: true,
        on:{
            tap: function() {
                viewSwiper.slideTo(previewSwiper.clickedIndex)
            },
            slideChangeTransitionStart:function(){
                previewSwiper.params.slidesPerView = "auto"
                previewSwiper.update();
            }
        }
    });

    function updateNavPosition() {
        $('.slide1-preview .active-nav').removeClass('active-nav');
        var activeNav = $('.slide1-preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 2.3;
                previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
            } else {
                previewSwiper.slideTo(activeNav.index())
            }
        }
    }
}
function swiper2(){
    var viewSwiper = new Swiper('.slide2-view .swiper-container', {
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false,
        // },
        slidesPerView: '1',
        on:{
            slideChangeTransitionStart: function() {
                updateNavPosition()
            }
        }
    });

    $('.slide2-view .arrow-left,.slide2-preview .arrow-left').on('click', function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
            return
        }
        viewSwiper.slidePrev()
    });
    $('.slide2-view .arrow-right,.slide2-preview .arrow-right').on('click', function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.slideTo(0, 1000);
            return
        }
        viewSwiper.slideNext()
    });

    var previewSwiper = new Swiper('.slide2-preview .swiper-container', {
        visibilityFullFit: true,
        slidesPerView: '6',
        allowTouchMove: true,
        on:{
            tap: function() {
                viewSwiper.slideTo(previewSwiper.clickedIndex)
            },
            slideChangeTransitionStart:function(){
                previewSwiper.params.slidesPerView = "auto"
                previewSwiper.update();
            }
        }
    });

    function updateNavPosition() {
        $('.slide2-preview .active-nav').removeClass('active-nav');
        var activeNav = $('.slide2-preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 2.3;
                previewSwiper.slideTo(activeNav.index()   - thumbsPerNav)
            } else {
                previewSwiper.slideTo(activeNav.index())
            }
        }
    }
}
function swiper3(){
    var viewSwiper = new Swiper('.slide3-view .swiper-container', {
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false,
        // },
        slidesPerView: '1',
        on:{
            slideChangeTransitionStart: function() {
                updateNavPosition()
            }
        }
    });

    $('.slide3-view .arrow-left,.slide3-preview .arrow-left').on('click', function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
            return
        }
        viewSwiper.slidePrev()
    });
    $('.slide3-view .arrow-right,.slide3-preview .arrow-right').on('click', function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.slideTo(0, 1000);
            return
        }
        viewSwiper.slideNext()
    });

    var previewSwiper = new Swiper('.slide3-preview .swiper-container', {
        visibilityFullFit: true,
        slidesPerView: '3.3',
        allowTouchMove: true,
        on:{
            tap: function() {
                viewSwiper.slideTo(previewSwiper.clickedIndex)
            },
            slideChangeTransitionStart:function(){
                previewSwiper.params.slidesPerView = "auto"
                previewSwiper.update();
            }
        }
    });

    function updateNavPosition() {
        $('.slide3-preview .active-nav').removeClass('active-nav');
        var activeNav = $('.slide3-preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 2.3;
                previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
            } else {
                previewSwiper.slideTo(activeNav.index())
            }
        }
    }
}
var fnTimeCountDown = function(d, o){
	var f = {
		zero: function(n){
			var n = parseInt(n, 10);
			if(n > 0){
				if(n <= 9){
					n = "0" + n;	
				}
				return String(n);
			}else{
				return "00";	
			}
		},
		dv: function(){
			d = d || Date.UTC(2019,10,25);//如果未定义时间，则我们设定倒计时日期是2050年1月1日
            var future = new Date(d), now = new Date();
            // console.log(future,now)
			//现在将来秒差值
			var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60, pms = {
				sec: "00",
				mini: "00",
				hour: "00",
                day: "00",
                month: "00",
                year: "0"
            };
            console.log(Math.floor((dur / 2629744)) % 12)
			if(dur > 0){
                pms.sec = f.zero(dur % 60);
				pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
				pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
                pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";
                pms.month = Math.floor((dur / 2629744)) > 0 ? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
                console.log(Math.floor((dur / 86400)),Math.floor((dur / 2629744)))
                if(Math.floor((dur / 2629744)) >= 1 && Math.floor((dur / 86400)) > 29 ){
                    pms.day = Math.floor((Math.floor((dur / 86400)) % 30 ) + 30);
                }else if(Math.floor((dur / 2629744)) == 0 && Math.floor((dur / 86400)) == 30 && Math.floor((dur / 86400)) > 29 ){
                    pms.day = Math.floor((Math.floor((dur / 86400)) % 30 ) + 30);
                }
			}
			return pms;
		},
		ui: function(){
			if(o.sec){
                o.sec.innerHTML = f.dv().sec;
                o.sec.style.backgroundImage = "linear-gradient(to bottom,#edc374 36%,#efd49e 52%,#dfb161 69%)";
                o.sec.style.WebkitTextFillColor = "transparent";
                o.sec.style.WebkitBackgroundClip = "text";
			}
			if(o.mini){
                o.mini.innerHTML = f.dv().mini;
                o.mini.style.backgroundImage = "linear-gradient(to bottom,#edc374 36%,#efd49e 52%,#dfb161 69%)";
                o.mini.style.WebkitTextFillColor = "transparent";
                o.mini.style.WebkitBackgroundClip = "text";
			}
			if(o.hour){
                o.hour.innerHTML = f.dv().hour;
                o.hour.style.backgroundImage = "linear-gradient(to bottom,#edc374 36%,#efd49e 52%,#dfb161 69%)";
                o.hour.style.WebkitTextFillColor = "transparent";
                o.hour.style.WebkitBackgroundClip = "text";
			}
			if(o.day){
                o.day.innerHTML = f.dv().day;
                o.day.style.backgroundImage = "linear-gradient(to bottom,#edc374 36%,#efd49e 52%,#dfb161 69%)";
                o.day.style.WebkitTextFillColor = "transparent";
                o.day.style.WebkitBackgroundClip = "text";
            }
            if(o.month){
				o.month.innerHTML = f.dv().month;
			}
			if(o.year){
				o.year.innerHTML = f.dv().year;
            }
            if(f.dv().sec == '00' && f.dv().mini== '00' && f.dv().hour == '00' && f.dv().day == '00' && f.dv().month == '00' && f.dv().year == '0'){
             
                $('#comingsoon').hide();
                $('.movie-block ').addClass('trailer')
                $('.movie-block img').attr('src','images/movieblockmp.jpg');
                $('.trailer').click(function(){
                    $('.videoplaypop').show();
                    $('.videopopup').show();
                    var video = document.createElement('video')
                    video.src = 'https://1252148705.vod2.myqcloud.com/7edf2f94vodtranssh1252148705/19fac4415285890796069182878/v.f51437.mp4?t=69202ff9&sign=468853f883ef3150d813ff69ba81de9e';
                    $('.videoplaypop').show()
                    $('.videopopup').append(video).show();
                    video.play();
                    $('.close').click(function(){
                        $('.videoplaypop').hide()
                        $('.videopopup').html('');
                        video.pause();
                    })
                })
                return;
            }
			setTimeout(f.ui, 1000);
        }
	};	
	f.ui();
};
