/*
 * @Description: 
 * @Author: zhuhao
 * @Date: 2020-08-05 11:13:30
 * @LastEditors: zhuhao
 * @LastEditTime: 2020-08-07 17:45:46
 */
$(".header_btn").click(function () {
    $(".mask").toggle();
    $(".submit_form").toggle();
})
$(".close_btn").click(function () {
    $(".mask").hide();
    $(".submit_form").hide();
})

$(".mune_img").click(function () {
    $(".mask").toggle();
    $(".close_img").toggle();
    $('.headr_search').toggle();
    $('.mune_img').toggle();
    $(".head-nav").slideToggle(400);
})
$(".close_img").click(function () {
    $(".mask").toggle();
    $(".close_img").toggle();
    $('.headr_search').toggle();
    $('.mune_img').toggle();
    $(".head-nav").slideToggle(400);
})
$('.fixed_btn').click(function () {
    $('html , body').animate({ scrollTop: 0 }, 'slow');
})
$('.back_img').click(function () {
    var u = navigator.userAgent;
    if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && /(Safari)/i.test(u)) {

        window.history.back();
    } else {
        window.location = document.referrer

    }
})