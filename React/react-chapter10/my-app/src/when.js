import { when } from "q";
import { observable } from "rxjs";
import { action } from "mobx";

when(
  () => condition,
  () => {
    sideEffect;
  }
);

class MyResource {
  constructor() {
    when(() => !this.isVisible, () => this.dispose());
  }

  @computed get isVisible() {
    //判断某个元素是否可见
  }

  dispose() {
    //清除逻辑
  }
}

class Ticker {
  @observable tick = 0;

  @action
  increment() {
    this.tick++;
  }
}

const ticker = new Ticker();

setInterval(ticker.increment, 1000); //报错

class Ticker {
  @observable tick = 0;

  @action.bound
  increment() {
    this.tick++;
  }
}

const ticker = new Ticker();

setInterval(ticker.increment, 1000);

//或

const ticker = observable({
  tick: 1,
  increment: action.bound(function() {
    this.tick++;
  })
});

setInterval(ticker.increment, 1000);

var todo = observable({
  title: "Learn React"
});

autorun(() => console.log(todo.title));

todo = observable({ title: "Bar" });


var todo=observable({
    title:"Learn React"
})

autorun(()=>console.log(todo.title))

todo.title="Bar"

var todo=observable({
    title:"Learn React"
})

var title=todo.title;

autorun(()=>{
    console.log(title);
})

title="Bar"


var todo = observable({
  task: {
    title: "Learn React",
    content: "Read more books about React"
  }
});

var task = todo.task;

autorun(() => {
  console.log(task.title);
});

todo.task.title = "Bar"; //修改1

todo.task = {
  title: "Learn MobX",
  content: "Read more books about MobX"
};