{
  //类的基本定义和生成实例
  class Parent {
    //定义构造函数
    constructor(name = "mukewang") {
      this.name = name;
    }
  }

  //生成实例
  let v_parent = new Parent("v");
  console.log("构造函数和实例", v_parent);
}

{
  //继承
  //定义父类
  class Parent {
    //定义构造函数
    constructor(name = "mukewang") {
      this.name = name;
    }
  }

  //定义子类
  class Child extends Parent {}
  console.log("继承", new Child());
}

{
  //继承
  //定义父类
  class Parent {
    //定义构造函数
    constructor(name = "mukewang") {
      this.name = name;
    }
  }

  //定义子类
  //怎么修改父类中的参数，此处是name
  class Child extends Parent {
    constructor(name = "child") {
      //super中的参数列表是父类constructor，也就是构造函数的参数列表
      //super(),super()中参数为空，那么父类构造函数中的所有都会使用父类的默认值
      super(name);
      //如果子类需要增加自己的属性,this一定要放在super之后，super一定放在第一行
      this.type = "child";
    }
  }
  console.log("继承传递参数", new Child());
  //带参数，会覆盖默认值
  console.log("覆盖默认值", new Child("hello"));
}

{
  //类中的getter和setter
  class Parent {
    //定义构造函数
    constructor(name = "mukewang") {
      this.name = name;
    }
    //getter的写法，这不是一个函数方法，是一个属性
    get longName() {
      return "mk" + this.name;
    }

    //setter
    set longName(value) {
      this.name = value;
    }
  }

  //生成一个实例
  let v = new Parent();
  console.log("getter", v.longName);

  v.longName = "hello";
  console.log("setter", v.longName);
}

{
  //类的静态方法
  class Parent {
    //定义构造函数
    constructor(name = "mukewang") {
      this.name = name;
    }
    //用static定义静态方法
    //静态方法通过类去调用，而不是通过类的实例去调用
    static tell() {
      console.log("tell");
    }
  }

  //调用静态方法
  //静态方法通过类去调用，而不是通过类的实例去调用
  Parent.tell();
}

{
  //静态属性
  //类的静态方法
  class Parent {
    //定义构造函数
    constructor(name = "mukewang") {
      this.name = name;
    }
    //用static定义静态方法
    //静态方法通过类去调用，而不是通过类的实例去调用
    static tell() {
      console.log("tell");
    }
  }

  //静态属性在ES6中没有定义方法。但是可以在类定义完成后直接在类上定义
  //定义静态属性
  Parent.type = "test";
  //读取静态属性
  //Parent一定是类，而不是类的实例
  console.log("Parent", Parent);
  console.log("静态属性", Parent.type);
}
