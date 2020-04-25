{
    // 基本定义和生成实例
    class Parent{
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例',v_parent);
}

{
    // 继承
    class Parent{
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }
    class Child extends Parent{

    }
    console.log('继承',new Child());
}

{
    // 继承传递参数
    class Parent{
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }
    class Child extends Parent{
        constructor(name = 'child') {
            // 子类修改父类的参数，使用super并传入想要修改的参数名，super必须放到第一行
            super(name);
            this.type = 'child';
        }
    }
    console.log('继承',new Child('hello'));
}

{
    //getter,settter
    class Parent{
        constructor(name ='mukewang') {
            this.name = name;
        }
        get longName() {
            return 'mk' + this.name
        }
        set longName(value) {
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = 'hello'
    console.log('getter',v.longName);
}

{
    //静态方法，静态方法通过类调用，而不是通过类的实例调用
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
        static tell () {
            console.log('tell');
        }
    }
    Parent.tell()
}

{
    // 静态属性
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
        static tell () {
            console.log('tell');
        }
    }
    Parent.type = 'test';
    // Parent只能是类，不能是实例
    console.log('静态属性',Parent.type)
}