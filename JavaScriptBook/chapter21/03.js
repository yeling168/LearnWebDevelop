/**
 * 想要测试一个媒体元素能否播放指定类型的媒体文件，可以调用canPlayType()方法并将媒体MIME类型
 * (有时需要包含codec参数)传递进去。如果它不能播放该类型的媒体文件，该方法会返回一个空的字符串(一个假值)
 * 反之，它会返回一个字符串:"maybe"或者"probably"。之所以返回"probably"这样不确定的结果，是因为
 * 音频和视频编解码器本身就非常复杂，在没有真正下载并尝试播放指定类型的媒体前是难确定是否真的可以播放
 * 此类型文件
 */

var a = new Audio();
if (canPlayType("audio/wav")) {
    a.src = "soundeffect.wav";
    a.play();
}

/**
 * <audio>和<video>元素最重要的方法是play()和pause()方法，它们用来控制媒体开始和暂停媒体的播放
 */
//当文档载入完成后，开始播放背景音乐
window.addEventListener("load", function () {
    document.getElementById("music").play();
}, false);
