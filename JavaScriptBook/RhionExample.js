//用Rhino实现的下载管理器应用
/*使用简单的Java GUI组件和一些其他组件*/

//导入Swing GUI组件和一些其他组件
importPackage(javax.swing);
importClass(javax.swing.border.EmptyBorder);
importClass(javax.awt.event.ActionListener);
importClass(javax.net.URL);
importClass(javax.io.FileOutputStream);
importClass(javax.lang.Thread);

//创建一些GUI小部件(widget)
var frame=new JFrame("Rhino URL Fetcher");//应用窗体
var urlfield=new JTextField(30);//URL输入字段
var button=new JButton("Download");//开始下载的按钮
var filechooser=new JFileChooser();//文件选择对话框
var row=Box.createHorizontalBox();//用于放置字段和按钮的方框
var col=Box.createVerticalBox();//用于放置数据行和进度条
var padding=new EmptyBorder(3,3,3,3);//填充数据行的空白

//把它们组装一起并显示这个GUI
row.add(urlfield);//把输入字段放入行中
row.add(button);//把按钮放入行中
col.add(row);//把行放入窗体中
row.setBorder(padding);//为行增加一些空白
frame.pack();//设置为最小值
frame.visible=true;//设置窗体可见

//当窗体发生任何时间都会调用这个函数
frame.addWindowListener(function(e,name){
    //如果用户关闭窗体，退出这个应用
    if(name==="windowClosing"){
        java.lang.System.exit(0);
    }
});
//当用户单机按钮时，调用这个函数
button.addActionListener(function(){
    try{
        //创建java.net.URL表示源URL
        //(这会检查用户的属入是否符合语法规则)
        var url=new URL(urlfield.text);
        //告诉用户选择保存URL内容的文件
        var response=filechooser.showSaveDialog(frame);
        //如果单击Cancel按钮，立即退出
        if(response!=JFileChooser.APPROVE_OPTION) return;
        //否则，获取java.io.File表示目标文件
        var file=filechooser.getSelectedFile();
        //现在，启动一个新线程下载URL
        new java.lang.Thread(function(){
            download(url,file);
        }).start();
    }catch(e){
        //如果出现错误，显示一个对话框
        JOptionPane.showMessageDialog(frame,e.message,"Exception",JOptionPane.ERROR_MESSAGE);
    }
});

//使用java.net.URL等下载URL的内容，使用java.io.File等把内容保存到一个文件中
//在JProgressBar组件中显示下载进度
//这将在一个新线程中调用
function download(url,file){
    try{
        //每次下载一个URL时，我们会添加一个新的数据行到窗体中
        //数据行中会显示url、文件名和下载进度
        var row=Box.createHorizontalBox();//创建数据行
        row.setBorder(padding);//填充它的空白
        var label=url.toString()+":";//显示URL
        row.add(new JLabel(label));//在Jlable中
        var bar=new JProgressBar(0,100);//加入进度条
        bar.stringPainted=true;//显示文件名
        bar.string=file.toString();//在进度条中
        row.add(bar);//把进度条加入新的行中
        col.add(row);//把数据行加入行中
        frame.pack();//调整窗体大小

        //我们不知道URL大小，所以进度条是动画
        bar.indeterminate=true;

        //如果可能，立即链接服务器并获取URL的长度
        var conn=url.openConnection();//得到java.net.URLConnection
        conn.connect();//连接且等待连接头
        var len=conn.contentLength;//如果能得到URL长度就设置
        if(len){
            bar.maximum=len;//设置进度条展示
            bar.indeterminate=false;//下载的百分比
        }
        //得到输入和输出流
        var input=conn.inputStream;//从服务器读取字节
        var output=new FileOuputStream(file);//把字节写入文件

        //创建4kb的数组作为输入缓冲区
        var buffer=java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE,4096);
        var num;
        while((num=input.read(buffer))!=-1){//读取然后循环至EOF
            output.write(buffer,0,num);//把字节写入文件
            bar.value+=num;//更新进度条
        }
        ouput.close();//完成后关闭流
        input.close();
    }catch(e){//如果发生错误，在进度条上显示错误
        if(bar){
            bar.indeterminate=false;//停止动画
            bar.string=e.toString();//用错误取代文件名
        }
    }
}


