'use strict';

$(function () {
    //侧栏
    var isokshop = true;
    $('#shopdibu').click(function () {
        if (isokshop) {
            $("#box").stop().animate({
                'right': -1
            }, 1000);
        } else {
            $("#box").stop().animate({
                'right': -260
            }, 1000);
        }
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