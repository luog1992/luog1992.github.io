$(document).ready(function (e) {
    $("#content")
      .children()
      .each(function (index, element) {
        var tagName = $(this).get(0).tagName;
        if (tagName.substr(0, 1).toUpperCase() == "H") {
          var contentH = $(this).html(); //获取内容
          var markid = "mark-" + tagName + "-" + index.toString();
          $(this).attr("id", markid); //为当前h标签设置id
        }
      });
  });