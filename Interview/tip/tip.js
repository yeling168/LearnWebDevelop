function leftTip() {
  var length = $(".tip-left").length;
  for (var i = 0; i < length; i++) {
    var content = $(".tip-left:eq(" + i + ")").text();
    $(".tip-left:eq(" + i + ")").text("");
    $(".tip-left:eq(" + i + ")").append("<div class='tip-left-arrow'></div>");
    $(".tip-left:eq(" + i + ")").append(
      "<div class='tip-left-content'>" + content + "</div>"
    );
  }
}
