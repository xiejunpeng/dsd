"use strict";

$(function () {

    // 猜你喜欢
    //banner 轮播图
    // console.log(123);
    // 1.把所有的图片放在右侧，第一个图片放到可视区
    // var .swiper-slide = $(".swiper-slide");
    // console.log(.swiper-slide);
    var iw = $(".swiper-slide").eq(0).outerWidth(); //获取第一张图片的宽度
    console.log(iw);
    $(".swiper-slide").css("left", iw); //所有图放在右侧
    $(".swiper-slide").eq(0).css("left", 0); //第一张图片放在可视区

    // 2.开定时器：每次轮播一个图
    var timerbottom = null;
    clearInterval(timerbottom);
    var nowbottom = 0;
    timerbottom = setInterval(nextbottom, 2000);
    var isok1 = true; //加个开关解决动画队列   1)
    function nextbottom() {
        //下一张
        $(".swiper-slide").eq(nowbottom).stop().animate({ //旧的挪走
            "left": -iw
        }, 1000, function () {
            isok1 = true; //解决运动队列  2)
            console.log(1);
        });
        nowbottom = ++nowbottom >= $('.swiper-slide').size() ? 0 : nowbottom; //循环轮播

        $('.swiper-slide').eq(nowbottom).css('left', iw);
        $('.swiper-slide').eq(nowbottom).stop().animate({
            'left': 0
        }, 1000);

        lightbottom();
    };
    // 上一张
    function prevbottom() {
        $(".swiper-slide").eq(nowbottom).animate({
            "left": iw
        }, 1000, function () {
            isok1 = true; //3)
        });
        nowbottom = --nowbottom < 0 ? $('.swiper-slide').size() - 1 : nowbottom;
        $('.swiper-slide').eq(nowbottom).css('left', -iw);
        $('.swiper-slide').eq(nowbottom).stop().stop().animate({
            'left': 0
        }, 1000);
        lightbottom();
    }
    //3.焦点跟随
    function lightbottom() {
        $(".swiper-pagination-bullet").removeClass("activebotton");
        $(".swiper-pagination-bullet").eq(nowbottom).stop().addClass("activebotton");
    };

    // 4.鼠标移过停止,离开继续运动
    $(".swiper-wrapper").hover(function () {
        clearInterval(timerbottom);
    }, function () {
        clearInterval(timerbottom);
        timerbottom = setInterval(nextbottom, 2000);
    });

    // 5.点击上一张,下一张,切换
    $("#nextbottom").click(function () {
        if (isok1) {
            isok1 = false; //解决运动队列  4)
            nextbottom();
        };
    });

    $("#prevbottom").click(function () {
        if (isok1) {
            isok1 = false; //5)
            prevbottom();
        };
    });
    //6. 点击焦点切图 
    // 判断方向
    $(".swiper-pagination-bullet").click(function () {
        var indexbotton = $(this).index();
        if (indexbotton > nowbottom) {
            $('.swiper-slide').eq(nowbottom).stop().animate({
                'left': -iw
            }, 1000);
            $('.swiper-slide').eq(indexbotton).css('left', iw);
            $('.swiper-slide').eq(indexbotton).stop().animate({
                'left': 0
            }, 1000);
            nowbottom = indexbotton; //最新的一张变成index
        };
        if (indexbotton < nowbottom) {
            $('.swiper-slide').eq(nowbottom).stop().animate({
                'left': iw
            }, 1000);
            $('.swiper-slide').eq(indexbotton).css('left', -iw);
            $('.swiper-slide').eq(indexbotton).stop().animate({
                'left': 0
            }, 1000);
            nowbottom = indexbotton; //最新的一张变成index
        }
        lightbottom();
    });
});