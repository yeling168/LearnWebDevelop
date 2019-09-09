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
    <div id="expression" v-show="isExpressionShow">
      <hr />
      <p>条件表达式</p>
      <expression></expression>
    </div>
    <div id="loop" v-show="isLoopShow">
      <hr />
      <p>循环</p>
      <loop></loop>
    </div>
  </div>
</template>

<script>
import variable from "./components/variable.vue";
import mixins from "./components/mixins.vue";
import nestedRules from "./components/nested-rules.vue";
import namespace from './components/namespace.vue';
import expression from './components/expression.vue';
import loop from './components/loop.vue'
export default {
  name: "app",
  data() {
    return {
      isVariableShow: false,
      isMixinsShow: false,
      isNestedRulesShow: false,
      isNameSpaceShow:false,
      isExpressionShow:false,
      isLoopShow:true
    };
  },
  components: {
    variable,
    mixins,
    nestedRules,
    namespace,
    expression,
    loop
  }
};
</script>

<style lang="less">
</style>
