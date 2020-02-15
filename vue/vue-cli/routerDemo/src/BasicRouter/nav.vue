<template>
  <div id="r">
    <h1>导航</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/first">first</router-link></li>
      <li><router-link to="/second">second</router-link></li>
    </ul>
    <router-view class="sadfg"></router-view>
  </div>
</template>
<script>
export default {
    name:'nav'
}
</script>
