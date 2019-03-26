"use strict";

$(function () {
    // console.log(123);

    //最顶处广告
    $(".close_slider").on("click", function () {
        $(".W_top_banner ").animate({
            'height': 0
        }, 500, 'linear');
    });

    $('.sort_con01 a').click(function () {
        console.log($(this));
        $(this).addClass("on").siblings().removeClass("on");
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

    //列表页主要功能就是分页功能跟带id到详情页  gid
    /*
    1)带数据可以是<a href="goods.html?id=${item.gid}" target="blank">  
    2)或<a href="http://localhost:9090/xiejunpeng/html/goods.html?id=${item.gid}" target="blank">  
    3)也可以通过点击事件     location.href='06详情页.html?'+html;
             */
    //一.内容部分的渲染 初始化
    var matter1 = document.querySelector('.matter1');
    var page1 = document.querySelector('.list_page');

    //渲染部分的封装 
    function xuanlan(arr) {
        var reg = arr.datalist.map(function (item) {
            //arr.datalist  得到的是获取内容部分  是一个数组织
            return "<li data-id=\"" + item.id + "\">\n                        <a target=\"_blank\" href=\"goods.html?id=" + item.gid + "\" class=\"s_goods_img\">\n                            <img class=\" lazy-load\" src=\"" + item.img + "\" alt=\"\">\n                        </a>\n                        <div class=\"goods_txt\">\n                            <p class=\"tPrc\">\n                                <span class=\"s_price\">\n                                    \xA5\n                                    <em>" + item.price + "</em>\n                                </span>\n                                <del >\xA5" + item.sPrice + "</del>\n                            </p>\n                            <a target=\"_blank\" href=\"goods.html\" class=\"s_goods_name elps2\">\n                                " + item.content + "\n                            </a>\n\n                            <div class=\"goods_sale\">\n                                <em class=\"s_sale_num\">\u9500\u91CF" + item.sales + "</em>\n                            </div>\n                            <a href=\"goods.html\" class=\"s_shop\">" + item.shop + "</a>\n                            <p class=\"sale_tags\">\n                                <span>\u81EA\u8425</span>\n                            </p>\n                            <div class=\"goods_hover\">\n                                <a href=\"javascript:;\" class=\"add_to_keep\">\u52A0\u5165\u6536\u85CF</a>\n                                <a href=\"javascript:;\" class=\"add_to_cart\">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                            </div>\n                        </div>\n                    </li>";
        }).join('');
        matter1.innerHTML = reg;
    }

    var url = '../api/list.php'; //1)连接php
    var data = "page=1&qty=24"; //2)带数据在php写查询语句
    ajax('GET', url, data, function (str) {

        var arr = JSON.parse(str); //3)接收php传回来的数据,把字符串转成对象
        // console.log(arr) //4)事先测试一下,全黑的是字符串,绿色的是对象
        xuanlan(arr); //5)渲染

        //生成页数
        var num = Math.ceil(arr.total / arr.qty); //ceil  向上取整  总条数除以每页显示多少条,如果一页没有那么多条,也向上取整 ,生出一页
        var con = '';
        for (var i = 0; i < num; i++) {
            con += "<span>" + (i + 1) + "</span>"; // 总条数/每页显示多少条  生成页数
        }
        page1.innerHTML = con; //输出 结构要事先看老师的
        page1.children[0].className = 'active'; //默认第一页为高亮  *
    });

    //二.点击切换页码
    page1.onclick = function (ev) {
        //事件绑在父元素身上,
        var ev = ev || window.event;
        if (ev.target.tagName.toLowerCase() == 'span') {
            //改为a     目标span  如果点击的目标是span则
            var pagenum = ev.target.innerText; // 拿到这个数字
            var url = '../api/list.php';
            var data = "page=" + pagenum + "&qty=24";
            ajax('GET', url, data, function (str) {
                var arr = JSON.parse(str);
                console.log(arr);
                xuanlan(arr);

                for (var i = 0; i < page1.children.length; i++) {

                    page1.children[i].className = '';
                }
                page1.children[pagenum - 1].className = 'active'; //改了active2
            });
        }
    };

    //三.排序部分
    var zonghe = document.querySelector('.sort_mul'); //sort_mul 综合排序
    var xiaoliang = document.querySelector('.sort_sale'); //sort_sale  销量优先
    var jiage = document.querySelector('.sort_price '); //sort_price   价格排序
    var xinpin = document.querySelector('.sort_news'); // 新品
    // sort_con01.

    zonghe.onclick = function () {
        var url = '../api/list.php';
        var data = "page=1&qty=24&paixu=1";
        ajax('GET', url, data, function (str) {
            var arr = JSON.parse(str);
            xuanlan(arr);
        });
    };

    xiaoliang.onclick = function () {
        var url = '../api/list.php';
        var data = "page=1&qty=24&paixu=2";
        ajax('GET', url, data, function (str) {
            var arr = JSON.parse(str);
            xuanlan(arr);
        });
    };

    jiage.onclick = function () {
        var url = '../api/list.php';
        var data = "page=1&qty=24&paixu=3";
        ajax('GET', url, data, function (str) {
            var arr = JSON.parse(str);
            xuanlan(arr);
        });
    };
    xinpin.onclick = function () {
        var url = '../api/list.php';
        var data = "page=1&qty=24&paixu=4";
        ajax('GET', url, data, function (str) {
            var arr = JSON.parse(str);
            xuanlan(arr);
        });
    };

    // 飞入购物车
    var _lastPosi = $('#shopdibu').offset(); //终点
    // console.log($('#shopdibu'));
    // console.log(_lastPosi);
    // console.log($('.matter1'));
    $('.matter1').on('click', ".add_to_cart", function (event) {
        var _imgSrc = $(this).parent().parent().parent().find('.s_goods_img').children().attr('src');
        // console.log($(this).parent().parent().parent().find('.s_goods_img').children());
        console.log(_imgSrc);
        var _flyer = $('<img width="50" heigh="50"  class="flyer-img" src="' + _imgSrc + '"/>');
        _flyer.fly({
            start: { //抛物体起始位置为鼠标位置
                // left: event.pageX,
                // top: event.pageY+100
                left: event.clientX,
                top: event.clientY
            },
            end: { //抛物体最终位置
                left: _lastPosi.left,
                top: _lastPosi.top
            },
            autoPlay: true, //是否直接运动,默认true
            speed: 1.2, //越大越快,默认1.2
            vertex_Rtop: 20, //运动轨迹最高点top值,默认20,越小越高
            onEnd: function onEnd() {
                $('#tip').show().animate({
                    width: '200px'
                }, 500).fadeOut(500);
                this.destory();
            }
        });
    });
});