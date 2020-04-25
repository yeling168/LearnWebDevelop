{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size',list.size);
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log('size',list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list',list)
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list',list)

    let arr = [1,2,3,1,'2'];
    let list2=new Set(arr);

    console.log('unique',list2);
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list);
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);

    for(let key of list.keys()) {
        console.log('keys',key);
    }

    for(let value of list.values()) {
        console.log('value',value);
    }

    for(let [key,value] of list.entries()) {
        console.log('entries',key,value);
    }

    list.forEach(function(item) {
        console.log(item);
    })
}


{
    // WeakSet的类型必须是对象
    // WeakSet是弱引用
    // 没有side方法，没有clear方法，不能遍历
    let weakList = new WeakSet();
    let arg = {}
    weakList.add(arg);
    console.log('weakList',weakList);
}

{
    // map的key可以是任意类型
    let map = new Map();
    let arr = ['123'];
    // 使用set添加数据
    map.set(arr,456);
    console.log(map);
    // 使用get取数据
    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
}

{
    //接收的key值只能是对象
    //没有size属性，不能使用clear
    //不能遍历
    let weakmap = new WeakMap();
    let o = {};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}

{
    // 数据结构横向对比，增，查，改，删
    let map = new Map();
    let array = [];
    //增
    map.set('t',1);
    array.push({t:1});
    console.info('map-array',map,array);
    //查
     let map_exist = map.has('t');
     let array_exist = array.find(item=>item.t);
     console.info('map-array',map_exist,array_exist);
     //改
     map.set('t',2);
     array.forEach(item =>item.t?item.t = 2:'');
     console.info('map-array-modify',map,array);
     //删
     map.delete('t');
     let index=array.findIndex(item=>item.t);
     array.splice(index,1);
     console.info('map-array-empty',map,array)
}

{
    //set和array的对比
    let set = new Set();
    let array = [];

    //增
    set.add({t:1});
    array.push({t:1});

    console.info('set-array',set,array);

    //查
    let set_exists = set.has({t:1});
    let array_exist = array.find(item=>item.t);
    console.info('set-array',set_exists,array_exist);

    //改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.info('set-array-modify',set,array);

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array-empty',map,array);
}

{
    // map,set,object对比
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj={};
    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;
    console.info('map-set-obj',obj,map,set);
    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })

    //改
    map.set('t',2);
    item.t =2;;
    obj['t']=2;
    console.info('map-set-obj',obj,map,set);

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-empty',obj,map,set);
}

{
    //以后用数据结构有限考虑set和map
}