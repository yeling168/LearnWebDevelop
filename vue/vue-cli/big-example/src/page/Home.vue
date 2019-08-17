<template>
  <div id="home" class="bg-master-gradient hidden">
    <div id="logoText">
      <router-link to="/Create">
        <img src="../assets/images/logo-text.png" />
      </router-link>
    </div>
    <div id="login">
      <img src="../assets/images/weixin.png" alt />
    </div>
    <div id="appName" class="animated bounce">{{appName}}.{{version}}</div>
    <div id="bottom-bg"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  mounted: function() {
    document.getElementById("home").style.height = window.screen.height + "px";
    document.getElementById("logoText").style.marginTop =
      window.screen.height / 8 + "px";
    document.getElementById("bottom-bg").style.marginTop =
      window.screen.height / 2.5 + "px";
    document.getElementById("login").style.top =
      window.screen.height / 2.5 + "px";
    document.getElementById("login").style.left =
      window.screen.height / 2.75 + "px";
  },
  computed: {
    ...mapState(["appName", "version"])
  },
  created() {
    //界面用于数据监测，安段cookies登录信息
    setTimeout(() => {}, 3000);
  }
};
</script>
<style scoped>
#login {
  position: fixed;
  z-index: 3;
  margin-left: 10px;
}

#appName {
  position: fixed;
  bottom: 30px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 75%;
  z-index: 9;
}

#bottom-bg {
  background-image: url(../assets/images/home-bg.png);
  width: 100%;
  position: fixed;
}
</style>