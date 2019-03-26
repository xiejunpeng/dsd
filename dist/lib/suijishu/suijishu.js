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
function verification(a, b, c, d) {
    var ok3 = false;
    var oTex = document.getElementById(a);
    var authCode = document.getElementById(b);
    var oBtn = document.getElementById(c);
    // inf节点内容
    var inf = document.getElementById(d);
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
                return function () {
                    var ok3 = true;
                    fn(ok3);
                }
            } else {
                alert("图型有误");

                return false;
            }
        } else {
            inf.innerHTML = '请输入验证码';
        }
        // ev.preventDefault;
    }
}

//-------------------------------------------------------------