/*
 * @Description: 
 * @Author: zhuhao
 * @Date: 2020-08-05 14:28:11
 * @LastEditors: zhuhao
 * @LastEditTime: 2020-08-07 17:27:25
 */
/**
 * Created by mzf on 2018/8/7.
 */

$(function () {
    let ways = ['推荐日记', '最新日记', '热门日记']
    if ($('.waySelect').attr('data-type') == 'wenda') {
        ways = ['精选问答', '最新问答', '热门问答']
    }
    //加载省级列表
    for (let i = 0; i < ways.length; i++) {
        $('.dropProvUl03').append("<li class='dropProvLi03'>" + ways[i] + "</li>");
    }
    //点击选择城市时，先隐藏省级市级选择块
    $('.waySelect').on('click', function () {
        // $('.dropDown').toggle();
        $('.mask').toggle();
        $('.drop_tit03').toggle();

        $('.dropProv03').toggle();



        //给省级列表添加mouseover事件
        $('.dropProvLi03').on('click', function () {
            $('.dropProvLi03').css("color", "#555555");
            $(this).css("color", "#ff5373");
            $('.wayName').attr('data', $(this).index())
            $('.wayName').text($(this).text());
            $('.dropDown03 div').css("display", "none");
            $('.mask').hide();
            $('.drop_tit03').hide();
            $('.waySelect').addClass('activeCity')

        });
    });
    // console.log(arr[17]);
});


