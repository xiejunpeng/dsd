$(function () {
    // console.log(123);

    //最顶处广告
    $(".close_slider ").on("click", function () {
        $(".W_top_banner ").animate({
            'height': 0
        }, 500, 'linear');
    });

    //做数据的渲染   如果有插入,会自动渲染出来的
    // var sjxr = document.querySelector('.cart-content');
    // var floor = document.querySelector('.W_store_floor');
    // var sjxr = document.querySelector('.cart-content');
    var floor = document.querySelector('.normal-goods');
    console.log
    var url = '../api/cars.php';
    var data = '';
    ajax('GET', url, data, function (str) {
        var arr = JSON.parse(str);
         //console.log(arr);

        var reg = arr.map(function (item) {
            return ` <div class="W_store_floor">
                        <div class="store_top clearfix">
                            <span class="select_tik fl">
                                <input type="checkbox">
                            </span>
                            <a href="javascript:;" class="store_name fl">${item.dianming}</a>
                        </div>
                        <div class="goods_floor clearfix set" >
                            <div class="goods_info fl clearfix" data-id=${item.gid}>
                                <div class="goods_right clearfix">
                                    <span class="select_tik  fl">
                                        <input type="checkbox">
                                    </span>
                                    <a href="javascript:;" target="_blank">
                                        <div class="goods_img fl">
                                            <img src="${item.urlimg1}" alt="">
                                        </div>
                                        <div class="goods_txt  fl">
                                            <div class="goods_a">
                                                <p class="p1">${item.title}</p>
                                                <p class="specifications">${item.yangshi}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <ul class="fr">
                                        <li class="unit_price"> ¥<em class="danjia">${item.danjia}</em></li>
                                        <li class="goods_num">
                                            <span class="reduce calc-btns">-</span>
                                            <input type="text" class="num" value="${item.shuliang}" data-stock="1" readonly="">
                                            <span class="add calc-btns">+</span>
                                        </li>
                                        <li class="total_price">¥<em class="subTotal">${item.danjia*item.shuliang}</em></li>
                                        <li class="others">
                                            <a href="javascript:;" class="delete_goods">删除</a>
                                            <a href="javascript:;" class="to_collection">移入收藏</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`    
        }).join('');
        floor.innerHTML = reg;

    });
    //购物车功能开始

    //1.加数量
    var val
    $('.cart-content').on('click', '.add', function (e) {
        val = $(this).prev().val();
        val++;
        if (val >= 10) {
            val = 10;
        };
        //var danjia = $(this).parent().prev().find('.danjia').text();
                //console.log(danjia);
                //console.log(val);
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.danjia').innerHTML ,
        e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.num').value);
        var danjia=e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        
        

        var url = '../api/carsupdate.php';
        var data = `valss=${val}&jiage=${danjia}`;
        ajax('GET', url, data, function (str) {
            console.log(str);
            //$('.total_price').html(danjia);
        });


        $(this).prev().val(val); //直接在页面更改了,数据库里面已经存有了,刷新也有了
        price($(this)); //小计
        var arr = checked(); //判断哪行被选中，存到该数组中
        allnum(arr);
        allprice(arr);
    });

    // 2.减数量
    $('.cart-content').on('click', '.reduce', function (e) {
         val = $(this).next().val();
        val--;
        if (val <= 1) {
            val = 1;
        }
        //var danjia = $(this).parent().prev().find('.danjia').text();
        var danjia = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        var url = '../api/carsupdate.php';
        var data = `valss=${val}&jiage=${danjia}`;

        

        ajax('GET', url, data, function (str) {
            			console.log(str);
        });

        $(this).next().val(val);
        price($(this));
        var arr = checked(); //判断哪行被选中，存到该数组中

        //allnum(arr);
        //allprice(arr);
    });

    //3.小计

    function price(now) {
        var pri = now.parent().prev().find('.danjia').text();
        pri = $.trim(pri); //去掉前后空格
           console.log($(".total_price"));
        	console.log(pri);

        //获取数量
        var all = now.parent().find('input').val();
        // console.log(all);
        var aprice = pri * all; //小计
        now.parent().next().html('￥'+aprice.toFixed(2)); //赋值小计,.toFixed(2)保留两个小数
        var pp = now.parent().parent().parent().parent().parent().parent().parent().next().find('.payableAmount').html(aprice.toFixed(2));
        // $(".total_price").html(pp);
    };

    //4.删除当行
    $('.cart-content').on('click', '.delete_goods', function () {
        var res = confirm('您确定要删除该商品吗？');
        if (res) {
            $(this).parent().parent().parent().parent().parent().parent().remove();  //删除整条


            //做接口删除数据库中的东西。
            var danjia = $(this).parent().prev().prev().prev().find('.danjia').text(); //拿单价的内容
            console.log(danjia); //输出价格
            var url = '../api/carsdelete.php';
            var data = `jiage=${danjia}`;
            ajax('GET', url, data, function (str) {
                console.log(str);
            });
        }
        updata();
        var arr = checked(); //判断哪行被选中，存到该数组中
        allnum(arr);
        allprice(arr);

    });


    // 5.刷新

    function updata() {
        if ($('.add').size() == 0) {
            $('.queren').remove();
        };
    };

    //6.全选
    var isCheacked = true;
    $('.select_tik ').on('click', function () {
        //console.log($(this));
        if (isCheacked) {
            $('.set  input').prop('checked', 'checked');
            $('.quanxuan input').prop('checked', 'checked');
            let num=0;
            let sum=0;
            for(let i=0;i<$('.num').length;i++){
                num+=($('.num').eq(i).val()*-1*-1);
            }
            for(let i=0;i<$('.subTotal').length;i++){
                sum+=($('.subTotal').eq(i).html()*-1*-1);
    
            } 
            $('#payableAmount').html(sum);
            $('#goodsAmount').html(sum);
            $('#selectedQuantity').html(num);

        } else {
            $('.set input').removeAttr('checked');
            $('.quanxuan input').removeAttr('checked');

            $('#payableAmount').html(0);
            $('#goodsAmount').html(0);
            $('#selectedQuantity').html(0);
        }
        isCheacked = !isCheacked;
        var arr = checked(); //判断哪行被选中，存到该数组中
 


        //allnum(arr);
        
        //allprice(arr);


    });

    //7.删除多行
    $('.delete_goods').on('click', function () {
        console.log(123);
        var arr = checked();
        var res = confirm('您确定要删除多行吗？');
        if (res) {
            //删除arr下标对应的行
            for (var i = arr.length - 1; i >= 0; i--) {
                //从后面开始删除
                $('.set').eq(arr[i]).parent().parent().remove();
            };
        };
        updata();
    });

    //8.循环判断哪行被选中了
    function checked() {
        var arr = []; //设置一个空数组，等会被选中的就把下标存起来
        var le = $('.set input').size();
        for (var i = 0; i < le; i++) {
            if ($('.set input').eq(i).prop('checked')) {
                //不为空证明被选中了
                arr.push(i);
            };
        };
        return arr;
    };

    // 9.总数量
    // console.log(arr);
    function allnum(arr) {
        var num = 0; //总数量
        for (var i = 0; i < arr.length; i++) {
            num += parseInt($('.num').eq(arr[i]).val());
        };
        //console.log(arr);
        
        $('.payableAmount').html(num);
    };

//==========================================================================================================
    //10.总价
    function allprice(arr) {
        var price = 0;
        for (var i = 0; i < arr.length; i++) {
            var nowtotal = $('.danjia').eq(arr[i]).text();
            //						console.log(nowtotal)
            nowtotal = $.trim(nowtotal);
            //						console.log(nowtotal);
            //						nowtotal=nowtotal.substring(2);//数据提取完成  255
            //						console.log(nowtotal);
            price += nowtotal * 1;
        }

        $('.goodsAmount').html(price.toFixed(2));
    };
    

    //11.单行选中
		$('.cart-content').on('click','.gouxuan',function(){
			var arr=checked();
			if(arr.length==$('.gouxuan').size()){
				$('.quanxuan').prop('checked','checked');
				isCheacked=false;
			}else{
				$('.quanxuan').removeAttr('checked');
				//证明没有选中全部
				isCheacked=true;
			};
			var arr=checked();//判断哪行被选中，存到该数组中
			allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
			//12总价
			allprice(arr);
		});

});