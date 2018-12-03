//规则多边形
//使用moveTo()、lineTo()和closePath()方法绘制规则多边形
/**
 * 定义一个以(x,y)为中心，半径为r的规则n边形
 * 每个顶点放置在最上面，或者指定一定角度
 * 除非最后一个参数是true,否则顺时针旋转
 */

function polygon(c, n, x, y, r, angle, counterclockwise) {
    angle = angle || 0;
    counterclockwise = counterclockwise || false;
    c.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle)); //从第一个顶点开始一条新的子路径，使用三角法计算未知
    var delta = 2 * Math * PI / n; //两个顶点之间的夹角
    for (var i = 1; i < n; i++) { //循环剩余的每个顶点
        angle += counterclockwise ? -delta : delta; //调整角度
        c.lineTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
    }
    c.closePath(); //将最后一个顶点和起点连接起来
}

//开始一个新的路径并添加一条多边形子路径
c.beginPath();
polygon(c, 3, 50, 70, 50); //三角形
polygon(c, 4, 150, 60, 50, Math.PI / 4); //正方形
polygon(c, 5, 255, 55, 50); //五边形
polygon(c, 6, 365, 53, 50, Math.PI / 6); //六边形
polygon(c, 4, 365, 53, 20, Math.PI, true); //六边形中的小正方形

//设置属性来控制图形外观
c.fillStyle = "#ccc"; //内部使用浅灰色
c.strokeStyle = "#008"; //深蓝色外边框
c.lineWidth = 5; //5个像素宽
//调用如下函数绘制所有这些多边形(每个分别定义在自己的子路径中)
c.fill(); //填充图形
c.stroke(); //勾勒外边框