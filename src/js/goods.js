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
    var res = (location.search).slice(1) //id=g1    slice(1)  得到=g1
    var id = res.split('=')[1]; //得到g1
    console.log(id) //得到g1
    var url = '../api/goods.php'; //连接PHP
    //======================================放大镜渲染============================================
    data = `idx=${id}`; //把g1传到数据库,查询这个id的内容
    ajax('GET', url, data, function (str) {
        var arr = JSON.parse(str);
        console.log(arr) //得到这个id的整条数据
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


        let imgli = a.map((item, index) => { //循环
            return `<li><img src="../img/${item}" alt=""></li>`
        }).join("");
        let html = `${imgli}` ;
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
        var str01 = str.map((item, index) => { //循环
            return `<a href="javascript:;" class="fl ">
                          <span class="upper_style_right_img fl">
                              <img src="../img/${item}" alt="">
                          </span>
                          <span class="upper_style_right_text fl">钢 黑色 PVD镀金 不锈钢</span>
                      </a>`
        }).join("");
        // var html01 = `${str01}`
        // $(".upper_style_right").html(html01);

        //======================================详情上部份============================================
        // console.log(arr[0]);
        let html02 = "";
        for (var key in arr[0]) {
            // console.log(arr[0][key], key);
            html02 = `	<div class="upper_title">${arr[0].content}</div>
                                <div class="upper_xuyan">${arr[0].gaoliang}<span class="js_more CUSTOMER-SERVICE">了解更多&gt;&gt;</span></div>
                                <div class="upper_model clearfix">
                                    <div class="fl upper_model_a"><span>型号:</span><span>${arr[0].xinghao}</span></div>
                                    <div class="fl upper_model_b"><span>编号:</span><span>${arr[0].pianhao}</span></div>
                                    <div class="fl upper_model_c"><span>品牌:</span><span>${arr[0].pinpai}</span></div>
                                    <div class="fr upper_model_d"><span>销量:</span><span>${arr[0].sales}</span></div>
                                </div>
                                <div class="upper_price">
                                    <div class="upper_price_jiage clearfix">
                                        <div class="upper_price_jiage_left fl">万表价</div>
                                        <div class="upper_price_jiage_right fl">
                                            <span class="upper_price_jiage_a">￥</span>
                                            <span class="upper_price_jiage_b js_price">${arr[0].price}</span>
                                            <span class="upper_price_jiage_c">￥${arr[0].sPrice}</span>
                                        </div>
                                    </div>
                                    <div class="upper_stages tc_stages clearfix">
                                        <div class="upper_stages_left fl">领劵</div>
                                        <div class="upper_stages_right fl">
                                            <div class="upper_coupon_a fl">
                                                <div class="icon-d-coupon-left fl item"></div>
                                                <div class="fl item">
                                                    ¥
                                                    ${arr[0].jinjuan}
                                                </div>
                                                <div class="icon-d-coupon-right fl item"></div>
                                            </div>
                                            <span class="upper_coupon_text">更多</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="upper_give clearfix">
                                                <div class="upper_give_left fl">配送</div>
                                                <div class="upper_give_right fl"><i>（顺丰包邮）</i>16:45前支付，预计1-3个工作日内发货，支持货到付款</div>
                                            </div>
                                            <div class="promise clearfix">
                                                <div class="left fl">承诺</div>
                                                <div class="right fl">
                                                    <li class="fl">
                                                        <i></i><span>正品保障</span>
                                                        <div class="popup" style="display: none;">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span>正规发票</span>
                                                        <div class="popup" style="display: none;">提供国家税务局认可的正规发票，具有售后维权法律效力。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span>假一赔三</span>
                                                        <div class="popup" style="display: none;">已售出名表超过45万枚，正品无假货，如有售假三倍赔偿。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span>7天退换</span>
                                                        <div class="popup" style="display: none;">无理由退换：除特殊商品外（特卖、私人定制等）质量退换：非人为机芯故障或商品制造缺陷。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span>全球联保</span>
                                                        <div class="popup" style="display: none;">800+家售后服务点，完善的售后保障，可享受品牌全球联保服务。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span>免息分期</span>
                                                        <div class="popup" style="display: none;">与15家银行合作，招商、中行等提供免息分期购表服务。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span>实体店体验</span>
                                                        <div class="popup" style="display: none;">多家线下体验中心，互联网+新零售。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span>闪电发货</span>
                                                        <div class="popup" style="display: none;">每天16：45前下单，可当天发货。</div>
                                                    </li>
                                                    <li class="fl">
                                                        <i></i><span class="">货到付款</span>
                                                        <div class="popup" style="display: none;">收到货验货后再支付，可刷卡、现金、转账。</div>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="service clearfix">
                                                <div class="left fl">服务</div>
                                                <div class="right fl">
                                                    <a class="fl" href="javascript:;" target="_blank">
                                                        <span>名匠保修</span>
                                                        <i class="icon-d-choice"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="upper_style clearfix">
                                                <div class="upper_style_left fl">款式</div>
                                                <div class="upper_style_right fl">
                                                    ${str01}
                                                </div>
                    
                                            </div>
                                            <div class="upper_number clearfix">
                                                <div class="upper_number_left fl">数量</div>
                                                <div class="upper_number_right fl">
                                                    <div class="upper_number_right_a fl">
                                                        <span class="fl reduce" data-type="subtract">-</span>
                                                        <input type="text" value="1" class="cont fl" id="count">
                                                        <span class="fl plus" data-type="add" data-saletype="3">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="upper_button clearfix">
                                                <div class="upper_button_a page fl js_purchase  buyalong">立即购买</div>
                                                <div class="upper_button_b page fl" id="js_cart">
                                                    <a href="../html/cars.html">加入购物车</a> 
                                                </div>
                    
                                                <div class="qr-code fl">
                                                    <p class="icon-d-goods-ma icon"></p>
                                                    <p class="text">手机购买</p>
                                                    <div class="qr-code-popup">
                                                        <img src="" alt="">
                                                    </div>
                                                </div>
                                            </div>`

        };

        $(".detail_upper_right").html(html02);

    });

    //加数量
    var val
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
            success: function (str) { //成功回调
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
        $("#count").val(val)
        $.ajax({
            type: "get", //请求方式
            url: "../api/jiajianshulaing.php", //接口路径
            data: { //传输数据
                "valss": val,
                "gid": id

            },
            success: function (str) { //成功回调
                console.log(str);
            }
        });
    });

    //======================================点击插入============================================

    var buyalong = document.querySelector('.buyalong');
    $(".detail_upper_right").on("click", '.buyalong', function () { //点击单独购买
        // console.log($("this").parent().parent().prev().find('#count'))
        alert("加入成功");
        $("this").parent().parent().prev().find('#count').val();
        ajax('GET', url, data, function (str) {

            // var arr = JSON.parse(str);
            // console.log(arr);
            var arr = JSON.parse(str);
            console.log(arr) //得到这个id的整条数据
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
            let val = $('#count').val();

            var data1 = `dianming1=${arr[0].shop}&urlimgc=${a[0]}&titlec=${arr[0].content}&yang=${arr[0].shop}&danjiac=${arr[0].price.substring(0,arr[0].price.length-3)}&shuliangc=${val}`;
            //console.log(data1)
            //再次发起ajax请求把数据插购物车的表中				
            ajax('GET', url1, data1, function (str1) {
                console.log(str1); //测试下就可以了
            });
        });
    });



});