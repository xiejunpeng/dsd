$(function () {
    //=======================================图形验证码
    var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];

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
        aaa = "";
        for (var i = 0; i < 5; i++) {
            rand[i] = nums[Math.floor(Math.random() * nums.length)]
            x[i] = i * 16 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);
            aaa += rand[i];
        }

        // return aaa;
        // console.log($("#verifyCanvas").text());
        //画3条随机线
        for (var i = 0; i < 3; i++) {
            drawline(canvas, context);
        }

        // 画30个随机点
        for (var i = 0; i < 30; i++) {
            drawDot(canvas, context);
        }
        convertCanvasToImage(canvas)
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
        $('#verify').after('<canvas width="100" height="40" id="verifyCanvas"></canvas>')
        drawCode();
        console.log(aaa);
    }

    //=====================================================================================  
    $mobile = $("#mobile");
    console.log($mobile); //手机号
    $i1 = $("#i1");
    console.log($i1); //手机提示码
    $verify = $("#verify");
    console.log($verify); //图型码
    $i2 = $("#i2");
    console.log($i2); //图型提示
    $i3 = $("#i3");
    console.log($i3); //输入短信码 
    $getcaptcha = $("#getcaptcha");
    console.log($getcaptcha); //短信提示码  
    $password = $("#password");
    console.log($password); //输入密码 
    $i4 = $("#i4");
    console.log($i4); //输入密码 
    $i5 = $("#i5");
    console.log($i5); //再次输入密码 
    $cPssword = $("#confirm_password");
    console.log($cPssword); //再次输入密码 
    $register = $("#register");
    console.log($register); //注册

    // 1)验证用户名是否存在
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var ok4 = false;
    var ok5 = false;
    $mobile.blur(function () {
        var $val = $mobile.val().trim();
        // console.log($val);
        if ($val) {
            if (checkReg.tel($val)) {
                $.ajax({
                    type: "get", //请求方式
                    url: "../api/checkname.php", //接口路径
                    data: { //传输数据
                        "tel": $val
                    },
                    success: function (str) { //成功回调
                        console.log(str);
                        // var arr = JSON.parse(str); //转成对象
                        console.log(str);
                        if (str == 'not') { //字符串零为真   
                            $i1.html("该用户太受欢迎啦!");
                            // alert("第一有误");
                        } else {
                            $i1.html("可以注册");
                            $i1.css({
                                "background": "none",
                                "color": "#58bc58"
                            })
                            return ok1 = true;
                        }
                    }
                });
            } else {
                $i1.html("不符合规则");
            }
        } else {
            $i1.html("用户名不能为空");
        }
    });

    //图型验证码
    $verify.blur(function () {
        var $val = $verify.val().trim();
        // var newa=
        if ($val == aaa) {
            $i2.html("验证通过");
            $i2.css({
                "background": "none",
                "color": "#58bc58"
            })
            return ok2 = true;
        } else {
            $i2.html("验证失败");
        }
    });
    //  差短信验证码  返回  return ok3 = true;
    verification('duanxin', 'auth_code', 'duanXi', 'i3');
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
    // function verification(oTex, authCode, oBtn, inf) {
    // function verification(a, b, c, d) {
    // var ok3 = false;
    var oTex = document.getElementById("duanxin");
    var authCode = document.getElementById("auth_code");
    var oBtn = document.getElementById("duanXi");
    // inf节点内容
    var inf = document.getElementById("i3");
    // console.log(inf);
    //1、点击验证码，可以切换新的验证码
    authCode.onclick = function () {

        update();
    }
    oBtn.onclick = function () {
        this.style.display = "none";
    }
    var num = ''; //var  var num = ''; 避免undefined  2019/1/21
    update(); //一开始就是随机数

    function update() {
        // 第一次生成的验证码
        num = randomNum();
        authCode.value = num;
        var color = randomColor(16);
        authCode.style.background = color;
        //				var color2=randomColor(16);
        //				authCode.style.color=color2;
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

    duanxin.onblur = function () {

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
                alert("图型有误");
                return false;
            }
        } else {
            inf.innerHTML = '请输入验证码';
        }
        // ev.preventDefault;
    }
    // }

    //-------------------------------------------------------------

    //验证密码
    $password.blur(function () {
        var $val = $password.val().trim();
        if ($val) {
            if (checkReg.psweasy($val)) {
                $i4.html("符合规则");
                $i4.css({
                    "background": "none",
                    "color": "#58bc58"
                })
                return ok4 = true;
            } else {
                $i4.html("不符合规则");
            }
        } else {
            $i4.html("不能为空");
        }
    });

    //再次输入密码
    $cPssword.blur(function () {
        var $val = $password.val().trim();
        var $val1 = $cPssword.val().trim();
        if ($val == $val1) {
            $i5.html("正确");
            $i5.css({
                "background": "none",
                "color": "#58bc58"
            });
            return ok5 = true;
        } else {
            $i5.html("两次输入不相同");
        }
    });
    // 差ok3
    $register.click(function () {
        // console.log(2);
        if (ok1 && ok2 && ok3 && ok4 && ok5) {
            var $val1 = $mobile.val().trim();
            var $val2 = $password.val().trim();
            $.ajax({
                type: "post", //请求方式
                url: "../api/reg.php", //接口路径
                data: { //传输数据
                    "tel": $val1,
                    "psw": $val2
                },
                success: function (str) { //成功回调
                    console.log(str);
                    // var arr = JSON.parse(str); //转成对象
                    console.log(str);
                    if (str == 'yes') { //字符串零为真   
                        location.href = 'login.html';
                    } else {
                        alert("注册失败");

                    }
                }
            });
            // console.log("成功");
        } else {
            console.log("不能为空");
        }
    });
});