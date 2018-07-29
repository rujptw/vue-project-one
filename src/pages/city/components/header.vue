<template>
<div class="header">
    城市选择
    <router-link to='/'>
    <div class="iconfont header-back">&#xe624;</div>
    </router-link> 
</div>
</template>

<script>
export default {
  name: "cityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
    position: relative;
    overflow: hidden;
    line-height: $headerHeight;
    height: $headerHeight;
    color: #fff;
    text-align: center;
    background: $bgColor;
    font-size: 0.32rem;

    .header-back {
        position: absolute;
        left: 0;
        top: 0;
        width: 0.6rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
    }
}
</style>