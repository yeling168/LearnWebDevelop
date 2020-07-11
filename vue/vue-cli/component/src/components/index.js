// https://www.cnblogs.com/muzishijie/p/11291295.html
import Button from './button/index'
// https://www.jb51.net/article/146408.htm
import vTable from './vTable/index'
const components = [Button, vTable]
// vue.use使用时，必须要有install方法。参数就是vue。
const install = (Vue) => {
  for (var key in components) {
    console.log('components', components)
    Vue.component(components[key].name, components[key])
  }
}
export default {
  install,
  Button,
  vTable
}
