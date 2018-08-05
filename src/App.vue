<template>
  <div id="app">
    <!-- 
    kepp-alive会将数据保存到内存中，
    一次重新渲染会从内存中区取得对应的数据，
    也就是说他不会调用钩子函数 ，能够提高性能
    -->
    <!-- 详情页面不进行缓存 -->
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
