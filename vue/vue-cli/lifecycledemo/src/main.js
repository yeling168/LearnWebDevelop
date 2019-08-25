import Vue from 'vue'
// import beforeCreate from './lifecycle/beforeCreate.vue'

// new Vue({
//   el: '#app',
//   render: h => h(beforeCreate)
// })

// import create from './lifecycle/create.vue'

// new Vue({
//   el: '#app',
//   render: h => h(create)
// })

// import beforeMount from './lifecycle/beforeMount.vue'

// new Vue({
//   el: '#app',
//   render: h => h(beforeMount)
// })

// import mounted from './lifecycle/mounted.vue'

// new Vue({
//   el: '#app',
//   render: h => h(mounted)
// })

// import beforeUpdate from './lifecycle/beforeUpdate.vue'

// new Vue({
//   el: '#app',
//   render: h => h(beforeUpdate)
// })

import beforeDestroy from './lifecycle/beforeDestroy.vue'

new Vue({
  el: '#app',
  render: h => h(beforeDestroy)
})