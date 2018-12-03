//图形状态管理工具
//恢复最后一次保存的图形状态，但是让该状态从栈中弹出
CanvasRenderingContext2D.prototype.revert = function () {
    this.restore(); //获取最后一次保存的图形状态
    this.save(); //再次保存它以便后续使用
    return this; //允许方法链
}

//通过o对象的属性来设置图形属性
//或者，如果没有提供参数，就以对象的方式返回当前属性
//要注意的是，它不处理变换和裁剪区域
CanvasRenderingContext2D.prototype.attrs = function (o) {
    if (o) {
        for (var a in o) { //遍历o对象中的每个属性
            this[a] = o[a]; //将它设置成图形属性
        }
        return this; //启用方法链
    } else {
        fillStyle: this.fillStyle; //填充的时候的颜色，渐变或图案等样式
        font: this.font; //绘制文本的时候的CSS字体
        globalCompositeOperation: this.globalCompositeOperation; //如何合并新的像素点和下面的像素点
        lineCap: this.lineCap; //如何渲染线段的末端
        lineJoin: this.lineJoin; //如何渲染顶点
        lineWidth: this.lineWidth; //外框线的宽度
        miterLimit: this.miterLimit; //紧急斜接顶点的最大长度
        textAlign: this.textAlign; //文本水平对齐方式
        textBaseline: this.textBaseline; //阴影的清晰或模糊程度
        shadowBlur: this.shadowBlur; //阴影的清晰或模糊程度
        shadowColor: this.shadowColor; //下拉阴影的颜色
        shadowOffsetX: this.shadowOffsetX; //阴影的水平偏移量
        shadowOffsetY: this.shadowOffsetY; //阴影的垂直偏移量
        strokeStyle: this.strokeStyle //勾勒线段时的颜色，渐变或图案等样式
    }
}