"use strict";

$(function () {
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;

    $(".phone_num").blur(function () {
        var val = $(".phone_num").val().trim();
        console.log(val);
        if (val) {
            ok1 = true;
            $("#i1").html("通过");
            $("#i1").focus();
            $("#i1").css({
                "background": "none",
                "color": "#58bc58"
            });
        } else {
            $("#i1").html("失败");
        }
    });

    // 选项卡
    $("#loginTab span").click(function () {
        $(this).css('color', '#cc5252').siblings().css('color', '');
        $('#tab .con').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });

    //=======================================图形验证码
    var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    drawCode();
    // 绘制验证码
    function drawCode() {
        var canvas = document.getElementById("verifyCanvas"); //获取HTML端画布
        var context = canvas.getContext("2d"); //获取画布2D上下文
        context.fillStyle = "cornflowerblue"; //画布填充色
        context.fillRect(0, 0, canvas.width, canvas.height); //清空画布
        context.fillStyle = "white"; //设置字体颜色
        context.font = "25px Arial"; //设置字体
        var rand = new Array();
        var x = new Array();
        var y = new Array();
        aaa1 = "";
        for (var i = 0; i < 5; i++) {
            rand[i] = nums[Math.floor(Math.random() * nums.length)];
            x[i] = i * 16 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);
            aaa1 += rand[i];
        }

        // return aaa1;
        // console.log($("#verifyCanvas").text());
        //画3条随机线
        for (var i = 0; i < 3; i++) {
            drawline(canvas, context);
        }

        // 画30个随机点
        for (var i = 0; i < 30; i++) {
            drawDot(canvas, context);
        }
        convertCanvasToImage(canvas);
    }

    // 随机线
    function drawline(canvas, context) {
        context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = 0.5; //随机线宽
        context.strokeStyle = 'rgba(50,50,50,0.3)'; //随机线描边属性
        context.stroke(); //描边，即起点描到终点
    }
    // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
    function drawDot(canvas, context) {
        var px = Math.floor(Math.random() * canvas.width);
        var py = Math.floor(Math.random() * canvas.height);
        context.moveTo(px, py);
        context.lineTo(px + 1, py + 1);
        context.lineWidth = 0.2;
        context.stroke();
    }
    // 绘制图片
    function convertCanvasToImage(canvas) {
        document.getElementById("verifyCanvas").style.display = "none";
        var image = document.getElementById("code_img");
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    // 点击图片刷新
    document.getElementById('code_img').onclick = function () {
        // 1
        $('#verifyCanvas').remove();
        // 2
        $('#verify').after('<canvas width="96" height="44" id="verifyCanvas"></canvas>');
        drawCode();
        console.log(aaa1);
    };

    //=====================================================================================  
    //图型验证码
    $i2 = $("#i2");
    // console.log($i2); //图型提示
    $("#verify").blur(function () {
        var val = $("#verify").val().trim();
        console.log(aaa1);
        console.log(val);
        if (val == aaa1) {
            ok2 = true;
            $("#i2").html("通过");
            $("#i2").css({
                "background": "none",
                "color": "#58bc58"
            });
        } else {
            $("#i2").html("失败");
        }
    });

    //--------------------------------------------------
    /*
     	randomColor(str):
     	说明：生成随机颜色
     	参数：如果传16进来，生成16进制颜色，如果传rgb进来，传rgb颜色
     
     * */

    function randomColor(str) {
        //生成随机颜色
        if (str == 16) {
            //生成16进制的   '0123456789abcdef'  #666677
            var str = '0123456789abcdef';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += str.charAt(parseInt(Math.random() * str.length));
            }

            return color;
        } else if (str == 'rgb') {
            //rgb(255,255,0) 生成3个随机数，每个随机数应该在  0-255
            var r = parseInt(Math.random() * 256);
            var g = parseInt(Math.random() * 256);
            var b = parseInt(Math.random() * 256);

            return 'rgb(' + r + ',' + g + ',' + b + ')';
        } else {
            alert('参数传错了');
        }
    }

    //-----------------------------
    //补零操作
    function setDb(num) {
        //小于10的，补零
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
    //------------------------------------------------------------
    //--------------------------------------------------

    /*
     	randomColor(str):
     	说明：生成随机颜色
     	参数：如果传16进来，生成16进制颜色，如果传rgb进来，传rgb颜色
     
     * */

    function randomColor(str) {
        //生成随机颜色
        if (str == 16) {
            //生成16进制的   '0123456789abcdef'  #666677
            var str = '0123456789abcdef';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += str.charAt(parseInt(Math.random() * str.length));
            }

            return color;
        } else if (str == 'rgb') {
            //rgb(255,255,0) 生成3个随机数，每个随机数应该在  0-255
            var r = parseInt(Math.random() * 256);
            var g = parseInt(Math.random() * 256);
            var b = parseInt(Math.random() * 256);

            return 'rgb(' + r + ',' + g + ',' + b + ')';
        } else {
            alert('参数传错了');
        }
    }

    //-----------------------------
    //补零操作
    function setDb(num) {
        //小于10的，补零
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }

    //---------------------------
    // 编写生成4位数字验证码的函数，并显示在页面，点击重新生成验证码


    /*
    			需求:生成4位随机数字字母组合的验证码+背景颜色随机生成
    			
    				* 点击验证码，可以切换新的验证码
    					* 封装一个函数，可以生成随机四位数有字母的验证码
    					* 生成随机颜色替换旧的颜色
    					* 点击拿到四位数随机数放到  auth_code
    				* 输入验证码，和随机数匹配，匹配才能提交
    		*/
    var oTex = document.getElementById('note_code');
    var authCode = document.getElementById("auth_code");
    var oBtn = document.getElementById('duanXi');
    var inf = document.getElementById('i3');
    //1、点击验证码，可以切换新的验证码
    authCode.onclick = function () {
        update();
    };
    oBtn.onclick = function () {
        this.style.display = "none";
    };
    var num = ''; //var  var num = ''; 避免undefined  2019/1/21
    update(); //一开始就是随机数

    function update() {
        // 第一次生成的验证码
        num = randomNum();
        authCode.value = num;
        var color = randomColor(16);
        authCode.style.background = color;
    }

    // var num = '';   
    function randomNum() {
        num = '';
        var str = '0123456789'; //
        //2.生成随机四位数有字母的验证码

        for (var i = 0; i < 4; i++) {
            num += str.charAt(parseInt(Math.random() * str.length));
        }
        // num=num.toUpperCase();//看需求，变成大写字母
        num = num.toLowerCase(); //看需求，变成小写字母
        //				console.log(num);
        return num;
    }

    //3.输入验证码，和随机数匹配，匹配才能提交

    oTex.onblur = function () {

        var val = oTex.value.trim();
        console.log(num);
        //非空判断
        if (val) {
            //不为空
            if (val == num) {
                inf.style.background = "none";
                inf.style.color = "#58bc58";
                inf.innerHTML = '验证通过';
                ok3 = true;
            } else {
                inf.innerHTML = '有错误';
            }
        } else {
            inf.innerHTML = '请输入验证码';
        }
    };

    //-------------------------------------------------------------
    // 用户登陆
    $("#user_login2").click(function () {
        console.log(123);
        var val = $(".phone_num").val().trim();
        console.log(val);
        if (ok1 && ok2 && ok3) {
            $.ajax({
                type: "post", //请求方式
                dataType: "html",
                url: "../api/login.php", //接口路径
                data: { //传输数据
                    "tel": val
                },
                success: function success(arr) {
                    //成功回调
                    console.log(arr);
                    if (arr == "yes") {
                        //字符串零为真   
                        var val = $(".phone_num").val().trim();
                        setCookie('name', val);
                        // setCookie('paw', paw);
                        // setCookie('name', val, 7);
                        location.href = '../index.html';

                        // 取cookie出来:取出保存的内容，显示在表单中
                        // var name= setCookie('name');
                        // $(".phone_num").val(name);
                        // } else {
                        //     alert("登陆失败");
                    }
                    // $('.h_er_s1').on('click',function(){
                    //     if (isok1) {
                    //         location.href='html/denglu.html';
                    //     }
                    // });
                    // $('.h_er_s2').on('click',function(){
                    //     if (isok1) {
                    //         location.href='html/zhuce.html';
                    //     }else{
                    //         removeCookie('name');
                    //         getcook();
                    //     }
                    // });
                    // if(str == 1) {
                    //     if($('#checkbox').prop('checked')) {
                    //         setCookie('name', username,7);
                    //         setCookie('paw', paw,7);
                    //     }else{
                    //         setCookie('name', username);
                    //         setCookie('paw', paw);
                    //     }
                    //     location.href = "../ndex.html";
                    // }
                }
            });
        }
    });
});