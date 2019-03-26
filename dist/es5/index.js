'use strict';

$(function () {
    // 首页获取 cookie
    var isok1 = null;
    // console.log($('.h_er_s1'));
    // console.log($('.h_er_s2'));

    function getcook() {
        var a = getCookie('name');
        if (a) {
            $('.h_er_s1').html(a);
            $('.h_er_s2').html('[退出]');
            isok1 = false;
        } else {
            $('.h_er_s1').html('请登录');
            $('.h_er_s2').html('注册即送3500元大礼包');
            isok1 = true;
        }
    };
    getcook();

    $('.h_er_s1').on('click', function () {
        if (isok1) {
            location.href = 'html/login.html';
        }
    });
    $('.h_er_s2').on('click', function () {
        if (isok1) {
            location.href = 'html/reg.html';
        } else {
            removeCookie('name');
            getcook();
        }
    });

    //最顶处广告
    $(".close_slider ").on("click", function () {
        $(".W_top_banner ").animate({
            'height': 0
        }, 500, 'linear');
    });

    // nev处鼠标滑过显示
    console.log($(".brand_list ul li"));
    $(".brand_list ul li ").hover(function () {
        console.log(123);

        $(".p_logo").css("display", "none");
    }, function () {
        $(".p_name").css("display", "block");
        console.log(456);
    });

    // 轮播图处选项卡
    $(".menu_box").hover(function () {
        $index = $(this).index();
        // console.log($index);
        $(".sub_menu").eq($index).css("display", "block");
        $(".menu_line").eq($index).css("display", "block");
        $(this).css("background", "#fff");
    }, function () {
        $(".sub_menu").eq($index).css("display", "none");
        $(".menu_line").eq($index).css("display", "none");
        $(this).css("background", "#E8E8E8");
    });

    //宣染轮播图
    $.ajax({
        type: "get", //请求方式
        url: "api/index.php", //接口路径
        success: function success(str) {
            //成功回调
            var arr = JSON.parse(str);
            // console.log(arr);
            var reg = arr.map(function (item) {
                return '<img src="' + item.img + '" alt="">';
            }).join('');

            $(".slideimg").html(reg);
        }
    });

    var nowindex = 1;
    // if(nowindex>=30){
    //     nowindex=2;
    // }
    var now = 0;
    var timer = null;
    clearInterval(timer);
    timer = setInterval(next1, 2000);

    function next1() {
        now++;
        if (now >= $(".slideimg img").size()) {
            now = 0;
        }
        $(".jiaodian2 span").css("background", "");
        $(".jiaodian2 span").eq(now).css("background", "#fff");
        $(".slideimg img").eq(now).css("z-index", nowindex++);
    };
    $("#slide").hover(function () {
        console.log(1456);
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(next1, 2000);
    });
    $("#prev").click(function () {
        console.log(123);
        now--;
        if (now < 0) {
            now = $(".slideimg img").size() - 1;
        }
        $(".jiaodian2 span").css("background", "");
        $(".jiaodian2 span").eq(now).css("background", "#fff");
        $(".slideimg img").eq(now).css("z-index", nowindex++);
    });
    // console.log($("#next"));
    $("#next").click(function () {
        console.log(123);
        next1();
    });

    // 点击焦点切图
    $(".jiaodian2 span").click(function () {
        var index = $(this).index();
        console.log(index);
        now = index;
        $(".jiaodian2 span").css("background", "");
        $(".jiaodian2 span").eq(now).css("background", "#fff");
        $(".slideimg img").eq(now).css("z-index", nowindex++);
    });

    // 限时购
    var t = setInterval(a, 1000);
    a();

    function a() {
        var end = new Date("2019/3/31 07:47:00");
        var now = new Date();
        var diffTime = parseInt((end - now) / 1000);
        // console.log(diffTime);
        var s = setDb(Math.floor(diffTime % 60));
        // console.log(s);
        var m = setDb(Math.floor(diffTime / 60 % 60));
        // console.log(m);
        var h = setDb(Math.floor(diffTime / 60 / 60 % 24));
        // console.log(h);
        var d = setDb(Math.floor(diffTime / 60 / 60 / 24));
        // console.log(d);

        $("#date").html(d);
        $("#hour").html(h);
        $("#min").html(m);
        $("#sec").html(s);
        //到达零界值停止
        if (diffTime <= 0) {
            clearInterval(t);
        };
    };

    var iw1 = $(".goods ul").outerWidth();
    // console.log(iw);
    $(".goods ul").css("left", iw1); //把所有图挪到右侧
    $(".goods ul").eq(0).css("left", 0); //把第三张图话在可视区
    // console.log($(".goods ul").eq(2).css("left", 0));
    var now1 = 0;
    var isok2 = true;
    $("#icon1").click(function () {
        if (isok2) {
            isok2 = false;
            $(".goods ul").eq(now1).animate({ //旧图挪走
                "left": -iw
            }, 1000, function () {
                isok2 = true;
            });
            now1 = ++now1 >= $('.goods ul').size() ? 0 : now1; //循环轮播

            $(".goods ul").eq(now1).css("left", iw1); //新图快速移到右侧
            $(".goods ul").eq(now1).animate({ //新图挪过可视区
                "left": 0
            }, 1000);
        };
    });
    $("#icon2").click(function () {
        if (isok2) {
            isok2 = false;
            $(".goods ul").eq(now1).animate({ //旧图挪走
                "left": iw
            }, 1000, function () {
                isok2 = true;
            });
            now1 = --now1 < 0 ? $('.goods ul').size() - 1 : now1;
            $(".goods ul").eq(now1).css("left", -iw1); //新图快速移到左侧
            $(".goods ul").eq(now1).animate({ //新图挪过可视区
                "left": 0
            }, 1000);
        };
    });

    //吸顶菜单
    var hei = document.getElementsByClassName('W_pt_nav')[0];
    // console.log(hei);
    var top = hei.offsetTop;
    window.onscroll = function () {
        //获取滚动距离
        var scrollTop = window.scrollY;
        // console.log(scrollTop);
        if (scrollTop >= top) {
            hei.style.position = "fixed";
            hei.style.top = 0 + "px";
            hei.style.left = 0 + "px";
            hei.style.height = 48 + "px";
            $(".nav_left_menu").css("display", "none");
            // console.log($(".all_wb_txt"));
            $(".all_wb_txt01").html("万表");
            $(".all_wb_txt").css({
                'font-size': 21
            });

            $('.widgets-icons').css('display', 'block');
        } else {
            hei.style.position = "";
            $('.widgets-icons').css('display', 'none');
            $(".nav_left_menu").css("display", "block");
            $(".all_wb_txt01").html("全部商品");
            $(".all_wb_txt").css({
                'font-size': 14
            });
        };
    };

    // 底部轮播图

    $('.W_gnTab_nav ul li').click(function () {
        //点击当前的变高亮+排他
        $(this).attr('class', 'on').siblings().attr('class', '');
        $('.W_gnTab_nav ul li').find("i").removeClass('icon-d-nav-jiao');
        $(this).find("i").addClass('icon-d-nav-jiao');
        //内容跟着出来
        $('.gnTabs_block').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });

    //侧栏
    var isokshop = true;
    $('#shopdibu').click(function () {
        if (isokshop) {
            $("#box").stop().animate({ 'right': -1 }, 1000);
        } else {
            $("#box").stop().animate({ 'right': -260 }, 1000);
        };
        isokshop = !isokshop;
    });

    //点击回到顶部，缓慢回到顶部
    backtop.onclick = function () {

        var timer = setInterval(function () {
            //加定时器

            //定时器下面写语句
            var scrollTop = window.scrollY;
            if (scrollTop > 0) {
                window.scrollTo(0, scrollTop - 20); //两个参数,第一个初始值 ,第二个滚动距离减去步长20
                console.log(scrollTop - 20); //不用加单位px
            } else {

                //如果等于零就清除定时器
                clearInterval(timer);
            }
        }, 30);
    };
});