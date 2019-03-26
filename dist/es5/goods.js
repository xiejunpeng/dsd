"use strict";

$(function () {
    // console.log(123);

    //最顶处广告
    $(".close_slider ").on("click", function () {
        $(".W_top_banner ").animate({
            'height': 0
        }, 500, 'linear');
    });

    /*需求
    一.数据渲染+放大镜
    1)先是从列表页传个id过来
    2)接收接收列表页转过来的id 
    3)发送ajax请求->api/goods.php->表里面的goodsxuanran->gid='$idx->接收数据
    4)放大镜功能
    
    	二.插入
    	1)点击单独购买时
    2)获取id并且将得到的数据插入到cars购物车表中(ajax请求中还有个ajax)
    	*/
    //===================================================================放大镜部分
    //接收列表页转过来的id
    var res = location.search.slice(1); //id=g1    slice(1)  得到=g1
    var id = res.split('=')[1]; //得到g1
    console.log(id); //得到g1
    var url = '../api/goods.php'; //连接PHP
    //======================================放大镜渲染============================================
    data = "idx=" + id; //把g1传到数据库,查询这个id的内容
    ajax('GET', url, data, function (str) {
        var arr = JSON.parse(str);
        console.log(arr); //得到这个id的整条数据
        var a = [];
        var b = arr[0].imgBurl; //放大镜大小图
        // console.log(b);
        var c = JSON.stringify(b); //转成字符串
        a = c.slice(1, -1).split(","); //分割成数组
        console.log(a);

        // for (var i = 0; i < a.length; i++) {
        //     console.log(a[0]);
        // }
        console.log(a[0]);

        var imgli = a.map(function (item, index) {
            //循环
            return "<li><img src=\"../img/" + item + "\" alt=\"\"></li>";
        }).join("");
        var html = "" + imgli;
        var abc = document.querySelector("#abc");
        var efg = document.querySelector("#efg");
        abc.innerHTML = efg.innerHTML = html; //渲染到节点放大镜大小图 *

        // var arrSmall =[];
        // var arrSmall = a;
        // var arrBig = a;
        // console.log(arrSmall);
        // arrBig.push(arr[i].imgurl);


        //渲染数据	
        // var html = '';
        // for (var i = 0; i < arrSmall.length; i++) {
        // 	html += `<li><img src="${arrSmall[i]}" data-lsrc="${arrSmall[i]}" data-maxSrc="${arrBig[i]}"></li>`;
        // 	//小图路径src="${arrSmall[i]}    框框里面大图左边路径data-lsrc="${arrSmall[i]}    点击显示右边路径data-maxSrc="${arrBig[i]}"
        // }
        // //console.log(html);
        // $('#MagnifierWrap2 .spec-items ul').html(html); //生成节点  html(): （等同于原生js中的innerHTML）
        // $('#MagnifierWrap2 .spec-items ul li').eq(0).addClass('on'); //第一个li样式为on  加黑色边框  border: 2px solid #000;

        // //第一个大图的渲染  初始化  图片里面只存了两张图片   两个大图,第三张图片可以用改变大图的宽度来做;
        // var str = `<img class="MagTargetImg" src="${arrSmall[0]}" data-src="${arrBig[0]}">`;
        // $('#MagnifierWrap2 .MagnifierMain').html(str);

        // //调用放大镜插件：传最大盒子id即可 
        // MagnifierF("MagnifierWrap2");
        //  ======================================右侧详情渲染============================================

        var minimg = arr[0].imgMurl; //右侧小图
        // console.log(minimg);
        var minimgStr = JSON.stringify(minimg); //转成字符串
        var str = [];
        str = minimgStr.slice(1, -1).split(",");
        // console.log(str);
        var str01 = str.map(function (item, index) {
            //循环
            return "<a href=\"javascript:;\" class=\"fl \">\n                          <span class=\"upper_style_right_img fl\">\n                              <img src=\"../img/" + item + "\" alt=\"\">\n                          </span>\n                          <span class=\"upper_style_right_text fl\">\u94A2 \u9ED1\u8272 PVD\u9540\u91D1 \u4E0D\u9508\u94A2</span>\n                      </a>";
        }).join("");
        // var html01 = `${str01}`
        // $(".upper_style_right").html(html01);

        //======================================详情上部份============================================
        // console.log(arr[0]);
        var html02 = "";
        for (var key in arr[0]) {
            // console.log(arr[0][key], key);
            html02 = "\t<div class=\"upper_title\">" + arr[0].content + "</div>\n                                <div class=\"upper_xuyan\">" + arr[0].gaoliang + "<span class=\"js_more CUSTOMER-SERVICE\">\u4E86\u89E3\u66F4\u591A&gt;&gt;</span></div>\n                                <div class=\"upper_model clearfix\">\n                                    <div class=\"fl upper_model_a\"><span>\u578B\u53F7:</span><span>" + arr[0].xinghao + "</span></div>\n                                    <div class=\"fl upper_model_b\"><span>\u7F16\u53F7:</span><span>" + arr[0].pianhao + "</span></div>\n                                    <div class=\"fl upper_model_c\"><span>\u54C1\u724C:</span><span>" + arr[0].pinpai + "</span></div>\n                                    <div class=\"fr upper_model_d\"><span>\u9500\u91CF:</span><span>" + arr[0].sales + "</span></div>\n                                </div>\n                                <div class=\"upper_price\">\n                                    <div class=\"upper_price_jiage clearfix\">\n                                        <div class=\"upper_price_jiage_left fl\">\u4E07\u8868\u4EF7</div>\n                                        <div class=\"upper_price_jiage_right fl\">\n                                            <span class=\"upper_price_jiage_a\">\uFFE5</span>\n                                            <span class=\"upper_price_jiage_b js_price\">" + arr[0].price + "</span>\n                                            <span class=\"upper_price_jiage_c\">\uFFE5" + arr[0].sPrice + "</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"upper_stages tc_stages clearfix\">\n                                        <div class=\"upper_stages_left fl\">\u9886\u52B5</div>\n                                        <div class=\"upper_stages_right fl\">\n                                            <div class=\"upper_coupon_a fl\">\n                                                <div class=\"icon-d-coupon-left fl item\"></div>\n                                                <div class=\"fl item\">\n                                                    \xA5\n                                                    " + arr[0].jinjuan + "\n                                                </div>\n                                                <div class=\"icon-d-coupon-right fl item\"></div>\n                                            </div>\n                                            <span class=\"upper_coupon_text\">\u66F4\u591A</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"upper_give clearfix\">\n                                                <div class=\"upper_give_left fl\">\u914D\u9001</div>\n                                                <div class=\"upper_give_right fl\"><i>\uFF08\u987A\u4E30\u5305\u90AE\uFF09</i>16:45\u524D\u652F\u4ED8\uFF0C\u9884\u8BA11-3\u4E2A\u5DE5\u4F5C\u65E5\u5185\u53D1\u8D27\uFF0C\u652F\u6301\u8D27\u5230\u4ED8\u6B3E</div>\n                                            </div>\n                                            <div class=\"promise clearfix\">\n                                                <div class=\"left fl\">\u627F\u8BFA</div>\n                                                <div class=\"right fl\">\n                                                    <li class=\"fl\">\n                                                        <i></i><span>\u6B63\u54C1\u4FDD\u969C</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u5168\u7AD9\u81EA\u8425\u76F4\u91C7\uFF0C\u9AD8\u4E8E\u745E\u58EB\u56FD\u5BB6\u6807\u51C6\u7684\u8FDB\u51FA\u4ED3\u5168\u68C0\u673A\u5236\uFF0C\u4E07\u88687\u5E74\u96F6\u5047\u8D27\u6295\u8BC9\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span>\u6B63\u89C4\u53D1\u7968</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u63D0\u4F9B\u56FD\u5BB6\u7A0E\u52A1\u5C40\u8BA4\u53EF\u7684\u6B63\u89C4\u53D1\u7968\uFF0C\u5177\u6709\u552E\u540E\u7EF4\u6743\u6CD5\u5F8B\u6548\u529B\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span>\u5047\u4E00\u8D54\u4E09</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u5DF2\u552E\u51FA\u540D\u8868\u8D85\u8FC745\u4E07\u679A\uFF0C\u6B63\u54C1\u65E0\u5047\u8D27\uFF0C\u5982\u6709\u552E\u5047\u4E09\u500D\u8D54\u507F\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span>7\u5929\u9000\u6362</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u65E0\u7406\u7531\u9000\u6362\uFF1A\u9664\u7279\u6B8A\u5546\u54C1\u5916\uFF08\u7279\u5356\u3001\u79C1\u4EBA\u5B9A\u5236\u7B49\uFF09\u8D28\u91CF\u9000\u6362\uFF1A\u975E\u4EBA\u4E3A\u673A\u82AF\u6545\u969C\u6216\u5546\u54C1\u5236\u9020\u7F3A\u9677\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span>\u5168\u7403\u8054\u4FDD</span>\n                                                        <div class=\"popup\" style=\"display: none;\">800+\u5BB6\u552E\u540E\u670D\u52A1\u70B9\uFF0C\u5B8C\u5584\u7684\u552E\u540E\u4FDD\u969C\uFF0C\u53EF\u4EAB\u53D7\u54C1\u724C\u5168\u7403\u8054\u4FDD\u670D\u52A1\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span>\u514D\u606F\u5206\u671F</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u4E0E15\u5BB6\u94F6\u884C\u5408\u4F5C\uFF0C\u62DB\u5546\u3001\u4E2D\u884C\u7B49\u63D0\u4F9B\u514D\u606F\u5206\u671F\u8D2D\u8868\u670D\u52A1\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span>\u5B9E\u4F53\u5E97\u4F53\u9A8C</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u591A\u5BB6\u7EBF\u4E0B\u4F53\u9A8C\u4E2D\u5FC3\uFF0C\u4E92\u8054\u7F51+\u65B0\u96F6\u552E\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span>\u95EA\u7535\u53D1\u8D27</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u6BCF\u592916\uFF1A45\u524D\u4E0B\u5355\uFF0C\u53EF\u5F53\u5929\u53D1\u8D27\u3002</div>\n                                                    </li>\n                                                    <li class=\"fl\">\n                                                        <i></i><span class=\"\">\u8D27\u5230\u4ED8\u6B3E</span>\n                                                        <div class=\"popup\" style=\"display: none;\">\u6536\u5230\u8D27\u9A8C\u8D27\u540E\u518D\u652F\u4ED8\uFF0C\u53EF\u5237\u5361\u3001\u73B0\u91D1\u3001\u8F6C\u8D26\u3002</div>\n                                                    </li>\n                                                </div>\n                                            </div>\n                                            <div class=\"service clearfix\">\n                                                <div class=\"left fl\">\u670D\u52A1</div>\n                                                <div class=\"right fl\">\n                                                    <a class=\"fl\" href=\"javascript:;\" target=\"_blank\">\n                                                        <span>\u540D\u5320\u4FDD\u4FEE</span>\n                                                        <i class=\"icon-d-choice\"></i>\n                                                    </a>\n                                                </div>\n                                            </div>\n                                            <div class=\"upper_style clearfix\">\n                                                <div class=\"upper_style_left fl\">\u6B3E\u5F0F</div>\n                                                <div class=\"upper_style_right fl\">\n                                                    " + str01 + "\n                                                </div>\n                    \n                                            </div>\n                                            <div class=\"upper_number clearfix\">\n                                                <div class=\"upper_number_left fl\">\u6570\u91CF</div>\n                                                <div class=\"upper_number_right fl\">\n                                                    <div class=\"upper_number_right_a fl\">\n                                                        <span class=\"fl reduce\" data-type=\"subtract\">-</span>\n                                                        <input type=\"text\" value=\"1\" class=\"cont fl\" id=\"count\">\n                                                        <span class=\"fl plus\" data-type=\"add\" data-saletype=\"3\">+</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"upper_button clearfix\">\n                                                <div class=\"upper_button_a page fl js_purchase  buyalong\">\u7ACB\u5373\u8D2D\u4E70</div>\n                                                <div class=\"upper_button_b page fl\" id=\"js_cart\">\n                                                    <a href=\"../html/cars.html\">\u52A0\u5165\u8D2D\u7269\u8F66</a> \n                                                </div>\n                    \n                                                <div class=\"qr-code fl\">\n                                                    <p class=\"icon-d-goods-ma icon\"></p>\n                                                    <p class=\"text\">\u624B\u673A\u8D2D\u4E70</p>\n                                                    <div class=\"qr-code-popup\">\n                                                        <img src=\"\" alt=\"\">\n                                                    </div>\n                                                </div>\n                                            </div>";
        };

        $(".detail_upper_right").html(html02);
    });

    //加数量
    var val;
    // console.log($(".detail_upper_right"));
    // console.log($("#count"));
    $(".detail_upper_right").on("click", '.plus', function () {
        // console.log($(this));
        val = $(this).prev().val();
        console.log(val);
        val++;
        if (val >= 10) {
            val = 10;
        }
        $("#count").val(val);
        $.ajax({
            type: "get", //请求方式
            url: "../api/jiajianshulaing.php", //接口路径
            data: { //传输数据
                "valss": val,
                "gid": id

            },
            success: function success(str) {
                //成功回调
                console.log(str);
            }
        });
    });

    //减数量

    $(".detail_upper_right").on("click", '.reduce', function () {
        // console.log($(this));
        val = $(this).next().val(); //数量
        console.log(res);

        val--;
        if (val <= 1) {
            val = 1;
        }
        $("#count").val(val);
        $.ajax({
            type: "get", //请求方式
            url: "../api/jiajianshulaing.php", //接口路径
            data: { //传输数据
                "valss": val,
                "gid": id

            },
            success: function success(str) {
                //成功回调
                console.log(str);
            }
        });
    });

    //======================================点击插入============================================

    var buyalong = document.querySelector('.buyalong');
    $(".detail_upper_right").on("click", '.buyalong', function () {
        //点击单独购买
        // console.log($("this").parent().parent().prev().find('#count'))
        alert("加入成功");
        $("this").parent().parent().prev().find('#count').val();
        ajax('GET', url, data, function (str) {

            // var arr = JSON.parse(str);
            // console.log(arr);
            var arr = JSON.parse(str);
            console.log(arr); //得到这个id的整条数据
            var a = [];
            var b = arr[0].imgBurl; //放大镜大小图
            // console.log(b);
            var c = JSON.stringify(b); //转成字符串
            a = c.slice(1, -1).split(","); //分割成数组
            console.log(a);

            // for (var i = 0; i < a.length; i++) {
            //     console.log(a[0]);
            // }
            // var val=1;
            //console.log(a[0]);
            // console.log(num);
            var url1 = '../api/inserttocars.php';
            var val = $('#count').val();

            var data1 = "dianming1=" + arr[0].shop + "&urlimgc=" + a[0] + "&titlec=" + arr[0].content + "&yang=" + arr[0].shop + "&danjiac=" + arr[0].price.substring(0, arr[0].price.length - 3) + "&shuliangc=" + val;
            //console.log(data1)
            //再次发起ajax请求把数据插购物车的表中				
            ajax('GET', url1, data1, function (str1) {
                console.log(str1); //测试下就可以了
            });
        });
    });
});