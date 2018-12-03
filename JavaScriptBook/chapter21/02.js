<audio src="background_music.mp3"></audio>
<video src="news.mov" width="320" height="240"></video>

/**
 * 由于各家浏览器制造商未能在对标准音频和视频编解码器支持上达成一致。因此，通常都需要使用
 * <source>元素来为指定不同格式的媒体源:
 */
<audio id="music">
    <source src="music.mp3" type="audio/mpeg">
    <source src="music.ogg" type="audio/ogg;codec='vorbis'">
</audio>

<video id="news" width="640" height="480" controls preload>
    <!--Firefox和Chrome支持的WebM格式-->
    <source src="new.webm" type='video/mp4;codecs="vp8,vorbis"'>
    <!--IE和Safari支持的H.264格式-->
    <source src="news.mp4" type='video/mp4;codecs="avc1.42E01E,mp4a.40.2"'>
    <!--Flash插件作为后备方案-->
    <object width="640" height="480" type="application/x-shockwave-flash" data="flash_movie_pleyer.swf">
    <!--这里的参数元素用于配置Flash视频播放器-->
    <!--文本是最终的后备内容-->
    <div>video element not supported and Flash plugin not installed.</div>
    </object>
</video>

/**
*<audio>和<video>元素支持一个controls属性。如果设置了该属性(或者对应的JavaScript属性设置为true)
* 它们将会显示以系列播放空间，包括播放、暂停按钮、音量控制等。除此之外，<audio>和<video>元素还提供了
*API能让脚本控制媒体，使用该API可以实现Web应用中添加简单的声音效果或者创建自定义音频和视频控制面板。
*尽管，音频和视频控制面板在外观上有很大差别，但是两个元素基本共享相同的API(唯一的不同是，<video>元素还有width和height属性)
*/

/**
 * 在不设置controls属性的情况下，<audio>元素没有任何视觉外观。正如可以使用Image()构造函数来创建
 * 一张屏幕外图片那样，HTML5中的媒体API同样也允许使用Audio()构造函数，并将媒体源URL作为参数，
 * 来创建一个屏幕外音频元素:
 */
new Audio("chime.wav").play();//载入并播放声音效果
/**
 * Audio()构造函数的返回值和通过从文档中查询<audio>元素或者使用document.createElement("audio")来创建
 * 一个新的元素获得是都是同一类对象。这里要注意的是，Audio()是音频元素特有的API，换句话说，视频管事是没有类似
 * Video()这样的构造函数的。
 */
