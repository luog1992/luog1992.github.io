$(document).ready(function init() {
  var len = 500; //默认显示字数
  var ctn = document.getElementById("blog_summary"); //获取div对象
  var content = ctn.innerHTML; //获取div里的内容

  //alert(content);
  var span = document.createElement("span"); //创建<span>元素
  var a = document.createElement("a"); //创建<a>元素
  span.innerHTML = content.substring(0, len); //span里的内容为content的前len个字符

  a.innerHTML = content.length > len ? " ... 展开" : "";
  a.href = "javascript:void(0)";

  a.onclick = function () {
    if (a.innerHTML.indexOf("展开") > 0) {
      //如果a中含有"展开"则显示"收起"
      a.innerHTML = "<<&nbsp;收起";
      span.innerHTML = content;
    } else {
      a.innerHTML = " ... 展开";
      span.innerHTML = content.substring(0, len);
    }
  };
  // 设置div内容为空，span元素 a元素加入到div中
  ctn.innerHTML = "";
  ctn.appendChild(span);
  ctn.appendChild(a);
});
