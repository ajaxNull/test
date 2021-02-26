"use strict";

getCode();
userCode(1);
$('.showBox').hide();
$('.imgText').hide();
$('.login').hide();
$('.register').hide();
var imgArr = ['https://p0.ssl.qhimg.com/t01eb2fdd57cc343e08.webp', 'https://p0.ssl.qhimg.com/t01bec9e2f55cb61472.webp', 'https://p1.ssl.qhimg.com/t01b1639cbb2fc12dee.webp', 'https://p0.ssl.qhimg.com/t01eb2fdd57cc343e08.webp', 'https://p1.ssl.qhimg.com/t0137bcd67e515e3a72.webp'];
var left = $('.left');
var right = $('.right');
var text = ['帮助中心', '收藏', '360官网', '360智慧生活', '登录', '注册', '360手机商城'];
var head_nav = $('.head_nav');
var left_str = '';
var right_str = '';
text.forEach(function (item, index) {
  if (index <= 3) {
    left_str += "<span > ".concat(item, " </span>  ");
    left.html(left_str);
  } else if (index > 3) {
    right_str += " <span  onclick=\"typeClick(".concat(index, ")\" onmouseover=\"overText(").concat(index, ",event)\" onmouseout=\"outText(").concat(index, ",event)\"> ").concat(item, " </span> ");
    right.html(right_str);
  }
});
right.append('<img src="./image/shop.png" style="width:30px;height:30px" onclick="onurl()" onmouseover="overImg(event)" onmouseout="outImg(event)"  alt="" class="shop"  > '); // 登录注册

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
}

; // 移入360手机商城

function overText(index, event) {
  if (index == 6) {
    // console.log('显示');
    // console.log(event.path[0]);
    event.path[0].classList.add('hover');
    $('.showBox').show();
  } else {
    return;
  }
} // 移出360手机商城


function outText(index, event) {
  if (index == 6) {
    // console.log(event.path[0]);
    event.path[0].classList.remove('hover');
    $('.showBox').hide();
  } else {
    return;
  }
} // img购物袋 跳转页面


function onurl() {
  window.open('https://i.360.cn/login/?src=mpw_iotmall&destUrl=https%3A%2F%2Fmall.360.cn%2F%2Fshop%2Fshopcart');
}

; // img购物袋  移入事件

function overImg(event) {
  // console.log(event.path[0]);
  event.path[0].src = "./image/show1.png";
  event.path[0].classList.add('addImg');
  $('.imgText').show();
}

; // img购物袋  移出事件

function outImg(event) {
  // console.log(event.path[0]);
  event.path[0].src = "./image/shop.png";
  event.path[0].classList.remove('addImg');
  $('.imgText').hide();
} // 轮播图


layui.use('carousel', function () {
  var carousel = layui.carousel; //建造实例

  carousel.render({
    elem: '#test1',
    width: '100%',
    //设置容器宽度
    arrow: 'always',
    //始终显示箭头
    //,anim: 'updown' //切换动画方式
    height: '500px',
    interval: 2000
  });
}); // 循环数组，添加轮播图

var str1 = '';
imgArr.forEach(function (item, index) {
  // console.log(item);
  str1 += "<div><img src=\"".concat(item, "\"></div>");
});
$('.carousel').html(str1); // 循环生成logonav

var res = ['https://p.ssl.qhimg.com/t0102789b8d00c3dfce.png', '新品推荐', '热卖榜单', '社区'];
var logoStr = '';
res.forEach(function (item, index) {
  if (index == 0) {
    logoStr += "<img src=\"".concat(item, "\" onclick=\"logoClick(").concat(index, ")\"/>");
  } else {
    logoStr += "<div onclick=\"logoClick(".concat(index, ")\">").concat(item, " </div>");
  }
});
$('.logo_left').html(logoStr); // logo的点击事件

function logoClick(logo) {
  switch (logo) {
    case 1:
      window.location = 'listPage.html?id=124';
      break;

    case 2:
      window.location = 'listPage.html?id=127';
      break;

    case 3:
      window.location = 'listPage.html?id=128';
      break;
  } // console.log(logo);


  if (logo == 0) {
    window.open('http://mall.360.cn/');
  }
}

var span_list = [{
  name: '春节特惠',
  id: '0'
}, {
  name: '记录仪',
  id: '1'
}, {
  name: '摄像机',
  id: '2'
}, {
  name: '路由器',
  id: '3'
}, {
  name: '耳机',
  id: '4'
}, {
  name: '扫地机',
  id: '5'
}, {
  name: '儿童手表',
  id: '6'
}];
var spanStr = '';
span_list.map(function (item, index) {
  spanStr += "<span onclick=\"spanClick(".concat(item.id, ")\">").concat(item.name, "</span>");
});
$('.span_list').html(spanStr);

function spanClick(index) {
  console.log(index);
} // seach 绑定点击事件   模糊搜索


function search(thisId) {
  var showImg = $('.showImg').val();
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
    success: function success(res) {
      console.log(res);
      console.log(res.data);
      var listr = '';
      res.data.forEach(function (item) {
        listr += "\n                <ul onclick=\"openPage(".concat(item.id, ")\">\n                <li>").concat(item.store_name, "</li>\n                </ul>\n                ");
      });
      $('.logo_ul').html(listr);

      if (search) {
        $('.logo_ul').show();
      }
    }
  });
}

; // 给模糊搜索一个点击事件

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

  var r = window.location.search.substr(1).match(reg); //匹配目标参数

  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}

function ullist() {} //   热门活动 循环数组对象  把hot图片放进去     


var hotArr = [{
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
var hotStr = '';
hotArr.forEach(function (item, index) {
  if (item.type == 'text') {
    hotStr += " <div  class=\"hotTitle\">".concat(item.name, "</div>");
  }

  if (item.type == 'img') {
    hotStr += "<img class=\"hotImg\" onclick=\"openPage(".concat(item.id, ")\" src=\"").concat(item.name, "\" alt=\"\">");
  }

  if (item.type == 'bigImg') {
    hotStr += "<img  class=\"bigImg\" src=\"".concat(item.name, "\" alt=\"\">");
  }

  ;
}); // 打开详情页

function openPage(id) {
  window.location = 'info.html?id=' + id;
  console.log(id);
}

hotStr = '<div class="hot">' + hotStr + '</div>';
$('.padding').append(hotStr); // recommend 爆款推荐src="https://p0.ssl.qhimg.com/t01270cebf2eb381215.webp"

var recomArr = [{
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
var recomStr = '';
recomArr.forEach(function (item, index) {
  if (item.type == 'text') {
    recomStr += "<div  class=\"recomTitle\">".concat(item.name, "</div> ");
  }

  if (item.type == 'img') {
    recomStr += "<img class=\"recomImg\" onclick=\"openPage(".concat(item.id, ")\" src=\"").concat(item.name, "\" alt=\"\">");
  }

  if (item.type == 'bigImg') {
    recomStr += "<img  class=\"bigImg\" src=\"".concat(item.name, "\" alt=\"\">");
  }

  ;
});
recomStr = '<div class="recom">' + recomStr + '</div>';
$('.recommend').append(recomStr); // 限时秒杀

var time_Arr = [{
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
var time_str = '';
time_Arr.forEach(function (item) {
  time_str += " <div class=\"timeImg\">\n                <div class=\"time_left\">\n                    <img src=\"".concat(item.img, "\" alt=\"\">\n                </div>\n\n                <div class=\"time_right\">\n                    <a class=\"camera\">").concat(item.name, "</a>\n                    <p class=\"price\">\n                        <span class=\"cur_price\">").concat(item.cur_price, "</span>\n                        <span class=\"old_price\">").concat(item.old_price, "</span>\n                    </p>\n                    <div class=\"btn_box\">\n                        <div class=\"now\" onclick=\"go()\"> \u9A6C\u4E0A\u62A2</div>\n\n                        <div class=\"layui-progress pro\" lay-showpercent=\"true\">\n                            <div class=\"layui-progress-bar layui-bg-red\" lay-percent=\"").concat(item.baifenbi, "\">\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>");
});

function go() {
  window.open('http://mall.360.cn/shop/item?item_id=58dd0e4f215ea017ee0ed36f', '_block');
}

;
$('.time_box').html(time_str);
addDom(family_arr, '.family_box'); // $('.family_box').html(family_str);
// 点击大图跳转页面

function bigFamily() {
  window.open('https://mall.360.cn/search/?q=%E6%91%84%E5%83%8F%E6%9C%BA&track=PCsxjhb');
}

; // 点击小图跳转页面

function smlFamily() {
  window.open('http://mall.360.cn/shop/item?item_id=5f46404d6792c57d6ae56b0e');
}

; // 点击banner图跳转页面

function watch() {
  window.open('https://mall.360.cn/ac/shoubiao?track=TL03');
}

;
addDom(Router_Arr, '.Router_box');

function addDom(arr, dom) {
  var str = '';
  arr.forEach(function (item) {
    str += "  <div class=\"item_bigImg\" style=\"display:".concat(item.bigImg == undefined ? 'none' : '', "\">\n            <img  src=\"").concat(item.bigImg, "\" alt=\"\" onclick=\"bigFamily()\" class=\"index_left_img\">\n        </div>\n\n        <div class=\"list\" onclick=\"smlFamily()\">\n            <div class=\"list_top\">\n                <img src=\"").concat(item.smlImg, "\" alt=\"\" >\n            </div>\n            <div class=\"list_bottom\">\n                <p class=\"high\">").concat(item.name, "</p>\n                <p class=\"Picture\">").concat(item.Picture, "</p>\n                <p class=\"price\">\n                    <span class=\"cur_price\">").concat(item.cur_price, "</span>\n                    <span class=\"old_price\">").concat(item.old_price, "</span>\n                </p>\n            </div> \n            \n        </div>\n        <p class=\"banner\">\n            <img style=\"display:").concat(item.lanImg == undefined ? 'none' : '', "\" src=\"").concat(item.lanImg, "\" onclick=\"watch()\" alt=\"\" class=\"index_button_img\">\n        </p>");
  });
  $(dom).html(str);
}

addDom(Driving_Arr, '.Driving_box');
addDom(Sweep_Arr, '.Sweep_box'); // 智能守护

addDom(intel_Arr, '.intel_box'); // 生态互联

var ecol_Arr = [{
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
addDom(ecol_Arr, '.ecology_box'); //   更多商品

var content_Arr = [{
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
}];
var content_str = '';
content_Arr.forEach(function (item) {
  content_str += " <div class=\"content_list\"  onclick=\"more()\">\n            <div class=\"content_top\">\n                <img src=\"".concat(item.img, "\" alt=\"\">\n            </div>\n\n            <div class=\"content_bottom\">\n                <p class=\"high\">").concat(item.text, "</p>\n                <p class=\"price\">\n                    <span class=\"cur_price\">").concat(item.cur_price, "</span>\n                </p>\n                <p class=\"line\">\n                    <span class=\"label\">").concat(item.label, "</span>\n                </p>\n            </div>\n        </div>");
});
$('.content_box').html(content_str);

function more() {
  window.open('http://mall.360.cn/shop/item?item_id=5df05856ad4cd56804a352f4');
}

; // 微博跳转页面

function blog() {
  window.open('https://weibo.com/qikoo360?is_all=1');
}

;
var after_arr = [{
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
var after_str = '';
after_arr.forEach(function (item, index) {
  if (index == 0) {
    after_str += "<h3>".concat(item.name, "</h3>");
  } else {
    after_str += "  \n        <p>".concat(item.name, "</p>\n      ");
  }
});
$('.After').html(after_str); // 帮助中心

var help_arr = [{
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
var help_str = '';
help_arr.forEach(function (item, index) {
  if (index == 0) {
    help_str += "<h3>".concat(item.name, "</h3>");
  } else {
    help_str += "  \n        <p>".concat(item.name, "</p>\n      ");
  }

  $('.help').html(help_str);
});