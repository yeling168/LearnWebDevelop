<template>
  <div id="app">
    <div id="variable" v-show="isVariableShow">
      <p>变量</p>
      <variable></variable>
    </div>

    <div id="mixins" v-show="isMixinsShow">
      <hr />
      <p>混合</p>
      <mixins></mixins>
    </div>
    <div id="nestedRules" v-show="isNestedRulesShow">
      <hr />
      <p>嵌套</p>
      <nestedRules></nestedRules>
    </div>
    <div id="namespace" v-show="isNameSpaceShow">
      <hr />
      <p>命名空间</p>
      <namespace></namespace>
    </div>
  </div>
</template>

<script>
import variable from "./components/variable.vue";
import mixins from "./components/mixins.vue";
import nestedRules from "./components/nested-rules.vue";
import namespace from './components/namespace.vue'
export default {
  name: "app",
  data() {
    return {
      isVariableShow: false,
      isMixinsShow: false,
      isNestedRulesShow: false,
      isNameSpaceShow:true
    };
  },
  components: {
    variable,
    mixins,
    nestedRules,
    namespace
  }
};
</script>

<style lang="less">
</style>
