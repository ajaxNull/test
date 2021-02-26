getCode();
userCode(1);
$('.showBox').hide();
$('.imgText').hide();
$('.login').hide();
$('.register').hide();

let imgArr = ['https://p0.ssl.qhimg.com/t01eb2fdd57cc343e08.webp', 'https://p0.ssl.qhimg.com/t01bec9e2f55cb61472.webp', 'https://p1.ssl.qhimg.com/t01b1639cbb2fc12dee.webp', 'https://p0.ssl.qhimg.com/t01eb2fdd57cc343e08.webp', 'https://p1.ssl.qhimg.com/t0137bcd67e515e3a72.webp'];
let left = $('.left');
let right = $('.right');
let text = ['帮助中心', '收藏', '360官网', '360智慧生活', '登录', '注册', '360手机商城'];

let head_nav = $('.head_nav');
let left_str = '';
let right_str = '';
text.forEach((item, index) => {
    if (index <= 3) {
        left_str += `<span > ${item} </span>  `;
        left.html(left_str);
    } else if (index > 3) {
        right_str += ` <span  onclick="typeClick(${index})" onmouseover="overText(${index},event)" onmouseout="outText(${index},event)"> ${item} </span> `;
        right.html(right_str);
    }
});
right.append('<img src="./image/shop.png" style="width:30px;height:30px" onclick="onurl()" onmouseover="overImg(event)" onmouseout="outImg(event)"  alt="" class="shop"  > ');

// 登录注册
function typeClick(index) {
    console.log(index);
    if (index == 4) {
        $('.login').show();
    } else if (index == 5) {
        // console.log('注册');
        $('.register').show();
    } else {
        window.open('http://mall.360.cn/download');

    }
};

// 移入360手机商城
function overText(index, event) {
    if (index == 6) {
        // console.log('显示');
        // console.log(event.path[0]);
        event.path[0].classList.add('hover');
        $('.showBox').show();
    } else {
        return
    }
}
// 移出360手机商城
function outText(index, event) {
    if (index == 6) {
        // console.log(event.path[0]);
        event.path[0].classList.remove('hover');
        $('.showBox').hide();
    } else {
        return
    }
}


// img购物袋 跳转页面
function onurl() {
    window.open('https://i.360.cn/login/?src=mpw_iotmall&destUrl=https%3A%2F%2Fmall.360.cn%2F%2Fshop%2Fshopcart')
};
// img购物袋  移入事件
function overImg(event) {
    // console.log(event.path[0]);
    event.path[0].src = "./image/show1.png";
    event.path[0].classList.add('addImg');
    $('.imgText').show();
};

// img购物袋  移出事件
function outImg(event) {
    // console.log(event.path[0]);
    event.path[0].src = "./image/shop.png";
    event.path[0].classList.remove('addImg');
    $('.imgText').hide();
}

// 轮播图
layui.use('carousel', function() {

    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1',
        width: '100%', //设置容器宽度
        arrow: 'always', //始终显示箭头
        //,anim: 'updown' //切换动画方式
        height: '500px',
        interval: 2000
    });
});
// 循环数组，添加轮播图
let str1 = '';
imgArr.forEach((item, index) => {
    // console.log(item);
    str1 += `<div><img src="${item}"></div>`
});
$('.carousel').html(str1);
// 循环生成logonav
let res = ['https://p.ssl.qhimg.com/t0102789b8d00c3dfce.png', '新品推荐', '热卖榜单', '社区'];
let logoStr = '';
res.forEach((item, index) => {
    if (index == 0) {
        logoStr += `<img src="${item}" onclick="logoClick(${index})"/>`
    } else {
        logoStr += `<div onclick="logoClick(${index})">${item} </div>`
    }
});
$('.logo_left').html(logoStr);

// logo的点击事件
function logoClick(logo) {
    switch (logo) {
        case 1:
            window.location = 'listPage.html?id=124'
            break;
        case 2:
            window.location = 'listPage.html?id=127'
            break;
        case 3:
            window.location = 'listPage.html?id=128'
            break;
    }
    // console.log(logo);
    if (logo == 0) {
        window.open('http://mall.360.cn/');
    }
}
let span_list = [{
    name: '春节特惠',
    id: '0'
}, {
    name: '记录仪',
    id: '1',
}, {
    name: '摄像机',
    id: '2',
}, {
    name: '路由器',
    id: '3',
}, {
    name: '耳机',
    id: '4',
}, {
    name: '扫地机',
    id: '5',
}, {
    name: '儿童手表',
    id: '6',
}];
let spanStr = '';
span_list.map((item, index) => {
    spanStr += `<span onclick="spanClick(${item.id})">${item.name}</span>`
});
$('.span_list').html(spanStr);

function spanClick(index) {
    console.log(index);
}


// seach 绑定点击事件   模糊搜索
function search(thisId) {
    let showImg = $('.showImg').val();
    console.log(showImg);
    $.ajax({
        url: 'https://www.jshntg.com/api/products',
        data: {
            keyword: showImg,
            priceOrder: '',
            salesOrder: '',
            news: 0,
            limit: 10,
            cid: 0,
            page: 1,
            sid: null
        },
        success: function(res) {
            console.log(res);
            console.log(res.data);
            let listr = ''
            res.data.forEach(item => {
                listr += `
                <li>${item.store_name}</li>
                `
            });
            $('.logo_ul  ul').html(listr);
            if (search) {
                $('.logo_ul').show()
            }

        }
    })
};
// 给模糊搜索一个点击事件
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

function ullist() {


}

//   热门活动 循环数组对象  把hot图片放进去     
let hotArr = [{
    type: 'text',
    name: '热门活动',
    id: ''
}, {
    type: 'img',
    name: 'https://p5.ssl.qhimg.com/t01864414df36bf78d9.webp',
    id: '480'
}, {
    type: 'img',
    name: 'https://p5.ssl.qhimg.com/t01864414df36bf78d9.webp',
    id: '481'
}, {
    type: 'img',
    name: 'https://p5.ssl.qhimg.com/t01864414df36bf78d9.webp',
    id: '482'
}, {
    type: 'img',
    name: 'https://p5.ssl.qhimg.com/t01864414df36bf78d9.webp',
    id: '483'
}, {
    type: 'bigImg',
    id: '484',
    name: 'https://p2.ssl.qhimg.com/t011787d6f02e37ae19.webp'
}];

let hotStr = '';
hotArr.forEach((item, index) => {
    if (item.type == 'text') {
        hotStr += ` <div  class="hotTitle">${item.name}</div>`
    }
    if (item.type == 'img') {
        hotStr += `<img class="hotImg" onclick="openPage(${item.id})" src="${item.name}" alt="">`
    }
    if (item.type == 'bigImg') {
        hotStr += `<img  class="bigImg" src="${item.name}" alt="">`
    };
});

// 打开详情页
function openPage(id) {
    window.location = 'info.html?id=' + id
    console.log(id);
}
hotStr = '<div class="hot">' + hotStr + '</div>';
$('.padding').append(hotStr);

// recommend 爆款推荐src="https://p0.ssl.qhimg.com/t01270cebf2eb381215.webp"
let recomArr = [{
    type: 'text',
    name: '爆款推荐',
    id: ''
}, {
    type: 'img',
    name: 'https://p0.ssl.qhimg.com/t01270cebf2eb381215.webp',
    id: '485'
}, {
    type: 'img',
    name: 'https://p0.ssl.qhimg.com/t01270cebf2eb381215.webp',
    id: '486'
}, {
    type: 'img',
    name: 'https://p0.ssl.qhimg.com/t01270cebf2eb381215.webp',
    id: '487'
}, {
    type: 'img',
    name: 'https://p0.ssl.qhimg.com/t01270cebf2eb381215.webp',
    id: '488'
}, {
    type: 'bigImg',
    id: '489',
    name: 'https://p0.ssl.qhimg.com/t019849ad0465955296.webp'
}];
let recomStr = '';
recomArr.forEach((item, index) => {
    if (item.type == 'text') {
        recomStr += `<div  class="recomTitle">${item.name}</div> `
    }
    if (item.type == 'img') {
        recomStr += `<img class="recomImg" onclick="openPage(${item.id})" src="${item.name}" alt="">`
    }
    if (item.type == 'bigImg') {
        recomStr += `<img  class="bigImg" src="${item.name}" alt="">`
    };
});
recomStr = '<div class="recom">' + recomStr + '</div>';
$('.recommend').append(recomStr);

// 限时秒杀
let time_Arr = [{
    name: '360智能摄像机小水滴1080P D606',
    img: 'https://p2.ssl.qhimg.com/t01ff9ad37d421bbb0b.webp',
    cur_price: '￥129',
    old_price: '￥169',
    baifenbi: '10%'
}, {
    name: '360智能摄像机小水滴1080P D606',
    img: 'https://p2.ssl.qhimg.com/t01ff9ad37d421bbb0b.webp',
    cur_price: '￥129',
    old_price: '￥169',
    baifenbi: '20%'
}, {
    name: '360智能摄像机小水滴1080P D606',
    img: 'https://p2.ssl.qhimg.com/t01ff9ad37d421bbb0b.webp',
    cur_price: '￥129',
    old_price: '￥169',
    baifenbi: '8%'
}, {
    name: '360智能摄像机小水滴1080P D606',
    img: 'https://p2.ssl.qhimg.com/t01ff9ad37d421bbb0b.webp',
    cur_price: '￥129',
    old_price: '￥169',
    baifenbi: '25%'
}];
let time_str = '';
time_Arr.forEach(item => {
    time_str += ` <div class="timeImg">
                <div class="time_left">
                    <img src="${item.img}" alt="">
                </div>

                <div class="time_right">
                    <a class="camera">${item.name}</a>
                    <p class="price">
                        <span class="cur_price">${item.cur_price}</span>
                        <span class="old_price">${item.old_price}</span>
                    </p>
                    <div class="btn_box">
                        <div class="now" onclick="go()"> 马上抢</div>

                        <div class="layui-progress pro" lay-showpercent="true">
                            <div class="layui-progress-bar layui-bg-red" lay-percent="${item.baifenbi}">
                            </div>
                        </div>

                    </div>
                </div>
            </div>`
});

function go() {
    window.open('http://mall.360.cn/shop/item?item_id=58dd0e4f215ea017ee0ed36f', '_block')
};
$('.time_box').html(time_str);




addDom(family_arr, '.family_box')
    // $('.family_box').html(family_str);
    // 点击大图跳转页面
function bigFamily() {
    window.open('https://mall.360.cn/search/?q=%E6%91%84%E5%83%8F%E6%9C%BA&track=PCsxjhb')
};
// 点击小图跳转页面
function smlFamily() {
    window.open('http://mall.360.cn/shop/item?item_id=5f46404d6792c57d6ae56b0e')
};
// 点击banner图跳转页面
function watch() {
    window.open('https://mall.360.cn/ac/shoubiao?track=TL03')
};


addDom(Router_Arr, '.Router_box')

function addDom(arr, dom) {
    let str = ''
    arr.forEach(item => {
        str += `  <div class="item_bigImg" style="display:${item.bigImg == undefined ? 'none' : ''}">
            <img  src="${item.bigImg}" alt="" onclick="bigFamily()" class="index_left_img">
        </div>

        <div class="list" onclick="smlFamily()">
            <div class="list_top">
                <img src="${item.smlImg}" alt="" >
            </div>
            <div class="list_bottom">
                <p class="high">${item.name}</p>
                <p class="Picture">${item.Picture}</p>
                <p class="price">
                    <span class="cur_price">${item.cur_price}</span>
                    <span class="old_price">${item.old_price}</span>
                </p>
            </div> 
            
        </div>
        <p class="banner">
            <img style="display:${item.lanImg == undefined ? 'none' : ''}" src="${item.lanImg}" onclick="watch()" alt="" class="index_button_img">
        </p>`
    });
    $(dom).html(str)
}
addDom(Driving_Arr, '.Driving_box')
addDom(Sweep_Arr, '.Sweep_box')
    // 智能守护
addDom(intel_Arr, '.intel_box')
    // 生态互联
let ecol_Arr = [{
    id: '',
    bigImg: 'https://p5.ssl.qhimg.com/t01b1999ef9da609b19.webp',
    smlImg: 'https://p0.ssl.qhimg.com/t012e792aedceda1472.webp',
    name: '360液晶手写绘板',
    Picture: '轻薄便捷 一键清除',
    cur_price: '￥29',
    old_price: '￥59'
}, {
    id: '1',
    smlImg: 'https://p0.ssl.qhimg.com/t012e792aedceda1472.webp',
    name: '360液晶手写绘板',
    Picture: '轻薄便捷 一键清除',
    cur_price: '￥29',
    old_price: '￥59'
}, {
    id: '2',
    smlImg: 'https://p0.ssl.qhimg.com/t012e792aedceda1472.webp',
    name: '360液晶手写绘板',
    Picture: '轻薄便捷 一键清除',
    cur_price: '￥29',
    old_price: '￥59'
}, {
    id: '3',
    smlImg: 'https://p0.ssl.qhimg.com/t012e792aedceda1472.webp',
    name: '360液晶手写绘板',
    Picture: '轻薄便捷 一键清除',
    cur_price: '￥29',
    old_price: '￥59'
}, {
    id: '4',
    smlImg: 'https://p0.ssl.qhimg.com/t012e792aedceda1472.webp',
    name: '360液晶手写绘板',
    Picture: '轻薄便捷 一键清除',
    cur_price: '￥29',
    old_price: '￥59'
}, {
    id: '5',
    smlImg: 'https://p0.ssl.qhimg.com/t012e792aedceda1472.webp',
    name: '360液晶手写绘板',
    Picture: '轻薄便捷 一键清除',
    cur_price: '￥29',
    old_price: '￥59',
    lanImg: 'https://p5.ssl.qhimg.com/t011ec4446f7ce3e2b8.webp'
}];
addDom(ecol_Arr, '.ecology_box')
    //   更多商品
let content_Arr = [{
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },


    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    },

    {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }, {
        img: 'https://p3.ssl.qhimg.com/dr/400_400_80/t01b9d21e5df924ae5c.webp',
        text: '360 TF存储卡 32GB Class10 TF32',
        cur_price: '￥32.9',
        label: '直降'
    }
];
let content_str = '';
content_Arr.forEach(item => {
    content_str += ` <div class="content_list"  onclick="more()">
            <div class="content_top">
                <img src="${item.img}" alt="">
            </div>

            <div class="content_bottom">
                <p class="high">${item.text}</p>
                <p class="price">
                    <span class="cur_price">${item.cur_price}</span>
                </p>
                <p class="line">
                    <span class="label">${item.label}</span>
                </p>
            </div>
        </div>`
});
$('.content_box').html(content_str);

function more() {
    window.open('http://mall.360.cn/shop/item?item_id=5df05856ad4cd56804a352f4');
};
// 微博跳转页面
function blog() {
    window.open('https://weibo.com/qikoo360?is_all=1')
};
let after_arr = [{
    id: '0',
    name: '售后服务'
}, {
    id: '1',
    name: '7日无理由退货'
}, {
    id: '2',
    name: '质量问题15日内换货'
}, {
    id: '3',
    name: '保修条款'
}, {
    id: '4',
    name: '服务流程'
}, {
    id: '5',
    name: '许可协议'
}, {
    id: '6',
    name: '隐私政策'
}];
let after_str = '';
after_arr.forEach((item, index) => {
    if (index == 0) {
        after_str += `<h3>${item.name}</h3>`
    } else {
        after_str += `  
        <p>${item.name}</p>
      `
    }
});

$('.After').html(after_str);

// 帮助中心
let help_arr = [{
    id: '0',
    name: '帮助中心'
}, {
    id: '1',
    name: '用户注册'
}, {
    id: '2',
    name: '会员说明'
}, {
    id: '3',
    name: '登录与密码找回'
}, {
    id: '4',
    name: '购买指南'
}, {
    id: '5',
    name: '支付方式'
}, {
    id: '6',
    name: '配送与说明'
}];
let help_str = '';
help_arr.forEach((item, index) => {
    if (index == 0) {
        help_str += `<h3>${item.name}</h3>`
    } else {
        help_str += `  
        <p>${item.name}</p>
      `
    }
    $('.help').html(help_str);
})