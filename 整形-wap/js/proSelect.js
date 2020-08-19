/*
 * @Description: 
 * @Author: zhuhao
 * @Date: 2020-08-05 14:28:11
 * @LastEditors: zhuhao
 * @LastEditTime: 2020-08-05 16:11:30
 */
/**
 * Created by mzf on 2018/8/7.
 */
let proArr
let proArr2
$(function () {
    addArray2();
    //加载省级列表
    for (let i = 0; i < proArr.length; i++) {
        $('.dropProvUl02').append("<li class='dropProvLi02'>" + proArr[i] + "</li>");
    }
    //点击选择城市时，先隐藏省级市级选择块
    $('.proSelect').on('click', function () {
        // $('.dropDown').toggle();
        $('.mask').toggle();
        $('.dropDown02 .drop_tit').toggle();

        $('.dropDown02 .dropCity02').css('display', "none");
        $('.dropDown02 .dropProv02').toggle();

        if ($('.proName').attr('data')) {

            $('.dropCity02').css("display", "block");
            $('.dropCityUl02').empty();

            for (let j = 0; j < proArr2[$('.proName').attr('data')].length; j++) {
                $('.dropCityUl02').append("<li class='dropCityLi02'>" + proArr2[$('.proName').attr('data')][j] + "</li>");
                if (proArr2[$('.proName').attr('data')][j] == $('.proName').text()) {
                    $($('.dropCityLi02')[j]).css("background-color", "#fff2f4")
                }
                $('.dropDown02 .dropCityLi02').on("click", function () {

                    $('.proName').text($(this).text());
                    $('.dropDown02 div').css("display", "none");
                    $('.mask').hide();
                    $('.drop_tit').hide();
                    $('.proSelect').addClass('activeCity')
                });
            }
        }
        //给省级列表添加mouseover事件
        $('.dropDown02 .dropProvLi02').on('click', function () {
            $('.dropDown02 .dropCity02').css("display", "block");
            $('.dropDown02 .dropProvLi02').css("background-color", "white");
            $('.dropDown02 .dropCityUl02').empty();
            $(this).css("background-color", "#fff2f4");
            //加载城市列表
            $('.proName').attr('data', $(this).index())
            for (let j = 0; j < proArr2[$(this).index()].length; j++) {
                $('.dropCityUl02').append("<li class='dropCityLi02'>" + proArr2[$(this).index()][j] + "</li>");

            }
            //选择城市
            $('.dropDown02 .dropCityLi02').on("click", function () {
                //console.log($(this).text());
                $('.proName').text($(this).text());
                $('.dropDown02 div').css("display", "none");
                $('.mask').hide();
                $('.drop_tit').hide();
                $('.proSelect').addClass('activeCity')
                // $('.dropDown div').css("display", "none");
            });
        });
    });
    // console.log(arr[17]);
});
//把市级添加到arr2中对应的省级
function addArray2 () {


    proArr = ["不限", "眼部整形", "胸部整形", "鼻部整形", "面部轮廓", "皮肤美容", "眉部整形", "口腔整形", "耳部整形", "减肥瘦身", "激光脱毛", "毛发种植", "唇部整形", "注射美容", "抗衰老", "四肢整形"];
    proArr2 = ["不限", "眼部整形", "胸部整形", "鼻部整形", "面部轮廓", "皮肤美容", "眉部整形", "口腔整形", "耳部整形", "减肥瘦身", "激光脱毛", "毛发种植", "唇部整形", "注射美容", "抗衰老", "四肢整形"];
    function addTo (id, iArray) {
        proArr2[id] = [];
        for (let i = 0; i < iArray.length; i++) {
            proArr2[id][i] = iArray[i];
        }

    }

    addTo("0", ["不限"]);
    addTo("1", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("2", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("3", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("4", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("5", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("6", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("7", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("8", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("9", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("10", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("11", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("12", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("13", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("14", ["不限", '假体隆胸', '自体脂肪隆胸', '乳房下垂矫正', '巨乳缩小', '乳晕再造', '乳房再造', '胸部假体取出', '乳房畸形矫正']);
    addTo("15", ["不限"]);
    addTo("16", ["不限"]);

};

