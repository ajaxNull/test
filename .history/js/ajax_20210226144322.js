// 获取验证码
function getCode() {
    $.ajax({
        url: 'https://www.jshntg.com/api/verify_code',
        method: 'GET',
        data: {},
        success: (res) => {
            console.log(res);
            $('.code').attr('src', 'https://www.jshntg.com/api/sms_captcha?key=' + res.data.key + '&time=' +  Date.parse(new  Date()));
            ele = res.data.key;
        }

    });
};
var ele = '';


function change() {
    $('.code').attr('src', 'https://www.jshntg.com/api/sms_captcha?key=' + ele + '&time=' +  Date.parse(new  Date()));
}