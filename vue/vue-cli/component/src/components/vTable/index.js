import vTable from './vTable.vue'
vTable.install = (Vue) => {
  Vue.component(vTable.name, vTable)
}

export default vTable
