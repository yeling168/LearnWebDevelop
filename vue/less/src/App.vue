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
  </div>
</template>

<script>
import variable from "./components/variable.vue";
import mixins from "./components/mixins.vue";
import nestedRules from "./components/nested-rules.vue";
export default {
  name: "app",
  data() {
    return {
      isVariableShow: false,
      isMixinsShow: false,
      isNestedRulesShow: true
    };
  },
  components: {
    variable,
    mixins,
    nestedRules
  }
};
</script>

<style lang="less">
</style>
