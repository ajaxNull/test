// 登录页面
function userCode(index) {

    if (index == 1) {
        $('.head_left a').addClass('userLogin');
        $('.head_center a').removeClass('userLogin');
    } else {
        $('.head_center a').addClass('userLogin');
        $('.head_left a').removeClass('userLogin');
    }
};

// 点击隐藏登录
function del() {
    $('.login').hide();
}

function dele() {
    $('.register').hide();
}
// 直接登录
function href() {
    $('.register').hide();
    $('.login').show();
}
// 快速注册

function fast() {
    $('.login').hide();
    $('.register').show();
}

// 登录正则
function login_phone() {
    var code = $('.pass .short').val();
    // console.log(code);
    let phone = $('.tel input').val();
    console.log(phone);



    layui.use('layer', function() {
        var layer = layui.layer;
        if (!/^1(3|5|7|8|9|6)\d{9}$/.test(phone)) {
            obj.telText = false;
            return layer.msg('请输入正确的手机号');
        } else {
            obj.telText = true;
        }
        if (!code || code != random) {
            obj.codeText = false;
            return layer.msg('请输入正确的验证码');
        } else {
            obj.codeText = true;
        }
        $('.login').hide();

    });
    // alert('登录成功')
}
let obj = {};
$('.tel input').blur(function() {

    if (true) {
        obj.telText = true;

    } else {
        obj.telText = true;
    }
    objtext();
})
$('.short').blur(function() {
    console.log(1);
    if (true) {
        obj.codeText = true;

    } else {
        obj.codeText = false;
    }
    objtext();
})



function objtext() {
    if (obj.telText == true && obj.codeText == true) {
        $('.subm input').prop('disabled', '');
    } else {
        $('.subm input').prop('disabled', true);
    }
}

// 获取验证码
function  f1() {    
    var  arr_4 = new  Array()   //开始取数 
          //随机数 
    function  getRandom(min, max) {                                                                                                               //向下取整
        var  random  =  Math.random() * (max - min) + min;
        random  =  Math.floor(random); 
        //判断数组长度                    
        if (arr_4.length  <  4) {   
            //遍历数组                
            for (i = 0; i <= arr_4.length; i++) {     
                //比较随机数               
                if (random == arr_4[i]) {  break; } else  {  if (i == arr_4.length) { arr_4.push(random); break; }     }                
            };                
            getRandom(0, 10);            
        }                     
    }   
    //随机取0-9     
    getRandom(0, 10);     
    console.log(arr_4.join(''));  
    random = arr_4.join('');
}
var random = '';