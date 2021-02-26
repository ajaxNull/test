"use strict";

function setCookie(key, value, expires) {
  // 判断是否有过期时间
  if (expires) {
    var date = new Date();
    var d = date.getTime() - 8 * 60 * 60 * 1000;
    d = d + expires * 1000;
    date.setTime(d);
    document.cookie = "".concat(key, "=").concat(value, ";expires=").concat(date, ";path=/");
    return;
  }

  document.cookie = "".concat(key, "=").concat(value, ";path=/");
}

function getCookie(key) {
  var cookie = document.cookie; // cookie = 'age=18; a=1; b=2'
  // {age:18,a:1,b:2}

  var arr = cookie.split('; ');
  var obj = {};
  arr.forEach(function (item) {
    obj[item.split('=')[0]] = item.split('=')[1];
  }); // 如果不存在key这个值 那么以对象的形式返回所有的cookie的值

  if (!key) {
    return obj;
  }

  for (var i in obj) {
    //判断传进来的 key 和 i的值  
    if (key == i) {
      return obj[i];
    }
  }
}