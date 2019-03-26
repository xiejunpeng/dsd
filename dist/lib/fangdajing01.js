$(function () {
    let $maximg = $(".maximg");
    // console.log($maximg);
    let $move = $(".move");
    // console.log($move);
    let $bimg = $(".bimg");
    // console.log($bimg);
    let $lis = $(".minimg>ul>li");
    // console.log($lis);
    let $imgs = $('.bimg >ul >li >img');
    // console.log($imgs);
    let $blis = $(".maximg >ul >li");
    // console.log($blis);
    let $box = $("#box");
    // console.log($box);
    let $b_bimg = $(".b_bimg");
    // console.log($b_bimg);
    $box.hover(() => {
        $move.css("display", "block");
        $bimg.css("display", "block");
    }, () => {
        $move.css("display", "none");
        $bimg.css("display", "none");
    }).mousemove((e) => {
        let $X = e.pageX;
        // console.log($X);
        let $Y = e.pageY;
        // console.log($Y);
        let $T = $maximg.offset().top;
        // console.log($T);
        let $L = $maximg.offset().left;
        // console.log($L);
        let $left = $X - $L - $move.innerWidth() / 2;
        // 临界值
        if ($left <= 0) {
            $left = 0;
        } else if ($left >= $maximg.innerWidth() - $move.innerWidth()) {
            $left = $maximg.innerWidth() - $move.innerWidth();
        }
        let $Top = $Y - $T - $move.innerHeight() / 2;
        // 临界值
        if ($Top <= 0) {
            $Top = 0;
        } else if ($Top >= $maximg.innerHeight() - $move.innerHeight()) {
            $Top = $maximg.innerHeight() - $move.innerHeight();
        }
        $move.css({
            "left": $left,
            "top": $Top
        });

        // 算比例  数学题  
        let $W = $left / (($maximg.innerWidth()) - ($move.innerWidth()));
        // console.log($W);
        let $H = $Top / (($maximg.innerHeight()) - ($move.innerHeight()));
        // console.log($H);
        let $b_bimg_left = ($bimg.innerWidth() - $b_bimg.innerWidth()) * $W;
        let $b_bimg_top = ($bimg.innerHeight() - $b_bimg.innerHeight()) * $H;
        // console.log($b_bimg_left);
        $b_bimg.css({
            "left": $b_bimg_left,
            "top": $b_bimg_top
        });
    })

    $lis.each(function (i, item) { //遍历节点
        $lis.eq(i).attr('data-index',i);
    });

    // tab
    $lis.mouseenter(function () {
        let $index = $(this).attr('data-index') * 1;  //关键点是加了这一步
        $blis.eq($index).css("display", "block").siblings().css("display", "none");
        $imgs.attr('src', '../img/' + ($index + 1) + '.jpg');
    });

    // 轮播图
    var iW = $('.minimg ul li').eq(0).outerWidth();
    // console.log(iW);
    $("#prev").click(function () {
        prev();
    });
    $("#next").click(function () {
        next();
    });

    function prev() {
        $('.minimg ul li:last').insertBefore($('.minimg ul li:first'));
        $('.minimg ul').css('left', -iW);
        $('.minimg ul').animate({
            'left': 0
        }, 500, 'linear');
    }

    function next() {
        $('.minimg ul').animate({
            'left': -iW
        }, 500, 'linear', function () {
            $('.minimg ul li:first').insertAfter($('.minimg ul li:last'));
            $('.minimg ul').css('left', 0);
        });
    }

});